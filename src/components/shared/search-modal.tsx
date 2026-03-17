"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Command, ArrowRight, Zap } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTIONS = ["Titan Watch", "Core Audio", "Gaming Laptops", "New Arrivals"];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  // Mbyllja me butonin "Escape"
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-start justify-center pt-24 px-6">
          {/* Backdrop me efekt Glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Input Area */}
            <div className="relative p-6 border-b border-white/5">
              <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-[#CCFF00]" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Çfarë po kërkoni sot?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-16 pr-20 text-xs font-bold uppercase tracking-[0.2em] text-white focus:outline-none focus:border-[#CCFF00]/50 transition-all"
              />
              <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                <Command size={12} className="text-zinc-500" />
                <span className="text-[10px] text-zinc-500 font-black">ESC</span>
              </div>
            </div>

            {/* Results / Suggestions */}
            <div className="p-8 space-y-8">
              {query.length < 2 ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[#CCFF00]">
                    <Zap size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sugjerimet e Titan</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#CCFF00]/30 hover:bg-[#CCFF00]/5 transition-all group text-left"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">{s}</span>
                        <ArrowRight size={14} className="text-zinc-600 group-hover:text-[#CCFF00] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="inline-block p-4 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] animate-pulse">
                    <Search size={32} />
                  </div>
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">
                    Duke kërkuar për <span className="text-white">"{query}"</span> në databazë...
                  </p>
                </div>
              )}
            </div>

            {/* Footer i Modalit */}
            <div className="p-4 bg-black/40 border-t border-white/5 flex justify-center">
              <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
                TitanCore Neural Search v2.0
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};