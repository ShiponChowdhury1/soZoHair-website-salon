import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Sozo on Facebook - SoZo Hair Spa & Wigs",
  description: "Connect with SoZo Hair Spa & Wigs on social media and get in touch with the salon.",
};

const quickLinks = [
  {
    title: "Free Parking",
    desc: "Ample parking available in our private lot",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Easy Scheduling",
    desc: "Book online or call for same-day appointments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.8" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.8" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Accessible",
    desc: "Wheelchair accessible with friendly staff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.15.81.37 1.6.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74A16 16 0 0 0 16 16.83l1.08-.54a2 2 0 0 1 2.11.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#2C2420] pt-[70px] md:pt-[90px]">
      <section className="relative bg-white">
        <div className="absolute inset-0 flex justify-end pointer-events-none">
          <div
            className="z-0 w-1/2 min-h-[600px] bg-cover bg-right"
            style={{ backgroundImage: "url('/landing/facebook-background.png')" }}
            aria-hidden="true"
          />
          {/* <div
            className="z-10 absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%)',
            }}
            aria-hidden="true"
          /> */}
        </div>

        <div className="mx-auto max-w-[var(--container-max-width)]">
          <div className="grid min-h-[400px] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 z-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[2px] text-[#8A7A72]">Social Media</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#2C2420] sm:text-5xl">
            Sozo On Facebook
          </h1>
          <p className="mt-4 max-w-[360px] text-[14px] leading-7 text-[#5A4A42]">
            Come Follow us on Facebook for the latest updates! We&apos;re sharing our favorite moments and news over on Facebook.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center rounded-full bg-[#B8836E] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2C2420]"
            >
              Connect with us!
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center rounded-full border border-[#E8DDD7] bg-transparent px-6 py-3 text-sm font-medium text-[#2C2420] transition-colors hover:border-[#C4907A] hover:text-[#C4907A]"
            >
              Learn more
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.8" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

            <div />
          </div>
        </div>
      </section>

      <div className="h-20" />

      <section className="px-5 pb-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[var(--container-max-width)]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-[#8A7A72]">Get In Touch</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2C2420] sm:text-4xl">
                Visit Us in <em className="italic text-[#B8836E]">West Chester</em>
              </h2>
              <p className="mt-4 max-w-[34rem] text-[14px] leading-7 text-[#5A4A42]">
                Located in the heart of West Chester, Ohio, our boutique spa is designed to be your sanctuary for beauty, wellness, and transformation.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F8F3EE] text-[#B8836E]">
                    <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2C2420]">Location</div>
                    <div className="text-[14px] text-[#5A4A42]">9069 Cincinnati Dayton Road<br />West Chester, Ohio 45069</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F8F3EE] text-[#B8836E]">
                    <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.74A16 16 0 0 0 16 16.83l1.08-.54a2 2 0 0 1 2.11.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2C2420]">Phone</div>
                    <div className="text-[14px] text-[#5A4A42]">(513) 874-9999</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F8F3EE] text-[#B8836E]">
                    <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" />
                      <polyline points="22,6 12,13 2,6" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2C2420]">Email</div>
                    <div className="text-[14px] text-[#5A4A42]">sozohair1@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/register" className="inline-flex items-center rounded-full bg-[#B8836E] px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#2C2420]">
                  Book Appointment
                </Link>
                <a href="#contact-form" className="inline-flex items-center rounded-full border border-[#E8DDD7] px-5 py-3 text-[13px] font-medium text-[#2C2420] transition-colors hover:border-[#B8836E] hover:text-[#B8836E]">
                  Get Directions
                </a>
              </div>

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-2 text-[15px] font-semibold text-[#2C2420]">
                  <svg className="h-4 w-4 fill-none stroke-[#B8836E]" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                  </svg>
                  Hours
                </div>
                <div className="grid max-w-md grid-cols-[1fr_auto] gap-x-8 gap-y-2 text-[14px] text-[#5A4A42]">
                  <span>Monday</span><span>9:00 AM – 5:00 PM</span>
                  <span>Tuesday</span><span>9:00 AM – 8:00 PM</span>
                  <span>Wednesday</span><span>11:00 AM – 8:00 PM</span>
                  <span>Thursday</span><span>9:00 AM – 8:00 PM</span>
                  <span>Friday</span><span>9:00 AM – 5:00 PM</span>
                  <span>Saturday</span><span>9:00 AM – 4:00 PM</span>
                  <span>Sunday</span><span>Closed</span>
                </div>
              </div>
            </div>

            <div className="space-y-5" id="contact-form">
              <div className="overflow-hidden rounded-2xl border border-[#E8DDD7] bg-[#F8F3EE]">
                <div className="h-56 bg-[linear-gradient(135deg,#dbeaff_0%,#90bcff_100%)] p-5">
                  <div className="flex h-full items-center justify-center rounded-xl border border-white/40 bg-white/30 text-center text-[13px] text-[#2C2420] backdrop-blur-sm">
                    Map preview for SoZo Hair, Spa &amp; Wigs<br />West Chester, OH
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F8F3EE] p-6 shadow-[0_12px_32px_rgba(44,36,32,0.08)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2C2420]">Send Us a Message</h3>
                <div className="mt-5 space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-[13px] text-[#5A4A42]">Your Name</span>
                    <input className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="Jane Doe" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] text-[#5A4A42]">Email Address</span>
                    <input className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="jane@example.com" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] text-[#5A4A42]">Phone Number</span>
                    <input className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="(513) 123-4567" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] text-[#5A4A42]">Message</span>
                    <textarea className="min-h-[120px] w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="Tell us what you're looking for..." />
                  </label>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#B8836E] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#2C2420]">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#F8F3EE] p-6 text-center">
                <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-white text-[#B8836E] shadow-sm">
                  <span className="h-5 w-5">{item.icon}</span>
                </div>
                <div className="mb-1 text-[14px] font-semibold text-[#2C2420]">{item.title}</div>
                <div className="text-[13px] leading-6 text-[#8A7A72]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}