"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Package, Home } from "lucide-react";
import { Navbar } from "@/components/shared/navbar";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8">
          
          {/* Icon Animation */}
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
              className="h-24 w-24 bg-[#CCFF00] rounded-full flex items-center justify-center text-black"
            >
              <CheckCircle2 size={48} strokeWidth={2.5} />
            </motion.div>
            
            {/* Animated Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 border-2 border-[#CCFF00] rounded-full"
              />
            ))}
          </div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-black uppercase tracking-tighter"
            >
              POROSIA U <span className="text-[#CCFF00]">PRANUA</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed"
            >
              Faleminderit që zgjodhët TitanCore. Konfirmimi i porosisë është dërguar në email-in tuaj.
            </motion.p>
          </div>

          {/* Info Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-zinc-900/50 border border-white/5 rounded-[32px] p-8 space-y-6 text-left"
          >
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-[10px] font-black text-zinc-500 uppercase">Nr. i Porosisë</span>
              <span className="text-[10px] font-black text-white">#TC-88291</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-[#CCFF00]">
                <Package size={20} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-white">Dërgesa e Shpejtë</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">Pritet të vijë brenda 48 orëve.</p>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <a 
              href="/"
              className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-[#CCFF00] transition-colors"
            >
              Kthehu në Dyqan <Home size={14} />
            </a>
            <button className="text-zinc-500 hover:text-white text-[9px] font-black uppercase tracking-[0.2em] transition-colors">
              Shkarko Faturën (PDF)
            </button>
          </div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}