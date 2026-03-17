"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const PRODUCTS = [
  { 
    id: "titan-watch-ultra", 
    name: "Titan Watch Ultra", 
    price: 799, 
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200" 
  },
  { 
    id: "core-sound-pro", 
    name: "Core Sound Pro", 
    price: 299, 
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200"
  },
  { 
    id: "titan-core-phone", 
    name: "Titan Core Phone", 
    price: 1199, 
    category: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200"
  },
  { 
    id: "nebula-laptop-x", 
    name: "Nebula Laptop X", 
    price: 1899, 
    category: "Computers",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200"
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTIONS = ["Titan", "Core", "Watch", "Phone"];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const filteredProducts = query.length > 1 
    ? PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = 'hidden';
      // Detyrojmë kursorin të rishfaqet globalisht
      document.documentElement.style.cursor = 'auto';
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = 'unset';
      document.documentElement.style.cursor = 'default';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          // KY ËSHTË NDRYSHIMI KRYESOR: Lidhet me globals.css
          data-search-modal="true"
          className="fixed inset-0 z-[1000000] flex items-start justify-center pt-24 px-6"
        >
          {/* Sfondi (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            style={{ cursor: 'pointer' }}
          />

          {/* Dritarja e Kërkimit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-zinc-900 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] z-[1000001]"
          >
            {/* Input Area */}
            <div className="relative p-6 border-b border-white/5 bg-black/20">
              <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-[#CCFF00]" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Kërko në TitanCore..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-16 pr-20 text-xs font-bold uppercase tracking-[0.2em] text-white focus:outline-none focus:border-[#CCFF00]/50 transition-all placeholder:text-zinc-600"
              />
              <button 
                onClick={onClose} 
                className="absolute right-10 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors p-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[450px] overflow-y-auto p-6 space-y-4 no-scrollbar">
              {query.length <= 1 ? (
                <div className="space-y-6 py-4">
                  <div className="flex items-center gap-2 text-[#CCFF00]">
                    <Zap size={14} fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Trendet e fundit</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map(s => (
                      <button 
                        key={s} 
                        onClick={() => setQuery(s)}
                        className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#CCFF00] hover:text-black transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-4 ml-2">Rezultatet e gjetura ({filteredProducts.length})</p>
                  {filteredProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#CCFF00]/30 hover:bg-white/[0.05] transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-xl overflow-hidden border border-white/10 bg-black">
                           <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-black uppercase text-white tracking-tight">{product.name}</span>
                          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{product.category}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pr-2">
                        <span className="text-[11px] font-black text-[#CCFF00]">${product.price}</span>
                        <ArrowRight size={14} className="text-zinc-700 group-hover:text-[#CCFF00] group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-zinc-700 mb-2">
                    <Search size={24} />
                  </div>
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Nuk u gjet asgjë për <span className="text-white italic">"{query}"</span></p>
                </div>
              )}
            </div>

            <div className="p-4 bg-black/40 border-t border-white/5 flex justify-center">
              <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#CCFF00] animate-pulse" />
                TitanCore Neural Search Engine v2.0
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};