import { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  function handleStart() {}
  function handleStop() {}
  return (
    <>
      <h1>타이머: {time}</h1>
      <button onClick={handleStart}>시작</button>
      <button onClick={handleStop}>멈춤</button>
    </>
  );
}

export default Timer;
