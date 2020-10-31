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
    newTimeVal,
    handleSetNewTimeVal,
    handleSubmit,
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
      <form onSubmit={handleSubmit}>
        <input
          type={text}
          value={newTimeVal}
          onChange={handleSetNewTimeVal}
          disabled={isGameRunning}
        />
        <input type="submit" value="Set timer" disabled={isGameRunning} />
      </form>
      <br />
      <button onClick={startGame} disabled={isGameRunning}>
        Start Game!
      </button>
      <h4>Words count: {wordCount}</h4>
    </div>
  );
}

export default App;
