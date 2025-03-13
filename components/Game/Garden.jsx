import React, { useState, useEffect, useRef } from "react";
import Flower from "./Flower";

const Garden = ({ numberOfFlowers, onFlowerClick }) => {
  const [activeFlowers, setActiveFlowers] = useState([]);
  const intervalIdsRef = useRef([]);

  const handleFlowerClick = (id) => {
    if (onFlowerClick) {
      onFlowerClick(id);
    }
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
      />
    );
  }

  return (
    <div className="p-8 m-auto max-w-7xl">
      <p className="text-center text-xl mb-4 text-gray-500">
        Click a Flower to score
      </p>
      <div className="grid grid-cols-3 gap-4 transition-all duration-500 ease-in-out border-2">
        {Flowers}
      </div>
    </div>
  );
};

export default Garden;
