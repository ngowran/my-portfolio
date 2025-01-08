import React, { useState } from "react";

const Flower = ({ id, color, isActive, onClick }) => {
    const [isWatered, setIsWatered] = useState(false);

    const classNames = `flower ${isActive ? "flower--active" : ""} ${
        isWatered ? "flower--watered" : ""
      }`;
    
    const clickHandler = (e) => {
        if (!isWatered) {
            setIsWatered(true);
            onClick();
    
          setTimeout(() => {
            setIsWatered(false);
          }, 1000);
        }
    };

    const flowerWidth = 200;
    const flowerHeight = 200 * 1.17;
    const stemHeight = 50;
  
    return (
      <div className="p-8 m-auto max-w-7xl">
        <style>
          {`
            .flower {
              width: 200px;
              height: auto;
              cursor: pointer;
              transition: transform 0.3s ease-in-out;
            }
            .flower--active {
              border: 2px solid green;
            }
            .flower--watered {
              opacity: 0.7;
              transform: scale(1.1);
            }
            .p-8 {
              padding: 2rem;
            }
            .m-auto {
              margin: auto;
            }
            .max-w-7xl {
              max-width: 100%;
            }
          `}
        </style>
        <div
        onClick={clickHandler}
        className={classNames}
        style={{ color: "pink" }}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${flowerWidth} ${flowerHeight + stemHeight}`}
        >
        <defs>
          <radialGradient
            id="flower-gradient"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="pink" />
            <stop offset="100%" stopColor="purple" />
          </radialGradient>
        <filter
              id={`flower-shadow-${id}`}
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0, 0, 0, 0.3)" />
            </filter>
          </defs>

          <rect
            x={flowerWidth / 2 - 1}
            y={flowerHeight}
            width="4"
            height={stemHeight}
            fill="#4caf50"
          />
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={i}
              cx={flowerWidth / 2}
              cy={flowerHeight / 2}
              rx={50 - i * 10}
              ry={50 - i * 10}
              transform={`rotate(${i * 45} ${flowerWidth / 2} ${flowerHeight / 2})`}
              fill={`url(#flower-gradient)`}
              filter={`url(#flower-shadow-${id})`}
            />
          ))}
          <circle
            cx={flowerWidth / 2}
            cy={flowerHeight / 2}
            r={20}
            fill="#ffeb3b"
          />
        </svg>
      </div>
      </div>
    );
  };

export default Flower;
