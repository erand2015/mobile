'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black tracking-tighter text-cyan-400">
          CELLUX
        </Link>

        <div className="hidden md:flex items-center gap-10 text-lg">
          <Link href="#phones" className="hover:text-cyan-400 transition">Celularë</Link>
          <Link href="#accessories" className="hover:text-cyan-400 transition">Aksesorë</Link>
          <Link href="#deals" className="hover:text-cyan-400 transition">Oferta</Link>
          <Link href="#" className="hover:text-cyan-400 transition">Krahasim</Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="w-6 h-6 cursor-pointer hover:text-cyan-400 transition" />
          </div>

          <Link href="#" className="relative flex items-center gap-2 hover:text-cyan-400 transition">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-cyan-500 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}