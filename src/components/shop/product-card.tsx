"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import React from "react";

// RREGULLIMI: Lejojmë ID-në të jetë edhe string (p.sh. "p1")
interface Product {
  id: string | number; 
  name: string;
  image: string;
  price: string | number;
  category?: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-4 transition-all hover:border-[#CCFF00]/30"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-800">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
          <button className="rounded-full bg-white p-3 text-black hover:scale-110 transition shadow-xl">
            <Eye size={20} />
          </button>
          <button className="rounded-full bg-[#CCFF00] p-3 text-black hover:scale-110 transition shadow-xl">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-white tracking-tight">{product.name}</h3>
        </div>
        <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">{product.category || 'Premium Collection'}</p>
        
        <div className="flex items-center justify-between pt-3">
          <span className="text-xl font-black text-[#CCFF00]">
            ${typeof product.price === 'number' ? product.price.toLocaleString() : product.price}
          </span>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter border border-white/10 px-2 py-1 rounded-md bg-white/5">
            Gati për dërgim
          </span>
        </div>
      </div>
    </motion.div>
  );
};