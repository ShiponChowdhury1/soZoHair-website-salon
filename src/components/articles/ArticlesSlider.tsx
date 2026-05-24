"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Article } from "@/data/articles";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ArticlesSliderProps {
  articles: Article[];
}

export default function ArticlesSlider({ articles }: ArticlesSliderProps) {
  const router = useRouter();
  // Use the top 3 articles for the slider as requested
  const sliderArticles = articles.slice(0, 3);

  const handleArticleClick = (id: number) => {
    router.push(`/articles/${id}`);
  };

  if (sliderArticles.length === 0) return null;

  return (
    <section className="slider-section">
      <div className="slider-container">
        <h2 className="slider-heading">Browse Sozo&apos;s Top Salon Tips</h2>
        <div className="swiper-outer-wrap">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".slider-custom-pagination",
            }}
            navigation={{
              prevEl: ".slider-arrow-btn.prev",
              nextEl: ".slider-arrow-btn.next",
            }}
            loop={true}
            className="articles-swiper"
          >
            {sliderArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <div
                  className="slide-card"
                  onClick={() => handleArticleClick(article.id)}
                >
                  <div className="slide-card-body">
                    <span className="slide-card-cat">{article.category}</span>
                    <h3 className="slide-card-title">{article.title}</h3>
                    <p className="slide-card-excerpt">{article.excerpt}</p>
                    <button className="btn-readmore">Read more</button>
                  </div>
                  <div className="slide-card-img">
                    <Image src={article.image} alt={article.title} width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="slider-arrow-btn prev" aria-label="Previous slide">
            &#8592;
          </button>
          <button className="slider-arrow-btn next" aria-label="Next slide">
            &#8594;
          </button>
        </div>

        {/* Custom Pagination Indicator */}
        <div className="slider-custom-pagination" />
      </div>
    </section>
  );
}
