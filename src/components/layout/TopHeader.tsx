"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Sparkles, ShoppingBag, CreditCard, ShoppingCart, MoreHorizontal, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function TopHeader() {
  const { totalItems } = useCart();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-[#2C1F2D] text-white text-xs font-medium border-b border-white/10 z-50 relative">
      <div className="max-w-[var(--container-max-width)] mx-auto px-3 sm:px-6 lg:px-10 h-9 sm:h-10 flex items-center justify-between gap-2 relative">
        {/* Left Section: Phone Number */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <a
            href="tel:5138749999"
            className="group flex items-center gap-1.5 text-white/90 hover:text-[#D4A59A] transition-colors no-underline whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4A59A] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-sans text-[12px] sm:text-[13px] tracking-wide font-medium whitespace-nowrap">
              (513) 874-9999
            </span>
          </a>
        </div>

        {/* Right Section: Responsive Quick Links */}
        <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5 flex-shrink-0" ref={moreRef}>
          {/* Always Visible: Online Booking (Shortened 'Booking' on tiny mobile screens) */}
          <Link
            href="/booking"
            className="group inline-flex items-center gap-1 sm:gap-1.5 text-white/90 hover:text-[#D4A59A] transition-colors whitespace-nowrap font-medium no-underline text-[11px] sm:text-[12px]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4A59A] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span><span className="hidden sm:inline">Online </span>Booking</span>
          </Link>

          {/* Desktop & Tablet Links */}
          <Link
            href="/specials"
            className="group hidden md:inline-flex items-center gap-1 text-[#D4A59A] hover:text-white transition-colors whitespace-nowrap font-semibold no-underline text-[12px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A59A] group-hover:rotate-12 transition-transform flex-shrink-0" />
            <span>Specials</span>
          </Link>

          <Link
            href="/premium-products"
            className="group hidden lg:inline-flex items-center gap-1.5 text-white/90 hover:text-[#D4A59A] transition-colors whitespace-nowrap font-medium no-underline text-[12px]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white/70 group-hover:text-[#D4A59A] transition-colors" />
            <span>Shop</span>
          </Link>

          <Link
            href="/checkout"
            className="group hidden xl:inline-flex items-center gap-1.5 text-white/90 hover:text-[#D4A59A] transition-colors whitespace-nowrap font-medium no-underline text-[12px]"
          >
            <CreditCard className="w-3.5 h-3.5 text-white/70 group-hover:text-[#D4A59A] transition-colors" />
            <span>Checkout</span>
          </Link>

          {/* Cart Badge */}
          <Link
            href="/cart"
            className="group inline-flex items-center gap-1.5 bg-white/10 hover:bg-[#D4A59A]/20 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all no-underline border border-white/10 hover:border-[#D4A59A]/40 flex-shrink-0"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-[#D4A59A] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#D4A59A] text-[#2C1F2D] rounded-full min-w-[15px] text-center leading-none">
              {totalItems}
            </span>
          </Link>

          {/* Mobile More Toggle Button */}
          <div className="relative md:hidden flex items-center">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              aria-label="More options"
              className="flex items-center justify-center p-1 rounded-full bg-white/10 hover:bg-[#D4A59A]/20 text-[#D4A59A] transition-all border border-white/10"
            >
              {isMoreOpen ? <X className="w-3.5 h-3.5" /> : <MoreHorizontal className="w-3.5 h-3.5" />}
            </button>

            {/* Mobile More Popover Menu */}
            {isMoreOpen && (
              <div className="absolute right-0 top-8 w-44 bg-[#2C1F2D] border border-white/15 rounded-xl shadow-2xl p-2 z-50 flex flex-col gap-1.5">
                <Link
                  href="/specials"
                  onClick={() => setIsMoreOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-[#D4A59A] font-semibold hover:bg-white/5 rounded-lg transition-colors no-underline text-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A59A]" />
                  <span>Specials ✨</span>
                </Link>
                <Link
                  href="/premium-products"
                  onClick={() => setIsMoreOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-white/90 hover:text-[#D4A59A] hover:bg-white/5 rounded-lg transition-colors no-underline text-xs"
                >
                  <ShoppingBag className="w-4 h-4 text-white/70" />
                  <span>Shop</span>
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsMoreOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-white/90 hover:text-[#D4A59A] hover:bg-white/5 rounded-lg transition-colors no-underline text-xs"
                >
                  <CreditCard className="w-4 h-4 text-white/70" />
                  <span>Checkout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
