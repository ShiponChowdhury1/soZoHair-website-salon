"use client";

import React from "react";
import { Article } from "@/data/articles";

interface ArticleAuthorCardProps {
  article: Article;
}

export default function ArticleAuthorCard({ article }: ArticleAuthorCardProps) {
  return (
    <div className="author-card">
      <img
        src={article.authorImage}
        alt={article.author}
        className="author-card-avatar"
      />
      <div>
        <div className="author-card-name">{article.author}</div>
        <div className="author-card-title">Master Stylist &amp; Hair Color Expert</div>
        <p className="author-card-bio">
          {article.author} has 37 years of experience in the Hair Fashion Industry and
          is considered an expert in hair design, hair color, and beauty makeovers.
        </p>
      </div>
    </div>
  );
}
