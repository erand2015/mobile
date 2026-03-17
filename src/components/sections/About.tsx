// src/components/sections/About.tsx
'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-neutral-darker border-t border-neutral-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto ose placeholder profesional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-blue-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 to-transparent" />
            {/* Vendos foton tënde këtu */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-6xl text-accent/30">
              Foto Profesionale
            </div>
            {/* Nëse ke foto reale: */}
            {/* <Image src="/your-photo.jpg" alt="Avokati" fill className="object-cover" /> */}
          </motion.div>

          {/* Teksti */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
            >
              Eksperiencë. Integritet. Rezultate.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-neutral-light/90 mb-8 leading-relaxed"
            >
              Me mbi 15 vjet eksperiencë në drejtësinë shqiptare dhe ndërkombëtare, specializohem në çështje të nivelit të lartë korporativ, arbitrazh ndërkombëtar dhe mosmarrëveshje komplekse. Kam përfaqësuar klientë nga sektori bankar, energjetik, telekomunikacion dhe zhvillim imobiliar, duke arritur zgjidhje strategjike në çështje me vlerë mbi 50 milionë euro.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-neutral-light/90 mb-10 leading-relaxed"
            >
              Qasja ime është gjithmonë e njëjtë: analizë e thellë, strategji e personalizuar dhe përfaqësim i palëkundur. Konfidencialiteti dhe rezultatet janë prioritet absolut.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center px-8 py-4 bg-accent text-neutral-dark font-semibold rounded-lg shadow-gold hover:bg-accent/90 transition-all"
            >
              Rezervoni Konsultë Konfidenciale →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}