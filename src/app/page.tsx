"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Lenis from 'lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useVelocity, useMotionValueEvent } from "framer-motion";
import { 
  ShoppingCart, ArrowUpRight, CheckCircle2, Zap, Camera, BatteryCharging, Smartphone, Cpu 
} from "lucide-react";

// --- STORE ---
interface Product { id: number; name: string; price: number; img: string; tag: string; }
interface CartStore {
  items: Product[];
  notification: string | null;
  addItem: (item: Product) => void;
}

const useCartStore = create<CartStore>()(
  persist((set) => ({
    items: [], notification: null,
    addItem: (item) => {
      set((state) => ({ items: [...state.items, item], notification: `${item.name} u shtua!` }));
      setTimeout(() => set({ notification: null }), 3000);
    },
  }), { name: 'titan-mobile-snap-v1' })
);

const PRODUCTS = [
  { id: 1, name: "Titan 16 Pro", price: 1199, img: "https://images.unsplash.com/photo-1664478546384-d2b076ac3951?q=80&w=1000", tag: "ULTRA POWER" },
  { id: 2, name: "Titan Gaming", price: 1599, img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000", tag: "240HZ OLED" },
  { id: 3, name: "Titan EarX", price: 349, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000", tag: "NOISE CANCEL" },
  { id: 4, name: "Titan Watch", price: 599, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000", tag: "SAPPHIRE" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { addItem, items, notification } = useCartStore();
  
  // NAVBAR LOGIC
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  // CAROUSEL PHYSICS
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const x = useMotionValue(0);
  const scrollXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const xVelocity = useVelocity(x);
  const scaleX = useSpring(useTransform(xVelocity, [-2000, 0, 2000], [1.5, 1, 1.5]), { stiffness: 400, damping: 30 });

  const scrollProgress = useTransform(scrollXSpring, [0, -carouselWidth || -1], ["0%", "100%"]);
  const indicatorThumbX = useTransform(scrollXSpring, [0, -carouselWidth || -1], [0, 280]);

  useLayoutEffect(() => {
    if (mounted) {
      const calc = () => trackRef.current && carouselRef.current && setCarouselWidth(trackRef.current.scrollWidth - carouselRef.current.offsetWidth);
      calc(); window.addEventListener("resize", calc);
      return () => window.removeEventListener("resize", calc);
    }
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ lerp: 0.1 });
      function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-[#020202] text-white selection:bg-[#CCFF00] selection:text-black antialiased">
      
      <AnimatePresence>
        {notification && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed top-24 left-1/2 -translate-x-1/2 z-[5000] bg-[#CCFF00] text-black px-6 py-3 rounded-full font-black text-[10px] uppercase shadow-[0_0_30px_#CCFF00]">
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SMART NAVBAR */}
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-[4000] p-6 md:p-8 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5"
      >
        <div className="flex items-center gap-2 font-black italic text-xl tracking-tighter">
          <div className="w-5 h-5 bg-[#CCFF00] rounded-sm rotate-45 flex items-center justify-center">
            <Cpu size={12} className="text-black -rotate-45" />
          </div>
          TITAN<span className="text-[#CCFF00]">LAB</span>
        </div>
        <button className="relative w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#CCFF00] hover:text-black transition-all">
          <ShoppingCart size={18} />
          {items.length > 0 && <span className="absolute -top-1 -right-1 bg-[#CCFF00] text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{items.length}</span>}
        </button>
      </motion.nav>

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#CCFF0008_0%,_transparent_70%)]" />
        <motion.h1 
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "-0.05em", opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="text-[28vw] font-[1000] leading-none italic text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800"
        >
          CORE
        </motion.h1>
        <p className="text-[#CCFF00] font-black uppercase tracking-[1em] text-[10px] mt-[-2vw]">Pure Performance</p>
      </section>

      {/* PRODUCT SECTION WITH SCROLL SNAP */}
      <section className="py-24 md:py-40 bg-zinc-950 rounded-t-[3rem] md:rounded-t-[5rem] border-t border-white/5">
        <div className="px-8 md:px-10 mb-16 md:mb-24 max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            Next-Gen<br/><span className="text-[#CCFF00]">Hardware.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Snap Container */}
          <div 
            ref={carouselRef} 
            className="overflow-x-auto md:overflow-hidden cursor-grab active:cursor-grabbing px-6 md:px-10 no-scrollbar snap-x snap-mandatory flex"
          >
            <motion.div 
              ref={trackRef} 
              drag="x" 
              dragConstraints={{ right: 0, left: -carouselWidth }} 
              style={{ x: scrollXSpring }} 
              className="flex gap-4 md:gap-10 w-max pb-16 md:pb-24"
            >
              {PRODUCTS.map((p) => (
                <div 
                  key={p.id} 
                  className="w-[85vw] md:w-[450px] h-[550px] md:h-[650px] bg-[#050505] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 border border-white/5 snap-center flex flex-col justify-between shrink-0 group hover:border-[#CCFF00]/30 transition-all duration-700"
                >
                  <div>
                    <span className="text-[#CCFF00] text-[10px] font-black tracking-widest opacity-70 uppercase">{p.tag}</span>
                    <h3 className="text-3xl md:text-5xl font-black italic uppercase mt-2 group-hover:text-[#CCFF00] transition-colors">{p.name}</h3>
                  </div>

                  <img src={p.img} className="w-full h-56 md:h-72 object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="" />

                  <div className="flex justify-between items-center border-t border-white/5 pt-6 md:pt-8">
                    <span className="text-3xl md:text-4xl font-black italic">{p.price}€</span>
                    <button onClick={() => addItem(p)} className="w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-[#CCFF00] transition-all active:scale-90">
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* INDICATOR (Visible only on desktop or for visual cue) */}
          <div className="hidden md:flex flex-col items-center">
            <div className="relative w-[350px] h-10 flex items-center bg-white/5 rounded-full border border-white/10">
              <motion.div style={{ x: indicatorThumbX, scaleX }} className="w-16 h-7 bg-[#CCFF00] rounded-full z-20 shadow-[0_0_20px_#CCFF0030]" />
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-24 px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
        {[
          { i: <Zap />, t: "Turbo Charge", d: "Silicon Anode Tech" },
          { i: <Camera />, t: "Pro Optics", d: "Zeiss Integrated" },
          { i: <BatteryCharging />, t: "Eco Core", d: "Zero Carbon Build" },
          { i: <Smartphone />, t: "Titan Glass", d: "Molecular Bond" }
        ].map((s, idx) => (
          <div key={idx} className="p-8 border border-white/5 bg-zinc-950 rounded-[2rem] hover:bg-[#CCFF00] hover:text-black transition-all">
            <div className="mb-4 text-[#CCFF00]">{s.i}</div>
            <h4 className="font-black italic uppercase text-lg">{s.t}</h4>
            <p className="text-[10px] uppercase font-bold opacity-40">{s.d}</p>
          </div>
        ))}
      </section>

      <footer className="py-20 text-center border-t border-white/5 bg-[#020202]">
        <h2 className="text-[15vw] font-black italic opacity-5 select-none leading-none">TITANLAB</h2>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}