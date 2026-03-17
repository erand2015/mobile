"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Twitter, Github, ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_LINKS = [
  { name: "Koleksionet", href: "#" },
  { name: "Pajisjet Ultra", href: "#" },
  { name: "Gaming Zone", href: "#" },
  { name: "Rreth nesh", href: "#" },
  { name: "Support", href: "#" },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[2000] bg-black flex flex-col"
        >
          {/* Header brenda menusë */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <span className="text-xl font-black italic tracking-tighter">
              TITAN<span className="text-[#CCFF00]">CORE</span>
            </span>
            <button 
              onClick={onClose}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigimi */}
          <nav className="flex-1 flex flex-col justify-center p-10 space-y-8">
            {MENU_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                onClick={onClose}
                className="group flex items-end justify-between border-b border-white/5 pb-4"
              >
                <span className="text-4xl font-black uppercase tracking-tighter group-hover:text-[#CCFF00] transition-colors italic">
                  {link.name}
                </span>
                <ArrowUpRight className="text-zinc-600 group-hover:text-[#CCFF00] group-hover:-translate-y-2 transition-all" size={24} />
              </motion.a>
            ))}
          </nav>

          {/* Socials Footer */}
          <div className="p-10 bg-zinc-950/50 flex items-center justify-between">
            <div className="flex gap-6">
              <Instagram className="text-zinc-500 hover:text-white transition-colors cursor-pointer" size={20} />
              <Twitter className="text-zinc-500 hover:text-white transition-colors cursor-pointer" size={20} />
              <Github className="text-zinc-500 hover:text-white transition-colors cursor-pointer" size={20} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
              v2.0 / 2026
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};