"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus, TicketPercent, Truck, ArrowRight } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useRouter } from "next/navigation"; // <--- KJO U SHTUA

export const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, discount, applyDiscount } = useCart();
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // <--- KJO U SHTUA

  // Konfigurimi për Transport Falas
  const FREE_SHIPPING_THRESHOLD = 3000;
  const subtotal = items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const handleCoupon = () => {
    const success = applyDiscount(coupon);
    if (!success) {
      setError("Kodi i pavlefshëm");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
      setCoupon("");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[1001] h-full w-full max-w-md bg-[#050505] border-l border-white/5 p-8 flex flex-col shadow-2xl"
          >
            {/* Header, Progress Bar dhe Lista e produkteve (KODI YT I PAPREKUR) */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingBag className="text-[#CCFF00]" size={24} />
                  {items.length > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#CCFF00] text-[9px] font-black text-black">
                      {items.length}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-black uppercase tracking-tighter text-white">Shporta Jote</h2>
              </div>
              <button onClick={closeCart} className="p-2 hover:bg-white/5 rounded-full transition text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* SHIPPING PROGRESS */}
            {items.length > 0 && (
              <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                    <Truck size={12} className={progress >= 100 ? "text-[#CCFF00]" : "text-zinc-500"} />
                    {progress >= 100 ? "Ti fitove transport falas! 🚀" : `Edhe $${remaining.toLocaleString()} për Transport Falas`}
                  </p>
                  <span className="text-[10px] font-black text-[#CCFF00]">{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.5)]"
                  />
                </div>
              </div>
            )}

            {/* Product List */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
              {items.map((item) => (
                <motion.div layout key={item.id} className="flex gap-4 group bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-black">
                    <img src={item.image} className="h-full w-full object-cover" alt={item.name} />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-white leading-tight">{item.name}</h4>
                      <button onClick={() => removeItem(item.id)} className="text-zinc-600 hover:text-red-500 transition">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[#CCFF00] font-black text-sm">${item.price}</p>
                      <div className="flex items-center border border-white/10 rounded-full px-2 py-1 bg-black">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#CCFF00]" disabled={item.quantity <= 1}><Minus size={12} /></button>
                        <span className="w-6 text-center text-[10px] font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#CCFF00]"><Plus size={12} /></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                {/* Promo Code dhe Totali mbeten njesoj */}
                <div className="space-y-2 py-2">
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Totali</span>
                    <span className="text-3xl font-black text-[#CCFF00]">${total.toLocaleString()}</span>
                  </div>
                </div>

                {/* BUTONI I LIDHUR */}
                <button 
                  onClick={() => {
                    closeCart(); // Mbylle koshin
                    router.push("/checkout"); // Shko te faqja e checkout
                  }}
                  className="w-full bg-[#CCFF00] text-black py-5 rounded-2xl font-black uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition shadow-[0_20px_40px_-10px_rgba(204,255,0,0.3)]"
                >
                  Paguaj Tani
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};