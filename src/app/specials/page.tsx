import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import BookOnlineButton from "@/components/common/BookOnlineButton";

export const metadata: Metadata = {
  title: "Special Offers & Salon Packages | SoZo Hair, Spa & Wigs",
  description:
    "Explore exclusive salon specials, medical spa packages, hair extension consultations, and product bundles at SoZo Hair, Spa & Wigs.",
};

const specialsList = [
  {
    id: "scalp-facial-special",
    badge: "Most Popular Spa Package",
    title: "The Relaxing Scalp Facial Spa Special",
    price: "$95",
    originalPrice: "$130",
    desc: "Experience deep scalp cleansing, revitalizing organic botanical treatment, head massage, and customized blowout for radiant hair health.",
    image: "/landing/services/the-relaxing-Scalp-facial.png",
    validity: "Limited Time Offer",
  },
  {
    id: "tape-in-extensions-deal",
    badge: "Free Consultation Included",
    title: "Tape-In Extensions Transformation Deal",
    price: "$50 OFF",
    originalPrice: "Full Installation",
    desc: "100% premium human hair extensions for volume, length, and effortless manageability. Includes a complimentary 30-min consultation.",
    image: "/landing/services/hair-extensions.png",
    validity: "Valid for New Extension Clients",
  },
  {
    id: "pure-plasma-tightening",
    badge: "Medical Spa Exclusive",
    title: "PurePlasma Non-Surgical Rejuvenation",
    price: "15% OFF",
    originalPrice: "First Session",
    desc: "Advanced plasma skincare therapy targeting fine lines, skin laxity, and texture without surgical downtime.",
    image: "/landing/services/pure-plasma.png",
    validity: "This Month Only",
  },
  {
    id: "cryoskin-contouring",
    badge: "Body & Facial Contouring",
    title: "CryoSkin Fat Loss & Toning Package",
    price: "Buy 3 Get 1 Free",
    originalPrice: "Package Value $1,200",
    desc: "Revolutionary non-invasive cryotherapy sessions designed to smooth cellulite, tone skin, and target stubborn fat deposits.",
    image: "/landing/services/cryosking.png",
    validity: "Special Package Pricing",
  },
];

export default function SpecialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EE]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[2px] text-[#8B7B6B] mb-4 font-medium">
              <Link href="/" className="hover:text-[#C4956A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#C4956A]">Exclusive Specials</span>
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C4956A]/10 text-[#C4956A] text-xs uppercase tracking-[3px] font-semibold mb-4">
              Limited Time Promotions
            </span>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-4">
              Special Offers &amp; Salon Packages
            </h1>
            <p className="text-[#666] text-base leading-relaxed">
              Treat yourself to luxury hair artistry, medical spa treatments, and premium extensions with our current exclusive packages.
            </p>
          </div>

          {/* Specials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialsList.map((special) => (
              <div
                key={special.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8DFD8] shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={special.image}
                      alt={special.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-[#2D2D2D]/90 text-[#D4A59A] text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {special.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D2D2D]">
                        {special.title}
                      </h3>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xl font-bold text-[#C4956A]">{special.price}</span>
                        {special.originalPrice && (
                          <span className="block text-xs text-[#888] line-through">{special.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-[#666] leading-relaxed mb-4">
                      {special.desc}
                    </p>

                    <span className="inline-block text-xs font-semibold text-[#8B7B6B] bg-[#FAF6F0] px-3 py-1 rounded-md border border-[#E8DFD8]">
                      ⏳ {special.validity}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <BookOnlineButton fullWidth size="lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#E8DFD8] text-center flex flex-col items-center gap-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
              Looking for a Customized Gift or Group Package?
            </h2>
            <p className="text-sm sm:text-base text-[#666] max-w-xl">
              Contact our team directly to create custom spa days, bridal party packages, or personalized gift certificates.
            </p>
            <Link
              href="/ask-expert"
              className="mt-2 px-8 py-3 bg-[#2D2D2D] text-white text-sm font-semibold rounded-md hover:bg-black transition-all no-underline"
            >
              Contact Us for Custom Packages
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
