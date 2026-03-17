"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Pozicioni i kursorit
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Efekti "spring" për ndjekje të lëmuar
  const springConfig = { damping: 25, stiffness: 250 };
  const shadowX = useSpring(cursorX, springConfig);
  const shadowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Kontrollojmë nëse po kalojmë mbi butona apo linke
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Pika qendrore (e shpejtë) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* Rrethi i jashtëm (me vonesë/spring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#CCFF00] rounded-full z-[9998] pointer-events-none hidden md:block"
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "rgba(204, 255, 0, 0.1)" : "rgba(204, 255, 0, 0)",
          borderColor: isHovered ? "rgba(204, 255, 0, 1)" : "rgba(204, 255, 0, 0.5)",
        }}
        style={{ 
          x: shadowX, 
          y: shadowY, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
      />
    </>
  );
};