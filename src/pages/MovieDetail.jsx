import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, fetchMovieCredits, fetchSimilarMovies, IMAGE_BASE_URL } from "../api";
import SimilarMovies from "../components/SimilarMovies";
import LazyImage from "../components/LazyImage";
import GradientText from "../components/GradientText";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchMovieDetail(id),
      fetchMovieCredits(id),
      fetchSimilarMovies(id)
    ]).then(([movieData, creditsData, similarData]) => {
      setMovie(movieData);
      setCast(creditsData.cast.slice(0, 14));
      setSimilarMovies(similarData.results);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-detail-container">
        <div className="movie-backdrop">
          <div className="skeleton-image" style={{ height: '400px', width: '100%' }}></div>
        </div>
        <div className="overview-section">
          <div className="skeleton-title" style={{ width: '200px', marginBottom: '20px' }}></div>
          <div className="skeleton-rating" style={{ width: '100%', height: '20px', marginBottom: '10px' }}></div>
          <div className="skeleton-rating" style={{ width: '80%', height: '20px', marginBottom: '10px' }}></div>
          <div className="skeleton-rating" style={{ width: '60%', height: '20px' }}></div>
        </div>
      </div>
    );
  }

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-detail-container">
      <div className="movie-backdrop">
        <LazyImage 
          src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : "https://via.placeholder.com/1280x720"} 
          alt={movie.title}
          className="backdrop-image lazy-image"
        />
        <div className="movie-info-overlay">
          <div className="movie-poster">
            <LazyImage
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/300x450"}
              alt={movie.title}
              className="lazy-image"
            />
          </div>
          <div className="movie-details">
            <h1>{movie.title}</h1>
            <div className="movie-meta">
              <span className="rating">Rating: {movie.vote_average.toFixed(1)}</span>
              <span className="runtime">{movie.runtime} min</span>
              <span className="genres">
                {movie.genres.map(genre => genre.name).join(', ')}
              </span>
              <span className="release-date">Release Date: {new Date(movie.release_date).toDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-section">
        <GradientText
colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
animationSpeed={2}
showBorder={false}
className="gradient-heading"
        >
          Overview
        </GradientText>
        <p>{movie.overview}</p>
      </div>

      <div className="cast-section">
        <GradientText
colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
animationSpeed={2}
showBorder={false}
className="gradient-heading"
        >
          Top Casts
        </GradientText>
        <div className="cast-list">
          {cast.map((member) => (
            <div key={member.cast_id} className="cast-card">
              <LazyImage
                src={member.profile_path ? `${IMAGE_BASE_URL}${member.profile_path}` : "https://via.placeholder.com/150"}
                alt={member.name}
                className="lazy-image"
              />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>

      <SimilarMovies movies={similarMovies} />
    </div>
  );
};

export default MovieDetail;