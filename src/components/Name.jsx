import { useState } from "react";
import "../style/nameStyle.css";

export function Name() {
  const [activeIndex, setActiveIndex] = useState(null); // Estado para el índice activo

  const handleClick = index => {
    // Alternar el índice activo
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="word">
      {["C", "I", "N", "D", "Y"].map((letter, idx) =>
        <span
          key={idx}
          className={activeIndex === idx ? "active" : ""}
          onClick={() => handleClick(idx)}
        >
          {letter}
        </span>
      )}
    </div>
  );
}
