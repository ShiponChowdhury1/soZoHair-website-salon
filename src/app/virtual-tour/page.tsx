"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import TopHeader from "@/components/layout/TopHeader";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { 
  MapPin, 
  Compass, 
  ExternalLink, 
  Building2, 
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Images
} from "lucide-react";

// All 23 Virtual Tour Images from /public/virtualTour
const tourGalleryImages = [
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Customer-Lobby-300x225.jpg",
    title: "Customer Lobby & Reception",
    category: "Lobby"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Lobby-and-Retail-300x225.jpg",
    title: "Lobby & Product Display",
    category: "Lobby"
  },
  {
    src: "/virtualTour/SoZo-Heavenly-Hair-Care-Retail-Wall-300x225.jpg",
    title: "Heavenly Hair Care Retail Wall",
    category: "Retail"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Hair-Studio-300x225.jpg",
    title: "Hair Studio & Styling Stations",
    category: "Studio"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Hair-Studio-1-300x225.jpg",
    title: "Stylist Workstation",
    category: "Studio"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Stylist-Stations-225x300.jpg",
    title: "Stylist Mirror Stations",
    category: "Studio"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Color-Bar-and-Processing-Room-300x225.jpg",
    title: "Color Bar & Processing Room",
    category: "Color Bar"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Processing-Room-and-Color-Bar--225x300.jpg",
    title: "Color Processing Area",
    category: "Color Bar"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Shampoo-Lounge-300x225.jpg",
    title: "Relaxing Shampoo Lounge",
    category: "Lounge"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Climazon-Dryers-225x300.jpg",
    title: "Climazon Hair Dryers",
    category: "Equipment"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Pedicure-Thrones-300x225.jpg",
    title: "Luxury Pedicure Thrones",
    category: "Mani-Pedi"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-ManiPedi-Room--300x225.jpg",
    title: "Manicure & Pedicure Room",
    category: "Mani-Pedi"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Treatment-Room-300x225.jpg",
    title: "Private Spa Treatment Room",
    category: "Treatment"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Treatment-Room-Facials-300x188.jpg",
    title: "Facials & Skin Care Suite",
    category: "Treatment"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Independent-Contractor-Studio-300x134.jpg",
    title: "Independent Contractor Suite",
    category: "Studio"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Steps-Leading-up-to-the-Second-Floor-300x225.jpg",
    title: "Stairs to Second Floor & Loft",
    category: "Interior"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Hallway-300x225.jpg",
    title: "Historic Interior Hallway",
    category: "Interior"
  },
  {
    src: "/virtualTour/SoZo-Hair-by-Bajon-Salon-Deck-and-Main-Entrance-300x217.jpg",
    title: "Deck & Main Entrance",
    category: "Exterior"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-on-Cincinnati-Dayton-Rd-300x187.jpg",
    title: "9069 Cincinnati-Dayton Rd Historic Building",
    category: "Exterior"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-South-Side-of-Building-300x225.jpg",
    title: "South Side of 1835 Building",
    category: "Exterior"
  },
  {
    src: "/virtualTour/SoZo-Christmas-Lights-2-Medium-300x169.jpg",
    title: "Evening Salon Lights & Warm Atmosphere",
    category: "Exterior"
  },
  {
    src: "/virtualTour/SoZo-HAIR-Dream-until-your-dream-comes-true-300x225.jpg",
    title: "Inspirational Salon Quote Wall",
    category: "Interior"
  },
  {
    src: "/virtualTour/SoZo-HAIR-by-Bajon-Salon-Collage-300x300.jpg",
    title: "Salon Features Collage",
    category: "Interior"
  }
];

