import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/products";

interface WishlistState {
  items: Product[];
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (product) => {
        set((state) => {
          const exists = state.items.some((i) => i.id === product.id);
          if (exists) {
            return { items: state.items.filter((i) => i.id !== product.id) };
          }
          return { items: [...state.items, product] };
        });
      },
      isInWishlist: (productId) => {
        return get().items.some((i) => i.id === productId);
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
