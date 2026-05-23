"use client";

import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function WigsPage() {
  return (
    <>
      <Navbar />

      <main className="w-full">
        {/* ─────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────── */}
      <section className="relative mt-[70px] flex min-h-[420px] w-full items-center overflow-hidden bg-white md:mt-[90px]">
        <div className="absolute inset-0 flex justify-end">
          <div className="relative h-full w-full">
            <Image src="/landing/wigs/wigs-bg.png" alt="Wigs display" fill className="object-cover object-right" priority />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(248, 243, 238, 0) 0%, #F8F3EE 53.38%, rgba(248, 243, 238, 0) 105.74%)",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[var(--container-max-width)] px-4 py-16 text-left sm:px-5 md:px-8 lg:px-10">
          <div className="max-w-[460px]">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">Synthetic Wigs</p>
            <h1 className="mb-4 font-serif text-[clamp(28px,3.3vw,44px)] font-normal leading-[1.02] text-gray-900">
              <span className="block whitespace-nowrap">Human Hair And Synthetic</span>
              <span className="block">Wigs</span>
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              Offering Wigs, Hats and Accessories, Today&apos;s wigs are so
              natural looking, more and more women are choosing this option for
              both fun and medical reasons!
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#c49a8a] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#b58878]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3 CARDS SECTION
      ───────────────────────────────────────── */}
      <section className="w-full bg-[#F8F3EE] py-14 text-left">
        <div className="mx-auto w-full max-w-[var(--container-max-width)] px-4 sm:px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 – Synthetic Wigs */}
            <div>
              <div className="w-full h-52 md:h-64 overflow-hidden mb-5">
                <Image
                  src="/landing/wigs/wigs-image-1.png"
                  alt="Synthetic Wigs"
                  width={400}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
                Synthetic Wigs
              </h3>
              <p className="text-sm text-gray-600">
                Comfortable surroundings with plenty of choices!
              </p>
            </div>

            {/* Card 2 – Hats */}
            <div>
              <div className="w-full h-52 md:h-64 overflow-hidden mb-5">
                <Image
                  src="/landing/wigs/wigs-image-2.png"
                  alt="Hats"
                  width={400}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
                Hats
              </h3>
              <p className="text-sm text-gray-600">
                Excellent service with reasonable prices!
              </p>
            </div>

            {/* Card 3 – Accessories */}
            <div>
              <div className="w-full h-52 md:h-64 overflow-hidden mb-5">
                <Image
                  src="/landing/wigs/wigs-image-3.png"
                  alt="Accessories"
                  width={400}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
                Accessories
              </h3>
              <p className="text-sm text-gray-600">
                We have solutions and accessories to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          BODY TEXT SECTION
      ───────────────────────────────────────── */}
      <section className="w-full bg-[#F8F3EE] py-12 text-left">
        <div className="mx-auto w-full max-w-[var(--container-max-width)] px-4 sm:px-5 md:px-8 lg:px-10">
          <div className="max-w-4xl space-y-5 text-left text-sm leading-relaxed text-gray-700">
            <p>
              Today&apos;s wigs are so natural looking, more and more women are
              choosing this option for both fun and medical reasons!
            </p>
            <p>
              Wigs can be chosen in many different colors, lengths and styles.
              They can be made from real human hair or synthetic materials. Human
              hair wigs are more expensive, but have no limits on hot tool use,
              coloring and other chemical services. Synthetic hair wigs are less
              expensive and easier to care for, but you can&apos;t change their
              color or use hot tools. Wigs can be similar to your natural hair or
              they can be something completely new and different.
            </p>
            <p>
              All modern wigs look better, last longer and are easier to take
              care of than wigs from just a few years ago.
            </p>
            <p>
              Wigs can be chosen in many different colors, lengths and styles.
              Wigs can be similar to your natural hair or can be something
              completely new and different.
            </p>
            <p className="font-bold text-gray-900">
              A 1-hour wig fitting is only $50. Call us at 513-874-9999 to check
              on appointment times and any specials we may have on in-stock wigs
              and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom spacing before footer */}
      <div className="w-full bg-[#F8F3EE] pb-16" />
      </main>

      <Footer />
    </>
  );
}