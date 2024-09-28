import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../style/scrollArrow.css"; // Asegúrate de crear este archivo para estilos adicionales

export function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Desplaza 100vh hacia abajo
      behavior: "smooth" // Desplazamiento suave
    });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      // Verifica si el scroll es menor a 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    isVisible &&
    <motion.div
      className="scroll-arrow"
      onClick={handleScroll}
      whileHover={{ scale: 1.2 }} // Aumenta el tamaño al pasar el ratón
      whileTap={{ scale: 0.9 }} // Reduce el tamaño al hacer clic
      transition={{ type: "spring", stiffness: 300 }} // Transición suave
    >
      <div className="arrow-down">
        click me!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" />
          <path d="M2 16h5l-4 4" />
          <path d="M22 16h-5l4 4" />
          <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M9 11v.01" />
          <path d="M15 11v.01" />
        </svg>
      </div>{" "}
      {/* Flecha hacia abajo */}
    </motion.div>
  );
}
