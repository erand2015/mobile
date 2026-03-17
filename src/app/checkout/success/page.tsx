"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Package, Home } from "lucide-react";

// NDRYSHOJE NGA: import { Navbar } from "@/components/shared/navbar";
// NE KETE:
import Navbar from "@/components/shared/navbar";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900/50 border border-white/5 p-12 rounded-[40px] max-w-lg w-full text-center relative overflow-hidden"
        >
          {/* Efekti Glow prapa iconës */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#CCFF00]/20 blur-[60px] -z-10" />
          
          <div className="flex justify-center mb-6">
            <div className="bg-[#CCFF00] p-4 rounded-full shadow-[0_0_30px_rgba(204,255,0,0.4)]">
              <CheckCircle2 size={48} className="text-black" />
            </div>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">
            Porosia u krye<span className="text-[#CCFF00]">!</span>
          </h1>
          <p className="text-zinc-400 mb-10 leading-relaxed font-medium">
            Faleminderit që zgjodhët CELLUX. Konfirmimi i porosisë suaj është dërguar në email-in tuaj.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Link href="/" className="group flex items-center justify-center gap-2 bg-[#CCFF00] text-black py-4 rounded-2xl font-black uppercase tracking-tighter transition-transform active:scale-95">
              Kthehu te Kreu
              <Home size={18} />
            </Link>
            
            <Link href="/account/orders" className="flex items-center justify-center gap-2 bg-white/5 text-white py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-white/10 transition">
              Shiko Porositë
              <Package size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}