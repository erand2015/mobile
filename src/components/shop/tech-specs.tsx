"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const specs = [
  {
    title: "PROCESORI TITAN-1",
    desc: "Arkitektura 2nm që thyen çdo rekord shpejtësie.",
    color: "#CCFF00",
  },
  {
    title: "BATERIA QUANTUM",
    desc: "72 orë punë intensive me vetëm 10 minuta karikim.",
    color: "#00E0FF",
  },
  {
    title: "EKRANI NEON-X",
    desc: "4000 nits ndriçim për qartësi kristal në diell.",
    color: "#FF0055",
  },
];

export const TechSpecs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        {/* Teksti që ndryshon sipas scroll-it */}
        <div className="relative z-10 text-center">
          {specs.map((spec, i) => {
            const range = [i * 0.33, (i + 1) * 0.33];
            const opacity = useTransform(scrollYProgress, range, [0, 1]);
            const scale = useTransform(scrollYProgress, range, [0.8, 1]);

            return (
              <motion.div
                key={i}
                style={{ opacity, scale, position: i === 0 ? "relative" : "absolute", top: 0, left: 0, right: 0 }}
                className="flex flex-col items-center justify-center space-y-4"
              >
                <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase" style={{ color: spec.color }}>
                  {spec.title}
                </h2>
                <p className="max-w-md text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs">
                  {spec.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Efekti vizual i dritës prapa */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            style={{
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
            }}
            className="w-[500px] h-[500px] bg-[#CCFF00]/10 rounded-full blur-[120px]"
          />
        </div>
      </div>
    </div>
  );
};