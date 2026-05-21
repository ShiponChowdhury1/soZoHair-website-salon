import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ArticleDetailHeader from "@/components/articles/ArticleDetailHeader";
import ArticleDetailContent from "@/components/articles/ArticleDetailContent";
import ArticleAuthorCard from "@/components/articles/ArticleAuthorCard";
import ArticleComments from "@/components/articles/ArticleComments";
import RelatedArticles from "@/components/articles/RelatedArticles";
import { SOZO_ARTICLES } from "@/data/articles";
import "@/components/articles/articles.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const articleId = parseInt(id) || 1;
  const article = SOZO_ARTICLES.find((a) => a.id === articleId) || SOZO_ARTICLES[0];

  return {
    title: `${article.title} | SoZo Hair Salon & Wigs`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const articleId = parseInt(id) || 1;
  const article = SOZO_ARTICLES.find((a) => a.id === articleId) || SOZO_ARTICLES[0];

  return (
    <main>
      <Navbar />
      <div className="articles-container pt-[70px] md:pt-[90px] pb-16">
        <div className="back-bar">
          <Link href="/articles" className="back-link">
            ← Back to Articles
          </Link>
        </div>

        {/* Article header */}
        <ArticleDetailHeader article={article} />

        {/* Article content */}
        <ArticleDetailContent article={article} />

        {/* Author bio card */}
        <ArticleAuthorCard article={article} />

        {/* Comments section */}
        <ArticleComments article={article} />

        {/* Related articles */}
        <RelatedArticles currentArticleId={article.id} allArticles={SOZO_ARTICLES} />
      </div>
      <Footer />
    </main>
  );
}
