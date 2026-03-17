"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/store/useCart";
import { CreditCard, Wallet, Globe, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");
  const { items, clearCart } = useCart();
  const router = useRouter();

  const cartTotal = items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

  const finalPayment = () => {
    // Këtu bëhet thirrja finale
    clearCart();
    router.push("/success");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-4">
      <div className="max-w-2xl mx-auto space-y-10">
        
        <button onClick={() => router.back()} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest">
          <ArrowLeft size={14} /> Kthehu te Adresa
        </button>

        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Zgjidh <span className="text-[#CCFF00]">Metodën</span>
        </h1>

        <div className="grid gap-4">
          {/* OPSIONI 1: KARTA */}
          <div 
            onClick={() => setMethod("card")}
            className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${method === "card" ? "border-[#CCFF00] bg-[#CCFF00]/5" : "border-white/5 bg-white/5"}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <CreditCard className={method === "card" ? "text-[#CCFF00]" : "text-zinc-500"} />
                <span className="font-bold uppercase italic text-sm">Kartë Bankare (Stripe)</span>
              </div>
              {method === "card" && <CheckCircle2 size={20} className="text-[#CCFF00]" />}
            </div>
          </div>

          {/* OPSIONI 2: PAYPAL */}
          <div 
            onClick={() => setMethod("paypal")}
            className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${method === "paypal" ? "border-[#0070BA] bg-[#0070BA]/5" : "border-white/5 bg-white/5"}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Globe className={method === "paypal" ? "text-[#0070BA]" : "text-zinc-500"} />
                <span className="font-bold uppercase italic text-sm">PayPal</span>
              </div>
              {method === "paypal" && <CheckCircle2 size={20} className="text-[#0070BA]" />}
            </div>
          </div>

          {/* OPSIONI 3: CRYPTO (Për Titan Core Style) */}
          <div 
            onClick={() => setMethod("crypto")}
            className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${method === "crypto" ? "border-orange-500 bg-orange-500/5" : "border-white/5 bg-white/5"}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Wallet className={method === "crypto" ? "text-orange-500" : "text-zinc-500"} />
                <span className="font-bold uppercase italic text-sm">Crypto (BTC / USDT)</span>
              </div>
              {method === "crypto" && <CheckCircle2 size={20} className="text-orange-500" />}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5">
          <div className="flex justify-between items-center mb-8">
            <span className="text-zinc-500 font-bold uppercase text-xs">Për të paguar:</span>
            <span className="text-3xl font-black italic text-[#CCFF00]">${cartTotal.toLocaleString()}</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={finalPayment}
            className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase italic tracking-[0.2em] hover:bg-[#CCFF00] transition-colors"
          >
            Konfirmo Pagesën
          </motion.button>
        </div>
      </div>
    </main>
  );
}