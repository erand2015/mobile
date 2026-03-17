"use client";
import React from "react";

// RREGULLIMI: Hoqëm kllapat { } sepse Navbar është eksportuar si 'default'
import Navbar from "@/components/shared/navbar";

import { CheckoutForm } from "@/components/shop/checkout-form";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Navbar thirret normalisht këtu */}
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-32 pb-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Checkout<span className="text-[#CCFF00]">.</span>
            </h1>
            <p className="text-zinc-500 mt-2 font-medium uppercase tracking-widest text-xs">
              Përfundo porosinë tënde në siguri të plotë
            </p>
          </div>
          
          <CheckoutForm />
        </div>
      </motion.div>

      {/* Dekorimet e sfondit (Glow) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#CCFF00]/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#CCFF00]/3 blur-[150px] rounded-full opacity-50" />
      </div>
    </main>
  );
}