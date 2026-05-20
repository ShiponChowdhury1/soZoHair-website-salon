"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface WishlistItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  thumbnail: string;
  route: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleWishlist = (item: WishlistItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isInWishlist = (id: number) => {
    return items.some((item) => item.id === id);
  };

  const clearWishlist = () => setItems([]);

  const totalItems = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
}
