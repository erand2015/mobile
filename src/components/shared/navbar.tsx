"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";
// Përdorim alias-in @/ për siguri dhe sigurohemi që emri i skedarit është i saktë
import { CartDrawer } from "@/components/shop/cart-drawer";
import { SearchModal } from "@/components/shared/search-modal";
import { MobileMenu } from "@/components/shared/mobile-menu";
import { useCart } from "@/store/useCart";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  // Kontrolli lokal për hapjen e Drawer-ave
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Marrim të dhënat nga Zustand store
  const items = useCart((state) => state.items);
  const controls = useAnimation();

  // Animacioni i koshit kur shtohet një produkt
  useEffect(() => {
    if (items.length > 0) {
      controls.start({
        scale: [1, 1.3, 1],
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.4 }
      });
    }
  }, [items.length, controls]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          
          {/* LOGO */}
          <Link href="/" className="cursor-pointer group">
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
              TITAN<span className="text-[#CCFF00]">CORE</span>
            </h1>
          </Link>

          <div className="flex items-center gap-6">
            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mr-4">
              <Link href="/#koleksioni" className="hover:text-white transition">Koleksioni</Link>
              <Link href="/contact" className="hover:text-[#CCFF00] transition">Kontakt</Link>
            </div>

            {/* SEARCH */}
            <button onClick={() => setIsSearchOpen(true)} className="text-zinc-400 hover:text-[#CCFF00] transition-all">
              <Search size={18} />
            </button>
            
            {/* CART */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative flex items-center text-zinc-400 hover:text-[#CCFF00] transition-all"
            >
              <motion.div animate={controls}>
                <ShoppingCart size={20} strokeWidth={2.5} />
              </motion.div>
              {items.length > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={items.length} 
                  className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#CCFF00] text-[9px] font-black text-black"
                >
                  {items.length}
                </motion.span>
              )}
            </button>

            {/* MOBILE MENU TRIGGER */}
            <button onClick={() => setIsMenuOpen(true)} className="text-white md:hidden p-2 hover:bg-white/5 rounded-xl transition-all">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Komponentët modalë */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};