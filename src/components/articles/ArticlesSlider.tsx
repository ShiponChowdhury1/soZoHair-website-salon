"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Article } from "@/data/articles";

interface ArticlesSliderProps {
  articles: Article[];
}

export default function ArticlesSlider({ articles }: ArticlesSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const sliderArticles = articles.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderArticles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === sliderArticles.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleArticleClick = (id: number) => {
    router.push(`/articles/${id}`);
  };

  if (sliderArticles.length === 0) return null;

  return (
    <section className="slider-section">
      <h2 className="section-title">Browse Sozo's Top Salon Tips</h2>
      <div className="slider-wrap">
        <button className="slider-arrow prev" onClick={handlePrev}>
          &#8592;
        </button>
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderArticles.map((article) => (
            <div
              key={article.id}
              className="slide"
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="slide-img">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="slide-body">
                <span className="slide-cat">{article.category}</span>
                <h3 className="slide-title">{article.title}</h3>
                <p className="slide-excerpt">{article.excerpt}</p>
                <button className="slide-link">Read more</button>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
      <div className="slider-controls">
        {sliderArticles.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
