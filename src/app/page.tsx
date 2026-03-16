"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShoppingBag, Search, Shield, Zap, Globe, ChevronRight, Menu, X 
} from "lucide-react";

export default function TitanEliteExperience() {
  const { scrollY } = useScroll();
  
  // Efektet e dritës dhe shkallëzimit bazuar në scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const coreGlow = useTransform(scrollY, [0, 500], ["0px 0px 20px #00FFFF", "0px 0px 150px #00FFFF"]);

  return (
    <main className="bg-[#050505] text-white font-sans selection:bg-[#00FFFF] selection:text-black">
      
      {/* 1. MINIMALIST OVERLAY NAV */}
      <nav className="fixed top-0 w-full z-[300] mix-blend-difference px-8 py-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-[-0.1em]">TITAN</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-light">
          {["Vision", "Systems", "Archive", "Access"].map((item) => (
            <a key={item} href="#" className="hover:text-[#00FFFF] transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <Search size={18} strokeWidth={1.5} />
          <ShoppingBag size={18} strokeWidth={1.5} />
          <Menu size={18} className="md:hidden" />
        </div>
      </nav>

      {/* 2. THE TITAN CORE (HERO PA FOTO) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Shkrimi si relief metalik */}
        <motion.h1 
          style={{ scale }}
          className="relative z-10 text-[25vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-900 opacity-20 select-none"
        >
          TITAN
        </motion.h1>

        {/* Bërthama e Energjisë (Zëvendëson 3 telefonat) */}
        <motion.div 
          style={{ boxShadow: coreGlow }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute z-20 w-32 h-32 md:w-64 md:h-64 border border-[#00FFFF]/30 rounded-full flex items-center justify-center"
        >
          <div className="w-[80%] h-[80%] border border-[#00FFFF]/20 rounded-full animate-pulse" />
          <div className="absolute w-1 h-1 bg-[#00FFFF] rounded-full shadow-[0_0_15px_#00FFFF]" />
        </motion.div>

        {/* Info Text */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-20 z-30 text-center"
        >
          <p className="text-[#00FFFF] text-[10px] uppercase tracking-[0.6em] mb-4">Intelligence redefined</p>
          <h2 className="text-2xl font-light tracking-widest uppercase">The Quantum Series</h2>
        </motion.div>
      </section>

      {/* 3. EXPERIENTIAL GRID (JO UI APPLE) */}
      <section className="px-4 py-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-[150vh] md:h-screen">
        
        {/* Material Display */}
        <div className="md:col-span-8 bg-zinc-950 border border-white/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2000')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="relative z-10 p-12 h-full flex flex-col justify-end">
            <span className="text-[#00FFFF] font-mono text-xs mb-4">// GRADE 5 TITANIUM</span>
            <h3 className="text-5xl font-bold tracking-tighter max-w-md">Më i lehtë. Më i fortë. Titan.</h3>
          </div>
        </div>

        {/* Interaction Block */}
        <div className="md:col-span-4 bg-[#00FFFF] text-black p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <Zap size={40} />
            <h3 className="text-4xl font-black leading-none uppercase italic">0 to 100%<br/>in 8 min</h3>
          </div>
          <button className="w-full py-4 border-b-2 border-black flex justify-between items-center font-bold uppercase tracking-widest text-sm">
            Reserve Yours <ChevronRight />
          </button>
        </div>

        {/* Tech Specs Block */}
        <div className="md:col-span-4 bg-zinc-900 border border-white/5 p-12">
          <Globe className="mb-8 opacity-50" />
          <h4 className="text-xl font-bold mb-4">Neural Network 2.0</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">Sistemi i parë operativ që mëson dhe përshtatet me ndërgjegjen tuaj.</p>
        </div>

        <div className="md:col-span-8 bg-white text-black p-12 flex items-center justify-between group cursor-pointer">
          <h3 className="text-6xl font-black tracking-tighter uppercase group-hover:italic transition-all">Store Alpha</h3>
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform">
            <ChevronRight size={40} />
          </div>
        </div>
      </section>

      {/* 4. DATA FOOTER */}
      <footer className="py-20 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-black tracking-tighter">TITAN</div>
          <p className="max-w-xs text-zinc-500 text-xs leading-relaxed">
            Titan Electronics nuk është thjesht një kompani teknologjie. Është një laborator i të ardhmes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest text-zinc-400">Security</h5>
            <ul className="text-sm space-y-2 font-medium">
              <li>Biometrics</li>
              <li>Encryption</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest text-zinc-400">Legal</h5>
            <ul className="text-sm space-y-2 font-medium">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Noise Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUznW3pS/giphy.gif')]" />
    </main>
  );
}