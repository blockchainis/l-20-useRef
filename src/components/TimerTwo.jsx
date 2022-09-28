import { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let id;
  function handleStart() {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  }
  function handleStop() {
    if (!isRunning) {
      return;
    }
    setIsRunning(false);
    clearInterval(id);
  }
  return (
    <>
      <h1>타이머: {time}</h1>
      <button onClick={handleStart}>시작</button>
      <button onClick={handleStop}>멈춤</button>
    </>
  );
}

export default Timer;
