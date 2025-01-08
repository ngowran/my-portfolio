import Garden from "../../components/Game/Garden";
import { useState } from "react";
import Nav from "../../components/Navbar";

export default function Game() {
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleStartStop = () => {
        setIsPlaying((prev) => !prev);
        if (!isPlaying) {
            setScore(0); // Reset score on restart
        }
    };

    return (
        <div>
            <Nav />
            <br />
            <br />
        <div className="p-8 m-auto max-w-7xl text-center">
            <h1 className="text-3xl font-bold mb-4">Game</h1>
            <p className="text-xl mb-4">Score: {score}</p>
            <button 
                onClick={handleStartStop} 
                className={`px-6 py-2 text-white rounded ${isPlaying ? 'bg-red-500' : 'bg-green-500'}`}
            >
                {isPlaying ? 'Stop' : 'Start'}
            </button>
            {isGameOver && <p className="text-red-500 mt-4">Game Over</p>}

            <Garden
                numberOfFlowers={5}
                onFlowerClick={(id) => {
                    if (isPlaying) {
                        setScore((prevScore) => prevScore + 1);
                    }
                }}
            />
        </div>
        </div>
    );
}
