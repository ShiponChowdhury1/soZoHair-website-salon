"use client";

import React, { useState } from "react";

interface PlasmaFaqAccordionProps {
  faqs: { q: string; a: string }[];
}

export default function PlasmaFaqAccordion({ faqs }: PlasmaFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              borderBottom: "1px solid #EDE7E0",
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: "100%",
                padding: "20px 0",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 15,
                color: "#2D2D2D",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                textAlign: "left",
                lineHeight: 1.5,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C4956A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#2D2D2D";
              }}
            >
              <span style={{ flex: 1, paddingRight: 16 }}>{faq.q}</span>
              <span
                style={{
                  color: "#C4956A",
                  fontSize: 22,
                  fontWeight: 300,
                  flexShrink: 0,
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 500 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.3s ease",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                style={{
                  padding: "0 0 20px",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#555",
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
