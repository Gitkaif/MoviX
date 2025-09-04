import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../api";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/500x750"}
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average} | {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
