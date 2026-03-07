import { useState, useEffect } from 'react';

/**
 * useResponsiveBackgroundSize
 * Returns responsive background size values based on screen breakpoints
 * Bootstrap breakpoints: sm (576px), md (768px), lg (992px), xl (1200px), xxl (1400px)
 */
export function useResponsiveBackgroundSize() {
  const [backgroundSize, setBackgroundSize] = useState('170% 140%');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1400) {
        // xxl
        setBackgroundSize('130% 130%');
      } else if (width >= 1200) {
        // xl
        setBackgroundSize('160% 140%');
      } else if (width >= 992) {
        // lg
        setBackgroundSize('180% 180%');
      } else if(width >= 600) {
        // sm/md
        setBackgroundSize('170% 200%');
      } else{ 
        setBackgroundSize('170% 150%');
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return backgroundSize;
}
