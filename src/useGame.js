import { useEffect, useState } from "react";

function useGame() {
  const START_TIME = 2;

  const [timeRemaining, setTimeRemaining] = useState(START_TIME);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  function startGame() {
    setIsGameRunning(true);
  }

  function endGame() {
    setIsGameRunning(false);
    setTimeRemaining(START_TIME);
    setWordCount(countWords(text));
  }

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(props) {
    const wordsArr = props.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaining > 0 && isGameRunning) {
      setTimeout(() => {
        setTimeRemaining((prevState) => prevState - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isGameRunning]);

  return { timeRemaining, startGame, text, wordCount, handleChange };
}

export default useGame;
