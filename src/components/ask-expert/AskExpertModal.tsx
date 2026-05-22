"use client";

import { useState } from "react";

export default function AskExpertModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center rounded-full bg-[#B8836E] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2C2420]"
      >
        Ask the Expert
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-5 py-8">
          <div
            className="absolute inset-0 bg-black/30"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="relative w-full max-w-[540px] overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(44,36,32,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-label="Ask the Expert form"
          >
            <div
              className="px-7 py-8"
              style={{
                background:
                  "linear-gradient(135deg, #F8F3EE 0%, #F8F1EB 12.5%, #F7F0E7 25%, #F7EEE4 37.5%, #F7EDE1 50%, #F6EBDD 62.5%, #F6E9DA 75%, #F5E8D6 87.5%, #F5E6D3 100%)",
              }}
            >
              <div className="flex items-start justify-between">
                <h2 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2C2420]">
                  Ask The Expert&apos;s
                </h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-full text-[#8A7A72] transition-colors hover:bg-white/60"
                  aria-label="Close modal"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <form className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-[13px] text-[#5A4A42]">Your Name</span>
                  <input
                    className="w-full rounded-xl border border-white/70 bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[13px] text-[#5A4A42]">Email Address</span>
                  <input
                    className="w-full rounded-xl border border-white/70 bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                    placeholder="jane@example.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[13px] text-[#5A4A42]">Phone Number</span>
                  <input
                    className="w-full rounded-xl border border-white/70 bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                    placeholder="(513) 123-4567"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[13px] text-[#5A4A42]">Message</span>
                  <textarea
                    className="min-h-[120px] w-full rounded-xl border border-white/70 bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                    placeholder="Tell us what you're looking for..."
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#D7A79A] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#C49184]"
                >
                  Ask Expert
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
