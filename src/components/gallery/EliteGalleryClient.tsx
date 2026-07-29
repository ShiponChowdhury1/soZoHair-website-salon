"use client";

import { useState } from "react";
import Image from "next/image";
import { Scissors, Sparkles, Crown, Calendar, Star, ArrowRight } from "lucide-react";
import BookOnlineButton from "@/components/common/BookOnlineButton";

export type TransformationItem = {
  name: string;
  category: string;
  before: string;
  after: string;
  quote: string;
};

export const transformations: TransformationItem[] = [
  {
    name: "Alicia B.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Alicia B Before.png",
    after: "/galleries/Alicia B After.jpg",
    quote: "I absolutely love my new look! It's bold, fresh, and makes me feel like myself again.",
  },
  {
    name: "Jen K.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Jen K before.png",
    after: "/galleries/Jen K after.png",
    quote: "A rich, dimensional color with volume and shape that brings out her best features.",
  },
  {
    name: "Lilah R.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Lilah R. before picture.jpg",
    after: "/galleries/Lilah R. after picture.jpg",
    quote: "A fresh cut and dimensional color that adds movement, shine, and confidence.",
  },
  {
    name: "Miriam F.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Miriam M. Before Picture.jpg",
    after: "/galleries/Miriam M. After Picture.jpg",
    quote: "A refreshed style and vibrant color that brings out my confidence and natural beauty.",
  },
  {
    name: "Roza V.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Roza V. Before Picture.jpg",
    after: "/galleries/Roza V. After Picture.jpg",
    quote: "A fresh, vibrant look that brings out my personality and makes me feel amazing!",
  },
  {
    name: "Gina B.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Gina B Before.png",
    after: "/galleries/Gina B After.png",
    quote: "A smooth, polished cut with rich dimension that elevates her natural beauty.",
  },
  {
    name: "Michelle F.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Michelle F. Before Picture.jpg",
    after: "/galleries/Michelle F. After Picture.jpg",
    quote: "A fresh new look that feels lighter, brighter, and uniquely me.",
  },
  {
    name: "Melanie B.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Melanie B. Before Picture.jpg",
    after: "/galleries/Melanie B. After Picture.jpg",
    quote: "A beautiful blend of warm color and sleek styling that brings out her hair.",
  },
  {
    name: "Julie E.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Julie E. Before picture.jpg",
    after: "/galleries/Julie E. After picture.jpg",
    quote: "Brighter, dimensional color and a modern cut that brings out her natural beauty.",
  },
  {
    name: "Sharon S.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Sharon S. Before Picture.jpg",
    after: "/galleries/Sharon S. After Picture.jpg",
    quote: "A classic precision cut with volumizing style that restores radiance and bounce.",
  },
  {
    name: "Sara H.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Sara H. Before Picture.jpg",
    after: "/galleries/Sara H. After Picture.jpg",
    quote: "Vibrant highlight tones with smooth finishing and healthy shine.",
  },
  {
    name: "Diana K.",
    category: "COLOR + STYLE TRANSFORMATION",
    before: "/galleries/Diana Before.jpg",
    after: "/galleries/Diana K After Picture.JPG",
    quote: "A complete confidence-building transformation designed for modern elegance.",
  },
];

const filters = ["All", "COLOR + STYLE TRANSFORMATION", "Women of 45069"];

