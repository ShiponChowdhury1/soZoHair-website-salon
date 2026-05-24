import Image from "next/image";
import Link from "next/link";

export default function WigsSection() {
  return (
    <section className="relative w-full min-h-[500px] overflow-hidden" id="wigs">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/wigs.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(248,243,238,0.15) 0%, rgba(248,243,238,0.85) 45%, rgba(248,243,238,0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left spacer for image */}
          <div className="hidden md:block" />

          {/* Right: Text Content */}
          <div className="flex flex-col gap-5 max-w-lg">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[42px] font-bold text-[#2D2D2D] leading-[1.2]">
              Wigs, Hats and Accessories
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#666]">
              We understand the importance of feeling better about circumstances out
              of our control. Whether chemotherapy treatment, medication, alopecia,
              radiation or just plain thinning hair, we have solutions to help – wigs, hats
              &amp; accessories!
            </p>
            <p className="text-[15px] leading-[1.8] text-[#666]">
              We pride ourselves in excellent service at reasonable prices and we have
              a safe, comfortable environment with plenty of choices.
            </p>
            <Link
              href="/wigs"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D4A59A] text-white border-none rounded-md text-sm font-medium no-underline w-fit mt-2 transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,165,154,0.3)]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
