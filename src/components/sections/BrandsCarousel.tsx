'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Xiaomi_logo.svg/512px-Xiaomi_logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/OnePlus_logo.svg/512px-OnePlus_logo.svg.png" },
];

export default function BrandsCarousel() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 mb-12 text-sm tracking-[3px]">MARKAT MË TË MËDHA NË BOTË</p>
        
        <div className="flex overflow-hidden">
          {[...brands, ...brands].map((brand, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, -100 * brands.length] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex-shrink-0 px-12"
            >
              <Image src={brand.logo} alt={brand.name} width={140} height={60} className="grayscale hover:grayscale-0 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}