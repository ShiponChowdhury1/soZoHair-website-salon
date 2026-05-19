"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  slug: string;
  route: string;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  currency: string;
  stock: boolean;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  featured?: boolean;
}

interface ProductDetailProps {
  product: Product;
  sectionTitle: string;
  sectionSlug: string;
}

const tabs = ["Descriptions", "Additional Information", "Customer Feedback"] as const;
type Tab = (typeof tabs)[number];

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill={i < Math.floor(rating) ? "#C4956A" : "#ddd"}>
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
          </svg>
        ))}
      </div>
      <span className="text-[14px] text-[#666]">({reviewCount} reviews)</span>
    </div>
  );
}

export default function ProductDetail({ product, sectionTitle, sectionSlug }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Descriptions");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice,
        thumbnail: product.thumbnail,
        route: product.route,
      },
      quantity
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[13px] text-[#999] mb-10">
        <Link href="/" className="hover:text-[#D4A59A] transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/${sectionSlug}`} className="hover:text-[#D4A59A] transition-colors">{sectionTitle}</Link>
        <span>/</span>
        <span className="text-[#2D2D2D]">{product.name}</span>
      </nav>

      {/* Product Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        {/* Image */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-50">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {product.oldPrice && (
            <span className="absolute top-4 left-4 bg-[#D4A59A] text-white text-[12px] font-medium px-3 py-1 rounded-full">
              -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span className="text-[12px] font-medium tracking-[3px] uppercase text-[#999] mb-3">
            {product.category}
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-4 leading-tight">
            {product.name}
          </h1>

          <StarRating rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-baseline gap-3 mt-6 mb-6">
            <span className="text-3xl font-semibold text-[#2D2D2D]">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-xl text-[#999] line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-[15px] text-[#666] leading-[1.8] mb-8">
            {product.description}
          </p>

          <div className="flex items-center gap-1 mb-6">
            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${product.stock ? "bg-green-500" : "bg-red-500"}`} />
            <span className="text-[14px] text-[#666]">
              {product.stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
              >
                −
              </button>
              <span className="w-10 text-center text-[15px] font-medium text-[#2D2D2D]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 h-11 bg-[#D4A59A] text-white font-medium rounded-full hover:bg-[#C4956A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 min-w-[180px]"
            >
              {addedToCart ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Added!
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>

            <button
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#666] hover:border-[#D4A59A] hover:text-[#D4A59A] transition-colors"
              aria-label="Add to wishlist"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* Go to Cart Link */}
          <Link
            href="/cart"
            className="mt-4 text-[13px] text-[#D4A59A] hover:text-[#C4956A] transition-colors inline-flex items-center gap-1"
          >
            View Shopping Cart →
          </Link>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-100 pt-12 mb-16">
        {/* Tab Headers */}
        <div className="flex gap-8 mb-10 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[15px] font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-[#2D2D2D] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4A59A]"
                  : "text-[#999] hover:text-[#666]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {activeTab === "Descriptions" && (
            <div className="space-y-5 max-w-3xl">
              <h3 className="text-xl font-semibold text-[#2D2D2D]">Product Description</h3>
              <p className="text-[15px] text-[#666] leading-[1.9]">
                {product.description}
              </p>
              <p className="text-[15px] text-[#666] leading-[1.9]">
                Each product in this collection is crafted with premium ingredients and salon-grade formulations 
                to deliver professional results at home. Recommended by top stylists for daily use, our products 
                are sulfate-free, paraben-free, and cruelty-free.
              </p>
              <ul className="space-y-2 text-[15px] text-[#666]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A59A] mt-1">✓</span>
                  <span>Sulfate-free & paraben-free formula</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A59A] mt-1">✓</span>
                  <span>Professional salon-grade quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A59A] mt-1">✓</span>
                  <span>Suitable for all hair types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A59A] mt-1">✓</span>
                  <span>Cruelty-free and vegan-friendly</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Additional Information" && (
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-6">Additional Information</h3>
              <table className="w-full text-left">
                <tbody>
                  {[
                    ["Category", product.category],
                    ["Brand", "SoZo Hair"],
                    ["Availability", product.stock ? "In Stock" : "Out of Stock"],
                    ["Rating", `${product.rating} / 5.0`],
                    ["Weight", "350g"],
                    ["Dimensions", "8 × 3 × 3 in"],
                    ["SKU", `SOZO-${String(product.id).padStart(4, "0")}`],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-50">
                      <td className="py-4 text-[14px] font-medium text-[#2D2D2D] w-1/3">{label}</td>
                      <td className="py-4 text-[14px] text-[#666]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Customer Feedback" && (
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-6">Customer Reviews</h3>
              <div className="flex items-center gap-6 mb-8 p-6 rounded-2xl bg-gray-50">
                <div className="text-center">
                  <div className="text-4xl font-semibold text-[#2D2D2D]">{product.rating}</div>
                  <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-6">
                {[
                  { name: "Sarah M.", date: "2 weeks ago", rating: 5, text: "Absolutely love this product! My hair has never felt softer. I've been using it for a month and the results are incredible." },
                  { name: "Jessica K.", date: "1 month ago", rating: 4, text: "Great quality product. The scent is amazing and it works well with my hair type. Would definitely recommend to friends." },
                  { name: "Amanda R.", date: "2 months ago", rating: 5, text: "This is my third purchase. Cannot live without it now. My stylist noticed a huge improvement in my hair health." },
                ].map((review, i) => (
                  <div key={i} className="border-b border-gray-50 pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#D4A59A]/20 flex items-center justify-center text-[#D4A59A] font-semibold text-sm">
                          {review.name[0]}
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-[#2D2D2D]">{review.name}</p>
                          <p className="text-[12px] text-[#999]">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <svg key={j} width="12" height="12" viewBox="0 0 14 14" fill={j < review.rating ? "#C4956A" : "#ddd"}>
                            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[14px] text-[#666] leading-[1.8] pl-[52px]">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
