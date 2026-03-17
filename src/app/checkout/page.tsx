"use client";
import React from "react";
import { Navbar } from "@/components/shared/navbar";
import { CheckoutForm } from "@/components/shop/checkout-form";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-12"
      >
        <CheckoutForm />
      </motion.div>

      {/* Dekorimet e sfondit */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#CCFF00]/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>
    </main>
  );
}