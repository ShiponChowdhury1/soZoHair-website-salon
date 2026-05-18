import Image from "next/image";

const suites = [
  { title: "Moisture Recovery Suite", image: "/landing/premium/image-1.png" },
  { title: "Color Endure Suite", image: "/landing/premium/image-2.png" },
  { title: "Smooth Cure Suite", image: "/landing/premium/image-3.png" },
  { title: "Volume Boost Suite", image: "/landing/premium/image-4.png" },
  { title: "Damage Repair Suite", image: "/landing/premium/image-5.png" },
  { title: "Daily Care Suite", image: "/landing/premium/image-6.png" },
  { title: "Scalp Treatment Suite", image: "/landing/premium/image-7.png" },
  { title: "Keratin Smooth Suite", image: "/landing/premium/image-8.png" },
];

export default function PremiumHairCare() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 md:py-32" id="premium">
      <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-14">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[42px] font-semibold text-[#2D2D2D]">
            Premium Hair Care Suites
          </h2>
          <p className="text-[15px] text-[#666] max-w-[500px] leading-[1.6]">
            Professional-grade hair care products curated for every hair type and concern
          </p>
          <div className="w-[60px] h-0.5 bg-[#C4956A] mt-2 rounded-[1px]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {suites.map((suite) => (
            <div 
              key={suite.title} 
              className="group relative rounded-xl overflow-hidden bg-[#FDF9F5] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-white">
                <Image
                  src={suite.image}
                  alt={suite.title}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="px-5 py-5 text-center border-t border-[#E8B4B8]/20 bg-white">
                <h3 className="font-[family-name:var(--font-playfair)] text-[16px] font-semibold text-[#2D2D2D]">
                  {suite.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
