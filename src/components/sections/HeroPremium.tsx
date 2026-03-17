'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function HeroPremium() {
  useEffect(() => {
    gsap.fromTo(".hero-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" });
    gsap.fromTo(".hero-subtitle", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 0.4 });

    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(".hero-bg", { scale: 1.1 + self.progress * 0.2 });
      },
    });
  }, []);

  return (
    <section className="hero relative h-screen flex items-center justify-center overflow-hidden bg-tech-darker">
      <div className="hero-bg absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1920&auto=format&fit=crop&q=80"
          alt="Futuristic smartphone"
          fill
          className="object-cover brightness-50 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.h1 
          className="hero-title text-6xl md:text-9xl font-display font-black tracking-[-0.05em] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-none animate-gradient-flow"
        >
          FLAGSHIP 2026<br />TANI NË SHQIPËRI
        </motion.h1>

        <p className="hero-subtitle text-xl md:text-3xl mt-6 md:mt-10 text-gray-200 max-w-4xl mx-auto font-light">
          Celularë me 200MP kamera • Procesor 3nm • Bateri deri 5500mAh • AI Features • Aksesorë origjinalë
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,240,255,0.6)" }}
            className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-tech-dark font-bold text-xl rounded-xl shadow-tech-glow"
          >
            Blej Tani
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 border-2 border-primary text-primary font-bold text-xl rounded-xl hover:bg-primary/10"
          >
            Krahaso Modelet
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary text-sm tracking-widest uppercase animate-pulse">
        ↓ Scroll për më shumë tech
      </div>
    </section>
  );
}