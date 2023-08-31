import React, { useState, useEffect } from 'react';

function ScrollComponent() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercent = scrollTop / (scrollHeight - clientHeight);
      const newColor = `rgb(${Math.floor((1-scrollPercent) * 255)}, ${Math.floor((1-scrollPercent) * 255)}, ${Math.floor((1-scrollPercent) * 255)})`;
      setBackgroundColor(newColor);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '50vh', backgroundColor }}>
      <h1>Hello, world!</h1>
      <p>Scroll down to change the background color!</p>
    </div>
  );
}

export default ScrollComponent;