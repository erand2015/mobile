"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";

const CITIES = ["Tirana", "Durrësi", "Prishtina", "Shkupi", "Vlora", "Shkodra"];
const PRODUCTS = ["Titan Watch Ultra", "Core Audio V2", "Titan Book Pro M3"];

export const SalesNotifier = () => {
  const [data, setData] = useState<{ city: string; product: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      // Zgjidh të dhëna random
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      
      setData({ city, product });
      setIsVisible(true);

      // Fshihet pas 5 sekondave
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Nis njoftimin e parë pas 10 sekondash, pastaj çdo 20-30 sekonda
    const initialTimeout = setTimeout(showNotification, 10000);
    const interval = setInterval(showNotification, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && data && (
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[1500] hidden md:flex items-center gap-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl max-w-xs"
        >
          <div className="relative">
            <div className="h-12 w-12 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
              <ShoppingBag size={20} />
            </div>
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-[#CCFF00] rounded-full flex items-center justify-center border-2 border-zinc-900">
              <Check size={8} className="text-black font-bold" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none mb-1">
              Blerje e re
            </p>
            <p className="text-xs text-white font-medium leading-tight">
              Dikush nga <span className="text-[#CCFF00] font-bold">{data.city}</span> sapo bleu <span className="italic">{data.product}</span>
            </p>
            <p className="text-[9px] text-zinc-500 mt-1 uppercase font-black">Sapo ndodhi 🚀</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};