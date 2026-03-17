'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/store/useCart'; // Sigurohu që emri i store-it është i saktë
import { useState } from 'react';
import { CartDrawer } from '../cart/CartDrawer'; // Importo CartDrawer-in

export default function Navbar() {
  // Marrim funksionet nga store-i i përbashkët
  const { items, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#CCFF00]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black tracking-tighter text-[#CCFF00]">
            CELLUX
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
            <Link href="#phones" className="hover:text-[#CCFF00] transition">Celularë</Link>
            <Link href="#accessories" className="hover:text-[#CCFF00] transition">Aksesorë</Link>
            <Link href="#deals" className="hover:text-[#CCFF00] transition">Oferta</Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <div className="relative group">
              <Search className="w-6 h-6 cursor-pointer hover:text-[#CCFF00] transition text-zinc-400" />
            </div>

            {/* Cart Icon - Tani hap koshin e Zustand */}
            <button 
              onClick={openCart} 
              className="relative flex items-center gap-2 hover:text-[#CCFF00] transition text-zinc-400"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#CCFF00] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-black"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black border-b border-white/5 p-6 flex flex-col gap-4 text-center font-bold uppercase"
          >
            <Link href="#phones" onClick={() => setMenuOpen(false)}>Celularë</Link>
            <Link href="#accessories" onClick={() => setMenuOpen(false)}>Aksesorë</Link>
            <Link href="#deals" onClick={() => setMenuOpen(false)}>Oferta</Link>
          </motion.div>
        )}
      </nav>

      {/* ZGJIDHJA E GABIMIT: Thirrja e CartDrawer pa props pasi i menaxhon vetë */}
      <CartDrawer />
    </>
  );
}