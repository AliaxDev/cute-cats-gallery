import { motion } from "framer-motion";
import "../style/profileStyle.css"; // Asegúrate de crear este archivo para estilos adicionales

export function ProfilePicture() {
  const handleClick = () => {
    // Aquí puedes agregar cualquier lógica adicional si es necesario
  };

  return (
    <motion.img
      src="/pictureperfil.png" // Cambia esta URL por la de tu imagen
      alt="Perfil"
      className="profile-image"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }} // Aumenta el tamaño al pasar el ratón
      whileTap={{ scale: 0.9, rotate: 10 }} // Reduce el tamaño y rota al hacer clic
      transition={{ type: "spring", stiffness: 300 }} // Transición suave
    />
  );
}
