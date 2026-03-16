"use client";

import React, { useEffect, useRef, useState } from "react";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Lenis from 'lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Hexagon, ShoppingCart, X, ArrowUpRight, Cpu, Zap, Shield, CheckCircle2, Globe 
} from "lucide-react";

// --- 1. STORE (ZUSTAND) ---
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  tag: string;
}

interface CartStore {
  items: Product[];
  isCartOpen: boolean;
  notification: string | null;
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  toggleCart: () => void;
  getTotal: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      notification: null,
      addItem: (item) => {
        set((state) => ({ 
          items: [...state.items, item], 
          isCartOpen: true,
          notification: `${item.name} u shtua!` 
        }));
        setTimeout(() => set({ notification: null }), 3000);
      },
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      getTotal: () => get().items.reduce((acc, item) => acc + item.price, 0),
    }),
    { name: 'titan-storage-v2' }
  )
);

// --- 2. DATA ---
const PRODUCTS: Product[] = [
  { id: 1, name: "Titan 16 Pro", price: 1199, img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000", tag: "LUKSOZ" },
  { id: 2, name: "Titan 16 Ultra", price: 1499, img: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=1000", tag: "ELITE" },
  { id: 3, name: "Titan 16 Fold", price: 1999, img: "https://images.unsplash.com/photo-1556656793-062ff98782ee?q=80&w=1000", tag: "NEXT-GEN" },
  { id: 4, name: "Titan 16 Air", price: 999, img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000", tag: "MINIMALIST" }
];

// --- 3. UI COMPONENTS ---
const CartSidebar = () => {
  const { items, isCartOpen, toggleCart, removeItem, getTotal } = useCartStore();
  const subtotal = getTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleCart} className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[2000]" />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white/5 backdrop-blur-3xl border-l border-white/10 z-[2001] p-10 flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Shporta</h3>
              <button onClick={toggleCart} className="text-white hover:rotate-90 transition-transform"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-6">
              {items.map((item, idx) => (
                <motion.div layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key={`${item.id}-${idx}`} className="flex gap-4 p-4 bg-white/5 rounded-3xl border border-white/5 group">
                  <img src={item.img} className="w-20 h-20 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all" alt="" />
                  <div className="flex-1 text-xs uppercase font-bold italic text-white flex flex-col justify-center">{item.name}<p className="text-[#00FFFF] mt-1 font-mono tracking-tighter">{item.price}€</p></div>
                  <button onClick={() => removeItem(item.id)} className="text-zinc-600 hover:text-red-500"><X size={16} /></button>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 pt-10 border-t border-white/10">
              <div className="flex justify-between text-2xl font-black italic text-white"><span>TOTAL</span><span className="text-[#00FFFF]">{subtotal.toFixed(2)}€</span></div>
              <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] mt-6 hover:bg-[#00FFFF] transition-all">Paguaj Tani</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- 4. MAIN PAGE ---
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { addItem, toggleCart, items, notification } = useCartStore();
  const { scrollYProgress } = useScroll();

  // TITAN ANIMATIONS
  const titanScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const titanOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titanLetterSpacing = useTransform(scrollYProgress, [0, 0.2], ["-0.08em", "0.2em"]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ lerp: 0.07, duration: 1.5 });
      function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <main className="bg-[#020202] text-white overflow-x-hidden selection:bg-[#00FFFF] selection:text-black">
      <CartSidebar />
      
      {/* NOTIFICATION */}
      <AnimatePresence>
        {notification && (
          <motion.div initial={{ y: -100 }} animate={{ y: 30 }} exit={{ y: -100 }} className="fixed top-0 left-1/2 -translate-x-1/2 z-[3000] bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_0_50px_rgba(0,255,255,0.4)]">
            <CheckCircle2 size={20} className="text-green-600" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full z-[1000] p-10 mix-blend-difference">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-2xl font-[1000] italic tracking-tighter">
            <Hexagon fill="#00FFFF" className="text-[#00FFFF]" size={28} /> TITAN.
          </div>
          <button onClick={toggleCart} className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-black text-[#00FFFF] text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">{items.length}</span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION - THE MONOLITH */}
      <section className="h-[120vh] flex flex-col items-center justify-center relative bg-black">
        {/* LIGHT BLOOM BACKGROUND */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-[#00FFFF]/10 blur-[180px] rounded-full" />
        
        <motion.div style={{ scale: titanScale, opacity: titanOpacity, letterSpacing: titanLetterSpacing }} className="text-center z-10 relative">
          <h1 className="text-[28vw] font-[1000] tracking-tighter leading-none italic select-none
            text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-800
            drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
            TITAN
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#00FFFF] font-black uppercase tracking-[2em] text-[10px] md:text-xs mt-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            The Quantum Machine
          </motion.p>
        </motion.div>

        <div className="absolute bottom-20 px-10 w-full flex justify-between items-end z-20">
          <div className="max-w-xs space-y-4">
            <div className="w-12 h-[1px] bg-[#00FFFF]" />
            <p className="text-zinc-500 text-xs font-medium leading-relaxed uppercase tracking-widest italic">
              Zbuloni fuqinë e vërtetë të inteligjencës artificiale në dorën tuaj.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <Globe className="text-zinc-800 mb-4 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-700 tracking-[0.8em] uppercase [writing-mode:vertical-rl]">GLOBAL LAUNCH 2026</span>
          </div>
        </div>
      </section>

      {/* SPECS GRID */}
      <section className="py-40 px-10 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Cpu />, title: "A20 BIONIC", desc: "Chip-i i parë në botë me arkitekturë 2-nanometër." },
          { icon: <Zap />, title: "HYPER CHARGE", desc: "Nga 0% në 100% për vetëm 9 minuta e 40 sekonda." },
          { icon: <Shield />, title: "TITANIUM G5", desc: "Material i shkallës hapsinore, 4x më rezistent ndaj gërvishtjeve." }
        ].map((spec, i) => (
          <div key={i} className="group bg-zinc-950 border border-white/5 p-16 rounded-[4rem] hover:border-[#00FFFF]/30 transition-all duration-700">
            <div className="text-[#00FFFF] mb-10 group-hover:scale-125 transition-transform duration-500">{spec.icon}</div>
            <h3 className="text-5xl font-black italic tracking-tighter mb-6 uppercase">{spec.title}</h3>
            <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase leading-loose">{spec.desc}</p>
          </div>
        ))}
      </section>

      {/* PRODUCTS GALLERY */}
      <section className="py-40 px-10 bg-white text-black rounded-[5rem]">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-between items-end mb-24 border-b-2 border-black pb-10">
            <h2 className="text-8xl font-[1000] italic tracking-tighter uppercase leading-none">Koleksioni<br/>Titan 16</h2>
            <p className="max-w-[200px] text-[10px] font-black uppercase tracking-widest leading-relaxed">Përzgjidhni pajisjen që përshtatet me ambicien tuaj.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="group relative bg-zinc-100 rounded-[3rem] p-10 overflow-hidden h-[700px] flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-700">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{p.tag}</span>
                  <h3 className="text-4xl font-[1000] italic uppercase tracking-tighter mt-4">{p.name}</h3>
                </div>
                <img src={p.img} className="w-full h-80 object-cover rounded-3xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="" />
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-mono font-black italic">{p.price}€</span>
                  <button onClick={() => addItem(p)} className="w-16 h-16 bg-black text-white rounded-full group-hover:bg-[#00FFFF] group-hover:text-black transition-all flex items-center justify-center">
                    <ArrowUpRight size={28} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 text-center bg-[#020202]">
        <h2 className="text-[20vw] font-[1000] italic text-zinc-900 tracking-tighter opacity-30 select-none">TITAN.</h2>
        <div className="flex flex-col md:flex-row justify-between items-center px-10 max-w-[1800px] mx-auto gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
          <div className="flex gap-10 italic">
            <span className="hover:text-[#00FFFF] cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-[#00FFFF] cursor-pointer transition-colors">Tirana Store</span>
          </div>
          <p>© 2026 Developed for Titan Global Systems</p>
        </div>
      </footer>
    </main>
  );
}