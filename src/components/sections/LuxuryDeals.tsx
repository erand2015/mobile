'use client';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function LuxuryDeals() {
  return (
    <section id="deals" className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-3 bg-red-600/10 px-8 py-3 rounded-full mb-8"
        >
          <Clock className="text-red-500" />
          <span className="text-red-500 font-bold tracking-widest">LIMITED TIME ONLY</span>
        </motion.div>

        <h2 className="text-7xl md:text-8xl font-black tracking-[-3px] mb-6">
          LUKS DEALS<br />2026
        </h2>
        
        <p className="text-3xl text-gray-300 max-w-2xl mx-auto">
          Zbritje deri në <span className="text-yellow-400 font-black">40%</span> vetëm për 48 orë
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-zinc-900 border border-yellow-400/30 p-10 rounded-3xl w-full max-w-md">
            <p className="text-5xl font-black text-yellow-400">iPhone 16 Pro</p>
            <p className="text-6xl font-black mt-4 line-through opacity-30">139.990 Lekë</p>
            <p className="text-7xl font-black text-white">89.990 Lekë</p>
            <button className="mt-10 w-full py-6 bg-yellow-400 text-black font-bold rounded-2xl text-xl hover:bg-white transition">
              BLEJ MENJËHERË
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-zinc-900 border border-yellow-400/30 p-10 rounded-3xl w-full max-w-md">
            <p className="text-5xl font-black text-yellow-400">Galaxy S25 Ultra</p>
            <p className="text-6xl font-black mt-4 line-through opacity-30">119.990 Lekë</p>
            <p className="text-7xl font-black text-white">74.990 Lekë</p>
            <button className="mt-10 w-full py-6 bg-yellow-400 text-black font-bold rounded-2xl text-xl hover:bg-white transition">
              BLEJ MENJËHERË
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}