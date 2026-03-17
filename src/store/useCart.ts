"use client";
import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  discount: number; // Përqindja e zbritjes (p.sh. 0.1 për 10%)
  addItem: (product: any) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  applyDiscount: (code: string) => boolean; // Kthen true nëse kodi është i saktë
  clearCart: () => void; // <--- U SHTUA KËTU
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  discount: 0,
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (product) => set((state) => {
    const existingItem = state.items.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        isOpen: true,
      };
    }
    return { 
      items: [...state.items, { ...product, quantity: 1 }], 
      isOpen: true 
    };
  }),

  updateQuantity: (id, delta) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ),
  })),

  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id),
  })),

  // Sistemi i kuponit
  applyDiscount: (code: string) => {
    if (code.toUpperCase() === "TITAN10") {
      set({ discount: 0.10 }); // Zbritje 10%
      return true;
    }
    return false;
  },

  // FUNKSIONI QË ZGJIDH GABIMIN NË VERCEL
  clearCart: () => set({ items: [], discount: 0 }), 
}));