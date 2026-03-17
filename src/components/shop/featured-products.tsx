import { ProductCard } from "./product-card";

const MOCK_PRODUCTS = [
  { id: "1", name: "MacBook Pro M3", price: 2499, category: "Laptops", image: "https://images.unsplash.com/photo-1517336714460-d1b27906d48c?q=80&w=1000&auto=format&fit=crop" },
  { id: "2", name: "Sony WH-1000XM5", price: 399, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" },
  { id: "3", name: "iPhone 15 Pro", price: 1199, category: "Phones", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000&auto=format&fit=crop" },
];

export const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};