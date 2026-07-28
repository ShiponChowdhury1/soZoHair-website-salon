"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const features = [
  "Stimulates collagen and elastin production",
  "Reduces fine lines, wrinkles, and acne scars",
  "Non-surgical skin tightening and rejuvenation",
  "Minimizes pore size and improves skin texture",
  "Safe for all skin types with minimal downtime",
];

export default function PurePlasma() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section
      className="w-full overflow-hidden"
      id="pure-plasma"
      style={{
        background: "#FDF9F5",
      }}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium tracking-[2px] uppercase text-[#D4A59A]">
              Skin Rejuvenation
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[38px] font-semibold text-[#2D2D2D] leading-[1.25]">
              Pure Plasma Skin Treatments
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#666]">
              Unlock the power of plasma technology for radiant, youthful skin.
              Our Pure Plasma treatments use ionized gas to stimulate your
              skin&apos;s natural healing process, promoting collagen production and
              cellular renewal for a firmer, smoother complexion.
            </p>
            <div className="flex flex-col gap-3.5 mt-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#2D2D2D] leading-[1.5]"
                >
                  <svg
                    className="w-5 h-5 text-[#D4A59A] flex-shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href="/services/pure-plasma"
              className="inline-flex items-center justify-center px-9 py-3.5 bg-[#D4A59A] text-white border-none rounded-md text-sm font-medium no-underline w-fit mt-2 transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,165,154,0.3)]"
            >
              Learn More
            </Link>
          </div>

          {/* Right: Video Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[620px] lg:max-w-[680px] aspect-[4/3] sm:aspect-square lg:min-h-[500px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5 group">
              <video
                ref={videoRef}
                src="/pure_plasma_skin_treatments.mp4"
                poster="/landing/PurePlasma.png"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Sound Toggle Button (Icon Only) */}
              <button
                onClick={toggleSound}
                className="absolute bottom-5 right-5 z-10 flex items-center justify-center w-11 h-11 bg-black/60 hover:bg-black/80 hover:scale-110 backdrop-blur-md text-white rounded-full transition-all duration-300 border border-white/25 shadow-xl cursor-pointer"
                aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                title={isMuted ? "Unmute video audio" : "Mute video audio"}
              >
                {isMuted ? (
                  <svg className="w-5 h-5 text-[#D4A59A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-[#D4A59A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
