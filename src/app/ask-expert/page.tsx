"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import AskExpertModal from "@/components/ask-expert/AskExpertModal";

type QA = {
  question: string;
  answer: string;
};

const qaList: QA[] = [
  {
    question:
      "Do you have makeovers for men. I'm kinda getting the itch for a different look/confidence builder. What would you recommend? Thank you and have a great day.",
    answer:
      "The answer to your question is Yes and it's a great idea! A total makeover for men can be quite dramatic—especially if you add subtle gray blending or highlights, refine your haircut, and shape your beard. We also highly recommend a Man's Manicure, eyebrow cleanup/waxing, and a relaxing facial to restore youthful skin. You'll walk out feeling confident and looking 10 years younger!",
  },
  {
    question:
      "I have a large cowlick at the front of my head, and i really want to change my look with bangs (whether heavy or side swept). the problem is, some people have told me that it's not possible, and that i could never completely tame my cowlick. is this true? and should i just stick with the usual layering and going around my cowlick?",
    answer:
      "You CAN wear bangs even with a strong front cowlick! The secret lies in a custom cutting technique and proper drying direction. Side-swept bangs or curtain bangs usually work best because they incorporate the natural direction of the cowlick rather than fighting against it. Blow-drying the roots immediately after washing using a flat paddle brush across the forehead in alternating directions will tame the growth pattern. Schedule a consultation with one of our master stylists to customize your fringe!",
  },
  {
    question:
      "I have brown hair, not too dark, but still dark enough that the past two times I've gone to my local salon they turn me down when I throw out the idea of going blonde, but I've seen celebrities with even darker hair go blonder than I even want to go so can you do it?",
    answer:
      "Yes, absolutely! Going from brown to blonde is definitely possible, provided your hair structure and history are healthy. Celebrities achieve dramatic transitions through multi-step sessions or specialized bond-protecting products like Olaplex and B3, which keep the hair strong during lifting. We recommend booking a color consultation so we can test your hair elasticity and design a multi-phase or single-day blonding plan without compromising hair health.",
  },
  {
    question:
      "My eyebrows are growing a bit unevenly. The hair on the left brow grows at very odd angles, mainly up instead of sideways. If I pluck it, it makes the eyebrow look too short. Is there any way to correct this type of eyebrow hair growth problem? It's only started happening with in the last year.",
    answer:
      "Eyebrow Lamination is the ideal solution for unruly or misdirected brow hair! Lamination gently restructures the directional flow of the brow hairs, smoothing them flat and sweeping them into your desired shape so they stay perfectly in place for up to 6–8 weeks without plucking holes in your brow line.",
  },
  {
    question:
      "I am 40 and had some sun damage. I have in the last year developed a few sun spots on my face. Is a microdermabrasion peel a good option for those?",
    answer:
      "Microdermabrasion combined with a Circadia chemical or enzyme peel is a fantastic option for hyperpigmentation and sun spots! Microdermabrasion exfoliates the surface layer of dead, discolored skin cells, while a chemical peel targets deeper melanin deposits. For persistent hyperpigmentation, our Pure Plasma skin treatment and VI-Peels also offer extraordinary results.",
  },
  {
    question:
      "Straighteners: I have thick, coarse, naturally curly hair and I love my hair when I straighten with an iron, but this is so time consuming, and not great for my hair. Can you describe the straightening processes and would they help or grow out too fast to be worth it? Your services mention Hot & Cold straightening - what's the difference?",
    answer:
      "We offer several long-lasting smoothing & straightening options! Keratin Treatments and Brazilian Blowouts reduce 80–90% of curl and frizz, lasting 3–4 months with no hard line of demarcation as it gradually washes out. Permanent Straighteners (Japanese/Thermal Rebonding) permanently flatten the hair bond until it grows out. Hot/Thermal straightening uses heat-activated protein restructuring, while cold smoothing relies on chemical relaxer bonds. A consultation helps us select the exact match for your curl type and maintenance preference.",
  },
  {
    question: "I heard that microdermabrasion is good for black skin is that true?",
    answer:
      "Yes! Microdermabrasion is safe and effective for deeper skin tones (Fitzpatrick IV–VI) when performed by an experienced esthetician using controlled diamond-tip exfoliation. It helps smooth skin texture, treat acne scarring, and lighten post-inflammatory hyperpigmentation without risking discoloration.",
  },
  {
    question:
      "I have colored hair and want to make sure that my color doesn't fade and my hair stays healthy. Can you recommend some products for my hair?",
    answer:
      "To preserve color vibrancy, always use sulfate-free, color-safe shampoos and conditioners formulated with UV filters. Wash with lukewarm or cool water, apply a leave-in heat protectant before blow-drying, and treat your hair to a weekly bond-building or moisture mask like Olaplex No. 3 or Circadia deep treatments.",
  },
  {
    question:
      "I have thinning hair and would like to get some new ideals on how to style my hair so that it doesn't look too thin.",
    answer:
      "Styling thinning hair is all about strategic layering and root lift! Shorter to medium cuts, blunt ends, and soft layering add weight and body. Using lightweight volumizing root sprays, dry shampoo texturizers, and our Red Light Scalp Therapy or CryoSkin Alopecia treatments will boost scalp circulation and hair density.",
  },
  {
    question:
      "I have had one microdermabrasion session last week at a spa near my home. I am scheduled for a second session at your salon this week. How often do you suggest to do microdermabrasion? After the initial series, what is recommended for maintaining?",
    answer:
      "Initially, an introductory series of 4–6 microdermabrasion treatments spaced 2 to 3 weeks apart delivers optimal skin renewal. After completing the initial series, maintenance treatments once every 4 to 6 weeks alongside a customized Circadia home skincare routine will keep your complexion smooth, radiant, and clear.",
  },
  {
    question:
      "I have fine, straight hair and love the way my hair looks when it's curled and wavy but it takes too long to do and being a brand new mother I just don't have the time. I have heard alot about these \"new perms\" that give your hair a natural looking wave and curl and look much better than the spiral waves we got when I was in high school (many years ago). Has the technique changed that much and is this something that will work well for my type of hair?",
    answer:
      "Modern body waves and soft texture perms are completely different from tight 80s spiral perms! Today's gentler, acid-balanced perm formulas and large flexible rods create soft, beachy waves and effortless natural volume. For a busy new mother, it's a wash-and-go dream that saves you 30 minutes of curling every morning!",
  },
  {
    question:
      "I have lived in Cincinnati for three years and have had a hard time finding a good salon. I would like to try your salon, but am unsure who I should make an appointment with for a cut/style? Any suggestions?",
    answer:
      "Welcome to West Chester! We would love to have you visit. Call our front desk at (513) 874-9999 or view our Team page on the website. Our receptionist will ask a few quick questions about your hair type, desired style, and schedule to match you with the perfect Master or Sr. Master Artist who specializes in your exact look!",
  },
  {
    question:
      "I used one of those at home boxes of color, like you get at Walgreens, and did my hair my self. It looks aweful! What would be the first step I should take in getting it fixed? Am I going to have to make alot of visits to Bajon? Is this going to cost an arm and a leg?",
    answer:
      "Don't panic! Box color corrections are very common. The first step is to refrain from applying any more box dye or bleach at home. Book a Corrective Color Consultation with us. Our master colorists will evaluate your hair health, neutralize brassy or uneven tones, and restore your desired color—often accomplished in just 1 or 2 targeted salon visits.",
  },
  {
    question: "Are body wraps for weight loss on a long term basis, or just to appear thinner for a couple days?",
    answer:
      "Traditional body wraps primarily shed excess water weight and detoxify the skin for short-term slimming (great for special events!). However, for permanent fat cell elimination and long-term inch loss, we recommend our CryoSkin CryoSlimming treatments, which permanently destroy subcutaneous fat cells.",
  },
  {
    question:
      "My old hairstylist put lots of blond highlights in my naturally red hair, but I only wanted a few around my face. He is the type of hairstylist who doesn't really listen. So now I am trying to grow this blond out because I love my red hair and I don't want to dye it. What should I do.",
    answer:
      "Instead of waiting years to grow out the unwanted blonde, we can apply a semi-permanent lowlight or toner that matches your natural red shade exactly! This fills in the over-highlighted strands to blend seamlessly back into your natural red without lifting your natural base or causing damage.",
  },
  {
    question: "I've been having dry skin problems on my face. Can you recommend a procedure that might help?",
    answer:
      "For deep facial hydration, our Circadia Signature Facial or FaSSage (Facial & Body Massage combo) is ideal. It includes gentle enzymatic exfoliation followed by deep hyaluronic acid infusion masks that restore your skin's natural moisture barrier.",
  },
  {
    question:
      "I've seen a lot of sponges, brushes, loufas, etc. that are being sold promising better skin. Is there any truth to what they say?",
    answer:
      "Physical tools like loofahs and stiff facial brushes can actually cause micro-tears and harbor bacteria if not cleaned daily. Gentle chemical exfoliation (like Circadia enzyme exfoliants or professional microdermabrasion) is far more effective and safer for maintaining healthy skin barrier function.",
  },
  {
    question:
      "My daughter has just started wearing makeup and I'm unable to convince her that too much, particularly around the eyes, makes her look like a raccoon. Any suggestions?",
    answer:
      "Bring her in for a fun, professional Teen Makeup Lesson or lash/brow shaping session! Hearing makeup advice and subtle enhancement techniques directly from a licensed aesthetician makes a huge impact, empowering young girls to embrace fresh, natural beauty.",
  },
  {
    question: "There are so many shampoos available today, how do I know which one is right for my hair?",
    answer:
      "Your shampoo choice depends on your scalp condition (oily vs dry) and hair texture/color treatment status. Color-treated hair requires sulfate-free formulas, fine hair benefits from lightweight volumizing cleansers, and thick/curly hair needs rich moisture. Visit us for a quick scalp check and personalized recommendation!",
  },
];

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
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.15.81.37 1.6.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74A16 16 0 0 0 16 16.83l1.08-.54a2 2 0 0 1 2.11.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

