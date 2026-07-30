"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import TopHeader from "@/components/layout/TopHeader";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { 
  Sparkles, 
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Images,
  Award
} from "lucide-react";

// All 49 Images from /public/american-beauty/
const chicagoShowImages = [
  { src: "/american-beauty/American-Beauty-Show-Chicago-1-1-150x84.jpg", title: "Chicago Show Stage Opening", category: "Stage" },
  { src: "/american-beauty/American-Beauty-Show-Chicago-1-2-84x150.jpg", title: "SoZo Stylist Demonstration", category: "Demonstration" },
  { src: "/american-beauty/American-Beauty-Show-Chicago-1-3-150x84.jpg", title: "Hair Transformation Spotlight", category: "Styling" },
  { src: "/american-beauty/American-Beauty-Show-Chicago-1-4-113x150.jpg", title: "Master Class Presentation", category: "Masterclass" },
  { src: "/american-beauty/American-Beauty-Show-Chicago-1-5-84x150.jpg", title: "Model Runway Styling", category: "Runway" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-2-1-150x84.jpg", title: "SoZo Creative Color Showcase", category: "Color" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-2-2-150x84.jpg", title: "Precision Cut Live Demo", category: "Haircut" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-2-3-113x150.jpg", title: "Behind the Scenes Prep", category: "Backstage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-2-4-150x84.jpg", title: "Stage Lighting & Hair Art", category: "Stage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-2-5-150x84.jpg", title: "SoZo Hair Team Feature", category: "Team" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-3-1-150x84.jpg", title: "Advanced Styling Techniques", category: "Styling" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-3-2-84x150.jpg", title: "Live Audience Demonstration", category: "Demonstration" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-3-3-84x150.jpg", title: "Chic Updo Transformation", category: "Updo" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-3-4-150x84.jpg", title: "Chicago Expo Floor Booth", category: "Expo Floor" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-4-4-150x84.jpg", title: "Creative Hair Design Spotlight", category: "Design" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-4-5-84x150.jpg", title: "Pro Hair Care Seminar", category: "Seminar" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-5-1-113x150.jpg", title: "Model Final Look Reveal", category: "Runway" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-5-2-84x150.jpg", title: "Precision Shears & Styling", category: "Styling" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-5-3-150x150.jpg", title: "SoZo Team Backstage Photo", category: "Team" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-5-4-84x150.jpg", title: "Texturizing Hair Art", category: "Technique" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-5-5-150x113.jpg", title: "American Beauty Show Main Hall", category: "Expo Floor" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-6-1-84x150.jpg", title: "Intensive Hair Care Q&A", category: "Seminar" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-6-2-150x84.jpg", title: "High-Fashion Hair Sculpture", category: "Design" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-6-3-150x112.jpg", title: "Professional Educator Session", category: "Masterclass" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-6-4-113x150.jpg", title: "SoZo Hair Artists on Stage", category: "Stage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-6-5-113x150.jpg", title: "Model Prep & Finishing Touches", category: "Backstage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-7-1-150x84.jpg", title: "Vibrant Color Melt Demo", category: "Color" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-7-2-113x150.jpg", title: "Styling Products & Tools Spot", category: "Products" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-7-3-113x150.jpg", title: "Chicago Runway Presentation", category: "Runway" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-7-4-150x113.jpg", title: "Creative Hair Silhouette", category: "Design" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-7-5-150x113.jpg", title: "SoZo Stylists & Attendees", category: "Expo Floor" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-8-1-113x150.jpg", title: "Volumetric Bouncy Blowout", category: "Styling" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-8-2-110x150.jpg", title: "Hair Extension Blending", category: "Extensions" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-8-3-113x150.jpg", title: "Master Educator Panel", category: "Seminar" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-8-4-110x150.jpg", title: "Precision Layering Live", category: "Haircut" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-8-5-84x150.jpg", title: "Backstage Hair Consultation", category: "Backstage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-9-1-84x150.jpg", title: "Boutique Hair Accessories", category: "Products" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-9-2-150x113.jpg", title: "Avant-Garde Hair Design", category: "Design" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-9-3-113x150.jpg", title: "Smooth Gloss Finish Demo", category: "Styling" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-9-4-110x150.jpg", title: "Stage Lighting Close-Up", category: "Stage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-9-5-110x150.jpg", title: "Final Team Celebration", category: "Team" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-10-1-84x150.jpg", title: "Hair Care Product Showcase", category: "Products" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-10-2-84x150.jpg", title: "Live Styling Workshop", category: "Masterclass" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-10-3-84x150.jpg", title: "Model Runway Walk", category: "Runway" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-10-4-110x150.jpg", title: "Advanced Color Chemistry", category: "Color" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-10-5-150x84.jpg", title: "SoZo Salon Honors & Feature", category: "Award" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-11-1-84x150.jpg", title: "Chicago Expo Floor Walkthrough", category: "Expo Floor" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-11-2-113x150.jpg", title: "Model Hair Prep Station", category: "Backstage" },
  { src: "/american-beauty/American-Beauty-Show-in-Chicago-11-3-113x150.jpg", title: "SoZo HAIR Show Closing Event", category: "Stage" }
];

export default function AmericanBeautyShowPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? chicagoShowImages.length - 1 : prev! - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === chicagoShowImages.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex]);

  // Keyboard Navigation for Album Viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <>
      <TopHeader />
      <Navbar />

      <main className="min-h-screen bg-[#FDF8F4] text-[#111111] pt-16 sm:pt-24 pb-24">
        {/* ── HERO HEADER ── */}
        <section className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10 animate-in fade-in duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5ECE2] text-[#D4A59A] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
              <Award className="w-4 h-4 text-[#D4A59A]" /> American Beauty Show in Chicago
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight mb-4 leading-tight">
              SoZo HAIR at the Chicago American Beauty Show
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed">
              Explore behind-the-scenes gallery moments, masterclass demonstrations, and creative styling highlights of the SoZo Hair team at the prestigious Chicago American Beauty Show.
            </p>
          </div>

          {/* ── PHOTO ALBUM MASONRY GALLERY ── */}
          <div className="rounded-3xl p-4 sm:p-8 bg-[#FDF8F4]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EADCC9]/50 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4A59A] mb-1">
                  <Images className="w-4 h-4" /> Photo Album Gallery
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
                  Chicago Beauty Show Highlights
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#888888] bg-[#F5ECE2] px-4 py-2 rounded-full">
                  {chicagoShowImages.length} Photos
                </span>
              </div>
            </div>

            {/* Pinterest-Style Editorial Masonry Grid — Natural Aspect Ratios & Hover Active Border */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {chicagoShowImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="break-inside-avoid relative rounded-3xl overflow-hidden cursor-pointer bg-[#F5ECE2] border-2 border-transparent hover:border-[#D4A59A] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A59A] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block mb-1.5 self-start">
                      {img.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold leading-snug">
                      {img.title}
                    </h3>
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── INTERACTIVE PHOTO ALBUM LIGHTBOX SLIDESHOW ── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none"
        >
          {/* Top Bar: Title & Counter & Close */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white z-10 py-2">
            <div className="flex items-center gap-3">
              <span className="bg-[#D4A59A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Photo {selectedIndex + 1} of {chicagoShowImages.length}
              </span>
              <span className="text-sm font-semibold text-white/80 hidden sm:inline">
                {chicagoShowImages[selectedIndex].category}
              </span>
            </div>
            
            <button
              onClick={() => setSelectedIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image with Previous & Next Controls */}
          <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#D4A59A] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Active Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={chicagoShowImages[selectedIndex].src}
                alt={chicagoShowImages[selectedIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#D4A59A] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Bottom Bar: Photo Title & Thumbnail Strip */}
          <div className="w-full max-w-5xl text-center z-10 space-y-3">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide">
              {chicagoShowImages[selectedIndex].title}
            </h3>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 custom-scrollbar max-w-full px-4">
              {chicagoShowImages.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    selectedIndex === idx ? "border-[#D4A59A] scale-105" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
