import { productSections } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function PremiumProductsPage() {
  const section = productSections.find((s) => s.id === "premium-products");
  const products = section?.products || [];
  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />

      <section className="flex-1 w-full pt-44 md:pt-48 pb-24 md:pb-32">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Header */}
          <div className="mb-14">
            <span className="text-[12px] font-medium tracking-[3px] uppercase text-[#999] block mb-3">
              SHOP
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
              {section?.title || "Premium Products"}
            </h1>
            <p className="text-[15px] text-[#666] max-w-[600px] leading-[1.8]">
              {section?.description}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 bg-gray-100/50 hover:text-gray-600 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#D4A59A] text-[14px] font-medium">1</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#666] hover:bg-gray-100 transition-colors text-[14px] font-medium">2</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#666] hover:bg-gray-100 transition-colors text-[14px] font-medium">3</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#666] hover:bg-gray-100 transition-colors text-[14px] font-medium">4</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#666] hover:bg-gray-100 transition-colors text-[14px] font-medium">5</button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#666] hover:bg-gray-100 transition-colors text-[14px] font-medium">21</button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors border border-gray-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
