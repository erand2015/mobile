"use client";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react"; // Ndryshuar nga ShoppingPlus në Plus
import { useCart } from "@/store/useCart";

const PRODUCTS = [
  {
    id: 1, // Ndryshuar në number që të përputhet me interface-in e useCart
    name: "Titan Watch Ultra",
    price: "799",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    color: "from-orange-500/20"
  },
  {
    id: 2,
    name: "Core Audio V2",
    price: "349",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-500/20"
  },
  {
    id: 3,
    name: "Titan Book Pro M3",
    price: "2499",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714460-45788a1f0311?q=80&w=1000&auto=format&fit=crop",
    color: "from-zinc-500/20"
  }
];

export const FeaturedProducts = () => {
  const { addItem, openCart } = useCart();

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header Seksioni */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#CCFF00] text-[10px] font-black uppercase tracking-[0.4em]"
            >
              Koleksioni i Ri 2024
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Eksploro <span className="text-zinc-800">Titan</span> Elite
            </h2>
          </div>
          <button className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-[#CCFF00] pb-1 hover:text-[#CCFF00] transition">
            Shiko të gjitha
          </button>
        </div>

        {/* Grid i Produkteve */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card-i */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-[#CCFF00]/30">
                
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${product.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Imazhi */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay i Poshtëm */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div>
                    <p className="text-[#CCFF00] text-[10px] font-black uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{product.name}</h3>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-white">${product.price}</span>
                    <button 
                      onClick={() => {
                        addItem(product);
                        openCart();
                      }}
                      className="bg-[#CCFF00] text-black p-4 rounded-2xl hover:scale-110 active:scale-90 transition shadow-lg"
                    >
                      <Plus size={20} strokeWidth={3} />
                    </button>
                  </div>
                </div>

                {/* Butoni "Details" sipër */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};