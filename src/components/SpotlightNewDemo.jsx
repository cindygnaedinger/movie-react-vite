"use client";
import React from "react";
import { motion } from "framer-motion"; // Importa Framer Motion
import { Spotlight } from "./Spotlight";

export function SpotlightNewDemo() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1b1b1b] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Animación del h1 */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y 50px abajo
          animate={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Duración, curva y retraso
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Sala 8 1/2: películas <br /> curadas
          <span className="text-gradient">
            {" "}
            por cinéfilos <br /> para cinéfilos
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
