import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, fetchMovieCredits, IMAGE_BASE_URL } from "../api";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetail(id).then((data) => setMovie(data));
    fetchMovieCredits(id).then((data) => setCast(data.cast.slice(0, 9))); 
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail-container">
      <div className="movie-backdrop">
        <img 
          src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : "https://via.placeholder.com/1280x720"} 
          alt={movie.title}
          className="backdrop-image"
        />
        <div className="movie-info-overlay">
          <div className="movie-poster">
            <img
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/300x450"}
              alt={movie.title}
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
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>

      <div className="cast-section">
        <h3>Cast</h3>
        <div className="cast-list">
          {cast.map((member) => (
            <div key={member.cast_id} className="cast-card">
              <img
                src={member.profile_path ? `${IMAGE_BASE_URL}${member.profile_path}` : "https://via.placeholder.com/150"}
                alt={member.name}
              />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;