"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-4 transition-all hover:border-blue-500/50"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-800">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="rounded-full bg-white p-3 text-black hover:scale-110 transition"><Eye size={20} /></button>
          <button className="rounded-full bg-blue-600 p-3 text-white hover:scale-110 transition"><ShoppingBag size={20} /></button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
        <p className="text-sm text-zinc-500">{product.category}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-blue-400">${product.price}</span>
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded">Stock Available</span>
        </div>
      </div>
    </motion.div>
  );
};