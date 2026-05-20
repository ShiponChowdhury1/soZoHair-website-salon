"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function WigsPage() {
  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden pt-28">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing/wigs/wigs-background.png"
            alt="Wigs background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(253,249,245,0.1) 0%, rgba(253,249,245,0.85) 45%, rgba(253,249,245,1) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="flex flex-col gap-6 max-w-xl">
              <span className="text-[12px] font-bold tracking-[3px] uppercase text-[#D4A59A]">
                Synthetic Wigs
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[54px] font-bold text-[#2D2D2D] leading-[1.15]">
                Human Hair And Synthetic Wigs
              </h1>
              <p className="text-[16px] leading-[1.8] text-[#666]">
                Offering Wigs, Hats and Accessories. Today&apos;s wigs are so
                natural looking, more and more women are choosing this
                option for both fun and medical reasons!
              </p>
              <a
                href="https://www.vagaro.com/sozohairspawigs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D4A59A] text-white rounded-full text-sm font-medium no-underline w-fit transition-all duration-300 hover:bg-[#C4956A] hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Synthetic Wigs Card */}
            <div className="flex flex-col gap-5 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image
                  src="/landing/wigs/synthetic_wigs.png"
                  alt="Synthetic Wigs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D2D2D] transition-colors group-hover:text-[#D4A59A]">
                  Synthetic Wigs
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  Comfortable surroundings with plenty of choices!
                </p>
              </div>
            </div>

            {/* Hats Card */}
            <div className="flex flex-col gap-5 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image
                  src="/landing/wigs/wigs_hats.png"
                  alt="Hats"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D2D2D] transition-colors group-hover:text-[#D4A59A]">
                  Hats
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  Excellent service with reasonable prices!
                </p>
              </div>
            </div>

            {/* Accessories Card */}
            <div className="flex flex-col gap-5 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image
                  src="/landing/wigs/wigs_accessories.png"
                  alt="Accessories"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D2D2D] transition-colors group-hover:text-[#D4A59A]">
                  Accessories
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  We have solutions and accessories to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-20 bg-[#FDF9F5] border-t border-gray-100">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 text-[#555] text-[15px] leading-[1.8] font-light">
            <p className="text-[#2D2D2D] font-medium text-[17px] leading-relaxed">
              Today&apos;s wigs are so natural looking, more and more women are choosing this option for both fun and medical reasons!
            </p>
            <p>
              Wigs can be chosen in many different colors, lengths and styles. They can be made from real human hair or synthetic materials. Human hair wigs are more expensive, but have no limits on hot tool use, coloring and other chemical services. Synthetic hair wigs are less expensive and easier to care for, but you can&apos;t change their color or use hot tools. Wigs can be similar to your natural hair or they can be something completely new and different.
            </p>
            <p>
              All modern wigs look better, last longer and are easier to take care of than wigs from just a few years ago.
            </p>
            <p>
              Wigs can be chosen in many different colors, lengths and styles. Wigs can be similar to your natural hair or can be something completely new and different.
            </p>
            
            {/* Call to Action Box */}
            <div className="mt-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm text-center md:text-left md:flex md:items-center md:justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D2D2D]">
                  Need a custom fitting?
                </h4>
                <p className="text-[14px] text-[#666]">
                  A 1-hour wig fitting is only <strong className="text-[#D4A59A] font-semibold">$50</strong>. Call us to check appointment times and specials!
                </p>
              </div>
              <a
                href="tel:513-874-9999"
                className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-[#D4A59A] text-[#D4A59A] hover:bg-[#D4A59A] hover:text-white rounded-full text-sm font-semibold transition-all duration-300 no-underline shrink-0"
              >
                📞 513-874-9999
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
