import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Medical Spa Services - SoZo Hair Spa & Wigs",
  description:
    "Learn about medical spa services at SoZo Hair Spa & Wigs and complete the short service interest survey.",
};

const serviceOptions = [
  "Wrinkle relaxer (botulinum toxins)",
  "Filler for lips, cheeks, marionette, jaw, chin",
  "Microneedling with FDA approved SkinPen",
  "VI- Peel (medical grade chemical peel)",
  "Body sculpting (specified date for appointments)",
  "Lipo B12 injections",
];

function OptionList({ name }: { name: string }) {
  return (
    <div className="space-y-3">
      {serviceOptions.map((option, index) => (
        <label key={option} className="flex items-start gap-3 text-[15px] leading-6 text-[#5A4A42]">
          <input
            type="radio"
            name={name}
            value={option}
            defaultChecked={index === 1}
            className="mt-1 h-4 w-4 accent-[#B8836E]"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export default function MedicalSpaServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#2C2420]">

        {/* Hero Section — articles hero CSS pattern */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "540px", background: "#ffffff" }}
        >
          {/* Combined gradient + image — same articles hero pattern */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,1) 38%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0) 100%), #ffffff url('/landing/medical-Spa-service.png') no-repeat right center / contain`,
            }}
            aria-hidden="true"
          />

          {/* Hero content */}
          <div
            className="relative z-10 mx-auto flex w-full items-center"
            style={{ maxWidth: "var(--container-max-width, 1319px)", padding: "80px 32px" }}
          >
            <div style={{ flex: 1, maxWidth: "500px" }}>

              <p
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#c4956a",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                Spa Services
              </p>

              <h1
                className="font-[family-name:var(--font-playfair)]"
                style={{
                  fontSize: "clamp(34px, 4.5vw, 48px)",
                  fontWeight: 600,
                  lineHeight: 1.25,
                  color: "#2B2B2B",
                  marginBottom: "24px",
                  letterSpacing: "-0.5px",
                }}
              >
                Medical Spa Services
              </h1>

              <p
                style={{
                  fontSize: "15px",
                  color: "#6b6470",
                  lineHeight: 1.7,
                  maxWidth: "380px",
                  marginBottom: "36px",
                  fontWeight: 300,
                }}
              >
                A medical spa combines a relaxing spa environment with medically supervised aesthetic treatments.
              </p>

              <Link
                href="#survey"
                className="inline-flex items-center rounded-full bg-[#B8836E] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2C2420]"
              >
                Book Your Appointment
              </Link>

            </div>
          </div>
        </section>

        {/* Survey Section */}
        <section
          id="survey"
          className="bg-[linear-gradient(180deg,rgba(248,243,238,0)_0%,#F8F3EE_53.38%,rgba(248,243,238,0)_105.74%)] py-18"
        >
          <div className="mx-auto max-w-[720px] px-5 sm:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-[30px] font-semibold text-[#2C2420]">
              Please take our short survey
            </h2>
            <p className="mt-2 text-[14px] text-[#8A7A72]">Fill up the information below</p>

            <div className="mt-8 overflow-hidden rounded-t-lg bg-[#1C1C2E] px-5 py-4 text-[14px] font-medium text-white">
              Your Information&apos;s
            </div>
            <div className="grid gap-px border border-[#E8DDD7] bg-[#E8DDD7] md:grid-cols-2">
              <label className="bg-white p-5">
                <span className="mb-2 block text-[12px] font-medium text-[#8A7A72]">Your Name</span>
                <input
                  type="text"
                  placeholder="name"
                  className="w-full rounded border border-[#E8DDD7] px-3 py-2 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                />
              </label>
              <label className="bg-white p-5">
                <span className="mb-2 block text-[12px] font-medium text-[#8A7A72]">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded border border-[#E8DDD7] px-3 py-2 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                />
              </label>
            </div>

            <div className="mt-10 space-y-8">
              <section>
                <h3 className="mb-5 font-[family-name:var(--font-playfair)] text-[20px] font-semibold leading-8 text-[#2C2420]">
                  Please select all services you have interest in
                </h3>
                <OptionList name="interest" />
              </section>

              <hr className="border-[#E8DDD7]" />

              <section>
                <h3 className="mb-5 font-[family-name:var(--font-playfair)] text-[20px] font-semibold leading-8 text-[#2C2420]">
                  Do you currently invest in any of these medical services? If so, please check all that apply
                </h3>
                <div className="space-y-3">
                  {serviceOptions.map((option, index) => (
                    <label key={option} className="flex items-start gap-3 text-[15px] leading-6 text-[#5A4A42]">
                      <input
                        type="checkbox"
                        name="current"
                        value={option}
                        defaultChecked={index === 1}
                        className="mt-1 h-4 w-4 accent-[#B8836E]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </section>

              <hr className="border-[#E8DDD7]" />

              <section>
                <h3 className="mb-5 font-[family-name:var(--font-playfair)] text-[20px] font-semibold leading-8 text-[#2C2420]">
                  Would you like more info when available?
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-[15px] leading-6 text-[#5A4A42]">
                    <input type="radio" name="moreinfo" value="yes" className="mt-1 h-4 w-4 accent-[#B8836E]" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-start gap-3 text-[15px] leading-6 text-[#5A4A42]">
                    <input
                      type="radio"
                      name="moreinfo"
                      value="no"
                      defaultChecked
                      className="mt-1 h-4 w-4 accent-[#B8836E]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
