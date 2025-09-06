import React, { useState, useRef, useEffect, useCallback } from 'react';

const LazyImage = ({ src, alt, placeholder = "https://via.placeholder.com/500x750", className = "" }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);
  const observerRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    setImageSrc(src);
    setIsLoaded(true);
  }, [src]);

  useEffect(() => {
    if (imageRef.current && !isInView) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(entry.target);
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px' // Start loading 50px before entering viewport
        }
      );
      observerRef.current.observe(imageRef.current);
    }
    return () => {
      if (observerRef.current && imageRef.current) {
        observerRef.current.unobserve(imageRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (isInView && src && !isLoaded) {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = () => {
        // Fallback to placeholder on error
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src, isLoaded, handleImageLoad]);

  // Reset loaded state when src changes
  useEffect(() => {
    if (src !== imageSrc) {
      setIsLoaded(false);
      setImageSrc(placeholder);
    }
  }, [src, imageSrc, placeholder]);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'loading' : 'loaded'}`}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7,
        willChange: 'opacity'
      }}
      loading="lazy" // Native lazy loading as fallback
    />
  );
};

export default LazyImage;
