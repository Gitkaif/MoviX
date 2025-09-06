import React, { useEffect, useRef } from 'react';

const GradientText = ({ 
  children, 
  colors = ["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"], 
  animationSpeed = 3,
  showBorder = false,
  className = ""
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Create gradient animation
    const animateGradient = () => {
      const time = Date.now() * 0.001 * animationSpeed;
      const gradient = colors.map((color, index) => {
        const offset = (index / (colors.length - 1)) * 100;
        const phase = Math.sin(time + index * 0.5) * 0.5 + 0.5;
        return `${color} ${offset + phase * 10}%`;
      }).join(', ');

      textElement.style.background = `linear-gradient(45deg, ${gradient})`;
      textElement.style.backgroundSize = '200% 200%';
      textElement.style.backgroundClip = 'text';
      textElement.style.webkitBackgroundClip = 'text';
      textElement.style.webkitTextFillColor = 'transparent';
      textElement.style.animation = `gradientShift ${2 / animationSpeed}s ease-in-out infinite`;
    };

    // Add CSS animation keyframes if not already added
    if (!document.getElementById('gradient-text-styles')) {
      const style = document.createElement('style');
      style.id = 'gradient-text-styles';
      style.textContent = `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
    }

    // Start animation
    animateGradient();
    const interval = setInterval(animateGradient, 16); // ~60fps

    return () => clearInterval(interval);
  }, [colors, animationSpeed]);

  return (
    <span
      ref={textRef}
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        ...(showBorder && {
          padding: '0.5rem',
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, #3ca2fa, #80eeb4)',
          backgroundClip: 'padding-box',
          borderRadius: '0.5rem'
        })
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
