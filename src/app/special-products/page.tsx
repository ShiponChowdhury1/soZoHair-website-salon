import { productSections } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function SpecialProductsPage() {
  const section = productSections.find((s) => s.id === "special-products");
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
              {section?.title || "Special Products"}
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

        </div>
      </section>

      <Footer />
    </main>
  );
}
