import React, { memo, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGE_BASE_URL } from "../api";
import LazyImage from "./LazyImage";

const MovieCard = memo(({ movie }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const imageSrc = useMemo(() => 
    movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/500x750",
    [movie.poster_path]
  );

  const releaseYear = useMemo(() => 
    movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A',
    [movie.release_date]
  );

  return (
    <div className="movie-card" onClick={() => window.scrollTo(0, 0)}>
      <Link to={`/movie/${movie.id}`}>
        <LazyImage
          src={imageSrc}
          alt={movie.title}
          className="lazy-image"
        />
      </Link>
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average} | {releaseYear}</p>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;
