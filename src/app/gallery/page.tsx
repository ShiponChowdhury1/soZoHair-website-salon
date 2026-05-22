import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

type GalleryCard = {
  name: string;
  beforeTone: string;
  afterTone: string;
};

const galleryCards: GalleryCard[] = [
  { name: "Alicia B.", beforeTone: "#c8b8a8", afterTone: "#a89080" },
  { name: "Jen K.", beforeTone: "#b8a898", afterTone: "#987868" },
  { name: "Lilah R.", beforeTone: "#d0c0a8", afterTone: "#b09880" },
  { name: "Miriam F.", beforeTone: "#c0b0a0", afterTone: "#a09080" },
  { name: "Roza V.", beforeTone: "#b8a890", afterTone: "#987858" },
  { name: "Gina B.", beforeTone: "#d8c8b8", afterTone: "#886858" },
  { name: "Michelle F.", beforeTone: "#c8b898", afterTone: "#a89878" },
  { name: "Melanie B.", beforeTone: "#e0d0b8", afterTone: "#c0a888" },
  { name: "Jen K.", beforeTone: "#c0b0a0", afterTone: "#907060" },
  { name: "Julie E.", beforeTone: "#d0c0a8", afterTone: "#b09078" },
];

export const metadata: Metadata = {
  title: "Galleries - SoZo Hair Spa & Wigs",
  description: "Browse SoZo Hair Spa & Wigs before and after gallery highlights.",
};

function GalleryCardView({ name, beforeTone, afterTone }: GalleryCard) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#E8DDD7] bg-[#F8F3EE] shadow-[0_12px_30px_rgba(44,36,32,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between bg-[#3D3020] px-4 py-3">
        <div>
          <p className="font-[family-name:var(--font-playfair)] text-[13px] font-semibold text-white">
            SoZo Hair, Spa &amp; Wigs
          </p>
          <p className="text-[10px] tracking-[1px] text-white/60">WOMEN OF VALUE</p>
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <path d="M12 8v4l3 3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="grid h-[170px] grid-cols-2">
        <div className="relative overflow-hidden" style={{ backgroundColor: beforeTone }}>
          <span className="absolute left-3 top-3 rounded bg-black/35 px-2 py-0.5 text-[9px] font-bold tracking-[1.5px] text-white">
            BEFORE
          </span>
          <div className="flex h-full items-center justify-center">
            <svg className="h-12 w-12 opacity-30 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ backgroundColor: afterTone }}>
          <span className="absolute right-3 top-3 rounded bg-black/35 px-2 py-0.5 text-[9px] font-bold tracking-[1.5px] text-white">
            AFTER
          </span>
          <div className="flex h-full items-center justify-center">
            <svg className="h-12 w-12 opacity-30 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-[family-name:var(--font-playfair)] text-[16px] italic text-[#2C2420]">{name}</span>
        <Link
          href="/register"
          className="rounded-full bg-[#2C2420] px-4 py-2 text-[11px] font-medium uppercase tracking-[1.2px] text-white transition-colors hover:bg-[#C4907A]"
        >
          Book this look
        </Link>
      </div>
    </article>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#2C2420] pt-[70px] md:pt-[90px]">
        <section className="relative min-h-[360px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0.18) 100%), url('/landing/background.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(196,144,122,0.06),rgba(255,255,255,0))]" aria-hidden="true" />

          <div className="relative mx-auto flex min-h-[360px] max-w-[var(--container-max-width)] items-center px-5 py-16 sm:px-8 lg:px-10">
            <div className="max-w-[520px]">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[2px] text-[#8A7A72]">Galleries</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#2C2420] sm:text-5xl">
                Before And After
                <br />
                Happy Clients
              </h1>
              <p className="mt-4 max-w-[380px] text-[15px] leading-7 text-[#5A4A42]">
                Browse SoZo Hair Spa &amp; Wigs before and after transformations, styled to highlight the work and the client result.
              </p>
              <a
                href="#gallery"
                className="mt-7 inline-flex items-center rounded-full bg-[#B8836E] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2C2420]"
              >
                Browse
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white px-5 py-18 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[var(--container-max-width)]">
            <h2 className="max-w-[520px] font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2C2420] sm:text-4xl">
              SoZo&apos;s Before And After
              <br />
              Happy Clients
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {galleryCards.map((card) => (
                <GalleryCardView key={`${card.name}-${card.beforeTone}`} {...card} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}