import { Laptop, Smartphone, Watch, Headphones } from "lucide-react";

const categories = [
  { name: "Laptops", icon: <Laptop size={32} />, size: "md:col-span-2 md:row-span-2", color: "bg-blue-500/10" },
  { name: "Phones", icon: <Smartphone size={32} />, size: "md:col-span-1 md:row-span-1", color: "bg-purple-500/10" },
  { name: "Watches", icon: <Watch size={32} />, size: "md:col-span-1 md:row-span-1", color: "bg-orange-500/10" },
  { name: "Audio", icon: <Headphones size={32} />, size: "md:col-span-1 md:row-span-1", color: "bg-emerald-500/10" },
];

export const CategorySection = () => {
  return (
    /* Ndryshuar h-auto që të mos shtypet në mobile */
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-h-[600px] py-10">
      {categories.map((cat) => (
        <div 
          key={cat.name} 
          className={`relative group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 p-10 flex flex-col justify-end transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] ${cat.size} ${cat.color}`}
        >
          {/* Ikonat */}
          <div className="absolute top-8 left-8 text-white/40 group-hover:text-accent transition-colors duration-300">
            {cat.icon}
          </div>
          
          {/* Teksti */}
          <div className="relative z-10">
            <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic">
              {cat.name}
            </h3>
            <p className="text-xs text-white/40 mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Eksploro Koleksionin →
            </p>
          </div>

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        </div>
      ))}
    </div>
  );
};