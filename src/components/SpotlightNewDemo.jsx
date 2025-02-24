"use client";
import React from "react";
import { Spotlight } from "./Spotlight";

export function SpotlightNewDemo() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1b1b1b] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Sala 8 1/2: películas curadas
          <span className="text-gradient"> por cinéfilos para cinéfilos</span>
        </h1>
      </div>
    </div>
  );
}
