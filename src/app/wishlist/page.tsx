"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
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
  };

  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />

      <section className="flex-1 w-full pt-32 pb-24 md:py-32">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Breadcrumb & Header */}
          <div className="mb-10">
            <nav className="flex items-center gap-2 text-[13px] text-[#999] mb-6">
              <Link href="/" className="hover:text-[#D4A59A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#2D2D2D]">Wishlist</span>
            </nav>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#2D2D2D]">
              My Wishlist ({totalItems})
            </h1>
          </div>

          {items.length === 0 ? (
            /* Empty Wishlist State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2">Your wishlist is empty</h2>
              <p className="text-[14px] text-[#999] mb-8 max-w-[400px]">
                You haven&apos;t added any items to your wishlist yet. Browse our professional services and premium products to save your favorites!
              </p>
              <Link
                href="/premium-products"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A59A] text-white rounded-full text-[14px] font-medium hover:bg-[#C4956A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg no-underline"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            /* Wishlist Items List */
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <div className="hidden md:grid grid-cols-[3fr_1.5fr_2fr_auto] gap-4 pb-4 border-b border-gray-100 text-[12px] font-medium tracking-[2px] uppercase text-[#999]">
                <span>Product / Service</span>
                <span className="text-center">Price</span>
                <span className="text-center">Action</span>
                <span className="w-10" />
              </div>

              <div className="divide-y divide-gray-50">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-[3fr_1.5fr_2fr_auto] gap-4 items-center py-6 border-b border-gray-50 last:border-b-0 group"
                  >
                    {/* Image & Title */}
                    <div className="flex items-center gap-4">
                      <Link href={item.route} className="shrink-0">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 relative">
                          <Image src={item.thumbnail} alt={item.name} fill className="object-cover" sizes="80px" />
                        </div>
                      </Link>
                      <div>
                        <Link href={item.route} className="text-[15px] font-medium text-[#2D2D2D] hover:text-[#D4A59A] transition-colors no-underline leading-snug block">
                          {item.name}
                        </Link>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center md:text-center">
                      <span className="text-[15px] text-[#2D2D2D] font-semibold">${item.price.toFixed(2)}</span>
                      {item.oldPrice && (
                        <span className="block text-[12px] text-[#999] line-through">${item.oldPrice.toFixed(2)}</span>
                      )}
                    </div>

                    {/* Add to Cart Action */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="h-10 px-6 bg-[#D4A59A] text-white text-[13px] font-medium rounded-full hover:bg-[#C4956A] transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Add to Cart
                      </button>
                    </div>

                    {/* Remove Action */}
                    <div className="flex justify-center md:justify-end">
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue shopping footer */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                <Link
                  href="/premium-products"
                  className="inline-flex items-center gap-2 text-[14px] text-[#666] hover:text-[#D4A59A] transition-colors no-underline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Continue Shopping
                </Link>

                <button
                  onClick={() => items.forEach(item => removeFromWishlist(item.id))}
                  className="text-[13px] text-[#999] hover:text-red-400 transition-colors"
                >
                  Clear All Items
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
