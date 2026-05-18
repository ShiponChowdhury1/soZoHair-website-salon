import Image from "next/image";
import Link from "next/link";

const features = [
  "Non-invasive fat reduction technology",
  "Safe, painless, and FDA-cleared procedure",
  "Visible results after just one session",
  "Targets stubborn fat areas effectively",
  "No downtime — resume daily activities immediately",
];

export default function CryoSkin() {
  return (
    <section className="relative w-full min-h-[500px] overflow-hidden" id="cryoskin">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/cryo/backgorund-cryoskin section.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-[2px] uppercase text-[#E8B4B8]">
            Advanced Technology
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[38px] font-semibold text-white leading-[1.25] mt-4">
            CryoSkin – A Non-Invasive, Safe, Painless Fat Loss Technology
          </h2>
          <p className="text-[15px] leading-[1.8] text-gray-300 mt-5">
            Experience the revolutionary CryoSkin treatment that uses cold therapy
            to destroy fat cells naturally. This cutting-edge technology offers a
            safe and effective alternative to invasive procedures, helping you
            achieve your body goals with zero downtime.
          </p>
          <div className="flex flex-col gap-3.5 mt-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-white leading-[1.5]">
                <svg className="w-5 h-5 text-[#E8B4B8] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-[#D4A59A] text-white border-none rounded-md text-sm font-medium no-underline w-fit mt-6 transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,165,154,0.3)]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
