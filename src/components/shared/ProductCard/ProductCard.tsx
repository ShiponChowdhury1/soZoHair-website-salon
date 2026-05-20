"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const isWished = isInWishlist(product.id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      thumbnail: product.thumbnail,
      route: product.route,
    });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      thumbnail: product.thumbnail,
      route: product.route,
    });
  };
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white border border-[#eaeaea] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col text-left">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
        <Link href={product.route}>
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
        {/* Favorite Button */}
        <button 
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10 ${
            isWished ? "bg-white text-[#D4A59A]" : "bg-black/40 text-white hover:bg-black/60"
          }`}
          aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={isWished ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow relative">
        <Link href={product.route} className="block flex-grow no-underline">
          <h3 className="text-[14px] font-medium text-[#2D2D2D] leading-snug mb-2 pr-10 min-h-[42px]">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill={i < Math.floor(product.rating) ? "#C4956A" : "#ddd"}>
                  <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
                </svg>
              ))}
            </div>
            <span className="text-[12px] text-[#666]">({product.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2 mt-auto pt-1">
            <span className="text-[15px] font-semibold text-[#2D2D2D]">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-[13px] text-[#999] line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
        </Link>
        
        {/* Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-[#444] hover:bg-[#D4A59A] hover:text-white transition-colors"
          aria-label="Add to cart"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