const containerClass = "mx-auto max-w-[var(--container-max-width)] px-4 sm:px-5 md:px-8";

function QAItem({ question, answer }: QA) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E8DDD7] py-5 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left bg-transparent border-none cursor-pointer group py-1"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold leading-7 text-[#2C2420] group-hover:text-[#B8836E] transition-colors">
          {question}
        </span>
        <div className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#E8DDD7] text-[#B8836E] transition-all duration-200 ${isOpen ? "rotate-180 bg-[#B8836E] text-white border-[#B8836E]" : "group-hover:bg-[#F8F3EE]"}`}>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="mt-3 pl-1 pr-4 text-[14.5px] leading-7 text-[#5A4A42] bg-[#FDF8F4] p-4 rounded-xl border border-[#E8DDD7] animate-in fade-in duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function AskExpertPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQA = qaList.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar />

      <main className="text-[#2C2420]" style={{
        background:
          "linear-gradient(135deg, #F8F3EE 0%, #F8F1EB 12.5%, #F7F0E7 25%, #F7EEE4 37.5%, #F7EDE1 50%, #F6EBDD 62.5%, #F6E9DA 75%, #F5E8D6 87.5%, #F5E6D3 100%)",
      }}>
        <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/landing/ask-image.png')",
              backgroundPosition: "right top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.90) 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.05) 100%)",
            }}
            aria-hidden="true"
          />

          <div className={`relative flex min-h-[500px] items-center pt-[70px] md:pt-[90px] ${containerClass}`}>
            <div className="max-w-[480px]">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[2px] text-[#8A7A72]">FAQ&apos;s</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-[#2C2420] sm:text-5xl">
                Ask The Expert&apos;s
              </h1>
              <p className="mt-4 max-w-[360px] text-[14px] leading-7 text-[#5A4A42]">
                Ask our experts for advice or insights, Connect with professionals to get answers to your questions
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <AskExpertModal />
                <a
                  href="#contact-form"
                  className="inline-flex items-center rounded-full border border-[#E8DDD7] bg-transparent px-6 py-3 text-sm font-medium text-[#2C2420] transition-colors hover:border-[#C4907A] hover:text-[#C4907A]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className={containerClass}>
            <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[2px] text-[#8A7A72]">Search</p>
            <h2 className="mb-6 text-center font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2C2420]">
              Find Answers from our experts for advice or insights
            </h2>
            <div className="relative mx-auto max-w-[560px]">
              <svg
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7A72]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions or keywords (e.g., cowlick, blonde, facial, perms)..."
                className="w-full rounded-full border border-[#E8DDD7] bg-white py-3 pl-11 pr-5 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
              />
            </div>
          </div>
        </section>

        <section id="qa" className="bg-white px-5 py-12 sm:px-8 lg:px-10">
          <div className={containerClass}>
            {filteredQA.length === 0 ? (
              <p className="text-center text-[#888] py-8 text-sm">No matching questions found.</p>
            ) : (
              filteredQA.map((item, i) => (
                <QAItem key={i} {...item} />
              ))
            )}
          </div>
        </section>

        <section className="bg-white py-4 pb-18">
          <div className={containerClass}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
              <div>
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-[#8A7A72]">Get In Touch</p>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2C2420] sm:text-4xl">
                  Visit Us in <em className="italic text-[#B8836E]">West Chester</em>
                </h2>
                <p className="mt-4 max-w-[34rem] text-[14px] leading-7 text-[#5A4A42]">
                  Located in the heart of West Chester, Ohio, our boutique spa is designed to be your sanctuary for
                  beauty, wellness, and transformation. We can&apos;t wait to welcome you.
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
                      <div className="text-[14px] text-[#5A4A42]">
                        9069 Cincinnati Dayton Road
                        <br />
                        West Chester, Ohio 45069
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F8F3EE] text-[#B8836E]">
                      <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.74A16 16 0 0 0 16 16.83l1.08-.54a2 2 0 0 1 2.11.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          strokeWidth="2"
                        />
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
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          strokeWidth="2"
                        />
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
                  <Link
                    href="/register"
                    className="inline-flex items-center rounded-full bg-[#B8836E] px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#2C2420]"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center rounded-full border border-[#E8DDD7] px-5 py-3 text-[13px] font-medium text-[#2C2420] transition-colors hover:border-[#B8836E] hover:text-[#B8836E]"
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
                    <span>Monday</span><span>9:00 AM - 5:00 PM</span>
                    <span>Tuesday</span><span>9:00 AM - 8:00 PM</span>
                    <span>Wednesday</span><span>11:00 AM - 8:00 PM</span>
                    <span>Thursday</span><span>9:00 AM - 8:00 PM</span>
                    <span>Friday</span><span>9:00 AM - 5:00 PM</span>
                    <span>Saturday</span><span>9:00 AM - 4:00 PM</span>
                    <span>Sunday</span><span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5" id="contact-form">
                <div className="overflow-hidden rounded-2xl border border-[#E8DDD7] bg-[#F8F3EE]">
                  <div className="h-56 bg-[linear-gradient(135deg,#dbeaff_0%,#90bcff_100%)] p-5">
                    <div className="flex h-full items-center justify-center rounded-xl border border-white/40 bg-white/30 text-center text-[13px] text-[#2C2420] backdrop-blur-sm">
                      Map preview for SoZo Hair, Spa &amp; Wigs
                      <br />
                      West Chester, OH
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#F8F3EE] p-6 shadow-[0_12px_32px_rgba(44,36,32,0.08)]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2C2420]">
                    Send Us a Message
                  </h3>
                  <div className="mt-5 space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Your Name</span>
                      <input
                        className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                        placeholder="your name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Email Address</span>
                      <input
                        className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                        placeholder="email@example.com"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Phone Number</span>
                      <input
                        className="w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                        placeholder="Enter your phone number"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[13px] text-[#5A4A42]">Message</span>
                      <textarea
                        className="min-h-[120px] w-full rounded-lg border border-[#E8DDD7] bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#C4907A]"
                        placeholder="Write your message here..."
                      />
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
                <div key={item.title} className="rounded-2xl p-6 text-center">
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
