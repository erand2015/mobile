"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Plus, Minus, Star, Truck, ShieldCheck } from "lucide-react";

// RREGULLIMI 1: Importi i useCart që shkaktonte gabimin në Build
import { useCart } from "@/store/useCart";

const PRODUCT_DATA = {
  id: "titan-watch-ultra",
  name: "Titan Watch Ultra",
  price: 799,
  description: "E ndërtuar për kushtet më ekstreme. Me një strukturë titani të shkallës hapësinore.",
  variants: [
    { name: "Obsidian Black", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000" },
    { name: "Titanium Gray", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000" },
    { name: "Lunar White", image: "https://images.unsplash.com/photo-1508685096489-7aac2968b9a6?q=80&w=1000" }
  ],
  specs: ["60h Bateri", "100m Rezistencë", "Ekg Sensor"]
};

export const ProductDetails = () => {
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT_DATA.variants[0]);
  const [quantity, setQuantity] = useState(1);
  
  // RREGULLIMI 2: Thirrja e hook-ut useCart
  const { addItem, openCart } = useCart();

  const handleVariantChange = (variant: typeof PRODUCT_DATA.variants[0]) => {
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    addItem({
      id: PRODUCT_DATA.id,
      name: `${PRODUCT_DATA.name} - ${selectedVariant.name}`,
      price: PRODUCT_DATA.price,
      image: selectedVariant.image,
      quantity: quantity
    });
    openCart();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-6 py-12">
      {/* LEFT: Image Area */}
      <div className="relative aspect-square overflow-hidden rounded-[40px] bg-zinc-900 border border-white/5 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedVariant.image}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            src={selectedVariant.image}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-zoom-in"
          />
        </AnimatePresence>
      </div>

      {/* RIGHT: Info Area */}
      <div className="flex flex-col space-y-8 pt-4 text-white">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            {PRODUCT_DATA.name}
          </h1>
          <div className="flex items-center gap-4">
             <span className="text-3xl font-black text-[#CCFF00]">${PRODUCT_DATA.price}</span>
             <div className="flex items-center gap-1 text-[#CCFF00]">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold text-white">5.0 (Titan Rank)</span>
             </div>
          </div>
        </div>

        <p className="text-zinc-400 leading-relaxed font-medium">
          {PRODUCT_DATA.description}
        </p>

        {/* Variantet e Ngjyrave */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Ngjyra: <span className="text-white">{selectedVariant.name}</span>
          </p>
          
          <div className="flex flex-wrap gap-3">
            {PRODUCT_DATA.variants.map((v) => (
              <button
                key={v.name}
                onClick={() => handleVariantChange(v)}
                className={`group relative h-12 w-12 rounded-full border-2 p-1 transition-all ${
                  selectedVariant.name === v.name ? "border-[#CCFF00]" : "border-transparent"
                }`}
              >
                <div className={`h-full w-full rounded-full border border-white/10 ${
                  v.name === "Obsidian Black" ? "bg-zinc-900" : 
                  v.name === "Titanium Gray" ? "bg-zinc-500" : "bg-zinc-100"
                }`} />
                
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase whitespace-nowrap">
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col md:flex-row gap-4 pt-6">
          <div className="flex items-center bg-zinc-900 rounded-2xl border border-white/5 p-2">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 hover:text-[#CCFF00] transition"
            >
              <Minus size={20} />
            </button>
            <span className="w-12 text-center font-black text-xl">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 hover:text-[#CCFF00] transition"
            >
              <Plus size={20} />
            </button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-[#CCFF00] text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:scale-[1.02] transition shadow-[0_0_30px_rgba(204,255,0,0.2)] flex items-center justify-center gap-3"
          >
            Shto në Shportë <ShoppingBag size={18} />
          </button>
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex items-center gap-3 text-zinc-500 border border-white/5 p-4 rounded-2xl">
            <Truck size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Transport Express</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-500 border border-white/5 p-4 rounded-2xl">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">2 Vite Garanci</span>
          </div>
        </div>
      </div>
    </div>
  );
};