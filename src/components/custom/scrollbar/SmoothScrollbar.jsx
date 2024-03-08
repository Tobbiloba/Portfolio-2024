// SmoothScrollbar.js
import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollbar = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize smooth-scrollbar when the component mounts
    const scrollbar = Scrollbar.init(containerRef.current, {
      damping: 0.1, // Adjust the damping factor to control scroll speed
    });

    // Clean up the scrollbar when the component unmounts
    return () => {
      scrollbar.destroy();
    };
  }, []);

  return <div className='border border-red-500' ref={containerRef}>{children}</div>;
};

export default SmoothScrollbar;