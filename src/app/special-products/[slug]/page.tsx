import { productSections } from "@/data/products";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ProductDetail from "@/components/shared/ProductDetail/ProductDetail";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SpecialProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const section = productSections.find((s) => s.id === "special-products");
  const product = section?.products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />
      <section className="flex-1 w-full pt-32 pb-24 md:py-32">
        <ProductDetail
          product={product}
          sectionTitle="Special Products"
          sectionSlug="special-products"
        />
      </section>
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const section = productSections.find((s) => s.id === "special-products");
  return (section?.products || []).map((p) => ({ slug: p.slug }));
}
