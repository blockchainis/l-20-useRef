import { useRef } from "react";

export default function ScrollIntoView() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav style={{ position: "fixed", top: 0 }}>
        <button onClick={() => scrollToIndex(0)}>리사</button>
        <button onClick={() => scrollToIndex(1)}>지수</button>
        <button onClick={() => scrollToIndex(2)}>로제</button>
        <button onClick={() => scrollToIndex(3)}>제니</button>
      </nav>
      <div>
        <ul ref={listRef} style={{ marginTop: "20px" }}>
          <li
            style={{ height: "100vh", display: "flex", alignItems: "center" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQCnsmQtQ9nGNVGnVlzYACJ2wFWzZlfaN-2DcYed-&s"
              alt="리사"
            />
          </li>
          <li style={{ height: "100vh" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WO4CIPx4jfPpdZBX6T99A92Bvq-w6YQxWSEDWb52HQ&s"
              alt="지수"
            />
          </li>
          <li style={{ height: "100vh" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz28Kd9BaRrFzAi2VM87K8FEdNLqdZrQhH8WrvQ-PNxA&s"
              alt="로제"
            />
          </li>
          <li style={{ height: "100vh" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj93ZXT_7mQy6FYGL1vAKh9ICbWrDqACG2Dv2c1vakJw&s"
              alt="제니"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
