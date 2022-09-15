import { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerIdRef = useRef(null);
  function handleStart() {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    timerIdRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  }
  function handleStop() {
    if (!isRunning) {
      return;
    }
    setIsRunning(false);
    clearInterval(timerIdRef.current);
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
