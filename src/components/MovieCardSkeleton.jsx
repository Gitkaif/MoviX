import React from 'react';

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-rating"></div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
