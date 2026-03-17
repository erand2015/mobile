// src/components/sections/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Këtu mund të shtosh logjikë për të dërguar email (p.sh. me EmailJS ose API)
    alert('Mesazhi u dërgua! Do t’ju kontaktojmë brenda 24 orëve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-darker border-t border-neutral-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Kontaktoni Direkt
          </motion.h2>
          <p className="text-xl text-neutral-light/80 max-w-3xl mx-auto">
            Rezervoni një konsultë konfidenciale 30-minutëshe. Ne ju përgjigjemi brenda 24 orëve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Forma */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-light/80 mb-2">
                  Emri i plotë
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-neutral-gray/30 border border-neutral-gray/40 rounded-lg text-white placeholder-neutral-gray/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                  placeholder="Emri dhe Mbiemri"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-neutral-gray/30 border border-neutral-gray/40 rounded-lg text-white placeholder-neutral-gray/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="email@juaj.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-neutral-gray/30 border border-neutral-gray/40 rounded-lg text-white placeholder-neutral-gray/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="+355 69 XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-light/80 mb-2">
                  Mesazhi juaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-neutral-gray/30 border border-neutral-gray/40 rounded-lg text-white placeholder-neutral-gray/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Përshkruani shkurtimisht çështjen ose kërkesën tuaj..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-5 bg-accent text-neutral-dark font-bold rounded-lg shadow-gold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send size={20} /> Dërgo Mesazh
              </motion.button>

              <p className="text-sm text-neutral-light/60 text-center mt-4">
                Mesazhi juaj është konfidencial dhe trajtohet sipas standardeve më të larta ligjore.
              </p>
            </form>
          </motion.div>

          {/* Info kontakti */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 bg-primary/10 rounded-full">
                <Phone size={28} className="text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Telefon</h4>
                <p className="text-neutral-light/90">+355 69 123 4567</p>
                <p className="text-neutral-light/90">+355 4 22 123 45</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail size={28} className="text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-neutral-light/90">kontakt@zyra-juajligjore.al</p>
                <p className="text-neutral-light/90">info@zyra-juajligjore.al</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-primary/10 rounded-full">
                <MapPin size={28} className="text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Adresa</h4>
                <p className="text-neutral-light/90">Rr. Durrësit, Ndërtesa 12, Kati 5</p>
                <p className="text-neutral-light/90">Tiranë, Shqipëri</p>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-6">Orari i punës</h4>
              <ul className="space-y-3 text-neutral-light/90">
                <li>E hënë – E enjte: 09:00 – 18:00</li>
                <li>E premte: 09:00 – 16:00</li>
                <li>E shtunë & E diel: Mbyllur</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}