function BeforeAfterCard({ item }: { item: TransformationItem }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-[#FAF3EA] p-4 sm:p-5 shadow-lg border border-[#E8DDD7] transition-all duration-300 hover:shadow-2xl hover:border-[#D7B46A]/60 flex flex-col justify-between">
      <div>
        {/* ── CARD HEADER (Matching Screenshot) ── */}
        <div className="mb-3 text-center">
          <div className="flex justify-center mb-1">
            <Sparkles className="w-4 h-4 text-[#C4956A]" />
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D2D2D] tracking-tight">
            SoZo Hair, Spa & Wigs
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4956A] mt-0.5">
            — WOMEN OF 45069 —
          </p>
        </div>

        {/* ── SIDE-BY-SIDE BEFORE & AFTER IMAGES (Fixed 50-50 Split) ── */}
        <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-xl bg-stone-100 grid grid-cols-2 gap-[2px] border border-[#E8DDD7]">
          {/* Left Side: BEFORE Image */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={item.before}
              alt={`${item.name} Before`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority
            />
            <div className="absolute left-2.5 top-2.5 z-10 rounded-md bg-black/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
              BEFORE
            </div>
          </div>

          {/* Right Side: AFTER Image */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={item.after}
              alt={`${item.name} After`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority
            />
            <div className="absolute right-2.5 top-2.5 z-10 rounded-md bg-black/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
              AFTER
            </div>
          </div>

          {/* Center SZ Emblem Badge & Vertical Divider Line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
            <div className="h-full w-[1.5px] bg-[#D7B46A]" />
            <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#D7B46A] bg-[#FAF3EA] text-[#C4956A] font-bold text-[11px] shadow-md font-[family-name:var(--font-playfair)]">
              SZ
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD FOOTER (Clean Stacked Layout for 3 Columns) ── */}
      <div className="mt-4 pt-3 border-t border-[#E8DDD7] flex flex-col gap-3">
        {/* Name & Category */}
        <div className="text-center">
          <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D2D2D] italic">
            {item.name}
          </h4>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4956A] mt-1">
            {item.category}
          </p>
        </div>

        {/* Quote */}
        <div className="text-center bg-white/70 p-3 rounded-lg border border-[#E8DDD7]/70">
          <p className="text-[11px] leading-relaxed text-[#4A4A4A] italic font-normal">
            <span className="text-[#C4956A] font-bold text-xs not-italic mr-1">&ldquo;</span>
            {item.quote}
            <span className="text-[#C4956A] font-bold text-xs not-italic ml-0.5">&rdquo;</span>
          </p>
          <p className="text-[9px] font-semibold text-[#C4956A] mt-1">
            – SoZo Design Team
          </p>
        </div>

        {/* Book Button & Note */}
        <div className="flex flex-col items-center gap-1 mt-1">
          <BookOnlineButton size="sm" fullWidth />
          <span className="text-[10px] text-[#777] flex items-center justify-center gap-1 mt-1">
            <Calendar className="w-3 h-3 text-[#C4956A]" /> Book your transformation today.
          </span>
        </div>
      </div>
    </article>
  );
}

export default function EliteGalleryClient() {
  return (
    <div className="min-h-screen bg-[#FBF8F4] text-stone-700">
      {/* ── ORIGINAL HERO BANNER SECTION (Full Height Image Fit) ── */}
      <section
        className="relative w-full overflow-hidden bg-white min-h-[520px] md:min-h-[620px] lg:min-h-[680px] flex items-center"
      >
        {/* Hero image positioned right-top to ensure full head & hair are visible */}
        <div className="absolute inset-0 z-0 flex justify-end overflow-hidden pointer-events-none">
          <div className="relative w-full lg:w-[65%] h-full">
            <Image
              src="/landing/galleries-background.png"
              alt="Gallery Hero"
              fill
              className="object-cover md:object-contain object-right-top"
              priority
            />
          </div>
        </div>

        {/* Gradient overlay for seamless text readability */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #ffffff 40%, rgba(255,255,255,0.92) 55%, rgba(255,255,255,0.4) 75%, transparent 95%)",
          }}
          aria-hidden="true"
        />

        {/* Hero text content */}
        <div
          className="relative z-[2] w-full max-w-[var(--container-max-width,1319px)] mx-auto px-5 sm:px-8 md:px-10 pt-[130px] md:pt-[160px] pb-16 md:pb-20"
        >
          <div style={{ maxWidth: "520px" }}>
            <span
              className="text-[12px] sm:text-[13px] font-bold tracking-[3px] uppercase text-[#C4956A] block mb-4"
            >
              Galleries
            </span>

            <h1
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] text-[#2B2B2B] mb-5 tracking-tight"
            >
              Before And After
              <br />
              Happy Clients
            </h1>

            <p
              className="text-base sm:text-[17px] text-[#6B6470] leading-[1.7] max-w-[420px] mb-8 font-normal"
            >
              Browse through SoZo&apos;s before and after happy clients.
            </p>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-[#C4956A] hover:bg-[#2C2420] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-300 shadow-md"
            >
              Browse
            </a>
          </div>
        </div>
      </section>



      {/* ── GALLERY GRID SECTION (3 CARDS PER ROW ON DESKTOP) ── */}
      <section id="gallery" className="px-5 py-16 sm:py-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4956A] block mb-2">
              REAL TRANSFORMATIONS
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C2420] max-w-2xl mx-auto leading-tight">
              SoZo&apos;s Before And After
              <br />
              Happy Clients
            </h2>
            <p className="mt-4 text-base sm:text-[17px] text-[#6B6470] max-w-xl mx-auto font-normal leading-relaxed">
              Explore real client transformations, customized colors, and precision hair styling results crafted by our expert team.
            </p>
          </div>



          {/* 3 Cards Per Row Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((item) => (
              <BeforeAfterCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
