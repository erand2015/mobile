'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/store/useCart'; 
import { useState } from 'react';
import { CartDrawer } from '@/components/shop/cart-drawer';

export default function Navbar() {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#CCFF00]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black tracking-tighter text-[#CCFF00]">
            CELLUX
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
            <Link href="#phones" className="hover:text-[#CCFF00] transition text-white">Celularë</Link>
            <Link href="#accessories" className="hover:text-[#CCFF00] transition text-white">Aksesorë</Link>
            <Link href="#deals" className="hover:text-[#CCFF00] transition text-white">Oferta</Link>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-[#CCFF00] transition">
              <Search className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setIsCartOpen(true)} 
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

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}