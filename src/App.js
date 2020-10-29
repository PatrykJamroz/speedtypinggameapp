import React from "react";
import useGame from "./useGame";
import "./App.css";

function App() {
  const {
    timeRemaining,
    startGame,
    text,
    wordCount,
    handleChange,
    isGameRunning,
    inputBox,
  } = useGame();

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isGameRunning}
        ref={inputBox}
      />
      <h3>Time remaining: {timeRemaining}</h3>
      <h4>Words count: {wordCount}</h4>
      <button onClick={startGame} disabled={isGameRunning}>
        Start Game!
      </button>
    </div>
  );
}

export default App;
