"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const shipping = 0;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />

      <section className="flex-1 w-full pt-32 pb-24 md:py-32">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">

          {/* Header */}
          <div className="mb-10">
            <nav className="flex items-center gap-2 text-[13px] text-[#999] mb-6">
              <Link href="/" className="hover:text-[#D4A59A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#2D2D2D]">Shopping Cart</span>
            </nav>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#2D2D2D]">
              Shopping Cart ({totalItems})
            </h1>
          </div>

          {items.length === 0 ? (
            /* Empty Cart */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2">Your cart is empty</h2>
              <p className="text-[14px] text-[#999] mb-8 max-w-[400px]">
                Looks like you haven&apos;t added any products to your cart yet. Explore our collections and find something you love!
              </p>
              <Link
                href="/premium-products"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A59A] text-white rounded-full text-[14px] font-medium hover:bg-[#C4956A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg no-underline"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            /* Cart Content */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-0">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 pb-4 border-b border-gray-100 text-[12px] font-medium tracking-[2px] uppercase text-[#999]">
                  <span>Product</span>
                  <span className="text-center">Price</span>
                  <span className="text-center">Quantity</span>
                  <span className="text-center">Total</span>
                  <span className="w-10" />
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center py-6 border-b border-gray-50 group"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <Link href={item.route} className="shrink-0">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 relative">
                          <Image src={item.thumbnail} alt={item.name} fill className="object-cover" sizes="80px" />
                        </div>
                      </Link>
                      <div>
                        <Link href={item.route} className="text-[14px] font-medium text-[#2D2D2D] hover:text-[#D4A59A] transition-colors no-underline leading-snug block">
                          {item.name}
                        </Link>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <span className="text-[14px] text-[#2D2D2D] font-medium">${item.price.toFixed(2)}</span>
                      {item.oldPrice && (
                        <span className="block text-[12px] text-[#999] line-through">${item.oldPrice.toFixed(2)}</span>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-[13px] font-medium text-[#2D2D2D]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="text-center">
                      <span className="text-[15px] font-semibold text-[#2D2D2D]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Remove */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <div className="pt-6">
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
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 sticky top-32">
                  <h3 className="text-lg font-semibold text-[#2D2D2D] mb-6">Order Summary</h3>

                  <div className="space-y-4 text-[14px]">
                    <div className="flex justify-between">
                      <span className="text-[#666]">Subtotal ({totalItems} items)</span>
                      <span className="font-medium text-[#2D2D2D]">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666]">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666]">Tax (8%)</span>
                      <span className="font-medium text-[#2D2D2D]">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 mt-6 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[16px] font-semibold text-[#2D2D2D]">Total</span>
                      <span className="text-2xl font-semibold text-[#2D2D2D]">${grandTotal.toFixed(2)}</span>
                    </div>

                    <Link href="/checkout" className="w-full h-12 bg-[#D4A59A] text-white font-medium rounded-full hover:bg-[#C4956A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 no-underline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      Proceed to Checkout
                    </Link>
                  </div>

                  {/* Secure checkout */}
                  <p className="text-center text-[12px] text-[#999] mt-4 flex items-center justify-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
