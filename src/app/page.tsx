"use client";
import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/shop/hero";
import { CategorySection } from "@/components/shop/category-grid";
import { ProductShowcase } from "@/components/shop/product-showcase";
import { CheckoutForm } from "@/components/shop/checkout-form"; 
import { NewsletterPopup } from "@/components/shop/newsletter-popup";
import { SalesNotifier } from "@/components/shop/sales-notifier";
import { TechSpecs } from "@/components/shop/tech-specs"; 
import RetroGrid from "@/components/magicui/retro-grid";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";

const brands = ["Apple", "Samsung", "Sony", "Nvidia", "Asus", "Logitech", "Razer", "MSI", "Intel"];

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white"
    >
      <NewsletterPopup /> 
      <SalesNotifier /> 

      {/* 1. Hero */}
      <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center">
        <Hero />
        <RetroGrid className="opacity-[0.1] md:opacity-[0.15]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050505] to-transparent z-20" />
      </section>

      {/* 2. Marquee Social Proof */}
      <div className="relative border-y border-white/5 bg-zinc-950/20 py-10">
        <Marquee pauseOnHover className="[--duration:40s]">
          {brands.map((brand) => (
            <span key={brand} className="mx-8 text-2xl font-black opacity-10 hover:opacity-100 hover:text-[#CCFF00] transition-all uppercase italic">
              {brand}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] z-10" />
      </div>

      {/* 3. Kategoritë Bento Grid */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mb-16 text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter"
          >
            ZGJIDH <span className="text-[#CCFF00]">KATEGORINË</span>
          </motion.h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">Eksploro ekosistemin tonë</p>
        </div>
        <CategorySection />
      </section>

      {/* 4. Tech Specs (Sticky Scroll Section) */}
      <TechSpecs />

      {/* 5. Product Showcase */}
      <section id="koleksioni" className="relative z-50 py-24 md:py-40 bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6">
           <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                  Koleksioni <span className="text-[#CCFF00]">2026</span>
                </h2>
                <div className="h-1 w-24 bg-[#CCFF00] mt-4" />
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mt-4">Pajisje të kuruara për performancë maksimale</p>
              </motion.div>
              
              <div className="h-[1px] flex-1 bg-white/5 hidden md:block mb-4 mx-12" />
              
              <Link href="/shop" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-[#CCFF00] transition-colors mb-4">
                Eksploro të gjitha —&gt;
              </Link>
           </div>
           
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: true }}
           >
             <ProductShowcase />
           </motion.div>
        </div>
      </section>

      {/* --- SEKSIONI I RI: CHECKOUT FORM --- */}
      <section className="relative z-50 bg-zinc-950/50 border-y border-white/5 py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[#CCFF00]/2 pointer-events-none" />
        <CheckoutForm />
      </section>

      {/* 6. Footer */}
      <footer className="relative border-t border-white/5 bg-black py-20 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-black italic tracking-tighter">
              TITAN<span className="text-[#CCFF00]">CORE</span>
            </div>
            <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.3em]">Innovation. Speed. Future.</p>
          </div>

          <p className="text-zinc-700 text-[9px] font-bold">© 2026 TITAN CORE LABS.</p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <Link href="/contact" className="hover:text-[#CCFF00] transition-colors">Support</Link>
            <Link href="#" className="hover:text-[#CCFF00] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#CCFF00] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </motion.main>
  );
}