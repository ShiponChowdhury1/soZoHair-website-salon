"use client";

import React from "react";
import { Article } from "@/data/articles";

interface ArticleDetailHeaderProps {
  article: Article;
}

export default function ArticleDetailHeader({ article }: ArticleDetailHeaderProps) {
  return (
    <div className="article-header">
      <div className="article-meta-top">
        <span className="meta-cat">{article.category}</span>
        <span className="meta-read">&#128337; {article.readTime}</span>
        <span className="meta-read">&#128197; {article.date}</span>
      </div>
      <h1 className="article-title">{article.title}</h1>
      <p className="article-subtitle">{article.excerpt}</p>
      <div className="author-row">
        <img
          src={article.authorImage}
          alt={article.author}
          className="author-avatar"
        />
        <div className="author-info">
          <div className="author-name">{article.author}</div>
          <div className="author-bio">Hair Fashion Expert · 37 Years Experience</div>
        </div>
        <span className="author-date">{article.date}</span>
        <div className="share-btns">
          <button className="share-btn" title="Facebook">f</button>
          <button className="share-btn" title="Twitter">𝕏</button>
          <button className="share-btn" title="Pinterest">P</button>
        </div>
      </div>
    </div>
  );
}
