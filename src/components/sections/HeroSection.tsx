// components/sections/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-iphone16-pro.jpg" // zëvendëso me foton tënde (optimizo me next/image)
          alt="Latest Smartphone"
          fill
          className="object-cover brightness-75"
          priority
          quality={85}
        />
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Zbuloni të Rejat 2026
        </h1>
        <p className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Celularët më të fuqishëm – me çmime që s’do t’i besoni
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-primary-foreground px-10 py-5 rounded-full text-xl font-semibold shadow-2xl"
        >
          Shiko Ofertat
        </motion.button>
      </motion.div>
    </section>
  );
}