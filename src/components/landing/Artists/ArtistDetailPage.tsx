"use client";

import Image from "next/image";

import { artists, ArtistCard } from "./Artists";
import type { Artist } from "./Artists";



interface ArtistDetailPageProps {
  artist: Artist;
  onBack: () => void;
  onSelectArtist: (artist: Artist) => void;
}

export default function ArtistDetailPage({ artist, onBack, onSelectArtist }: ArtistDetailPageProps) {
  // Get 4 suggested artists (excluding the currently viewed one)
  const suggestedArtists = artists
    .filter((a) => a.id !== artist.id)
    .slice(0, 4);

  // Split the fullDescription to separate bio from reviews
  const fullText = artist.fullDescription || artist.description || "";
  const reviewSplit = fullText.split("Client Reviews for Karen:");
  const bioText = reviewSplit[0]?.trim() || "";
  const reviewsText = reviewSplit[1]?.trim() || "";

  // Parse individual reviews from the text block
  const reviewLines = reviewsText
    ? reviewsText
        .split(/(?=Karen |I have been|Karen does)/)
        .map((r: string) => r.trim())
        .filter((r: string) => r.length > 0)
    : [];

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

      {/* Hero Section — Image + Name/Short description/Book */}
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

          {/* Right — Name + short desc + Book */}
          <div className="flex flex-col gap-5 pt-2">
            <h1
              className="text-[#2D2D2D] text-4xl md:text-[42px] font-semibold leading-tight"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              {artist.name}
            </h1>

            <p className="text-[#666] text-[15px] leading-[1.8] max-w-md">
              Our passionate team of beauty professionals is dedicated to making you look and feel your absolute best with expert care and artistry.
            </p>

            {/* Book Button */}
            <div className="flex flex-col gap-2 mt-2">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,165,154,0.35)]"
                style={{ backgroundColor: "#D4A59A" }}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.4"/>
                  <path d="M5 2v2M11 2v2M2 7h12" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Book Your Appointment
              </button>
              <p className="text-[#666] text-[14px] mt-2">
                Online Booking – Best Rates and No Booking Fees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Bio Section — full width text */}
      {bioText && (
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pb-10">
          <p className="text-[#444] text-[15px] leading-[1.9]">
            {bioText}
          </p>
        </div>
      )}

      {/* Client Reviews Section */}
      {reviewLines.length > 0 && (
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pb-10">
          <div className="flex flex-col gap-4">
            {reviewLines.map((review: string, i: number) => (
              <p key={i} className="text-[#444] text-[15px] leading-[1.9]">
                {review}
              </p>
            ))}
          </div>

          {/* Online Booking link */}
          <p className="text-[#2D2D2D] text-[14px] font-semibold uppercase tracking-wider mt-6">
            ONLINE BOOKING
          </p>
        </div>
      )}

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="w-full h-px bg-[#EAEAEA]" />
      </div>

      {/* Suggested for you */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pb-16 md:pb-24 pt-12">
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
