"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Article } from "@/data/articles";

interface ArticlesGridProps {
  articles: Article[];
}

const PER_PAGE = 11;

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  const [sortBy, setSortBy] = useState<"latest" | "oldest" | "az">("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  // Reset page when sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  const getSortedArticles = () => {
    const arr = [...articles];
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
