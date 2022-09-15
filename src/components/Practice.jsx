// import React, { useState, useRef } from "react";

// function decimal(n, digitNum) {
//   return Math.round(n * 10 ** digitNum) / 10 ** digitNum;
// }

// function Timer() {
//   const [time, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const timerId = useRef(null);

//   function handleStart() {
//     if (isRunning) {
//       return;
//     }
//     setIsRunning(true);
//     timerId.current = setInterval(() => {
//       setCount((t) => t + 0.01);
//     }, 10);
//   }

//   function handleStop() {
//     if (!setIsRunning) {
//       return;
//     }
//     setIsRunning(false);
//     clearInterval(timerId.current);
//   }

//   return (
//     <>
//       <h1>타이머: {decimal(time, 3)}</h1>
//       <button onClick={handleStart}>시작</button>
//       <button onClick={handleStop}>멈춤</button>
//     </>
//   );
// }

// export default Timer;
