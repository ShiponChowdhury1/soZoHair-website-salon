"use client";

import React from "react";
import Image from "next/image";
import { Article } from "@/data/articles";

interface ArticleDetailContentProps {
  article: Article;
}

export default function ArticleDetailContent({ article }: ArticleDetailContentProps) {
  return (
    <div className="article-content">
      <p className="intro-text">
        After a year of being restricted, we&apos;ll see hair become a freedom expression.
        This is exciting no matter how you look at it. Some will feel free to cut their
        hair, some will feel free to grow their hair. Some will start coloring and some
        will stop coloring. The fact that the trends are varied in style, length and
        color shows that we are free to adapt them to the individual as well, embracing
        the throwback of many of the trends says a lot about the freedom aspect as well.
        Embrace your individuality and choose your perfect style.
      </p>

      {article.sections.map((section, idx) => (
        <div key={idx} className="content-section">
          <h2 className="section-heading">{section.title}</h2>
          <div className="section-body">
            <p className="section-text">{section.text}</p>
            <div className="section-images">
              {section.images.slice(0, 4).map((img, imgIdx) => (
                <Image
                  key={imgIdx}
                  src={img}
                  alt={section.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full h-auto"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
