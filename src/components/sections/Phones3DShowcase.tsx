'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Phones3DShowcase() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-cyan-400">
          ZBULONI NË DETAJ
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
          Lëviz miun për të parë çdo kënd – nga kamera 200MP deri te procesori më i shpejtë i vitit
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.04, rotateY: 8 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl relative"
        >
          <div className="bg-gradient-to-b from-zinc-950 to-black p-12 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <Image
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&q=85"
              alt="Premium smartphone showcase"
              width={1200}
              height={700}
              className="rounded-2xl object-cover border border-cyan-500/10"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}