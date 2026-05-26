"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { productSections } from "@/data/products";

export default function SpecialsPopup() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialSection = productSections.find((s) => s.id === "special-products");
  const specialProducts = specialSection?.products.slice(0, 2) || [];

  useEffect(() => {
    // Check if the user has already dismissed this promotion in this session
    const dismissed = sessionStorage.getItem("sozo_specials_dismissed_v1");
    if (!dismissed) {
      // Slide in the card 1.5 seconds after page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("sozo_specials_dismissed_v1", "true");
  };

  if (!visible || specialProducts.length === 0) return null;

  const currentProduct = specialProducts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % specialProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + specialProducts.length) % specialProducts.length);
  };

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[330px] z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-100 shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 animate-slide-in-right">
      
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5 border-b border-neutral-50 bg-[#FDF9F5]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-[#C4956A] tracking-wider uppercase font-sans">
            Special Deals
          </span>
          <span className="text-[10px] text-gray-400 font-sans">
            ({currentIndex + 1}/{specialProducts.length})
          </span>
        </div>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 transition-colors text-xs p-1 leading-none rounded-full hover:bg-neutral-100/80"
          aria-label="Dismiss offer"
        >
          ✕
        </button>
      </div>

      {/* Main card body */}
      <div className="p-4">
        {/* Product image */}
        <Link href={currentProduct.route} onClick={handleClose} className="block group">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-neutral-50">
            <Image
              src={currentProduct.thumbnail}
              alt={currentProduct.name}
              fill
              sizes="(max-width: 640px) 100vw, 298px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Category & Title */}
        <span className="text-[9px] tracking-[1.5px] text-gray-400 uppercase font-sans block mb-1 font-semibold">
          {currentProduct.category}
        </span>
        <Link href={currentProduct.route} onClick={handleClose} className="no-underline block group mb-1.5">
          <h3 
            className="text-[15px] font-semibold text-gray-950 leading-snug group-hover:text-[#C4956A] transition-colors line-clamp-1" 
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {currentProduct.name}
          </h3>
        </Link>
        <p className="text-[11px] text-gray-500 font-sans leading-relaxed mb-4 line-clamp-2">
          {currentProduct.description}
        </p>

        {/* Footer row: Pricing & Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-50">
          {/* Price details */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-bold text-gray-950">${currentProduct.price.toFixed(2)}</span>
            {currentProduct.oldPrice && (
              <span className="text-[11px] text-gray-400 line-through font-sans">${currentProduct.oldPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Navigation Controls & Action Button */}
          <div className="flex items-center gap-1">
            <button 
              onClick={handlePrev}
              className="w-6.5 h-6.5 rounded-full border border-neutral-100 flex items-center justify-center text-xs text-gray-500 hover:bg-neutral-50 hover:text-gray-950 active:scale-95 transition-all"
              aria-label="Previous offer"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="w-6.5 h-6.5 rounded-full border border-neutral-100 flex items-center justify-center text-xs text-gray-500 hover:bg-neutral-50 hover:text-gray-950 active:scale-95 transition-all"
              aria-label="Next offer"
            >
              →
            </button>
            <Link 
              href={currentProduct.route} 
              onClick={handleClose}
              className="ml-1 px-3.5 py-1.5 bg-[#C4956A] text-white text-[11px] font-bold rounded-full hover:bg-[#B3845A] active:scale-95 transition-all no-underline shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
