"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="h-24 w-24 bg-[#CCFF00]/10 rounded-full flex items-center justify-center border border-[#CCFF00]/20">
            <CheckCircle2 size={48} className="text-[#CCFF00]" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white">Porosia u krye!</h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
            Faleminderit që zgjodhët Titan Core. <br /> Konfirmimi u dërgua në email-in tuaj.
          </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#CCFF00] transition-colors">
          Kthehu te Dyqani <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  );
}