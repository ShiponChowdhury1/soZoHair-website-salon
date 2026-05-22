"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const BG = "#F8F3EE";

type FormState = {
  name: string;
  email: string;
  phone: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  state: string;
  zip: string;
  employment: "full-time" | "part-time" | "either";
  position: "hair-designer" | "massage-therapist" | "esthetician" | "nail-technician" | "front-desk";
  comments: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  presentAddress: "",
  permanentAddress: "",
  city: "",
  state: "",
  zip: "",
  employment: "full-time",
  position: "hair-designer",
  comments: "",
};

const sectionClass = "mx-auto w-full max-w-[980px] px-5 sm:px-8 lg:px-10";

const bulletItems = [
  "Guaranteed base pay starting out.",
  "Health & Dental Contribution and IRA",
  "Our Upscale, Full Service Salon gives the opportunity to grow your business if you are just starting your career.",
  "Vacation- up to 3 weeks PAID!",
  "Continuing Education with some of the world's best educators and more!",
];

const requirementItems = [
  "Passion for the beauty industry and servicing customers.",
  "Professional image.",
  "Self-motivated.",
  "Licensed or soon to be licensed as a Cosmetologist or Manicurist in the state of Ohio.",
  "Ability to work evenings and Saturdays.",
];

const employmentOptions = [
  { value: "full-time", label: "Full-Time" },
  { value: "part-time", label: "Part-time" },
  { value: "either", label: "Full- or Part- time" },
] as const;

const positionOptions = [
  { value: "hair-designer", label: "Hair Designer" },
  { value: "massage-therapist", label: "Massage Therapist" },
  { value: "esthetician", label: "Esthetician" },
  { value: "nail-technician", label: "Nail Technician" },
  { value: "front-desk", label: "Front Desk Coordinator" },
] as const;

