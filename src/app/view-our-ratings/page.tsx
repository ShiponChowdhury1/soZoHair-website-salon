import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import StarsInput from "@/components/view-ratings/StarsInput";

export const metadata: Metadata = {
  title: "View Our Ratings - SoZo Hair Spa & Wigs",
  description: "Read client reviews and leave a rating for SoZo Hair Spa & Wigs.",
};

const reviews = [
  { name: "Kristin Watson", date: "28 March 2026", text: "Duis at ullamcorper nulla, eu dictum eros." },
  { name: "Sarah M", date: "27 March 2026", text: "I walked in with zero confidence and walked out feeling like a whole new person! The haircut is so fresh and bouncy. Shelly is an absolute artist. Best salon experience I've had in years!" },
  { name: "Priya Patel", date: "26 March 2026", text: "My balayage came out absolutely stunning — soft, dimensional, and exactly what I wanted. The color has so much life! Thank you SZO for making me feel beautiful again" },
  { name: "Erin Kenter", date: "25 March 2026", text: "The wig fitting process was professional and caring. They took time to match the color and style perfectly to my face. I feel confident again. This place is a game-changer." },
  { name: "Kaiya Curtis", date: "24 March 2026", text: "My gray coverage is flawless and the hair feels so healthy now. The deep conditioning treatment made a huge difference. I've already booked my next appointment!" },
  { name: "Erin Passaquindici Arcand", date: "23 March 2026", text: "Best fade I've gotten in Ohio. Attention to detail is insane. The beard trim was perfect too. Will definitely be back every 3 weeks." },
  { name: "Erin Philips", date: "22 March 2026", text: "My highlights are bright, blended, and look so natural. The stylist listened carefully to what I wanted and delivered even better. Feeling glowing!" },
];

