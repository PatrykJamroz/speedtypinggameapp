import React from "react";
import useGame from "./useGame";
import "./App.css";

function App() {
  const { timeRemaining, startGame, text, wordCount, handleChange } = useGame();

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange} />
      <h3>Time remaining: {timeRemaining}</h3>
      <h4>Words count: {wordCount}</h4>
      <button onClick={startGame}>Start Game!</button>
    </div>
  );
}

export default App;
