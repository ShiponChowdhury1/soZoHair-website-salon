import Link from "next/link";

const testimonials = [
  {
    quote:
      "I've been coming to Zozo for years and I absolutely love the atmosphere, the quality of service, and the genuine care they show. My stylist always knows exactly what I need!",
    name: "Sarah M.",
    service: "Hair Styling & Color",
    rating: 5,
  },
  {
    quote:
      "The wig consultation was life-changing for me. The team was so patient, understanding, and helped me find the perfect fit. I've never felt more confident!",
    name: "Jessica K.",
    service: "Wig Consultation",
    rating: 5,
  },
  {
    quote:
      "From the moment I walked in, I felt welcomed and pampered. The spa treatments are divine and my hair has never looked better. Highly recommend!",
    name: "Amanda T.",
    service: "Spa Treatment & Hair Care",
    rating: 5,
  },
  {
    quote:
      "Best bridal hair experience! They made me feel like a princess on my wedding day. The trial was thorough and the final look was absolutely perfect.",
    name: "Rachel B.",
    service: "Bridal Services",
    rating: 5,
  },
  {
    quote:
      "The lash extensions are amazing and last so long! The artist is meticulous and creates the most natural, beautiful look. I'm obsessed!",
    name: "Nicole P.",
    service: "Lash Extensions",
    rating: 5,
  },
  {
    quote:
      "Such a beautiful, clean, and welcoming space. The team is professional, talented, and genuinely cares about their clients. This is my happy place!",
    name: "Maria L.",
    service: "Regular Client",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#C4956A]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientLove() {
  return (
    <section
      className="w-full py-20 md:py-28 overflow-hidden"
      id="testimonials"
      style={{
        background:
          "linear-gradient(135deg, #FDF8F4 0%, #FBF3ED 25%, #F9EDE5 50%, #F7E8DE 75%, #F5E3D7 100%)",
      }}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-[#D4A59A]">
            Client Love
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2D2D2D] mb-4">
            What Our Clients Are{" "}
            <em className="italic text-[#2D2D2D]">Saying</em>
          </h2>
          <p className="text-[#666] text-base max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it – hear from the amazing women who
            trust us with their beauty and wellness journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-7 relative shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div
                className="absolute -top-3 left-6 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: "#E8B4B8" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <div className="mt-4">
                <StarRating rating={testimonial.rating} />
                <p className="text-[#555] text-sm leading-[1.7] mt-3 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-[#2D2D2D] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#D4A59A] mt-0.5">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Button */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D4A59A] text-white border-none rounded-lg text-sm font-medium no-underline transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(212,165,154,0.3)]"
          >
            Review Us
          </Link>
        </div>
      </div>
    </section>
  );
}
