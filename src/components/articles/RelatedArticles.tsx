"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Article } from "@/data/articles";

interface RelatedArticlesProps {
  currentArticleId: number;
  allArticles: Article[];
}

export default function RelatedArticles({ currentArticleId, allArticles }: RelatedArticlesProps) {
  const router = useRouter();
  const related = allArticles.filter((a) => a.id !== currentArticleId).slice(0, 3);

  const handleCardClick = (id: number) => {
    router.push(`/articles/${id}`);
  };

  if (related.length === 0) return null;

  return (
    <div className="related-section">
      <div className="related-inner">
        <h2 className="related-title">Related Articles</h2>
        <div className="related-grid">
          {related.map((article) => (
            <div
              key={article.id}
              className="related-card"
              onClick={() => handleCardClick(article.id)}
            >
              <div className="related-img">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <div className="related-body">
                <div className="related-cat">{article.category}</div>
                <div className="related-name">{article.title}</div>
                <p className="related-excerpt">{article.excerpt}</p>
                <span className="related-read">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
