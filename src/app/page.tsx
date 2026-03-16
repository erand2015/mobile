"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, X, Search, MapPin, Settings, Smartphone, Cpu, CreditCard, Shield 
} from "lucide-react";
import TelefonaPage from "./telefona";

const PRODUCTS = [
  { id: 1, name: "Titan Pro X", cat: "Phone", price: "1,199 €", old: "1,399 €", img: "https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Hot" },
  { id: 2, name: "Neural Watch 2", cat: "Wearable", price: "299 €", old: "399 €", img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "-25%" },
  { id: 3, name: "Sonic Buds Max", cat: "Audio", price: "149 €", old: "249 €", img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Sale" },
  { id: 4, name: "M2 Ultra Laptop", cat: "Computing", price: "2,199 €", old: "2,499 €", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800", tag: "Pro" },
  { id: 5, name: "Titan Tab S12", cat: "Tablet", price: "799 €", old: "950 €", img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "New" },
  { id: 6, name: "G-Force Rig", cat: "Gaming", price: "3,499 €", old: "3,999 €", img: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Monster" },
];

const fadeInUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainerVariants: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TitanUltimateExperience() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState("home");
  const [circuitLines, setCircuitLines] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x1: Math.random() * 90,
      y1: Math.random() * 80,
      length: Math.random() * 300 + 150,
      direction: Math.random() > 0.5 ? 0 : 1,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 4,
    }));
    setCircuitLines(generated);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <main className="bg-white text-black min-h-screen selection:bg-blue-600/40 font-sans overflow-x-hidden">
      
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-blue-600 text-black py-2.5 text-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] sticky top-0 z-[150] px-4">
        TITAN GLOBAL EVENT 2026 • KODI "FUTURE" PËR ZBRITJE EKSTRA • DËRGESA FALAS NË TË GJITHË BALLKANIN
      </div>

      {/* 2. NAVIGATION */}
      <nav className="sticky top-[30px] md:top-[35px] w-full z-[140] px-4 md:px-8 py-4 md:py-5 flex justify-between items-center backdrop-blur-2xl bg-white/60 border-b border-black/5">
        <div onClick={() => setView("home")} className="text-xl md:text-2xl font-black italic tracking-tighter text-blue-500 cursor-pointer">TITAN.</div>
        <div className="hidden lg:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-700">
          <button onClick={() => setView("telefona")} className="hover:text-black transition-colors">Telefona</button>
          <button className="hover:text-black transition-colors">Laptopë</button>
          <button className="hover:text-black transition-colors">Audio</button>
          <button className="hover:text-black transition-colors">Smart Home</button>
          <button className="text-red-500 font-bold">Outlet</button>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Search size={18} className="text-zinc-700 cursor-pointer" />
          <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-black" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-[8px] font-black px-1.5 py-0.5 rounded-full border border-white text-white">12</span>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === "home" ? (
          <motion.div key="home-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* 3. HERO SECTION */}
            <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-white">
              
              {/* SFONDI ME QARKUN ELEKTRIK */}
              <div className="absolute inset-0 z-0">
                {circuitLines.map((line) => (
                  <div
                    key={line.id}
                    className="absolute bg-zinc-100/50"
                    style={{
                      width: line.direction === 0 ? `${line.length}px` : "2px",
                      height: line.direction === 1 ? `${line.length}px` : "2px",
                      left: `${line.x1}%`,
                      top: `${line.y1}%`,
                    }}
                  >
                    <motion.div
                      className="absolute bg-blue-500 shadow-[0_0_15px_#2563eb]"
                      style={{
                        width: line.direction === 0 ? "80px" : "100%",
                        height: line.direction === 1 ? "80px" : "100%",
                        left: 0,
                        top: 0,
                      }}
                      animate={line.direction === 0 ? {
                        x: [-80, line.length, line.length],
                        opacity: [0, 1, 0],
                      } : {
                        y: [-80, line.length, line.length],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: line.duration,
                        delay: line.delay,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white z-[1]" />

              <motion.div 
                className="relative z-10 text-center px-4"
                initial="hidden"
                animate="visible"
                variants={staggerContainerVariants}
              >
                <motion.h1 variants={fadeInUpVariants} className="text-[18vw] md:text-[15vw] font-black italic uppercase leading-none tracking-tighter text-black drop-shadow-sm">TITAN.</motion.h1>
                <motion.p variants={fadeInUpVariants} className="tracking-[0.5em] md:tracking-[1em] text-[10px] md:text-[12px] text-blue-600 font-bold mt-4">POWERED BY QUANTUM</motion.p>
                <motion.button variants={fadeInUpVariants} onClick={() => setView("telefona")} className="mt-8 md:mt-12 bg-black text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-blue-600 hover:scale-105 transition-all shadow-2xl">Eksploro Katalogun</motion.button>
              </motion.div>
            </section>

            {/* 4. KATALOGU */}
            <section className="py-16 md:py-24 px-4 md:px-6 max-w-[1600px] mx-auto overflow-hidden">
              <motion.div className="flex justify-between items-end mb-12 md:mb-16 border-b border-black/5 pb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUpVariants}>
                 <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-black">Katalogu Premium</h2>
              </motion.div>
              
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainerVariants}>
                {PRODUCTS.map(p => (
                  <motion.div key={p.id} variants={fadeInUpVariants} className="group relative bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-black/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <div className="relative h-60 md:h-72 overflow-hidden rounded-2xl mb-6 md:mb-8 bg-zinc-100">
                         <img src={p.img} className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="flex justify-between items-start mb-6 text-left">
                      <h4 className="text-xl md:text-2xl font-black italic uppercase mt-1">{p.name}</h4>
                      <p className="text-xl md:text-2xl font-black text-blue-600 italic">{p.price}</p>
                    </div>
                    <button className="w-full bg-black text-white py-4 md:py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all">Shto në shportë</button>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* 5. TABELA TEKNIKE */}
            <motion.section className="py-20 md:py-32 bg-zinc-50 px-4 md:px-6 border-y border-black/5 overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUpVariants}>
              <div className="max-w-4xl mx-auto overflow-x-auto text-center">
                <h2 className="text-3xl md:text-4xl font-black italic uppercase text-black mb-12">Dominimi Teknik</h2>
                <div className="border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white">
                   <table className="w-full text-left">
                     <thead className="bg-zinc-100 font-mono text-[9px] md:text-[10px] uppercase text-zinc-600">
                       <tr><th className="p-5 md:p-8">Feature</th><th className="p-5 md:p-8 text-blue-500">Titan</th><th className="p-5 md:p-8 text-black">Std</th></tr>
                     </thead>
                     <tbody className="text-xs md:text-sm font-bold italic text-black">
                       <tr className="border-t border-black/5"><td className="p-5 md:p-8">Neural Processing</td><td className="p-5 md:p-8 text-blue-500">40 TOPS</td><td className="p-5 md:p-8 text-zinc-600">12 TOPS</td></tr>
                       <tr className="border-t border-black/5"><td className="p-5 md:p-8">Battery Efficiency</td><td className="p-5 md:p-8 text-blue-500">+45%</td><td className="p-5 md:p-8 text-zinc-600">Base</td></tr>
                     </tbody>
                   </table>
                </div>
              </div>
            </motion.section>

            {/* 6. KESTET 0% */}
            <motion.section className="py-20 md:py-32 px-4 md:px-6 bg-blue-600 text-black overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUpVariants}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="max-w-xl text-center md:text-left text-black">
                  <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">Blije sot.<br/>Paguaj me këste.</h2>
                </div>
                <div className="flex gap-4">
                   <div className="p-8 md:p-12 bg-black text-white rounded-[2rem] text-center"><p className="text-4xl md:text-6xl font-black">0%</p></div>
                   <div className="p-8 md:p-12 bg-black text-white rounded-[2rem] text-center"><p className="text-4xl md:text-6xl font-black">24</p></div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        ) : (
          <TelefonaPage onBack={() => setView("home")} />
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-20 md:py-32 px-4 md:px-8 border-t border-black/5 bg-white text-center overflow-hidden">
        <div className="opacity-10 font-black text-[12vw] md:text-[18vw] leading-none uppercase select-none tracking-tighter text-zinc-300">TITAN TECH</div>
      </footer>

      {/* CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[200]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[210] p-8 border-l border-black/5 shadow-2xl">
              <div className="flex justify-between items-center mb-10"><h3 className="text-3xl font-black italic uppercase">Bag.</h3><X onClick={() => setIsCartOpen(false)} className="cursor-pointer" /></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}