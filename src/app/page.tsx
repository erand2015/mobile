"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, ArrowRight, Smartphone, Cpu, Star, Tag, Shield, CreditCard, 
  X, Search, Heart, Eye, Headphones, Laptop, Tablet, Watch, Gamepad2, Tv, 
  MapPin, Check, Download, Apple, Play, ChevronDown, Users, Cloud, Lock, 
  Settings, Speaker, Zap, Globe, Leaf, BarChart3, Camera
} from "lucide-react";

// DATA E PRODUKTEVE
const PRODUCTS = [
  { id: 1, name: "Titan Pro X", cat: "Phone", price: "1,199 €", old: "1,399 €", img: "https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Hot" },
  { id: 2, name: "Neural Watch 2", cat: "Wearable", price: "299 €", old: "399 €", img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "-25%" },
  { id: 3, name: "Sonic Buds Max", cat: "Audio", price: "149 €", old: "249 €", img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Sale" },
  { id: 4, name: "M2 Ultra Laptop", cat: "Computing", price: "2,199 €", old: "2,499 €", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800", tag: "Pro" },
  { id: 5, name: "Titan Tab S12", cat: "Tablet", price: "799 €", old: "950 €", img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "New" },
  { id: 6, name: "G-Force Rig", cat: "Gaming", price: "3,499 €", old: "3,999 €", img: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Monster" },
];

export default function TitanUltimateExperience() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="bg-[#020202] text-white min-h-screen selection:bg-blue-600/40 font-sans overflow-x-hidden">
      
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-blue-600 text-black py-2.5 text-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] sticky top-0 z-[150] px-4">
        TITAN GLOBAL EVENT 2026 • KODI "FUTURE" PËR ZBRITJE EKSTRA • DËRGESA FALAS NË TË GJITHË BALLKANIN
      </div>

      {/* 2. NAVIGATION */}
      <nav className="sticky top-[30px] md:top-[35px] w-full z-[140] px-4 md:px-8 py-4 md:py-5 flex justify-between items-center backdrop-blur-2xl bg-black/60 border-b border-white/5">
        <div className="text-xl md:text-2xl font-black italic tracking-tighter text-blue-500 cursor-pointer">TITAN.</div>
        <div className="hidden lg:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Telefona</a>
          <a href="#" className="hover:text-white transition-colors">Laptopë</a>
          <a href="#" className="hover:text-white transition-colors">Audio</a>
          <a href="#" className="hover:text-white transition-colors">Smart Home</a>
          <a href="#" className="text-red-500 font-bold">Outlet</a>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Search size={18} className="text-zinc-400 cursor-pointer hover:text-white" />
          <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-[8px] font-black px-1.5 py-0.5 rounded-full border border-black">12</span>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#020202]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0.01, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[18vw] md:text-[15vw] font-black italic uppercase leading-none tracking-tighter will-change-transform"
          >
            TITAN.
          </motion.h1>
          <p className="tracking-[0.5em] md:tracking-[1em] text-[10px] md:text-[12px] text-blue-500 font-bold mt-4">REDEFINING REALITY</p>
          <button className="mt-8 md:mt-12 bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_50px_rgba(37,99,235,0.3)]">Eksploro Katalogun</button>
        </div>
      </section>

      {/* 4. PRODUCT CATALOG GRID */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12 md:mb-16 border-b border-white/5 pb-8">
           <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">Katalogu Premium</h2>
           <p className="text-zinc-500 font-mono text-[10px] uppercase hidden md:block tracking-widest italic">New Arrival / 2026</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {PRODUCTS.map(p => (
            <motion.div 
              initial={{ opacity: 0.01, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={p.id} 
              className="group bg-zinc-900/20 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 hover:bg-zinc-800/30 transition-all will-change-transform"
            >
              <div className="relative h-60 md:h-72 overflow-hidden rounded-2xl mb-6 md:mb-8 bg-zinc-800">
                 <div className="absolute top-4 left-4 z-20 bg-blue-600 text-[8px] font-black px-3 py-1 rounded-full uppercase italic tracking-widest">{p.tag}</div>
                 <img 
                    src={p.img} 
                    className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500 ease-out will-change-transform" 
                 />
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">{p.cat}</span>
                  <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tight mt-1">{p.name}</h4>
                </div>
                <div className="text-right">
                  <p className="text-[10px] md:text-xs text-zinc-600 line-through">{p.old}</p>
                  <p className="text-xl md:text-2xl font-black text-blue-500 italic">{p.price}</p>
                </div>
              </div>
              <button className="w-full bg-white text-black py-4 md:py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all">Shto në shportë</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. TECHNICAL DOMINANCE TABLE */}
      <section className="py-20 md:py-32 bg-zinc-950/50 px-4 md:px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <h2 className="text-3xl md:text-4xl font-black italic text-center mb-12 md:mb-16 uppercase tracking-tighter">Dominimi Teknik</h2>
          <div className="border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-black min-w-[300px]">
             <table className="w-full text-left">
               <thead className="bg-white/5 font-mono text-[9px] md:text-[10px] uppercase text-zinc-500">
                 <tr><th className="p-5 md:p-8">Feature</th><th className="p-5 md:p-8 text-blue-500">Titan</th><th className="p-5 md:p-8">Std</th></tr>
               </thead>
               <tbody className="text-xs md:text-sm font-bold italic">
                 <tr className="border-t border-white/5"><td className="p-5 md:p-8">Neural Processing</td><td className="p-5 md:p-8 text-blue-500">40 TOPS</td><td className="p-5 md:p-8 text-zinc-600">12 TOPS</td></tr>
                 <tr className="border-t border-white/5"><td className="p-5 md:p-8">Battery Efficiency</td><td className="p-5 md:p-8 text-blue-500">+45%</td><td className="p-5 md:p-8 text-zinc-600">Base</td></tr>
                 <tr className="border-t border-white/5"><td className="p-5 md:p-8">Security Layer</td><td className="p-5 md:p-8 text-blue-500">Quantum-Safe</td><td className="p-5 md:p-8 text-zinc-600">AES</td></tr>
               </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 6. INSTALLMENTS 0% */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-blue-600 text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">Blije sot.<br/>Paguaj me këste.</h2>
            <p className="text-lg md:text-xl font-medium opacity-80 italic">Bli me 0% interes deri në 24 muaj me kartat e kreditit në Shqipëri dhe Kosovë.</p>
          </div>
          <div className="flex gap-4 scale-90 md:scale-100">
             <div className="p-8 md:p-12 bg-black text-white rounded-[2rem] md:rounded-[3rem] text-center"><p className="text-4xl md:text-6xl font-black mb-2">0%</p><p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest">Interes</p></div>
             <div className="p-8 md:p-12 bg-black text-white rounded-[2rem] md:rounded-[3rem] text-center"><p className="text-4xl md:text-6xl font-black mb-2">24</p><p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest">Muaj</p></div>
          </div>
        </div>
      </section>

      {/* 7. SHOWROOM LOCATOR */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-zinc-900/50 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 border border-white/5 flex flex-col md:flex-row gap-10 md:gap-16 items-center text-center md:text-left">
          <div className="bg-blue-600 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shrink-0">
            <MapPin className="text-black w-12 h-12 md:w-20 md:h-20" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6 tracking-tighter">Përjetoni Titan Live.</h2>
            <p className="text-zinc-500 text-base md:text-lg mb-8 italic">Vizitoni dyqanet tona fizike në TEG (Tiranë) ose Albi Mall (Prishtinë).</p>
            <img 
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800" 
              className="w-full h-48 md:h-64 object-cover rounded-[1.5rem] md:rounded-[2rem] mb-6 border border-white/10" 
              alt="Titan Showroom" 
            />
            <button className="border border-white/20 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Gjej në Map</button>
          </div>
        </div>
      </section>

      {/* 8. CUSTOM BUILD */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center text-center lg:text-left">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
             <Settings className="text-blue-500 mb-6 w-8 h-8 md:w-10 md:h-10" />
             <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">Custom Build.</h2>
             <p className="text-zinc-500 text-base md:text-lg mb-10 leading-relaxed italic">Ndërto konfigurimin tënd të procesorit dhe memories. Çdo Titan Pro vjen me paketim të personalizuar.</p>
             <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">Konfiguro Tani</button>
          </div>
          <div className="order-1 lg:order-2 px-4">
             <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800" className="rounded-[2rem] md:rounded-[3rem] grayscale border border-white/10 w-full" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 md:py-32 px-4 md:px-8 border-t border-white/5 bg-black overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-center">
          <div className="opacity-10 font-black text-[15vw] md:text-[18vw] leading-none uppercase select-none tracking-tighter">TITAN TECH</div>
          <div className="mt-10 md:mt-20 text-center border-t border-white/5 pt-10 text-[7px] md:text-[8px] font-mono text-zinc-700 tracking-[0.5em] md:tracking-[1em] uppercase px-4">
             © 2026 Titan Electronics Albania
          </div>
        </div>
      </footer>

      {/* CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[200]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 z-[210] p-8 md:p-12 border-l border-white/5">
              <div className="flex justify-between items-center mb-10"><h3 className="text-3xl md:text-4xl font-black italic uppercase">Bag.</h3><X onClick={() => setIsCartOpen(false)} className="cursor-pointer" /></div>
              <p className="text-zinc-600 italic text-center mt-20">Shporta është bosh.</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}