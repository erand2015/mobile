'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/store/useCart'; 
import { useState } from 'react';
import { CartDrawer } from '@/components/shop/cart-drawer';

// RREGULLIMI: Importohet nga i njëjti folder (shared)
import { SearchModal } from './search-modal';

export default function Navbar() {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Kontrolli i gjendjes së kërkimit
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#CCFF00]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-3xl font-black tracking-tighter text-[#CCFF00] drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">
            CELLUX
          </Link>

          {/* Menuja Kryesore */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em]">
            <Link href="#phones" className="hover:text-[#CCFF00] transition-colors text-white/80 hover:text-white">
              Celularë
            </Link>
            <Link href="#accessories" className="hover:text-[#CCFF00] transition-colors text-white/80 hover:text-white">
              Aksesorë
            </Link>
            <Link href="#deals" className="hover:text-[#CCFF00] transition-colors text-white/80 hover:text-white">
              Oferta
            </Link>
          </div>

          {/* Ikonat e Aksionit */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-400 hover:text-[#CCFF00] transition-transform hover:scale-110 active:scale-90"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative flex items-center gap-2 hover:text-[#CCFF00] transition text-zinc-400"
            >
              <ShoppingCart className="w-6 h-6" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-2 -right-2 bg-[#CCFF00] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-black shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white transition-transform active:scale-90">
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-white/5 px-6 py-8 space-y-6 overflow-hidden"
            >
              <Link href="#phones" onClick={() => setMenuOpen(false)} className="block text-2xl font-black uppercase text-white hover:text-[#CCFF00]">Celularë</Link>
              <Link href="#accessories" onClick={() => setMenuOpen(false)} className="block text-2xl font-black uppercase text-white hover:text-[#CCFF00]">Aksesorë</Link>
              <Link href="#deals" onClick={() => setMenuOpen(false)} className="block text-2xl font-black uppercase text-white hover:text-[#CCFF00]">Oferta</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal i Kërkimit */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}