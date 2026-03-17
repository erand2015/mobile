"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/useCart";

interface StickyBarProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export const StickyProductBar = ({ product }: StickyBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }} // Ne mobile vjen nga poshte per accessibility me te mire
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 z-[950] bg-black/90 backdrop-blur-2xl border-t md:border-t-0 md:border-b border-white/10 py-4 px-6 pb-[safe-area-inset-bottom] md:pb-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Produkti Info */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-tight text-white line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-[10px] text-[#CCFF00] font-black">${product.price}</p>
              </div>
            </div>

            {/* Aksioni i Shpejtë */}
            <button
              onClick={() => {
                addItem({ ...product, price: product.price.toString(), quantity: 1 });
                openCart();
              }}
              className="flex-shrink-0 bg-[#CCFF00] text-black px-5 md:px-8 py-3.5 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] hover:scale-105 active:scale-95 transition shadow-[0_10px_20px_rgba(204,255,0,0.2)]"
            >
              Blej <span className="hidden sm:inline">Tani</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};