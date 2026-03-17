'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const accessories = [
  { name: "AirPods Pro 3", price: 24990, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80" },
  { name: "MagSafe Charger 15W", price: 7990, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80" },
  { name: "Apple Watch Ultra 2", price: 44990, image: "https://images.unsplash.com/photo-1505740106531-4243f3831145?w=800&q=80" },
  { name: "TWS Kufje ANC Xiaomi", price: 12990, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" },
];

export default function TopAccessories() {
  return (
    <section className="py-24 bg-gradient-to-b from-tech-darker to-tech-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-display font-black text-center mb-4 text-primary animate-gradient-flow">
          Aksesorë Origjinalë & Gadgets
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">Kompleto telefonin tënd me pajisje premium</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {accessories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}
              className="bg-tech-gray rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.name} fill className="object-cover p-12 animate-float" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-2xl font-black text-primary mt-2">{item.price.toLocaleString()} Lekë</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}