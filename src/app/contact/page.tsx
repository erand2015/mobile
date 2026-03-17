"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/navbar";
import { Mail, MessageSquare, MapPin, Send, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic"
          >
            NA <span className="text-[#CCFF00]">SHKRUANI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]"
          >
            Sistemi i komunikimit Titan është i hapur 24/7.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Contact Info (4 Kolona) */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <ContactMethod 
                icon={<Mail size={20} />} 
                title="Email" 
                detail="support@titancore.lab" 
                delay={0.3}
              />
              <ContactMethod 
                icon={<MessageSquare size={20} />} 
                title="Live Chat" 
                detail="Mesatarisht 2 minuta pritje" 
                delay={0.4}
              />
              <ContactMethod 
                icon={<Globe size={20} />} 
                title="Shtabi Qendror" 
                detail="Tirana Tech District, AL" 
                delay={0.5}
              />
            </div>

            {/* Status Indicator */}
            <div className="p-6 rounded-[32px] bg-[#CCFF00]/5 border border-[#CCFF00]/20 flex items-center gap-4">
              <div className="relative">
                <div className="h-3 w-3 bg-[#CCFF00] rounded-full animate-ping" />
                <div className="absolute inset-0 h-3 w-3 bg-[#CCFF00] rounded-full" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">
                Sistemet Online: Operacionale
              </span>
            </div>
          </div>

          {/* RIGHT: Modern Form (8 Kolona) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-8 bg-zinc-900/30 border border-white/5 rounded-[40px] p-8 md:p-12 backdrop-blur-sm"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Emri Juaj</label>
                <input type="text" placeholder="KOMANDANTI" className="contact-input" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Adresa Email</label>
                <input type="email" placeholder="NAME@DOMAIN.COM" className="contact-input" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Mesazhi</label>
                <textarea rows={5} placeholder="SI MUND T'JU NDIHMOJMË?" className="contact-input resize-none" />
              </div>
              
              <button className="md:col-span-2 group relative bg-[#CCFF00] text-black py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Dërgo Mesazhin <Send size={16} />
                </span>
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white/20"
                />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .contact-input {
          @apply w-full bg-black/50 border border-white/10 rounded-2xl py-5 px-6 text-xs font-bold uppercase tracking-widest text-white focus:outline-none focus:border-[#CCFF00] transition-all placeholder:text-zinc-700;
        }
      `}</style>
    </main>
  );
}

// Sub-komponent për metodat e kontaktit
const ContactMethod = ({ icon, title, detail, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-5 group"
  >
    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]/50 transition-all">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{title}</h4>
      <p className="text-sm font-bold text-white mt-0.5">{detail}</p>
    </div>
  </motion.div>
);