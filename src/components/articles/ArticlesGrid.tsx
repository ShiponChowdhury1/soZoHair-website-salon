"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Article } from "@/data/articles";

interface ArticlesGridProps {
  articles: Article[];
  activeCategory?: string;
}

const PER_PAGE = 11;

// Maps URL category slug → keywords to match in article tags/category
const CATEGORY_MAP: Record<string, { label: string; keywords: string[] }> = {
  "sozo-hair-salon-tips": { label: "Sozo Hair Salon Tips", keywords: ["tips", "hair care", "salon", "article"] },
  "hair-cuts": { label: "Hair Cuts", keywords: ["hair cut", "shag", "bob", "lob", "cut", "bangs", "fringe"] },
  "hair-extensions": { label: "Hair Extensions", keywords: ["extension", "hair extension"] },
  "foiling-and-highlights": { label: "Foiling and Highlights", keywords: ["foiling", "highlight", "foil", "balayage"] },
  "professional-hair-color": { label: "Professional Hair Color", keywords: ["color", "colour", "brazilian blowout", "blowout", "professional"] },
  "trendy-hair-styles": { label: "Trendy Hair Styles", keywords: ["trendy", "trend", "style", "styling", "braids"] },
};

function articleMatchesCategory(article: Article, slug: string): boolean {
  const mapping = CATEGORY_MAP[slug];
  if (!mapping) return true;
  const haystack = [
    article.title,
    article.category,
    article.excerpt,
    ...article.tags,
    ...(article.sections?.map((s) => s.title) ?? []),
  ].join(" ").toLowerCase();
  return mapping.keywords.some((kw) => haystack.includes(kw));
}

export default function ArticlesGrid({ articles, activeCategory }: ArticlesGridProps) {
  const [sortBy, setSortBy] = useState<"latest" | "oldest" | "az">("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  // Reset page when sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  const getSortedArticles = () => {
    let arr = [...articles];
    // Filter by category if active
    if (activeCategory && CATEGORY_MAP[activeCategory]) {
      arr = arr.filter((a) => articleMatchesCategory(a, activeCategory));
    }
    if (sortBy === "az") {
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "oldest") {
      return arr;
    }
    return arr.reverse(); // Latest is reverse order
  };

  const sortedArticles = getSortedArticles();
  const totalArticles = sortedArticles.length;
  const totalPages = Math.ceil(totalArticles / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const paginatedArticles = sortedArticles.slice(startIndex, startIndex + PER_PAGE);

  const handleCardClick = (id: number) => {
    router.push(`/articles/${id}`);
  };

  const goPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const section = document.querySelector(".articles-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderPaginationButtons = () => {
    if (totalPages <= 1) return null;

    const buttons = [];

    // Left Arrow
    buttons.push(
      <button
        key="prev"
        className="page-btn"
        onClick={() => goPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        &#8592;
      </button>
    );

    // Number Buttons & Dots
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        buttons.push(
          <button
            key={i}
            className={`page-btn ${i === currentPage ? "active" : ""}`}
            onClick={() => goPage(i)}
          >
            {i}
          </button>
        );
      } else if (Math.abs(i - currentPage) === 2) {
        buttons.push(
          <span key={`dots-${i}`} style={{ padding: "0 4px", color: "var(--gray)" }}>
            …
          </span>
        );
      }
    }

    // Right Arrow
    buttons.push(
      <button
        key="next"
        className="page-btn"
        onClick={() => goPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        &#8594;
      </button>
    );

    return buttons;
  };

  return (
    <section className="articles-section">
      <div className="slider-container">
        {/* Active Category Banner */}
        {activeCategory && CATEGORY_MAP[activeCategory] && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", padding: "10px 16px", background: "#FDF8F4", borderRadius: "10px", border: "1px solid #EADCC9" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#D4A59A", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Category:
            </span>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#111" }}>
              {CATEGORY_MAP[activeCategory].label}
            </span>
            <Link href="/articles" style={{ marginLeft: "auto", fontSize: "12px", color: "#D4A59A", fontWeight: 600, textDecoration: "none" }}>
              ✕ Clear filter
            </Link>
          </div>
        )}
        <div className="articles-header">
          <h2>Sozo&apos;s Top Articles</h2>
          <div className="sort-wrap">
            <span>Sort by:</span>
            <select
              id="sortSelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "latest" | "oldest" | "az")}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A–Z</option>
            </select>
          </div>
        </div>
        <div className="articles-grid" id="articlesGrid">
          {paginatedArticles.map((article) => (
            <div
              key={article.id}
              className="card"
              onClick={() => handleCardClick(article.id)}
            >
              <div className="card-img">
                <Image src={article.image} alt={article.title} width={400} height={300} loading="lazy" className="w-full h-auto" />
              </div>
              <div className="card-body">
                <span className="card-cat">{article.category}</span>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-excerpt">{article.excerpt}</p>
                <button className="card-read">Read More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination" id="pagination">
          {renderPaginationButtons()}
        </div>
      </div>
    </section>
  );
}
