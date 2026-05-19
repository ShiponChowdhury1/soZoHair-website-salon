"use client";

import Image from "next/image";
import { useState } from "react";

import { artists, ArtistCard } from "./Artists";

function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill={i < rating ? "#C4956A" : "#444"}>
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
        </svg>
      ))}
    </div>
  );
}

const defaultReviews = [
  {
    text: "They always listen to me and then know exactly how to give me the look I want. I am super conscientious about making sure I'm happy.",
  },
  {
    text: "I have been a client for years. It is just such a pleasant experience every time I go that I keep coming back.",
  },
  {
    text: "Does an amazing job with my hair! They always give me little tips to make sure I can 'do it myself'. I appreciate the suggestions.",
  },
];

export default function ArtistDetailPage({ artist, onBack, onSelectArtist }) {


  // Get 4 suggested artists (excluding the currently viewed one)
  const suggestedArtists = artists
    .filter((a) => a.id !== artist.id)
    .slice(0, 4);

  return (
    <div className="w-full" style={{ backgroundColor: "#FDF9F5" }}>
      {/* Back button */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pt-8 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#666] hover:text-[#C4956A] transition-colors text-sm font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Team
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Image */}
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right — Details */}
          <div className="flex flex-col gap-6 pt-2">

            {/* Name & Role */}
            <div>
              <h1
                className="text-[#2D2D2D] text-4xl md:text-5xl font-semibold leading-tight"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                {artist.name}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <StarRating rating={artist.rating} size={16} />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#666] text-[15px] leading-[1.8]">
              {artist.fullDescription || artist.description}
            </p>

            {/* Specialty badge */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium border border-[#C4956A] text-[#C4956A]">
                {artist.role}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium border border-[#ddd] text-[#666]">
                {artist.specialty}
              </span>
            </div>

            {/* Book Button */}
            <div className="flex flex-col gap-2 mt-2">
              <button
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,165,154,0.35)]"
                style={{ backgroundColor: "#D4A59A" }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.4"/>
                  <path d="M5 2v2M11 2v2M2 7h12" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Book Your Appointment
              </button>
              <p className="text-[#888] text-[13px] text-center md:text-left mt-1">
                Online Booking – Best Rates and No Booking Fees
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#EAEAEA] my-2" />

           

          </div>
        </div>
      </div>

      {/* Suggested for you */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pb-16 md:pb-24 pt-4">
        <h2 
          className="text-[#2D2D2D] text-3xl md:text-[34px] font-semibold mb-8"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Suggested for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {suggestedArtists.map((suggested) => (
            <ArtistCard 
              key={suggested.id} 
              artist={suggested} 
              onClick={onSelectArtist} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