export default function SoZoCareersPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }) as FormState);
  };

  const resetForm = () => setFormData(initialFormState);

  return (
    <>
      <Navbar />

      <main className="text-left" style={{ background: BG }}>
      <section className="relative min-h-[88vh] overflow-hidden bg-[linear-gradient(180deg,rgba(248,243,238,0)_0%,#F8F3EE_53.38%,rgba(248,243,238,0)_105.74%)] text-left">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/landing/creativeBackground.png"
          alt="SoZo Hair stylists"
          className="absolute inset-0 h-full w-full object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F3EE] via-[#F8F3EE]/95 via-35% via-[#F8F3EE]/60 to-[#F8F3EE]/5" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[var(--container-max-width)] items-start justify-start px-5 py-24 text-left sm:px-8 sm:py-28 lg:px-10">
          <div className="max-w-[640px]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A]">
              Careers at SoZo
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-playfair)] text-[clamp(36px,4.5vw,58px)] font-medium leading-[1.08] text-[#2C2118]">
              Creative Hair Designers
              <br />
              And Nail Techs
            </h1>
            <p className="mb-9 max-w-[420px] text-[14.5px] font-light leading-[1.78] text-[#6B5444]">
              Looking for a creative, supportive, and profitable place to do what you love?
              SoZo Hair Spa &amp; Wigs is growing fast and we want passionate talent to join our team in West Chester.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-sm bg-[#D4A59A] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#c4897c]"
              >
                Apply Now
              </a>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-sm border border-[#D4A59A] bg-transparent px-7 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-[#D4A59A] transition-transform hover:-translate-y-0.5 hover:bg-[#D4A59A]/10"
              >
                Buy Gift Card
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 text-left sm:py-20">
        <div className={sectionClass}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-[52px]">
            <div>
              <h2 className="mb-5 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
                Talented Stylists &amp; Nail Techs
              </h2>
              <p className="mb-4 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                SoZo Hair, Spa &amp; Wigs is now hiring Hair Designers and Nail Technicians for our facility in Olde West Chester at the corner of Cincinnati-Dayton and West Chester Roads.
              </p>
              <p className="text-[14px] font-light leading-[1.8] text-[#4A3728]">
                We have great marketing and a steady stream of new clients. We take care of all the payroll, taxes, supplies, etc. so you can focus on making money and going home to be with your family and having a life.
              </p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/talented.png"
                alt="Stylist at work"
                className="h-[260px] w-full rounded-[3px] object-cover"
              />
            </div>
          </div>

          <p className="mt-8 text-[14px] font-light leading-[1.8] text-[#4A3728]">
            We offer a creative work environment with continuous training, education and incredible growth opportunities for enthusiastic Stylists and Nail Technicians!
          </p>
        </div>
      </section>

      <hr className="mx-5 border-t border-[#D4A59A]/25 sm:mx-8 lg:mx-[80px]" />

      <section className="py-16 text-left sm:py-[64px]">
        <div className={sectionClass}>
          <h2 className="mb-5 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
            Why You&apos;ll Love Working at SZO
          </h2>

          <ul className="mb-8 list-none space-y-1 pl-0">
            {bulletItems.map((item) => (
              <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mb-2 mt-7 font-[family-name:var(--font-playfair)] text-[22px] font-medium text-[#2C2118]">
            Requirements:
          </h3>
          <ul className="mb-8 list-none space-y-1 pl-0">
            {requirementItems.map((item) => (
              <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-4 text-[14px] font-light leading-[1.8] text-[#4A3728]">
            Please apply on-line and attach your work history and education by filling out the application below, or call 513-874-9999 for more information. Full or Part time.
          </p>
          <p className="text-[14px] font-light leading-[1.8] text-[#4A3728]">
            If you haven&apos;t visited our facility yet, you can take a tour with Google Street <a href="#" className="text-[#D4A59A] underline decoration-[#D4A59A]/50 underline-offset-2">View here.</a>
          </p>
        </div>
      </section>

      <hr className="mx-5 border-t border-[#D4A59A]/25 sm:mx-8 lg:mx-[80px]" />

      <section id="apply" className="py-16 text-left sm:py-[64px]">
        <div className={sectionClass}>
          <h2 className="mb-1 font-[family-name:var(--font-playfair)] text-[32px] font-medium text-[#2C2118]">
            Submit Your Application
          </h2>
          <p className="mb-7 text-[13px] font-light text-[#6B5444]">Fill up the information&apos;s below</p>

          <div className="overflow-hidden rounded-sm border border-[#D4A59A]/30 bg-white">
            <div className="bg-[#3B2F27] px-5 py-3 text-[12px] font-bold uppercase tracking-[1.5px] text-[#E8D5CC]">
              Your Application Information&apos;s
            </div>

            <div className="border-t-0 bg-white px-6 pb-8 pt-7 sm:px-7">
              <div className="grid gap-4 md:grid-cols-2 md:gap-[18px]">
                <Field label="Your Name">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Email">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4">
                <Field label="Phone">
                  <input
                    className="w-full max-w-[48%] rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-[18px]">
                <Field label="Present Address">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="presentAddress"
                    placeholder="Present Address"
                    value={formData.presentAddress}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Permanent Address">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="permanentAddress"
                    placeholder="Permanent Address"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[2fr_1.5fr_1fr] md:gap-[18px]">
                <Field label="City">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="State">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Zip Code">
                  <input
                    className="w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                    name="zip"
                    placeholder="Zip Code"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[16px] font-normal text-[#2C2118]">
                Employment Desired
              </h3>
              <div className="mt-3 space-y-2.5">
                {employmentOptions.map((option) => (
                  <label key={option.value} className="flex cursor-pointer items-center gap-2.5 text-[13.5px] font-light text-[#4A3728]">
                    <input
                      type="radio"
                      name="employment"
                      value={option.value}
                      checked={formData.employment === option.value}
                      onChange={handleChange}
                      className="h-[15px] w-[15px] accent-[#D4A59A]"
                    />
                    {option.label}
                  </label>
                ))}
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[16px] font-normal text-[#2C2118]">
                Position (choose one or more)
              </h3>
              <div className="mt-3 space-y-2.5">
                {positionOptions.map((option) => (
                  <label key={option.value} className="flex cursor-pointer items-center gap-2.5 text-[13.5px] font-light text-[#4A3728]">
                    <input
                      type="radio"
                      name="position"
                      value={option.value}
                      checked={formData.position === option.value}
                      onChange={handleChange}
                      className="h-[15px] w-[15px] accent-[#D4A59A]"
                    />
                    {option.label}
                  </label>
                ))}
              </div>

              <Field label="Comments" labelClassName="mt-6 font-[family-name:var(--font-playfair)] text-[16px] font-normal text-[#2C2118] uppercase tracking-normal">
                <textarea
                  className="min-h-[90px] w-full rounded-sm border border-[#DDD0C4] bg-[#FDFAF8] px-3.5 py-2.5 text-[13px] text-[#2C2118] outline-none transition-colors placeholder:text-[#C5B5A8] focus:border-[#D4A59A]"
                  name="comments"
                  placeholder="Any comments..."
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Field>

              <div className="mt-7 flex justify-end gap-3.5">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-sm border border-[#DDD0C4] px-7 py-2.5 text-[12px] font-bold uppercase tracking-[1.5px] text-[#6B5444] transition-colors hover:bg-[#f5ede8]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-sm bg-[#D4A59A] px-8 py-2.5 text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#c4897c]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-5 border-t border-[#D4A59A]/25 sm:mx-8 lg:mx-[80px]" />

      <section className="py-16 text-left sm:py-[64px]">
        <div className={sectionClass}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-[52px]">
            <div>
              <h2 className="mb-5 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
                Client Sales &amp; Service Specialist
              </h2>
              <p className="mb-4 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                SoZO HAIR by Bajon Salon &amp; Spa is currently seeking a highly motivated, professional Client Sales &amp; Service Specialist for our Front Desk operation.
              </p>
              <p className="mb-4 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                The successful candidate must be an energetic, task oriented individual who works well in a fun, fast pace environment and is motivated by challenging goals, recognition and performance rewards. Training is provided so that all the Front Desk processes and systems are understood and adhered to.
              </p>
              <p className="text-[14px] font-light leading-[1.8] text-[#4A3728]">
                Applicants please apply on-line and attach work history and education. Full or Part-time (with experience) – $8.75 / hour to start.
              </p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/service-specialis.png"
                alt="Client service specialist"
                className="h-[280px] w-full rounded-[3px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}

function Field({
  label,
  children,
  labelClassName = "font-[family-name:var(--font-playfair)] text-[11px] font-bold uppercase tracking-[1.5px] text-[#6B5444]",
}: {
  label: string;
  children: React.ReactNode;
  labelClassName?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClassName}>{label}</span>
      {children}
    </label>
  );
}
