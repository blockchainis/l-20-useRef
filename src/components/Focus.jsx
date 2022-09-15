import { useRef } from "react";
function Focus() {
  const inputRef = useRef(null);
  function handleFocusInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocusInput}>입력창 포커스</button>
    </div>
  );
}

export default Focus;
