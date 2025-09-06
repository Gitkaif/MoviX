import React, { memo, useMemo } from "react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieList = memo(({ movies, isLoading = false }) => {
  const skeletonCards = useMemo(() => 
    Array.from({ length: 20 }, (_, index) => (
      <MovieCardSkeleton key={index} />
    )), []
  );

  const movieCards = useMemo(() => 
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    )), [movies]
  );

  if (isLoading) {
    return (
      <div className="movie-grid">
        {skeletonCards}
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movieCards}
    </div>
  );
});

MovieList.displayName = 'MovieList';

export default MovieList;
