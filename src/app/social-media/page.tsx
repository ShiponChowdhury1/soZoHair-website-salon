import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sozo on Social Media - SoZo Hair Spa & Wigs",
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

const socialChannels = [
  {
    name: "Instagram",
    handle: "@sozohair",
    desc: "Follow us for daily hair transformations, styling tips, and client spotlights.",
    color: "#E1306C",
    url: "https://www.instagram.com/sozohair1/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "SoZo Hair Spa & Wigs",
    desc: "Join our community for news, salon specials, reviews, and updates.",
    color: "#1877F2",
    url: "https://www.facebook.com/SoZoHairSpaWigs/",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "SoZo Hair & Spa",
    desc: "Subscribe for professional wig guides, hair tutorials, and beauty tips.",
    color: "#FF0000",
    url: "https://www.youtube.com/",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@sozohair",
    desc: "Watch our quick hair tutorials, transformation trends, and salon clips.",
    color: "#000000",
    url: "https://www.tiktok.com/",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.25-.25v6.23c.01 2.14-.62 4.35-2.22 5.8-1.74 1.64-4.37 2.22-6.66 1.65-2.61-.62-4.75-2.73-5.21-5.38-.63-3.23.95-6.67 4.09-7.69.75-.24 1.54-.34 2.33-.35v4.07c-1.26.06-2.52.79-3.08 1.93-.61 1.17-.41 2.71.48 3.67.92.98 2.5 1.2 3.73.53.94-.48 1.48-1.5 1.5-2.57V0h.28z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@sozohair",
    desc: "Stay updated with real-time news, schedule openings, and quick updates.",
    color: "#0F1419",
    url: "https://x.com/bajonsalon",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#2C2420]">

        {/* Hero Section */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "540px", background: "#ffffff" }}
        >
          {/* Combined gradient + image */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,1) 38%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0) 100%), #ffffff url('/landing/facebook-background.png') no-repeat right center / contain`,
            }}
            aria-hidden="true"
          />

          {/* Hero content */}
          <div
            className="relative z-10 mx-auto flex w-full items-center"
            style={{ maxWidth: "var(--container-max-width, 1319px)", padding: "80px 32px" }}
          >
            <div style={{ flex: 1, maxWidth: "580px" }}>

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
                Social Media
              </p>

              <h1
                className="font-[family-name:var(--font-playfair)]"
                style={{
                  fontSize: "clamp(34px, 4.5vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "#2B2B2B",
                  marginBottom: "24px",
                  letterSpacing: "-0.5px",
                }}
              >
                Sozo On Social Media
              </h1>

              <p
                style={{
                  fontSize: "15px",
                  color: "#6b6470",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  marginBottom: "36px",
                  fontWeight: 300,
                }}
              >
                Come follow us across all our social platforms for the latest style updates, wig tutorials, special discounts, and behind-the-scenes transformations!
              </p>

              <div className="flex flex-wrap gap-3" style={{ marginBottom: "28px" }}>
                <a
                  href="#social-channels"
                  className="inline-flex items-center rounded-full bg-[#B8836E] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2C2420] hover:shadow-md"
                >
                  Connect with us!
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center rounded-full border border-[#E8DDD7] bg-transparent px-6 py-3 text-sm font-medium text-[#2C2420] transition-colors hover:border-[#C4907A] hover:text-[#C4907A]"
                >
                  Send a Message
                </a>
              </div>

              <div className="flex gap-3">
                <a href="https://www.facebook.com/SoZoHairSpaWigs/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/sozohair1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.8" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.25-.25v6.23c.01 2.14-.62 4.35-2.22 5.8-1.74 1.64-4.37 2.22-6.66 1.65-2.61-.62-4.75-2.73-5.21-5.38-.63-3.23.95-6.67 4.09-7.69.75-.24 1.54-.34 2.33-.35v4.07c-1.26.06-2.52.79-3.08 1.93-.61 1.17-.41 2.71.48 3.67.92.98 2.5 1.2 3.73.53.94-.48 1.48-1.5 1.5-2.57V0h.28z"/>
                  </svg>
                </a>
                <a href="https://x.com/bajonsalon" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="grid h-10 w-10 place-items-center rounded-full border border-[#E8DDD7] text-[#5A4A42] transition-colors hover:border-[#C4907A] hover:bg-[#F8F3EE]">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Social Channels Section */}
        <section id="social-channels" className="px-5 py-24 sm:px-8 lg:px-10 bg-[#FDF9F5] border-t border-b border-gray-50">
          <div className="mx-auto max-w-[var(--container-max-width)]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-[#B8836E]">Stay Connected</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2C2420] sm:text-4xl mb-4">
                Follow Our Social Channels
              </h2>
              <p className="text-[14px] leading-7 text-[#5A4A42]">
                Explore our latest styles, luxury hair transformations, wig guides, and daily salon clips. Select a platform to follow our journey.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {socialChannels.map((channel) => (
                <div
                  key={channel.name}
                  className="rounded-2xl bg-white p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(44,36,32,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white"
                      style={{ backgroundColor: channel.color }}
                    >
                      {channel.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[17px] font-semibold text-[#2C2420] mb-0.5">
                      {channel.name}
                    </h3>
                    <p className="text-[11px] font-medium text-[#B8836E] mb-3">{channel.handle}</p>
                    <p className="text-[13px] leading-6 text-[#5A4A42] mb-6">{channel.desc}</p>
                  </div>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-full text-[12px] font-semibold tracking-wide border transition-all duration-200 hover:bg-[#F8F3EE] hover:border-[#C4907A] text-[#2c2420] border-[#E8DDD7] bg-transparent"
                  >
                    Visit Channel
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact + Map Section */}
        <section className="px-5 py-24 sm:px-8 lg:px-10">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 a12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.74A16 16 0 0 0 16 16.83l1.08-.54a2 2 0 0 1 2.11.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" />
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
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9069+Cincinnati+Dayton+Rd,+West+Chester,+OH+45069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[#E8DDD7] px-5 py-3 text-[13px] font-medium text-[#2C2420] transition-colors hover:border-[#B8836E] hover:text-[#B8836E] no-underline"
                  >
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
                {/* Google Maps Container */}
                <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden rounded-2xl border border-[#E8DDD7] shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.3361802537734!2d-84.4133532235326!3d39.325968221302425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840503c40489de9%3A0x7f3ad5308be19b80!2sSoZo%20Hair%2C%20Spa%20%26%20Wigs!5e0!3m2!1sen!2sbd!4v1785322002891!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    title="SoZo Hair Salon Google Location Map"
                  />
                </div>

                <div className="rounded-2xl bg-[#F8F3EE] p-6 shadow-[0_12px_32px_rgba(44,36,32,0.08)]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2C2420]">Send Us a Message</h3>
                  <div className="mt-5 space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Your Name</span>
                      <input className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="Enter your full name" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Email Address</span>
                      <input className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="Enter your email address" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Phone Number</span>
                      <input className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="Enter your phone number" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Message</span>
                      <textarea className="min-h-[120px] w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]" placeholder="Write your message here..." />
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
