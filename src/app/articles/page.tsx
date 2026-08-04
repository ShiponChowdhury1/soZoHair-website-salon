import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ArticlesHero from "@/components/articles/ArticlesHero";
import ArticlesSlider from "@/components/articles/ArticlesSlider";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import { SOZO_ARTICLES } from "@/data/articles";
import "@/components/articles/articles.css";

export const metadata: Metadata = {
  title: "Salon Tips Articles | SoZo Hair Salon & Wigs",
  description:
    "Discover the latest hair trends, professional styling advice, and expert care tips directly from our master stylists at SoZo Hair.",
};

interface ArticlesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { category } = await searchParams;
  return (
    <main>
      <Navbar />
      <div className="articles-container pt-[70px] md:pt-[90px]">
        <ArticlesHero />
        <ArticlesSlider articles={SOZO_ARTICLES} />
        <ArticlesGrid articles={SOZO_ARTICLES} activeCategory={category} />
      </div>
      <Footer />
    </main>
  );
}
