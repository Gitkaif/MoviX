import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies, IMAGE_BASE_URL } from '../api';
import LazyImage from './LazyImage';
import GradientText from './GradientText';

const HeroSection = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const loadFeaturedMovies = useCallback(async () => {
    try {
      const data = await fetchMovies('popular', 1);
      setFeaturedMovies(data.results.slice(0, 10)); // Get top 10 popular movies
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading featured movies:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFeaturedMovies();
  }, [loadFeaturedMovies]);

  useEffect(() => {
    if (featuredMovies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % featuredMovies.length
        );
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [featuredMovies]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredMovies.length - 1 : prevIndex - 1
    );
  }, [featuredMovies.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % featuredMovies.length
    );
  }, [featuredMovies.length]);

  const currentMovie = useMemo(() => 
    featuredMovies[currentIndex], 
    [featuredMovies, currentIndex]
  );

  const backdropImageSrc = useMemo(() => 
    currentMovie?.backdrop_path ? `${IMAGE_BASE_URL}${currentMovie.backdrop_path}` : "https://via.placeholder.com/1920x1080",
    [currentMovie?.backdrop_path]
  );

  if (isLoading) {
    return (
      <div className="hero-section">
        <div className="hero-skeleton">
          <div className="hero-backdrop-skeleton"></div>
          <div className="hero-content-skeleton">
            <div className="hero-title-skeleton"></div>
            <div className="hero-description-skeleton"></div>
            <div className="hero-button-skeleton"></div>
          </div>
        </div>
      </div>
    );
  }

  if (featuredMovies.length === 0) {
    return null;
  }

  return (
    <div className="hero-section">
      <div className="hero-slide">
        <div className="hero-backdrop">
          <LazyImage
            src={backdropImageSrc}
            alt={currentMovie.title}
            className="hero-backdrop-image lazy-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-title">{currentMovie.title}</h1>
            <div className="hero-meta">
              <span className="hero-rating">⭐ {currentMovie.vote_average.toFixed(1)}</span>
              <span className="hero-year">
                {currentMovie.release_date ? new Date(currentMovie.release_date).getFullYear() : 'N/A'}
              </span>
              <span className="hero-genre">Popular Movie</span>
            </div>
            <p className="hero-description">
              {currentMovie.overview ? 
                (currentMovie.overview.length > 200 ? 
                  `${currentMovie.overview.substring(0, 200)}...` : 
                  currentMovie.overview
                ) : 
                'Discover this amazing movie and more in our collection.'
              }
            </p>
            <div className="hero-actions">
              <Link to={`/movie/${currentMovie.id}`} className="hero-button primary">
                View Details
              </Link>
              <button className="hero-button secondary">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-indicators">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="hero-navigation">
        <button className="nav-button prev" onClick={goToPrevious}>
          ‹
        </button>
        <button className="nav-button next" onClick={goToNext}>
          ›
        </button>
      </div>

    </div>
  );
};

export default HeroSection;
