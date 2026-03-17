"use client";

import React from "react";
import { Zap, Shield, Gauge, ArrowRight, Play, Cpu, ChevronDown } from "lucide-react";

export default function ProfessionalFinal() {
  return (
    <div className="bg-black text-white font-sans antialiased">
      
      {/* 1. ULTRA-MINIMAL NAV */}
      <nav className="fixed top-0 w-full z-[1000] flex justify-between items-center px-10 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter italic uppercase">TITAN<span className="text-[#00FF00]">MOTO</span></div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-[#00FF00] transition-colors">GT-Series</a>
          <a href="#" className="hover:text-[#00FF00] transition-colors">Technology</a>
          <a href="#" className="hover:text-[#00FF00] transition-colors">Support</a>
        </div>
        <button className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#00FF00] transition-all">Shop Now</button>
      </nav>

      {/* 2. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Sigurohu që ky link hapet */}
        <img 
          src="https://images.unsplash.com/photo-1605335134768-24135546059d?q=80&w=2500" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Scooter background"
        />
        {/* Gradient Overlay që e bën tekstin të duket */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />

        <div className="relative z-10 text-center flex flex-col items-center">
          <span className="text-[#00FF00] font-black tracking-[0.5em] uppercase text-[10px] mb-4">The Future is Electric</span>
          <h1 className="text-[15vw] md:text-[180px] font-black italic uppercase leading-[0.8] tracking-tighter mb-10">
            GT2 <span className="block text-transparent" style={{ WebkitTextStroke: "2px white" }}>ELITE</span>
          </h1>
          <div className="flex gap-6">
            <button className="bg-[#00FF00] text-black px-12 py-5 font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_40px_rgba(0,255,0,0.4)]">Configure Yours</button>
            <button className="border border-white/20 backdrop-blur-sm px-12 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-2">
              <Play size={14} fill="currentColor" /> Watch Film
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={30} className="text-white/30" />
        </div>
      </section>

      {/* 3. THE "SEGWAY" SPECS GRID */}
      <section className="bg-white text-black py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Power <br /> Beyond <br /> <span className="text-gray-300">Limits.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Titan GT2 Pro nuk është thjesht një mjet transporti. Është një kryevepër inxhinierike që kombinon motorët dual 6000W me një sistem inteligjent të menaxhimit të energjisë.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#f5f5f7] p-16 rounded-[40px] flex flex-col gap-6 group hover:bg-black hover:text-white transition-all duration-700">
              <Zap size={40} className="text-[#00FF00]" />
              <h3 className="text-4xl font-black italic uppercase">70 km/h</h3>
              <p className="opacity-50 text-sm uppercase tracking-widest font-bold">Top Speed</p>
            </div>
            <div className="bg-[#f5f5f7] p-16 rounded-[40px] flex flex-col gap-6 group hover:bg-black hover:text-white transition-all duration-700">
              <Gauge size={40} className="text-[#00FF00]" />
              <h3 className="text-4xl font-black italic uppercase">3.9 sec</h3>
              <p className="opacity-50 text-sm uppercase tracking-widest font-bold">0-50 Acceleration</p>
            </div>
            <div className="bg-[#f5f5f7] p-16 rounded-[40px] flex flex-col gap-6 group hover:bg-black hover:text-white transition-all duration-700">
              <Shield size={40} className="text-[#00FF00]" />
              <h3 className="text-4xl font-black italic uppercase">Dual ABS</h3>
              <p className="opacity-50 text-sm uppercase tracking-widest font-bold">Safety System</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LARGE FEATURE (LIFESTYLE) */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-[1600px] mx-auto relative h-[80vh] rounded-[60px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000" 
            className="w-full h-full object-cover opacity-50"
            alt="Dashboard"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-32">
            <Cpu className="text-[#00FF00] mb-8" size={60} />
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              Smart <br /> Cockpit
            </h2>
            <p className="max-w-md text-white/50 text-lg mb-10">
              Ekrani i parë në botë transparent OLED që shfaq të dhënat e udhëtimit në kohë reale pa tërhequr vëmendjen nga rruga.
            </p>
            <button className="group flex items-center gap-4 text-[#00FF00] font-black uppercase text-sm tracking-widest">
              Explore Tech <ArrowRight className="group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (CLEAN) */}
      <footer className="bg-black py-32 px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div>
            <div className="text-4xl font-black italic mb-6">TITAN.</div>
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">Beyond Mobility 2026</p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Legal</h4>
              <span className="text-xs hover:text-[#00FF00] cursor-pointer">Privacy Policy</span>
              <span className="text-xs hover:text-[#00FF00] cursor-pointer">Terms</span>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Social</h4>
              <span className="text-xs hover:text-[#00FF00] cursor-pointer">Instagram</span>
              <span className="text-xs hover:text-[#00FF00] cursor-pointer">Twitter</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}