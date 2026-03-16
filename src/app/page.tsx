"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Search, ChevronRight, ShieldCheck, 
  Truck, CreditCard, Plus, ArrowRight, ChevronDown, PlayCircle
} from "lucide-react";

// Të dhënat
const CATEGORIES = [
  { name: "iPhone", img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Laptopë", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Tableta", img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Audio", img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Ora", img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Aksesorë", img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=200" },
];

const NEW_PRODUCTS = [
  { id: 101, name: "Titan Pad Air", price: "649 €", img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "New" },
  { id: 102, name: "MacBook Pro M3", price: "1,999 €", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800", tag: "Best Seller" },
  { id: 103, name: "Titan Audio Pro", price: "249 €", img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Sale" },
  { id: 104, name: "Neural Watch", price: "399 €", img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "New" },
];

export default function TitanUltimateStore() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white text-[#1d1d1f] font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-[200] bg-white/80 backdrop-blur-2xl border-b border-[#d2d2d7]/30">
        <div className="max-w-[1024px] mx-auto h-12 flex items-center justify-between px-6">
          <div className="text-xl font-bold tracking-tighter cursor-pointer">TITAN</div>
          <div className="hidden md:flex gap-6 text-[11px] font-medium text-[#1d1d1f]/80">
            {["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "Ofertat %"].map((item) => (
              <button key={item} className="hover:text-black transition-colors">{item}</button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Search size={17} />
            <div className="relative">
              <ShoppingBag size={17} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">12</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. CATEGORY QUICK NAV (SHTESE E RE) */}
      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-[1000px] mx-auto flex justify-between px-6 overflow-x-auto gap-8 no-scrollbar">
          {CATEGORIES.map((cat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="flex flex-col items-center min-w-[70px] cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-[#f5f5f7] mb-2 overflow-hidden border border-transparent group-hover:border-blue-500 transition-all p-2">
                <img src={cat.img} className="w-full h-full object-contain" alt={cat.name} />
              </div>
              <span className="text-[11px] font-medium text-center">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. HERO SECTION */}
      <section className="relative h-[85vh] w-full flex flex-col items-center justify-start overflow-hidden border-b-8 border-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center pt-20">
          <span className="text-orange-500 font-bold text-sm tracking-widest mb-2 block uppercase">E Re</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">Titan Pro X</h1>
          <p className="text-xl md:text-3xl font-medium mb-8">Fuqia që ndryshon rregullat.</p>
          <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Bli Tani</button>
        </motion.div>
      </section>

      {/* 4. PRODUKTET GIGANTE (MacBook & Watch) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        <div className="relative h-[80vh] md:h-[90vh] bg-black rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center">
          <div className="z-10 pt-16 px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">TitanBook Pro</h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-6">Më i shpejtë se imagjinata.</p>
            <div className="flex gap-3 justify-center">
              <button className="bg-[#0071e3] text-white px-6 py-2 rounded-full text-sm">Mëso më shumë</button>
              <button className="border border-[#0071e3] text-[#0071e3] px-6 py-2 rounded-full text-sm">Blije</button>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full z-0">
            <img src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full h-full object-cover opacity-80" alt="TitanBook" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="relative h-[80vh] md:h-[90vh] bg-[#f5f5f7] rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center">
          <div className="z-10 pt-16 px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 italic">TITAN Watch</h2>
            <p className="text-xl md:text-2xl text-zinc-500 mb-6">Shëndeti juaj, në çdo sekondë.</p>
            <div className="flex gap-3 justify-center">
              <button className="bg-[#0071e3] text-white px-6 py-2 rounded-full text-sm">Learn more</button>
              <button className="border border-[#0071e3] text-[#0071e3] px-6 py-2 rounded-full text-sm">Buy</button>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full z-0 mt-20">
            <img src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full h-full object-contain scale-110 translate-y-20" alt="Watch" />
          </div>
        </div>
      </section>

      {/* 5. SEKSIONI I RI: TITAN STUDIO (SHTESE E RE) */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-black rounded-[3rem] h-[500px] relative overflow-hidden group flex items-center justify-center text-center">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Studio" />
          <div className="relative z-10 text-white p-8">
            <PlayCircle size={64} className="mx-auto mb-6 text-white/80 cursor-pointer hover:text-white transition-colors" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Studioja juaj, kudo.</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">Krijoni, editoni dhe performoni me fuqinë e Titan. Nuk ka më limite për kreativitetin tuaj.</p>
          </div>
        </div>
      </section>

      {/* 6. KOLEKSIONI I FUNDIT */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">Zbuloni koleksionin.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {NEW_PRODUCTS.map((product) => (
              <div key={product.id} className="bg-[#f5f5f7] p-8 rounded-[2.5rem] flex flex-col items-center hover:bg-zinc-100 transition-all cursor-pointer">
                <img src={product.img} alt={product.name} className="w-full h-40 object-contain mb-6" />
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-blue-600 font-bold mb-6">{product.price}</p>
                <button className="bg-black text-white w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider">Shto në shportë</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEKSIONI I RI: FAQ (SHTESE E RE) */}
      <section className="py-24 bg-white px-6 border-t border-zinc-100">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pyetjet e shpeshta.</h2>
          {[
            { q: "Kur arrijnë porositë?", a: "Për Tiranën dërgesa bëhet brenda 24 orëve. Për qytetet e tjera, 24-48 orë." },
            { q: "Si funksionon pagesa me këste?", a: "Mund të paguani me këste 0% interes duke përdorur kartat e bankave partnere deri në 24 muaj." },
            { q: "A janë produktet origjinale?", a: "Çdo produkt në TITAN vjen me certifikatë origjinaliteti dhe garanci zyrtare." }
          ].map((item, i) => (
            <div key={i} className="border-b border-zinc-200 py-6">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left text-lg font-medium">
                {item.q} <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pt-4 text-zinc-500 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SHËRBIMET NË FUND */}
      <section className="py-24 bg-[#f5f5f7] px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <Truck size={40} className="mb-4 text-[#0071e3]" />
            <h3 className="text-xl font-bold mb-2">Transport Falas</h3>
            <p className="text-[#86868b] text-sm italic">Mbi 100€ në të gjithë Shqipërinë.</p>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard size={40} className="mb-4 text-[#0071e3]" />
            <h3 className="text-xl font-bold mb-2">Pagesë me Këste</h3>
            <p className="text-[#86868b] text-sm italic">Deri në 24 muaj me 0% interes.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck size={40} className="mb-4 text-[#0071e3]" />
            <h3 className="text-xl font-bold mb-2">Garanci 2-Vjeçare</h3>
            <p className="text-[#86868b] text-sm italic">Mbështetje teknike e certifikuar.</p>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#f5f5f7] py-16 px-6 border-t border-[#d2d2d7]">
        <div className="max-w-[1024px] mx-auto text-[12px] text-zinc-400 flex flex-col md:flex-row justify-between">
          <p>© 2026 Titan Electronics Albania. Të gjitha të drejtat e rezervuara.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>
      </footer>
    </main>
  );
}