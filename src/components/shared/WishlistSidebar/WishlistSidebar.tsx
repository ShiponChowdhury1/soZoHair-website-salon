"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistSidebar({ isOpen, onClose }: WishlistSidebarProps) {
  const { items, removeFromWishlist, totalItems } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      slug: item.slug,
      name: item.name,
      price: item.price,
      oldPrice: item.oldPrice,
      thumbnail: item.thumbnail,
      route: item.route,
    });
    // Optional: remove from wishlist after adding to cart
    // removeFromWishlist(item.id);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[200] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[201] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-[#2D2D2D] flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4A59A" stroke="#D4A59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            My Wishlist ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
            aria-label="Close wishlist"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <p className="text-[14px] text-[#999] mb-4">Your wishlist is empty</p>
              <Link
                href="/premium-products"
                onClick={onClose}
                className="text-[13px] text-[#D4A59A] hover:text-[#C4956A] font-medium no-underline"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start group relative">
                  {/* Image */}
                  <Link href={item.route} onClick={onClose} className="shrink-0">
                    <div className="w-[80px] h-[80px] rounded-xl overflow-hidden bg-gray-50 relative">
                      <Image src={item.thumbnail} alt={item.name} fill className="object-cover" sizes="80px" />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-8">
                    <Link
                      href={item.route}
                      onClick={onClose}
                      className="text-[14px] font-medium text-[#2D2D2D] hover:text-[#D4A59A] transition-colors no-underline leading-snug block truncate mb-1"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-[#2D2D2D]">${item.price.toFixed(2)}</span>
                      {item.oldPrice && (
                        <span className="text-[12px] text-[#999] line-through">${item.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="text-[12px] font-medium text-white bg-[#D4A59A] hover:bg-[#C4956A] px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors shrink-0"
                    aria-label="Remove from wishlist"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
