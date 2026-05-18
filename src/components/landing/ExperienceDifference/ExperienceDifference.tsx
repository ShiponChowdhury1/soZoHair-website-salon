export default function ExperienceDifference() {
  return (
    <div className="flex flex-col items-center gap-14 w-full" id="experience">
      <div className="text-center flex flex-col items-center gap-3">
        <span className="text-[13px] font-medium tracking-[3px] uppercase text-[#C4956A]">
          Salon & Spa Experience
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[42px] font-medium text-[#2D2D2D] leading-[1.3]">
          Experience the <span className="italic text-[#C4956A]">Difference</span>
        </h2>
        <div className="w-[60px] h-0.5 bg-[#C4956A] mt-2 rounded-[1px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Card 1 - Expert Stylists */}
        <div className="flex flex-col items-center text-center gap-5 px-6 py-10 rounded-2xl bg-white/60 backdrop-blur-md border border-[#E8B4B8]/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(196,149,106,0.1)]">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8B4B8] to-[#C4956A] flex items-center justify-center flex-shrink-0">
            <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12L12 12" />
              <path d="M20 4L8.12 15.88" />
              <circle cx="6" cy="18" r="3" />
              <path d="M14.8 14.8L20 20" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2D2D2D]">Expert Stylists</h3>
          <p className="text-sm leading-[1.7] text-[#666]">
            Our team of certified professionals brings years of expertise
            and passion to every appointment, ensuring you leave looking
            and feeling your absolute best.
          </p>
        </div>

        {/* Card 2 - Premium Products */}
        <div className="flex flex-col items-center text-center gap-5 px-6 py-10 rounded-2xl bg-white/60 backdrop-blur-md border border-[#E8B4B8]/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(196,149,106,0.1)]">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8B4B8] to-[#C4956A] flex items-center justify-center flex-shrink-0">
            <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2h8l4 10H4L8 2z" />
              <path d="M12 12v10" />
              <path d="M8 22h8" />
              <path d="M7 12l-2 4" />
              <path d="M17 12l2 4" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2D2D2D]">Premium Products</h3>
          <p className="text-sm leading-[1.7] text-[#666]">
            We use only the finest salon-grade products from top brands
            to deliver exceptional results that maintain the health and
            vitality of your hair.
          </p>
        </div>

        {/* Card 3 - Relaxing Environment */}
        <div className="flex flex-col items-center text-center gap-5 px-6 py-10 rounded-2xl bg-white/60 backdrop-blur-md border border-[#E8B4B8]/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(196,149,106,0.1)]">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8B4B8] to-[#C4956A] flex items-center justify-center flex-shrink-0">
            <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2D2D2D]">Relaxing Environment</h3>
          <p className="text-sm leading-[1.7] text-[#666]">
            Step into our beautifully designed salon and unwind in a
            warm, welcoming atmosphere where luxury meets comfort
            at every turn.
          </p>
        </div>
      </div>
    </div>
  );
}
