import Image from "next/image";

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group rounded-3xl bg-zinc-900/50 border border-white/5 p-4 hover:border-blue-500/50 transition-all">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-800">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-500 font-mono">${product.price}</span>
          <button className="text-xs bg-white/10 px-3 py-1 rounded-full text-white hover:bg-white/20">Shto+</button>
        </div>
      </div>
    </div>
  );
};