import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../style/scrollToTopButton.css"; // Para estilos adicionales

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desplazamiento suave
    });
  };

  const handleScroll = () => {
    // Cambia la visibilidad basado en la posición de scroll
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible &&
    <motion.button
      className="scroll-to-top"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }} // Aumenta el tamaño al pasar el ratón
      whileTap={{ scale: 0.9, rotate: 15 }} // Reduce el tamaño y rota al hacer clic
      transition={{ type: "spring", stiffness: 300 }} // Transición suave
    >
      🐾 {/* Emoji cute */}
    </motion.button>
  );
}
