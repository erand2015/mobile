'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Award, Users } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // GSAP + Lenis integration (në layout.tsx do ta lidhim)
  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Video / Image me Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center opacity-40"
      />

      {/* Overlay Gold Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-[#d4af37]/30 rounded-full">
            <Award className="w-5 h-5 text-[#d4af37]" />
            <span className="uppercase tracking-[4px] text-sm font-medium text-[#d4af37]">
              Since 2018 • Tirana • Global
            </span>
          </div>

          <h1 className="text-7xl md:text-[110px] leading-[1.05] font-bold tracking-tighter mb-6">
            AURELIUS<br />
            <span className="bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
              LAW GROUP
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-white/80 mb-12 font-light">
            Mbrojtja më e fuqishme për suksesin tënd më të rëndësishëm.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-12 py-6 bg-[#d4af37] text-black font-semibold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
            >
              Rezervo Konsultim
              <Scale className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-12 py-6 border-2 border-white/70 hover:border-white text-white font-medium text-lg rounded-full transition-all"
            >
              Shiko Rastet Tona
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator me GSAP */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-sm tracking-widest"
      >
        SCROLL TO EXPLORE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 right-10 hidden xl:block"
      >
        <Users className="w-16 h-16 text-[#d4af37]/30" />
      </motion.div>
    </section>
  );
}