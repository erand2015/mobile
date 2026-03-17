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

      {/* 1. Hero Section - Shtuar hapsirë për Navbar-in e ri */}
      <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center pt-20">
        <Hero />
        <RetroGrid className="opacity-[0.1] md:opacity-[0.15]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050505] to-transparent z-20" />
      </section>

      {/* 2. Brand Marquee - Social Proof */}
      <div className="relative border-y border-white/5 bg-zinc-950/20 py-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {brands.map((brand) => (
            <span key={brand} className="mx-12 text-3xl font-black opacity-10 hover:opacity-100 hover:text-[#CCFF00] transition-all cursor-default uppercase italic tracking-tighter">
              {brand}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050505] z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#050505] z-10" />
      </div>

      {/* 3. Kategoritë Bento Grid */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="mb-20 text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none"
          >
            ZGJIDH <span className="text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.2)]">KATEGORINË</span>
          </motion.h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Eksploro ekosistemin tonë teknologjik</p>
        </div>
        <CategorySection />
      </section>

      {/* 4. Tech Specs (Sticky Scroll) */}
      <TechSpecs />

      {/* 5. Product Showcase - Koleksioni Kryesor */}
      <section id="koleksioni" className="relative z-40 py-32 md:py-48 bg-[#050505]">
        {/* Glow i sfondit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-[#CCFF00]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6">
           <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                  Koleksioni <span className="text-[#CCFF00]">2026</span>
                </h2>
                <div className="h-1.5 w-32 bg-[#CCFF00] mt-6" />
                <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[11px] mt-6">
                  Pajisje të kuruara për performancë maksimale
                </p>
              </motion.div>
              
              <Link href="/shop" className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all mb-4">
                Eksploro të gjitha 
                <span className="text-[#CCFF00] group-hover:translate-x-2 transition-transform">—&gt;</span>
              </Link>
           </div>
           
           <ProductShowcase />
        </div>
      </section>

      {/* 6. Checkout Section - E integruar me hapsirë të mjaftueshme */}
      <section className="relative z-40 bg-zinc-950/50 border-y border-white/5 py-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[#CCFF00]/[0.01] pointer-events-none" />
        <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
                <h3 className="text-3xl font-black uppercase italic tracking-widest">Përfundo Porosinë</h3>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Siguri maksimale në çdo blerje</p>
            </div>
            <CheckoutForm />
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="relative border-t border-white/5 bg-black py-24 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="text-3xl font-black italic tracking-tighter">
              CELLUX<span className="text-[#CCFF00]">CORE</span>
            </div>
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em]">Innovation. Speed. Future.</p>
          </div>

          <p className="text-zinc-800 text-[10px] font-bold tracking-widest italic">© 2026 CELLUX LABS. Të gjitha të drejtat të rezervuara.</p>

          <div className="flex gap-10 text-[11px] font-black uppercase tracking-widest text-zinc-500">
            <Link href="/support" className="hover:text-[#CCFF00] transition-colors">Support</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </motion.main>
  );
}