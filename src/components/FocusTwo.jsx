import { useRef } from "react";
function Focus() {
  const inputRef = useRef(null);
  function handleFocusInput() {}
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocusInput}>입력창 포커스</button>
    </div>
  );
}

export default Focus;
