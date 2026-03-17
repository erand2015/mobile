'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const featuredPhones = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    price: 149990,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
    badge: "NEW 2026",
    specs: ["A19 Pro Chip", "48MP Fusion", "120Hz Always-On", "AI Pro"]
  },
  {
    id: 2,
    name: "Galaxy S26 Ultra",
    price: 129990,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
    badge: "BEST CAMERA",
    specs: ["200MP Main", "Snapdragon 8 Elite", "S Pen", "5000mAh"]
  },
  {
    id: 3,
    name: "Xiaomi 15 Ultra",
    price: 99990,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    badge: "VALUE KING",
    specs: ["Leica 1-inch Main", "120W Charging", "144Hz AMOLED"]
  },
  {
    id: 4,
    name: "Pixel 10 Pro",
    price: 109990,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
    badge: "AI MASTER",
    specs: ["Tensor G5", "Google AI", "Best Photos"]
  },
];

export default function FeaturedGrid() {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <section id="phones" className="py-24 bg-tech-darker">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-display font-black text-center mb-4 text-primary animate-gradient-flow">
          Celularët më të mirë 2026
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">Modelet flagship me specifikimet më të larta</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPhones.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, boxShadow: "0 0 35px rgba(0,240,255,0.3)" }}
              className="group bg-tech-gray rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-[4/3] bg-tech-darker">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 animate-float"
                />
                {phone.badge && (
                  <span className="absolute top-4 left-4 bg-danger/80 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse-glow">
                    {phone.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{phone.name}</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {phone.specs.map((spec, idx) => (
                    <span key={idx} className="text-xs bg-tech-darker px-3 py-1 rounded-full text-primary border border-primary/30">
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-4xl font-black mt-4 text-primary">{phone.price.toLocaleString()} Lekë</p>
               
                <motion.button
                  onClick={() => addToCart(phone)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-primary to-accent text-tech-dark py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition"
                >
                  <ShoppingCart size={22} /> Shto në Shportë
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}