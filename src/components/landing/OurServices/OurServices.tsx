import Image from "next/image";
import Link from "next/link";
import BookOnlineButton from "@/components/common/BookOnlineButton";

const services = [
  { title: "Hair Color & Cuts", image: "/landing/services/hair-cuts.png", id: "hair-cuts-color" },
  { title: "Specialty Hair Services", image: "/landing/services/speeialty-hair.png", id: "specialty-hair" },
  { title: "Hair Extensions", image: "/landing/services/hair-extensions.png", id: "extensions-texturizing" },
  { title: "Waxing Services", image: "/landing/services/waxing.png", id: "waxing" },
  { title: "Lash & Brow Services", image: "/landing/services/lash-brow.png", id: "lash-brow" },
  { title: "CryoSkin Fat Loss", image: "/landing/services/cryosking.png", id: "cryoskin" },
  { title: "Pure Plasma", image: "/landing/services/pure-plasma.png", id: "pure-plasma" },
  { title: "The Relaxing Scalp Facial", image: "/landing/services/the-relaxing-Scalp-facial.png", id: "scalp-facial" },
];

export default function OurServices() {
  return (
    <section className="w-full bg-[#F8F3EE] py-24 md:py-32" id="services">
      <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-14">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[42px] font-semibold text-[#2D2D2D]">
            Our Services
          </h2>
          <p className="text-[15px] text-[#666] max-w-[500px] leading-[1.6]">
            Discover our full range of beauty and wellness services
          </p>
          <div className="w-[60px] h-0.5 bg-[#C4956A] mt-2 rounded-[1px]" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col justify-between"
            >
              <Link href={`/services/${service.id}`} className="no-underline block">
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-playfair)] text-[17px] font-semibold text-[#2D2D2D]">
                    {service.title}
                  </span>
                  <svg
                    className="w-5 h-5 text-[#C4956A] transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <div className="px-5 pb-5 pt-2">
                <BookOnlineButton size="sm" fullWidth />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
