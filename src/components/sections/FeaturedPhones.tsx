'use client';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore'; // Zustand yt

const phones = [ /* array me produkte – mund t’i marrësh nga API ose Sanity */ ];

export default function FeaturedPhones() {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <section className="py-16 px-6 md:px-12 bg-muted/30">
      <h2 className="text-4xl font-bold text-center mb-12">Celularët më të Shitshëm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {phones.map((phone) => (
          <motion.div
            key={phone.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative aspect-square">
              <Image 
                src={phone.image} 
                alt={phone.name} 
                fill 
                className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" 
              />
              {phone.isNew && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  E RE
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{phone.name}</h3>
              <p className="text-2xl font-bold text-primary">{phone.price} Lekë</p>
              <button
                onClick={() => addToCart(phone)}
                className="mt-4 w-full bg-primary text-primary-foreground py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition"
              >
                <ShoppingCart size={20} /> Shto në Shportë
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}