"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex min-h-[100svh] w-full flex-col items-center justify-center pt-20 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center px-6 w-full max-w-7xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 inline-block rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#CCFF00]"
        >
          Gjenerata e Re 2026
        </motion.span>

        {/* text-[12vw] e mban titullin gjithmonë brenda gjerësisë së telefonit */}
        <h1 className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-black tracking-tighter text-white mb-8 leading-[0.85] uppercase italic font-display">
          FUTURE <br />
          <span className="bg-gradient-to-b from-[#CCFF00] to-[#99CC00] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(204,255,0,0.2)]">
            TITAN TECH
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-zinc-400 text-[10px] md:text-sm lg:text-base uppercase tracking-[0.2em] leading-relaxed mb-12 px-4">
          Eksploro kufijtë e teknologjisë me pajisjet më elitare në treg. 
          Performancë pa kompromis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-10 sm:px-0">
          <button className="w-full sm:w-auto group relative px-10 py-5 rounded-2xl bg-[#CCFF00] font-black text-[10px] uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(204,255,0,0.3)]">
            Blej Tani
          </button>
          
          <button className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 bg-white/5 font-black text-[10px] uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10">
            Mëso më shumë
          </button>
        </div>
      </motion.div>

      {/* Background Glow - e bëjmë më të vogël në mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />
    </div>
  );
}