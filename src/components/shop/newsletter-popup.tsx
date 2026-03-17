"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles } from "lucide-react";

export const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Kontrollo nëse përdoruesi e ka mbyllur më parë popup-in
    const hasSeenPopup = localStorage.getItem("titan_newsletter_seen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000); // Shfaqet pas 8 sekondave
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("titan_newsletter_seen", "true");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => handleClose(), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
          {/* Overlay i zi që bllokon sfondin pjesërisht */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Trupi i Popup-it */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[32px] bg-zinc-900 border border-white/10 shadow-2xl"
          >
            {/* Dekorimi Neon anash */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#CCFF00]" />

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <div className="p-10 md:p-14">
              {!isSubscribed ? (
                <div className="space-y-6">
                  <div className="inline-flex p-3 rounded-2xl bg-[#CCFF00]/10 text-[#CCFF00]">
                    <Sparkles size={24} />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
                      MERR <span className="text-[#CCFF00]">10%</span> ULJE
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Regjistrohu në newsletter-in tonë dhe përfito zbritje në porosinë tënde të parë. Bëhu pjesë e elitës teknologjike.
                    </p>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4 pt-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                      <input
                        type="email"
                        required
                        placeholder="EMAIL ADRESA JUAJ"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-bold uppercase tracking-widest text-white focus:outline-none focus:border-[#CCFF00] transition"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#CCFF00] transition duration-300 shadow-[0_10px_30px_rgba(204,255,0,0.1)]"
                    >
                      Më dërgo kodin
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="text-5xl">🚀</div>
                  <h3 className="text-2xl font-black text-white uppercase italic">Mirësevini në Bord!</h3>
                  <p className="text-[#CCFF00] font-bold text-xs uppercase tracking-widest">
                    Kodi u dërgua në email-in tuaj.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};