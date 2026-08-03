"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Sparkles, ShoppingBag, CreditCard, ShoppingCart, MoreHorizontal, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MEEVO_BOOKING_URL } from "@/config/bookingConfig";

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
      <div className="max-w-[var(--container-max-width)] mx-auto px-3 sm:px-6 lg:px-10 h-10 sm:h-11 flex items-center justify-between gap-3 relative">
        {/* Left Section: Phone Number */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:5138749999"
            className="group flex items-center gap-2 text-white/95 hover:text-[#D4A59A] transition-colors no-underline whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#D4A59A] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-sans text-[13px] sm:text-[14px] tracking-wide font-semibold whitespace-nowrap">
              (513) 874-9999
            </span>
          </a>
        </div>

        {/* Right Section: Responsive Quick Links */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0" ref={moreRef}>
          {/* Always Visible: Online Booking / Call to Book */}
          <a
            href={MEEVO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-white/95 hover:text-[#D4A59A] transition-colors whitespace-nowrap font-semibold no-underline text-[12px] sm:text-[13.5px]"
          >
            <Calendar className="w-4 h-4 text-[#D4A59A] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>Online Booking</span>
          </a>

          {/* Desktop & Tablet Links */}
          <Link
            href="/specials"
            className="group hidden md:inline-flex items-center gap-1.5 text-[#D4A59A] hover:text-white transition-colors whitespace-nowrap font-semibold no-underline text-[12px] sm:text-[13.5px]"
          >
            <Sparkles className="w-4 h-4 text-[#D4A59A] group-hover:rotate-12 transition-transform flex-shrink-0" />
            <span>Specials</span>
          </Link>

          <Link
            href="/premium-products"
            className="group hidden lg:inline-flex items-center gap-1.5 text-white/95 hover:text-[#D4A59A] transition-colors whitespace-nowrap font-semibold no-underline text-[12px] sm:text-[13.5px]"
          >
            <ShoppingBag className="w-4 h-4 text-white/80 group-hover:text-[#D4A59A] transition-colors flex-shrink-0" />
            <span>Shop</span>
          </Link>

          <Link
            href="/checkout"
            className="group hidden xl:inline-flex items-center gap-1.5 text-white/95 hover:text-[#D4A59A] transition-colors whitespace-nowrap font-semibold no-underline text-[12px] sm:text-[13.5px]"
          >
            <CreditCard className="w-4 h-4 text-white/80 group-hover:text-[#D4A59A] transition-colors flex-shrink-0" />
            <span>Checkout</span>
          </Link>

          {/* Cart Badge */}
          <Link
            href="/cart"
            className="group inline-flex items-center gap-2 bg-white/10 hover:bg-[#D4A59A]/25 text-white px-2.5 py-1 rounded-full transition-all no-underline border border-white/15 hover:border-[#D4A59A]/50 flex-shrink-0"
          >
            <ShoppingCart className="w-4 h-4 text-[#D4A59A] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="text-[11px] font-bold px-2 py-0.5 bg-[#D4A59A] text-[#2C1F2D] rounded-full min-w-[18px] text-center leading-none">
              {totalItems}
            </span>
          </Link>

          {/* Mobile More Toggle Button */}
          <div className="relative md:hidden flex items-center">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              aria-label="More options"
              className="flex items-center justify-center p-1.5 rounded-full bg-white/10 hover:bg-[#D4A59A]/20 text-[#D4A59A] transition-all border border-white/15"
            >
              {isMoreOpen ? <X className="w-4 h-4" /> : <MoreHorizontal className="w-4 h-4" />}
            </button>

            {/* Mobile More Popover Menu */}
            {isMoreOpen && (
              <div className="absolute right-0 top-9 w-48 bg-[#2C1F2D] border border-white/20 rounded-xl shadow-2xl p-2.5 z-50 flex flex-col gap-1.5">
                <Link
                  href="/specials"
                  onClick={() => setIsMoreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-[#D4A59A] font-semibold hover:bg-white/10 rounded-lg transition-colors no-underline text-[13px]"
                >
                  <Sparkles className="w-4.5 h-4.5 text-[#D4A59A]" />
                  <span>Specials ✨</span>
                </Link>
                <Link
                  href="/premium-products"
                  onClick={() => setIsMoreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-white/95 hover:text-[#D4A59A] hover:bg-white/10 rounded-lg transition-colors no-underline text-[13px]"
                >
                  <ShoppingBag className="w-4.5 h-4.5 text-white/80" />
                  <span>Shop</span>
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsMoreOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-white/95 hover:text-[#D4A59A] hover:bg-white/10 rounded-lg transition-colors no-underline text-[13px]"
                >
                  <CreditCard className="w-4.5 h-4.5 text-white/80" />
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
