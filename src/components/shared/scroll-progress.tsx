"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Përdorim useSpring për ta bërë lëvizjen e vijës më "smooth" dhe elastike
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#CCFF00] origin-left z-[1000]"
      style={{ scaleX }}
    />
  );
};