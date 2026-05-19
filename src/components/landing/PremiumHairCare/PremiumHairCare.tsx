import Image from "next/image";
import Link from "next/link";
import { productSections } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard/ProductCard";

export default function PremiumHairCare() {
  const premiumSection = productSections.find((s) => s.id === "premium-products");
  const productsToDisplay = premiumSection?.products || [];
  return (
    <section className="w-full bg-[#FFFFFF] py-24 md:py-32" id="premium">
      <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-14">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[42px] font-semibold text-[#2D2D2D]">
            Premium Hair Care Suites
          </h2>
          <p className="text-[15px] text-[#666] max-w-[500px] leading-[1.6]">
            Professional-grade hair care products curated for every hair type and concern
          </p>
          <div className="w-[60px] h-0.5 bg-[#C4956A] mt-2 rounded-[1px]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {productsToDisplay.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/premium-products"
            className="inline-flex items-center justify-center px-10 py-3.5 text-white rounded-md text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg no-underline"
            style={{ backgroundColor: "#D4A59A" }}
          >
            View all products
          </Link>
        </div>

      </div>
    </section>
  );
}