export default function VirtualTourPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? tourGalleryImages.length - 1 : prev! - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === tourGalleryImages.length - 1 ? 0 : prev! + 1));
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
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight mb-4 leading-tight">
              Virtual 360° Salon Tour
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed">
              Step inside our 5,000 sq. ft. historic 1835 West Chester landmark. Explore our hair rooms, spa suites, color bar, and pedicure thrones from anywhere in the world.
            </p>
          </div>

          {/* ── INTERACTIVE 360 TOUR / GOOGLE MAPS EMBED ── */}
          <div className="rounded-3xl p-4 sm:p-6 mb-16 bg-[#FDF8F4]">
            <div className="flex items-center justify-between px-2 pb-4 border-b border-[#EADCC9]/50 mb-4 flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[#111111] font-serif font-bold text-lg sm:text-xl">
                <MapPin className="w-5 h-5 text-[#D4A59A]" /> 
                SoZo Hair, Spa & Wigs — 9069 Cincinnati-Dayton Rd, West Chester, OH
              </div>
              <a
                href="https://www.google.com/maps/@39.3259188,-84.4109199,13z?hl=en-US&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A59A] hover:text-[#c29388] uppercase tracking-wider no-underline bg-[#F5ECE2] px-4 py-2 rounded-full"
              >
                View Full Interactive Tour on Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Maps / Street View 360 Virtual Tour Box */}
            <div className="relative w-full h-[400px] sm:h-[550px] rounded-2xl overflow-hidden bg-[#111111]">
              <iframe
                title="SoZo Hair, Spa & Wigs Virtual Tour & Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.1555319830574!2d-84.41310868463677!3d39.32591887321331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88405a76e7ef4c8d%3A0x6b44ab6f1e8f23bf!2s9069%20Cincinnati%20Dayton%20Rd%2C%20West%20Chester%20Township%2C%20OH%2045069!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* ── HISTORIC BUILDING STORY ARTICLE ── */}
          <div className="rounded-3xl p-6 sm:p-12 mb-16 space-y-8 bg-[#FDF8F4]">
            <div className="inline-flex items-center gap-2 text-[#D4A59A] font-bold text-xs tracking-widest uppercase bg-[#F5ECE2] px-4 py-1.5 rounded-full">
              <Building2 className="w-4 h-4 text-[#D4A59A]" /> WEST CHESTER TWP. — Established 1835
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111111] leading-tight">
              A 180-Year-Old Landmark Home for SoZo Hair, Spa & Wigs
            </h2>

            <div className="prose prose-stone max-w-none text-base sm:text-lg text-[#444444] space-y-6 leading-relaxed">
              <p className="font-semibold text-[#111111]">
                A salon that spent 14 years in one location is now in a new home with a nearly 180-year-old history.
              </p>
              
              <p>
                Karen and Mark Welch moved SoZo Hair by Bajon Salon & Spa from 6072 West Chester Road to <strong>9069 Cincinnati-Dayton Road</strong>, a landmark building dating back to <strong>1835</strong> that started off as a tavern, and went through various incarnations as a general store, restaurant, and real estate office, according to the Ohio Historic Preservation Office.
              </p>

              <p>
                The couple purchased the building and lovingly renovated the entire space. Moving from a 3,200-square-foot salon to one with <strong>5,000 square feet of luxury space</strong> means being able to offer more services in a “pretty, cozy and comfortable” location that includes two hair rooms, a mani-pedi room, treatment room, and a color bar.
              </p>

              <p>
                It also gives the business ample room to grow its services, which already include a wide array of hair, nail, massage, and skin care options, Karen Welch said.
              </p>

              <div className="bg-[#F5ECE2]/60 p-6 rounded-2xl italic text-[#222222] font-serif text-lg">
                “We added spray tanning. We’re always adding services that are new like smoothing treatments and certain types of nail polish that last longer. We’re considering putting some quiet exercise like Pilates or something like that in the one big room upstairs.”
                <span className="block mt-2 font-sans not-italic text-xs font-bold uppercase tracking-widest text-[#D4A59A]">
                  — Karen Welch, Founder & Owner
                </span>
              </div>
            </div>
          </div>

          {/* ── SALON INTERIOR & EXTERIOR PHOTO ALBUM GALLERY ── */}
          <div className="rounded-3xl p-6 sm:p-12 bg-[#FDF8F4]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EADCC9]/50 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4A59A] mb-1">
                  <Images className="w-4 h-4" /> Interactive Salon Photo Album
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
                  Explore Our Salon Rooms & Amenities
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#888888] bg-[#F5ECE2] px-4 py-2 rounded-full">
                  {tourGalleryImages.length} Salon Photos
                </span>
              </div>
            </div>

            {/* Pinterest-Style Editorial Masonry Grid — Hover Active Border */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {tourGalleryImages.map((img, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A59A] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-2 self-start">
                      {img.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold leading-snug">
                      {img.title}
                    </h4>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
                Photo {selectedIndex + 1} of {tourGalleryImages.length}
              </span>
              <span className="text-sm font-semibold text-white/80 hidden sm:inline">
                {tourGalleryImages[selectedIndex].category}
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
                src={tourGalleryImages[selectedIndex].src}
                alt={tourGalleryImages[selectedIndex].title}
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
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide">
              {tourGalleryImages[selectedIndex].title}
            </h4>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 custom-scrollbar max-w-full px-4">
              {tourGalleryImages.map((thumb, idx) => (
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
