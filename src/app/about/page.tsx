import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import BookOnlineButton from "@/components/common/BookOnlineButton";

export const metadata: Metadata = {
  title: "About Us | SoZo Hair, Spa & Wigs",
  description:
    "Learn about SoZo Hair, Spa & Wigs — over 36 years of excellence in hair design, luxury spa treatments, and compassionate wig solutions led by Karen Welch.",
};

const values = [
  {
    title: "Personalized Care",
    desc: "We take the time to listen and understand your unique style and needs, delivering tailor-made results that highlight your natural beauty.",
    icon: (
      <svg className="w-6 h-6 text-[#C4956A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Uncompromised Quality",
    desc: "From top-tier hair extensions to advanced PurePlasma & CryoSkin spa technology, we use only premium, proven products and methods.",
    icon: (
      <svg className="w-6 h-6 text-[#C4956A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Community & Purpose",
    desc: "With every sale of SoZo shampoos and conditioners, we donate shampoo and body wash to children in need, giving true meaning to our work.",
    icon: (
      <svg className="w-6 h-6 text-[#C4956A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Continuous Innovation",
    desc: "With decades of experience as regional education directors, we stay at the forefront of beauty trends, color techniques, and spa solutions.",
    icon: (
      <svg className="w-6 h-6 text-[#C4956A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const teamHighlights = [
  {
    name: "Karen Welch",
    title: "Owner & Level 5 Master Hair Artist",
    bio: "Over 36 years in hair fashion & design. Former Regional Director of Education for Redken and Wella International.",
  },
  {
    name: "Alicia B.",
    title: "Hair Designer & Extension Specialist",
    bio: "Passionate about Hot Head extensions, custom coloring, and creating relaxing, memorable client experiences.",
  },
  {
    name: "Medical Spa Team",
    title: "PurePlasma & CryoSkin Specialists",
    bio: "Certified professionals dedicated to advanced non-invasive skin tightening, body contouring, and scalp health.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EE]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative py-20 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF6F0] to-[#F8F3EE] border-b border-[#E8DFD8]">
          <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[2px] text-[#8B7B6B] mb-6 font-medium">
              <Link href="/" className="hover:text-[#C4956A] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#C4956A]">About Us</span>
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C4956A]/10 text-[#C4956A] text-xs uppercase tracking-[3px] font-semibold mb-4">
              Welcome to SoZo Hair, Spa & Wigs
            </span>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#2D2D2D] font-bold leading-[1.15] max-w-4xl mb-6">
              Crafting Beauty, Elevating Confidence &amp; Caring For You
            </h1>

            <p className="text-[#666] text-base sm:text-lg leading-[1.8] max-w-2xl font-light">
              At SoZo Hair, Spa &amp; Wigs, every person deserves to look and feel extraordinary. 
              With over 25 years of beauty fashion leadership, we combine artistry with compassionate service.
            </p>
          </div>
        </section>

        {/* COMPANY STORY SECTION */}
        <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-12 max-w-[var(--container-max-width)] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Container */}
            <div className="relative w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:min-h-[520px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                <Image
                  src="/landing/about.png"
                  alt="SoZo Hair Salon & Spa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-[#E8DFD8] max-w-[280px] sm:max-w-[300px] hidden sm:block z-10">
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#C4956A]">
                  The Meaning of &ldquo;SoZo&rdquo;
                </p>
                <p className="text-xs text-[#666] mt-2.5 leading-relaxed">
                  An ancient Greek, Biblical word meaning to <em>save, heal, deliver, protect, and make whole</em>.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#C4956A]"></span>
                <span className="text-[#C4956A] text-xs font-semibold uppercase tracking-[3px]">
                  Company Story
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2D2D2D] font-bold leading-tight">
                Over 25 Years of Hair Fashion Excellence &amp; Purpose
              </h2>

              <p className="text-[#555] text-sm sm:text-base leading-relaxed">
                Led by Level 5 Expert Hair Artist and Owner Karen Welch, SoZo HAIR by Bajon Salon &amp; Spa has built a reputation centered on client service, ongoing education, and genuine care. Prior to founding SoZo, Karen spent years as Regional Director of Education for Redken and Wella International, training hair artists nationwide.
              </p>

              <p className="text-[#555] text-sm sm:text-base leading-relaxed">
                Beyond beauty, our heartbeat lies in community service. Through our product line, every purchase of SoZo shampoo and conditioner directly enables us to donate shampoo and body wash to children in need both locally and abroad.
              </p>
            </div>
          </div>
        </section>



        {/* WHY CHOOSE US SECTION */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 bg-[#FAF6F0]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#C4956A] text-xs font-semibold uppercase tracking-[3px] block mb-2">
                Why Choose Us
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2D2D2D] font-bold">
                The Principles That Define SoZo
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-[#E8DFD8] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[#C4956A]/40 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C4956A]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2D2D2D]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM HIGHLIGHT SECTION */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-[#E8DFD8]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C4956A] text-xs font-semibold uppercase tracking-[3px] block mb-2">
              Our Passionate Team
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2D2D2D] font-bold">
              Meet Our Expert Hair &amp; Spa Artists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#E8DFD8] shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col gap-3"
              >
                <span className="text-xs font-semibold text-[#C4956A] uppercase tracking-[1.5px]">
                  {member.title}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D2D2D]">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#C4956A] to-[#D4A59A] text-white p-10 sm:p-14 rounded-3xl shadow-[0_20px_50px_rgba(196,149,106,0.25)] relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">
                Ready to Experience the SoZo Difference?
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
                Book your appointment online today or reach out for a personalized consultation with our expert hair and spa team.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <BookOnlineButton size="lg" variant="secondary" />
                <Link
                  href="/ask-expert"
                  className="px-8 py-4 border border-white text-white rounded-md text-base font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 no-underline"
                >
                  Ask An Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
