import Image from "next/image";
import Link from "next/link";

const artists = [
  { name: "Sarah Johnson", role: "Senior Stylist", image: "/landing/artists/team1.png" },
  { name: "Maria Garcia", role: "Color Specialist", image: "/landing/artists/team2.png" },
  { name: "Emma Wilson", role: "Spa Therapist", image: "/landing/artists/team3.png" },
  { name: "Lisa Anderson", role: "Hair Designer", image: "/landing/artists/team4.png" },
  { name: "Rachel Brown", role: "Wig Specialist", image: "/landing/artists/team5.png" },
  { name: "Jennifer Davis", role: "Beauty Expert", image: "/landing/artists/team6.png" },
];

export default function Artists() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 md:py-32" id="gallery">
      <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-14">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-[13px] font-medium tracking-[3px] uppercase text-[#C4956A]">
            Meet Our Team
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[42px] font-semibold text-[#2D2D2D]">
            The Artists Behind Your Look
          </h2>
          <div className="w-[60px] h-0.5 bg-[#C4956A] mt-2 rounded-[1px]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {artists.map((artist) => (
            <div key={artist.name} className="flex flex-col items-center text-center gap-4 group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-[#F8F3EE]">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2D2D2D]">
                  {artist.name}
                </h3>
                <span className="text-[15px] font-medium text-[#C4956A] uppercase tracking-[1px] mt-1">
                  {artist.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-[#C4956A] text-white rounded-md text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#b0845a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(196,149,106,0.3)]"
          >
            View All Artists
          </Link>
        </div>

      </div>
    </section>
  );
}
