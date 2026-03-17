'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const accessories = [
  {
    name: "AirPods Pro 3",
    price: 24990,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
  },
  {
    name: "MagSafe Charger 15W",
    price: 7990,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
  },
  {
    name: "Apple Watch Ultra 2",
    price: 44990,
    image: "https://images.unsplash.com/photo-1505740106531-4243f3831145?w=800&q=80",
  },
  {
    name: "TWS Kufje ANC Xiaomi",
    price: 12990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
];

export default function TopAccessories() {
  return (
    <section className="py-24 bg-gradient-to-b from-tech-darker to-tech-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-display font-black text-center mb-4 text-primary animate-gradient-flow">
          Aksesorë Origjinalë & Gadgets
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">
          Kompleto telefonin tënd me pajisje premium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {accessories.map((item, i) => (
            <motion.div
              key={i}
              className="group perspective-1000"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[380px] w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front side */}
                <div className="absolute inset-0 backface-hidden bg-tech-gray rounded-3xl overflow-hidden border border-primary/20 shadow-card-hover flex flex-col">
                  <div className="relative flex-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-12 animate-float"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-2xl font-black text-primary">
                      {item.price.toLocaleString()} Lekë
                    </p>
                  </div>
                </div>

                {/* Back side – mund të shtosh info shtesë këtu */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/40 shadow-tech-glow flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">{item.name}</h3>
                    <p className="text-lg text-white/90">
                      Aksesor origjinal • Garanci 12 muaj • Dorëzim falas
                    </p>
                    <button className="mt-6 w-full bg-primary text-tech-dark py-3 rounded-xl font-bold hover:brightness-110 transition">
                      Shiko Detaje
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}