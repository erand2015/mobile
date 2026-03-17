"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Koha sa do të qëndrojë loader-i (1.5 sekonda)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic"
          >
            TITAN<span className="text-[#CCFF00]">CORE</span>
          </motion.div>

          {/* Loading Bar Container */}
          <div className="mt-8 h-[2px] w-48 overflow-hidden bg-white/10 rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-[#CCFF00]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500"
          >
            Initializing System
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};