export default function RatingsPage() {
  return (
    <>
      <Navbar />

      <main className="text-[#2C2420]">

        {/* ── HERO ── full-width bg image, text on left */}
        <section
          className="relative w-full min-h-[520px] flex items-center"
          style={{
            backgroundImage: "url('/landing/review.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* left-side gradient overlay so text is readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(248,243,238,1) 38%, rgba(248,243,238,0.55) 65%, rgba(248,243,238,0) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[var(--container-max-width)] px-5 sm:px-8 lg:px-10 py-24">
            <div className="max-w-[520px]">
              <p className="text-[11px] uppercase tracking-[2px] text-[#8A7A72] mb-4">Feedback</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold mb-4 leading-snug">
                View Our 5 Star Ratings
              </h1>
              <p className="text-[14px] text-[#5A4A42] mb-6">
                We appreciate every client who chooses SZO. Here's what they have to say about their experience with our expert stylists and personalized care.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center rounded-full bg-[#B8836E] px-5 py-3 text-white text-sm"
                >
                  Book an appointment online!
                </Link>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <Link href="#" className="w-9 h-9 rounded-full border border-[#E8DDD7] bg-white/70 flex items-center justify-center text-[#5A4A42]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </Link>
                  {/* Instagram */}
                  <Link href="#" className="w-9 h-9 rounded-full border border-[#E8DDD7] bg-white/70 flex items-center justify-center text-[#5A4A42]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </Link>
                  {/* Instagram 2 */}
                  <Link href="#" className="w-9 h-9 rounded-full border border-[#E8DDD7] bg-white/70 flex items-center justify-center text-[#5A4A42]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </Link>
                  {/* Pinterest */}
                  <Link href="#" className="w-9 h-9 rounded-full border border-[#E8DDD7] bg-white/70 flex items-center justify-center text-[#5A4A42]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEAVE A REVIEW + REVIEWS LIST ── */}
        <section
          className="py-12"
          style={{
            background:
              "linear-gradient(180deg, rgba(248, 243, 238, 0) 0%, #F8F3EE 53.38%, rgba(248, 243, 238, 0) 105.74%)",
          }}
        >
          <div className="mx-auto max-w-[var(--container-max-width)] px-5 sm:px-8 lg:px-10">

            {/* Leave a Review */}
            <div className="mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-2">Leave a Review</h2>
              <StarsInput initial={4} />
              <textarea
                className="w-full mt-4 rounded-lg border border-[#E8DDD7] p-3 bg-white text-sm"
                rows={4}
                placeholder="Write your review here..."
              />
              <div className="mt-3 flex gap-3 justify-end">
                <button className="px-6 py-2 rounded-full border border-[#E8DDD7] text-sm text-[#5A4A42]">Cancel</button>
                <button className="px-6 py-2 rounded-full bg-[#B8836E] text-white text-sm">Submit</button>
              </div>
            </div>

            {/* Reviews heading + sort */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">Review's</h2>
              <select className="text-sm border border-[#E8DDD7] rounded-lg px-3 py-2 bg-white text-[#5A4A42]">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>

            {/* Review cards */}
            <div className="space-y-6">
              {reviews.map((r, i) => (
                <div key={i} className="flex gap-4 border-b border-[#E8DDD7] pb-6">
                  <div className="w-11 h-11 rounded-full bg-[#E8DDD7] flex-shrink-0 flex items-center justify-center font-semibold text-sm text-[#5A4A42]">
                    {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <div className="font-medium text-sm">{r.name}</div>
                        <div className="flex gap-[2px] mt-[2px]">
                          {[1,2,3,4,5].map((s) => (
                            <span key={s} className="text-[#FF8A00] text-sm">★</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-[#8A7A72]">{r.date}</div>
                    </div>
                    <p className="text-sm text-[#5A4A42] mt-2">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All */}
            <div className="text-center mt-10">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#B8836E] text-white text-sm"
              >
                View All Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* ── GET IN TOUCH ── dark section */}
        <section className="py-16">
          <div className="mx-auto max-w-[var(--container-max-width)] px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div className="text-white">
              <p className="text-[11px] uppercase tracking-[2px] text-[#8A7A72] mb-3">Get In Touch</p>
              <h3 className="font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight mb-4">
                Visit Us in{" "}
                <em className="italic" style={{ color: "#C4956A" }}>West Chester</em>
              </h3>
              <p className="text-[#B0A098] text-sm max-w-[400px] mb-8">
                Located in the heart of West Chester, Ohio, our boutique spa is designed to be your sanctuary for beauty, wellness, and transformation. We can't wait to welcome you.
              </p>

              {/* Contact info */}
              <div className="space-y-5 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#3a2a1a] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#C4956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-[#8A7A72] text-xs mb-1">Location</p>
                    <p className="text-white text-sm">9069 Cincinnati Dayton Road</p>
                    <p className="text-white text-sm">West Chester, Ohio 45069</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#3a2a1a] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#C4956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-[#8A7A72] text-xs mb-1">Phone</p>
                    <p style={{ color: "#C4956A" }} className="text-sm">(513) 874-9999</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#3a2a1a] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#C4956A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="text-[#8A7A72] text-xs mb-1">Email</p>
                    <p style={{ color: "#C4956A" }} className="text-sm">sozohair1@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[#B8836E] px-5 py-3 text-white text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Book Appointment
                </Link>
                <Link href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Get Directions
                </Link>
              </div>

              {/* Hours */}
              <div>
                <div className="flex gap-2 items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#8A7A72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <p className="text-[#8A7A72] text-xs uppercase tracking-wider">Hours</p>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday", "9:00 AM - 5:00 PM"],
                    ["Tuesday", "9:00 AM - 8:00 PM"],
                    ["Wednesday", "11:00 AM - 8:00 PM"],
                    ["Thursday", "9:00 AM - 8:00 PM"],
                    ["Friday", "9:00 AM - 5:00 PM"],
                    ["Saturday", "9:00 AM - 4:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-white">{day}</span>
                      <span className={hours === "Closed" ? "text-[#8A7A72]" : "text-white"}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Send a message form */}
            <div className="rounded-2xl bg-[#F8F3EE] p-8 shadow-md">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-6 text-[#2C2420]">Send Us a Message</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-[#5A4A42] mb-1 block">Your Name</label>
                  <input className="w-full rounded-lg border border-[#E8DDD7] px-4 py-3 bg-white text-sm placeholder:text-[#C4B5AF]" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-xs text-[#5A4A42] mb-1 block">Email Address</label>
                  <input className="w-full rounded-lg border border-[#E8DDD7] px-4 py-3 bg-white text-sm placeholder:text-[#C4B5AF]" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="text-xs text-[#5A4A42] mb-1 block">Phone Number</label>
                  <input className="w-full rounded-lg border border-[#E8DDD7] px-4 py-3 bg-white text-sm placeholder:text-[#C4B5AF]" placeholder="(513) 123-4567" />
                </div>
                <div>
                  <label className="text-xs text-[#5A4A42] mb-1 block">Message</label>
                  <textarea className="w-full rounded-lg border border-[#E8DDD7] px-4 py-3 bg-white text-sm placeholder:text-[#C4B5AF]" rows={5} placeholder="Tell us what you're looking for..." />
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#B8836E] text-white text-sm mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}