"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, ArrowUpRight } from "lucide-react";
import { useCart } from "@/store/useCart";

// LISTA ME 6 PRODUKTE PREMIUM
const PRODUCTS = [
  {
    id: "titan-watch-ultra",
    name: "Titan Watch Ultra",
    price: 799,
    image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=1000",
    category: "Wearables"
  },
  {
    id: "core-sound-pro",
    name: "Core Sound Pro",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    category: "Audio"
  },
  {
    id: "titan-core-phone",
    name: "Titan Core Phone",
    price: 1199,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000",
    category: "Phones"
  },
  {
    id: "nebula-laptop-x",
    name: "Nebula Laptop X",
    price: 1899,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000",
    category: "Computers"
  },
  {
    id: "apex-gaming-mouse",
    name: "Apex Gaming Mouse",
    price: 129,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000",
    category: "Accessories"
  },
  {
    id: "vision-vr-headset",
    name: "Vision VR Headset",
    price: 549,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000",
    category: "Gaming"
  }
];

export const ProductShowcase = () => {
  const { addItem, openCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {PRODUCTS.map((product, index) => (
        <motion.div 
          key={product.id} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* PJESA E IMAZHIT DHE LINK-UT */}
          <Link href={`/product/${product.id}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-zinc-900 border border-white/5 cursor-none">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay me dritë në hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badge i kategorisë */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-[#CCFF00]">
                  {product.category}
                </span>
              </div>

              {/* Ikona "View" */}
              <div className="absolute top-6 right-6 z-10 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                <div className="bg-[#CCFF00] text-black p-3 rounded-full shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
          </Link>

          {/* INFO DHE BUTONI I SHPORTËS */}
          <div className="mt-8 flex items-end justify-between px-2">
            <div className="space-y-1">
              <h3 className="text-lg font-black uppercase tracking-tighter leading-none">{product.name}</h3>
              <p className="text-[#CCFF00] text-sm font-bold tracking-widest">${product.price}</p>
            </div>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                addItem({ ...product, price: product.price.toString(), quantity: 1 });
                openCart();
              }}
              className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all duration-300 shadow-xl"
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};