"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RELATED = [
  {
    id: "p2",
    name: "Core Audio V2",
    price: "349",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    category: "Audio"
  },
  {
    id: "p3",
    name: "Titan Book Pro M3",
    price: "2499",
    image: "https://images.unsplash.com/photo-1517336714460-45788a1f0311?q=80&w=1000",
    category: "Laptops"
  },
  {
    id: "p4",
    name: "Vision Glass X",
    price: "1299",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000",
    category: "Optics"
  }
];

export const RelatedProducts = () => {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
            MUND T'JU <span className="text-[#CCFF00]">PELQEJE</span> EDHE...
          </h2>
          <div className="h-1 w-20 bg-[#CCFF00]" />
        </div>
        
        <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition">
          Shiko të gjitha <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RELATED.map((item, index) => (
          <motion.a
            key={item.id}
            href={`/product/${item.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-zinc-900 border border-white/5">
              <img 
                src={item.image} 
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay me hije */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#CCFF00] text-[10px] font-black uppercase tracking-widest mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#CCFF00] transition-colors">
                  {item.name}
                </h3>
                <p className="text-zinc-400 font-medium mt-1">${item.price}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};