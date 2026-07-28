import Image from "next/image";
import Link from "next/link";

export default function AboutSozo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full" id="about">
      <div className="flex flex-col gap-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[42px] font-semibold text-[#2D2D2D] leading-[1.2]">
          About SoZo
        </h2>
        <p className="text-[15px] leading-[1.8] text-[#666] max-w-[500px]">
          At SoZo Hair, Spa &amp; Wigs, we believe that every person deserves to feel
          beautiful and confident. Our team of experienced stylists and spa professionals
          is dedicated to providing personalized services that enhance your natural beauty.
        </p>
        <p className="text-[15px] leading-[1.8] text-[#666] max-w-[500px]">
          From expert hair coloring and cuts to rejuvenating spa treatments and premium
          wig services, we offer a complete beauty experience in a warm, welcoming
          environment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2">
          <div className="flex items-center gap-2 text-sm text-[#2D2D2D] font-medium">
            <svg className="w-5 h-5 text-[#C4956A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Expert Stylists</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2D2D2D] font-medium">
            <svg className="w-5 h-5 text-[#C4956A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2D2D2D] font-medium">
            <svg className="w-5 h-5 text-[#C4956A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Personalized Care</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-[#C4956A] text-white border-none rounded-md text-sm font-medium no-underline w-full sm:w-auto transition-all duration-300 hover:bg-[#b0845a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(196,149,106,0.3)]"
          >
            Learn More
          </Link>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#2D2D2D] border-[1.5px] border-[#ddd] rounded-md text-sm font-medium no-underline w-full sm:w-auto transition-all duration-300 hover:border-[#C4956A] hover:bg-[#C4956A]/5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </a>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] order-first md:order-last">
        <Image
          src="/landing/about.png"
          alt="SoZo Hair Salon Building"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
