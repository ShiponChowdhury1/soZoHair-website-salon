"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { productSections } from "@/data/products";

export default function SpecialsPopup() {
  const [visible, setVisible] = useState(false);
  const specialSection = productSections.find((s) => s.id === "special-products");
  const specialProducts = specialSection?.products.slice(0, 2) || [];

  useEffect(() => {
    // Show popup 1 second after page load
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl z-10"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center px-10 py-8 border-b border-gray-100">
          <p className="text-xs tracking-[3px] text-gray-400 uppercase mb-3 font-sans">Specials</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            Current Specials & Exclusive Offers
          </h2>
          <p className="text-sm text-gray-500 font-sans max-w-md mx-auto leading-relaxed">
            Special offers at SoZo Hair, Spa & Wigs – designed to pamper you and save you money.
            Check out our latest deals and book your appointment today!
          </p>
        </div>

        {/* Two offers */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {specialProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`p-7 ${index === 0 ? "border-b md:border-b-0 md:border-r border-gray-100" : ""}`}
            >
              <Link href={product.route} onClick={() => setVisible(false)}>
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-gray-100 relative group">
                  <Image 
                    src={product.thumbnail} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              </Link>
              <span className="text-[10px] tracking-[2px] text-gray-400 uppercase font-sans block mb-2">
                {product.category}
              </span>
              <Link href={product.route} onClick={() => setVisible(false)} className="no-underline">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug hover:text-[#D4A59A] transition-colors" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                  {product.name}
                </h3>
              </Link>
              <p className="text-[13px] text-gray-500 font-sans leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-semibold text-[#2D2D2D]">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-[14px] text-[#999] line-through">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
