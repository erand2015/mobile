"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/store/useCart";
import { Lock, Loader2, CreditCard } from "lucide-react"; // Hoqa ShieldCheck se s'po përdoret këtu
import { useRouter } from "next/navigation";

export const CheckoutForm = () => {
  const { items } = useCart(); // Hoqa clearCart këtu sepse do e bëjmë te hapi i fundit i pagesës
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const cartTotal = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handlePayment = async () => {
    if (items.length === 0) return alert("Shporta është bosh!");
    
    setIsProcessing(true);

    // Simulojmë verifikimin e detajeve të dërgesës para se të kalojmë te pagesa
    setTimeout(() => {
      setIsProcessing(false);
      
      // KJO ËSHTË LIDHJA:
      // E dërgojmë përdoruesin te faqja e re e pagesës së detajuar
      router.push("/checkout/payment"); 
      
    }, 1500); // E bëra pak më të shpejtë (1.5s) për UX më të mirë
  };

  const inputStyles = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-[#CCFF00] focus:outline-none transition-colors text-white uppercase font-bold";

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Kolona e Majtë: Detajet e Dërgesës */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">
              Detajet e <span className="text-[#CCFF00]">Dërgesës</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Emri" className={inputStyles} required />
              <input type="text" placeholder="Mbiemri" className={inputStyles} required />
            </div>
            <input type="email" placeholder="Email Adresa" className={inputStyles} required />
            <input type="text" placeholder="Adresa e plotë" className={inputStyles} required />
          </div>

          <div className="space-y-6 opacity-50 pointer-events-none">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-zinc-500">Pagesa</h2>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4 text-zinc-500">
                <CreditCard />
                <span className="font-black uppercase italic text-xs tracking-widest">Zgjidh hapi tjetër</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolona e Djathtë: Summary & Button */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 bg-zinc-950 border border-white/5 rounded-[40px] p-8 space-y-8 shadow-2xl">
            <h3 className="text-xl font-black uppercase italic tracking-tighter">Përmbledhja</h3>
            
            <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-[10px] font-bold uppercase">
                  <span className="text-zinc-400">{item.name} x{item.quantity}</span>
                  <span>${(parseFloat(item.price) * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
              <span className="text-xs font-black uppercase text-zinc-500 tracking-widest">Totali Final</span>
              <span className="text-4xl font-black italic text-[#CCFF00]">${cartTotal.toLocaleString()}</span>
            </div>

            <motion.button
              onClick={handlePayment}
              disabled={isProcessing || items.length === 0}
              whileHover={!isProcessing ? { scale: 1.02 } : {}}
              whileTap={!isProcessing ? { scale: 0.98 } : {}}
              className={`w-full py-6 rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 transition-all ${
                isProcessing ? "bg-zinc-800 text-zinc-500" : "bg-[#CCFF00] text-black shadow-[0_20px_40px_rgba(204,255,0,0.2)]"
              }`}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Duke u Verifikuar...
                </>
              ) : (
                <>
                  <Lock size={18} strokeWidth={3} />
                  VAZHDO TE PAGESA
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};