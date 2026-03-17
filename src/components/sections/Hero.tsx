// components/sections/Hero.tsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-darker">
      {/* Sfond subtil */}
      <div className="absolute inset-0 bg-[url('/pattern-legal.png')] opacity-5" /> {/* mund të shtosh pattern ligjor */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
        >
          Avokat i Nivelit të Lartë  
          Konsulencë Strategjike Ligjore
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xl md:text-2xl text-neutral-gray max-w-3xl mx-auto mb-12 font-light"
        >
          Përfaqësim në çështje komplekse korporative, arbitrazh ndërkombëtar, M&A,  
          pronësi intelektuale dhe mosmarrëveshje të nivelit të lartë.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#contact"
            className="px-10 py-5 bg-primary text-white font-semibold rounded-lg shadow-blue-glow hover:bg-primary-700 transition-all duration-300"
          >
            Konsultë Falas 30 minuta
          </a>
          <a
            href="#practice"
            className="px-10 py-5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Fushat e Specializimit
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-accent/70 text-sm tracking-widest uppercase animate-pulse">
        ↓ Zbuloni Eksperiencën
      </div>
    </section>
  );
}