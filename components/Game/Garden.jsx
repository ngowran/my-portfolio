import React, { useState, useEffect, useRef } from "react";
import Flower from "./Flower";

const Garden = ({ numberOfFlowers, onFlowerClick }) => {
  const [activeFlowers, setActiveFlowers] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const intervalIdsRef = useRef([]);

  const handleFlowerClick = (id) => {
    if (onFlowerClick) {
      onFlowerClick(id);
    }
  };

  // Track window width for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine grid columns based on screen size
  const getGridColumns = () => {
    if (windowWidth < 640) return 2; // Small screens
    if (windowWidth < 1024) return 3; // Medium screens
    return 4; // Large screens
  };

  useEffect(() => {
    // Clear intervals before re-creating them
    intervalIdsRef.current.forEach(clearInterval);
    intervalIdsRef.current = [];

    const generateRandomFlower = () => {
      const randomFlowerId = Math.floor(Math.random() * numberOfFlowers);

      setActiveFlowers((prevActiveFlowers) => {
        if (!prevActiveFlowers.includes(randomFlowerId)) {
          return [...prevActiveFlowers, randomFlowerId];
        }
        return prevActiveFlowers;
      });

      // Deactivate after a set duration
      setTimeout(() => {
        setActiveFlowers((prevActiveFlowers) =>
          prevActiveFlowers.filter((id) => id !== randomFlowerId)
        );
      }, 1500); // Minimum active duration
    };

    for (let i = 0; i < numberOfFlowers; i++) {
      const intervalId = setInterval(
        generateRandomFlower,
        Math.random() * 2000 + 1000 // Interval between 1-3 seconds
      );
      intervalIdsRef.current.push(intervalId);
    }

    return () => {
      intervalIdsRef.current.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [numberOfFlowers]);

  const Flowers = [];

  for (let i = 0; i < numberOfFlowers; i++) {
    Flowers.push(
      <Flower
        key={i}
        id={i}
        color={"#b91c1c"}
        isActive={activeFlowers.includes(i)}
        onClick={() => handleFlowerClick(i)}
        aria-label={`Flower ${i+1}${activeFlowers.includes(i) ? ' (active)' : ''}`}
      />
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 m-auto max-w-7xl">
      <p className="text-center text-lg sm:text-xl mb-4 text-gray-500" id="game-instructions">
        Click a Flower to score
      </p>
      <div 
        className={`grid gap-2 sm:gap-4 transition-all duration-500 ease-in-out border-2 rounded-lg p-2 sm:p-4`}
        style={{ gridTemplateColumns: `repeat(${getGridColumns()}, minmax(0, 1fr))` }}
        role="region"
        aria-labelledby="game-instructions"
      >
        {Flowers}
      </div>
    </div>
  );
};

export default Garden;