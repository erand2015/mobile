'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Përfaqësim i jashtëzakonshëm në një transaksion M&A me vlerë 28 milionë euro. Strategji perfekte dhe negociata të suksesshme.",
    author: "CEO, kompani energjetike",
    company: "Energji Albania Sh.A.",
  },
  {
    quote: "Zgjidhje e shpejtë dhe efektive në një mosmarrëveshje pronësie intelektuale kundër një kompanie ndërkombëtare.",
    author: "Drejtor Zhvillimi",
    company: "Tech Startup Tirana",
  },
  {
    quote: "Në arbitrazhin ICC, avokati ynë arriti një vendim plotësisht në favorin tonë. Profesionalizëm i nivelit të lartë.",
    author: "Drejtor Ligjor",
    company: "Banka Ndërkombëtare",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-darker border-t border-neutral-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Çfarë thonë klientët tanë
          </motion.h2>
          <p className="text-xl text-neutral-light/80 max-w-3xl mx-auto">
            Rezultate reale nga klientë të nivelit të lartë.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-gray/30 backdrop-blur-sm border border-neutral-gray/30 rounded-2xl p-8 relative shadow-card"
            >
              <Quote className="absolute -top-5 left-6 text-accent w-12 h-12 opacity-30" />

              <p className="text-neutral-light/90 text-lg leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>

              <div>
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-accent/80 text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}