import { useEffect, useRef, useState } from "react";

function useGame() {
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [newTimeVal, setNewTimeVal] = useState(0);
  const inputBox = useRef(null);

  function startGame() {
    setIsGameRunning(true);
    setText("");
    inputBox.current.disabled = false;
    inputBox.current.focus();
  }

  function endGame() {
    setIsGameRunning(false);
    setTimeRemaining(timeRemaining);
    setWordCount(countWords(text));
    setTimeRemaining(newTimeVal);
  }

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleTimeChange(e) {
    const { value } = e.target;
    setTimeRemaining(value);
  }

  function countWords(props) {
    const wordsArr = props.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function handleSetNewTimeVal(e) {
    const { value } = e.target;
    setNewTimeVal(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTimeRemaining(newTimeVal);
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

  return {
    timeRemaining,
    startGame,
    text,
    wordCount,
    handleChange,
    isGameRunning,
    inputBox,
    handleTimeChange,
    newTimeVal,
    handleSetNewTimeVal,
    handleSubmit,
  };
}

export default useGame;
