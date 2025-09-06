import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../api";
import LazyImage from "./LazyImage";
import GradientText from "./GradientText";

const SimilarMovies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="similar-movies-section">
        <h3>Similar Movies</h3>
        <p>No similar movies found.</p>
      </div>
    );
  }

  return (
    <div className="similar-movies-section">
      <GradientText
        colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
        animationSpeed={2}
        showBorder={false}
        className="gradient-heading"
      >
        Similar Movies
      </GradientText>
      <div className="similar-movies-grid">
        {movies.slice(0, 12).map((movie) => (
          <div key={movie.id} className="similar-movie-card">
            <Link to={`/movie/${movie.id}`}>
              <LazyImage
                src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/200x300"}
                alt={movie.title}
                className="lazy-image"
              />
            </Link>
            <div className="similar-movie-info">
              <h4>{movie.title}</h4>
              <p>⭐ {movie.vote_average.toFixed(1)} | {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
