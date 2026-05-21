"use client";

import React from "react";

export default function ArticlesHero() {
  const handleBrowseClick = () => {
    const section = document.querySelector(".articles-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">Salon Tips</span>
          <h1 className="hero-title">
            Sozo Hair Salon Tips Articles
          </h1>
          <p className="hero-sub">
            Discover the latest hair trends, professional styling advice, and expert care tips directly from our master stylists.
          </p>
          <button className="btn-outline" onClick={handleBrowseClick}>
            Browse Articles
          </button>
        </div>
      </div>
    </section>
  );
}

