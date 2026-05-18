import Image from "next/image";
import Link from "next/link";

const features = [
  "Stimulates collagen and elastin production",
  "Reduces fine lines, wrinkles, and acne scars",
  "Non-surgical skin tightening and rejuvenation",
  "Minimizes pore size and improves skin texture",
  "Safe for all skin types with minimal downtime",
];

export default function PurePlasma() {
  return (
    <section
      className="w-full overflow-hidden"
      id="pure-plasma"
      style={{
        background:
          "#FDF9F5",
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
              href="#"
              className="inline-flex items-center justify-center px-9 py-3.5 bg-[#D4A59A] text-white border-none rounded-md text-sm font-medium no-underline w-fit mt-2 transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,165,154,0.3)]"
            >
              Learn More
            </Link>
          </div>

          {/* Right: Icon / Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square">
              <Image src="/landing/PurePlasma.png" alt="" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
