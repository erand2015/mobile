"use client";
import React, { useState } from "react";
// ... importet e tjera mbeten njesoj

const PRODUCT_DATA = {
  id: "titan-watch-ultra",
  name: "Titan Watch Ultra",
  price: 799,
  description: "E ndërtuar për kushtet më ekstreme. Me një strukturë titani të shkallës hapësinore.",
  // Çdo variant tani ka imazhin e tij specifik
  variants: [
    { name: "Obsidian Black", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000" },
    { name: "Titanium Gray", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000" },
    { name: "Lunar White", image: "https://images.unsplash.com/photo-1508685096489-7aac2968b9a6?q=80&w=1000" }
  ],
  specs: ["60h Bateri", "100m Rezistencë", "Ekg Sensor"]
};

export const ProductDetails = () => {
  // Inicializojmë me variantin e parë
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT_DATA.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  // Funksioni që ndërron variantin dhe imazhin njëkohësisht
  const handleVariantChange = (variant: typeof PRODUCT_DATA.variants[0]) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* LEFT: Image Area - Tani reagon ndaj variantit */}
      <div className="relative aspect-square overflow-hidden rounded-[40px] bg-zinc-900 border border-white/5 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedVariant.image} // Key-i bën që React të ri-montojë imazhin me animacion
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
      <div className="flex flex-col space-y-8 pt-4">
        {/* ... emri dhe cmimi ... */}

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
                {/* Një rreth i vogël me ngjyrë brenda butonit */}
                <div className={`h-full w-full rounded-full border border-white/10 ${
                  v.name === "Obsidian Black" ? "bg-zinc-900" : 
                  v.name === "Titanium Gray" ? "bg-zinc-500" : "bg-zinc-100"
                }`} />
                
                {/* Tooltip që shfaqet në hover */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase whitespace-nowrap">
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ... butoni Add to Cart mbetet i njejte ... */}
      </div>
    </div>
  );
};