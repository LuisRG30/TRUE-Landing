import { useState, useEffect } from "react";

function Carousel({ items, speed }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % items.length);
    }, speed);

    return () => clearInterval(interval);
  }, [activeIndex, items.length, speed]);

  return (
    <div className="carousel">
      <ul className="ticker">
        {items.map((item, index) => (
          <li key={index} className={index === activeIndex ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;