"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ShoppingCart, ShieldCheck, Truck, RotateCcw, ChevronRight } from "lucide-react";
import { useCart } from "@/store/useCart";
import { ProductShowcase } from "@/components/shop/product-showcase"; // Importi i ri
import Link from "next/link";

// Të dhënat e detajuara
const PRODUCT_DETAILS = {
  "titan-watch-ultra": {
    name: "Titan Watch Ultra",
    price: 799,
    category: "Wearables",
    description: "Ora më e fuqishme dhe inteligjente e krijuar ndonjëherë. Me një trup prej Titaniumi të shkallës hapësinore dhe bateri që zgjat 72 orë.",
    specs: ["Ekrani: 2000 nits Retina", "Materiali: Grade 5 Titanium", "Uji: 100m Waterproof", "Sistemi: TitanOS 2.0"],
    images: [
      "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=1000",
      "https://images.unsplash.com/photo-1508685096489-7aac291ba597?q=80&w=1000"
    ]
  },
  // Mund të shtosh produkte të tjera këtu si psh: "core-sound-pro", "titan-core-phone" etj.
};

export default function ProductPage() {
  const { id } = useParams();
  const { addItem, openCart } = useCart();
  
  // Marrja e të dhënave bazuar në ID ose default te watch ultra
  const product = PRODUCT_DETAILS[id as keyof typeof PRODUCT_DETAILS] || PRODUCT_DETAILS["titan-watch-ultra"];
  
  const [activeImg, setActiveImg] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-12">
          <Link href="/" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-[#CCFF00]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* PJESA E MAJTË: GALERIA */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[40px] overflow-hidden bg-zinc-900 border border-white/5"
            >
              <img src={activeImg} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImg === img ? 'border-[#CCFF00]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* PJESA E DJATHTË: INFO */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <span className="text-[#CCFF00] text-xs font-black uppercase tracking-[0.3em]">{product.category}</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-zinc-400">${product.price}</p>
              <p className="text-zinc-500 max-w-md leading-relaxed uppercase text-[10px] md:text-xs font-bold tracking-wider opacity-80">
                {product.description}
              </p>
            </motion.div>

            {/* Specifikat e shpejta */}
            <div className="grid grid-cols-2 gap-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{spec}</p>
                </div>
              ))}
            </div>

            {/* BUTONI SHTO NË SHPORTË */}
            <div className="pt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  addItem({ 
                    id: id as string, 
                    name: product.name, 
                    price: product.price.toString(), 
                    quantity: 1, 
                    image: product.images[0] 
                  });
                  openCart();
                }}
                className="w-full md:w-auto px-12 py-6 bg-[#CCFF00] text-black font-black uppercase italic tracking-widest rounded-2xl flex items-center justify-center gap-4 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all"
              >
                <ShoppingCart size={20} strokeWidth={3} />
                Add to Cart
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5">
              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck size={20} className="text-zinc-500" />
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck size={20} className="text-zinc-500" />
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <RotateCcw size={20} className="text-zinc-500" />
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">30 Day Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SEKSIONI I RI: RELATED PRODUCTS --- */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
                Mund t'ju <span className="text-[#CCFF00]">pëlqejnë</span> edhe
              </h2>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                Zbuloni pajisjet e tjera të ekosistemit Titan Core.
              </p>
            </div>
            
            <Link 
              href="/#koleksioni" 
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-[#CCFF00] transition-colors"
            >
              Shiko të gjitha 
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Shfaqim 3 produkte (Showcase i plotë) */}
          <ProductShowcase />
        </div>

      </div>
    </div>
  );
}