"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeFromCart, totalItems, totalPrice } = useCart();

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
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Shopping Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
            aria-label="Close cart"
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
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <p className="text-[14px] text-[#999] mb-4">Your cart is empty</p>
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
                <div key={item.id} className="flex gap-4 items-start group">
                  {/* Image */}
                  <Link href={item.route} onClick={onClose} className="shrink-0">
                    <div className="w-[80px] h-[80px] rounded-xl overflow-hidden bg-gray-50 relative">
                      <Image src={item.thumbnail} alt={item.name} fill className="object-cover" sizes="80px" />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={item.route}
                      onClick={onClose}
                      className="text-[14px] font-medium text-[#2D2D2D] hover:text-[#D4A59A] transition-colors no-underline leading-snug block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[13px] text-[#999] mt-1">
                      {item.quantity} x <span className="font-semibold text-[#2D2D2D]">${item.price.toFixed(2)}</span>
                    </p>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors shrink-0 mt-1"
                    aria-label="Remove item"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#666]">{totalItems} Product</span>
              <span className="text-lg font-semibold text-[#2D2D2D]">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full h-12 bg-[#D4A59A] text-white font-medium rounded-full hover:bg-[#C4956A] transition-all duration-300 flex items-center justify-center no-underline"
            >
              Checkout
            </Link>

            {/* Go to Cart Button */}
            <Link
              href="/cart"
              onClick={onClose}
              className="w-full h-12 bg-white text-[#2D2D2D] font-medium rounded-full border border-gray-200 hover:border-[#D4A59A] hover:text-[#D4A59A] transition-all duration-300 flex items-center justify-center no-underline"
            >
              Go To Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
