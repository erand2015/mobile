// components/sections/PracticeAreas.tsx
'use client';
import { motion } from 'framer-motion';

const areas = [
  { title: "Drejtësia Korporative & M&A", desc: "Strukturim transaksionesh, due diligence, negociata komplekse." },
  { title: "Arbitrazh & Mosmarrëveshje Ndërkombëtare", desc: "ICC, LCIA, VIAC, ICSID – përfaqësim në çdo fazë." },
  { title: "Pronësi Intelektuale", desc: "Trademark, patent, copyright, trade secrets, litigim." },
  { title: "Drejtësia Penale e Bardhë", desc: "Hetime, mbrojtje në SPAK, GJKKO, akuza korrupsioni." },
  { title: "E Drejtë Konkurruese & Antitrust", desc: "Investigime ACA, bashkime, abuzim pozicioni dominues." },
  { title: "Pasuri të Paluajtshme & Zhvillim", desc: "Kontrata ndërtimi, zhvillim projektesh, mosmarrëveshje pronësore." },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-24 bg-neutral-darker">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-16 text-white">
          Fushat e Specializimit
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-neutral-gray/50 backdrop-blur-sm border border-neutral-gray/30 rounded-2xl p-8 hover:border-accent/50 hover:shadow-gold transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-neutral-light/80">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}