'use client';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Erand Hoxha",
    role: "Partner & Avokat Kryesor",
    expertise: "Drejtësi Korporative, Arbitrazh Ndërkombëtar, M&A",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80",
    bio: "Mbi 15 vjet eksperiencë në çështje komplekse ligjore, me përfaqësim në arbitrazhe ICC dhe LCIA.",
  },
  {
    name: "Ana Leka",
    role: "Avokate e Senior",
    expertise: "Pronësi Intelektuale & Teknologji",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    bio: "Specialiste në trademark, patent dhe kontrata software – mbrojtje për startup dhe kompani tech.",
  },
  {
    name: "Luan Marku",
    role: "Avokat Asociuar",
    expertise: "Drejtësi Penale e Bardhë & Antitrust",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    bio: "Përvojë në hetime SPAK dhe GJKKO, me fokus në korrupsion dhe abuzim pozicioni dominues.",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-neutral-dark border-t border-neutral-gray/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Ekipi ynë
          </motion.h2>
          <p className="text-xl text-neutral-light/80 max-w-3xl mx-auto">
            Profesionistë me eksperiencë ndërkombëtare dhe njohuri të thella të sistemit ligjor shqiptar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-blue-glow group-hover:shadow-gold transition-shadow duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-neutral-light/80 text-sm mb-4">{member.expertise}</p>
              <p className="text-neutral-light/70 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}