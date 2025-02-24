import { motion } from "framer-motion";

export function AnimatedHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y 50px abajo
      animate={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
      transition={{ duration: 1, ease: "easeOut" }} // Duración y tipo de animación
      className="text-4xl md:text-7xl font-bold text-center whitespace-normal px-4"
    >
      Cine <span className="text-gradient">Arte</span>: descubre las películas
      que marcan un antes y después.
    </motion.h1>
  );
}
