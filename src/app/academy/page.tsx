"use client";

import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Image from "next/image";
import { Check, Clock, Users, DollarSign, GraduationCap, Award } from "lucide-react";

const sectionClass = "mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10";

const guaranteeBullets = [
  "Earns a weekly average of 4.5-star performance grade",
  "Completes all coursework on time",
  "Maintains 100% full attendance",
  "Demonstrates professionalism & team spirit",
  "Passes practical evaluations",
];

const thenBullets = [
  "You are offered guaranteed employment",
  "You are reimbursed $20/hour over your first 12 weeks of employment",
  "After week 12, your pay converts to commission:",
];

const commissionBullets = [
  "40% commission up to $2,500 weekly sales",
  "45% commission up to $3,000 weekly sales",
  "50% commission over $3,500 weekly sales",
];

const scheduleBlocks = [
  {
    week: "Week 1",
    title: "Administrative & Professional Identity",
    desc: "Outcome: Students understand \"I am not a student anymore. I am a professional.\"",
    items: [
      "Teaching Assignments #1–2",
      "Professional dress standards",
      "Attendance standards",
      "Introduction to SoZo culture",
      "Client experience expectations",
      "Technical: The Basics (Manual Pg 5–7)",
    ],
  },
  {
    week: "Weeks 2–3",
    title: "Cutting Foundations & Confidence",
    desc: "Performance Focus: Consultation confidence, chair presence, voice tone, body posture",
    items: [
      "Teaching Assignments: #3 Objections, #6 Client Turn-Offs, #7 Taking Control, #12 Role-Playing",
      "Technical: Basic & Advanced Cutting (Pg 8–14)",
    ],
  },
  {
    week: "Weeks 4–5",
    title: "Color Etiquette & Retail Psychology",
    desc: "Goal: Every student must recommend 2 retail products in every model service.",
    items: [
      "Teaching Assignments: #4 Product Experience, #5 Training the Client, #20 Repeat Retail, #28 Retail Success",
      "Technical: Color Basics & Styling (Pg 15–26)",
    ],
  },
  {
    week: "Weeks 6–7",
    title: "Advanced Color & Sales Psychology",
    desc: "Testing: 3 complete color case studies, retail recommendation scoring",
    items: [
      "Teaching Assignments: #8 SoZo Selling Tips, #23 Nothing Sells Itself, #24 Asking the Right Questions, #29 & #30 Powerful Words",
      "Technical: Color Product Knowledge (Pg 27–50)",
    ],
  },
  {
    week: "Weeks 8–9",
    title: "Foiling & Service Expansion",
    desc: "Focus: Speed + productivity + initiative.",
    items: [
      "Teaching Assignments: #17 When Things Are Slow, #17.2 Staying Busy, #18 Extraordinary Designer, #31 Professional Experiences",
      "Technical: Foiling, Perms, Relaxers (Pg 51–56)",
    ],
  },
  {
    week: "Weeks 10–11",
    title: "Mastery, Testing & Financial Mindset",
    desc: "Final Exams: Timed haircut, full color correction, retail quota, prebooking target",
    items: [
      "Teaching Assignments: #26 Financial Goals, #27 Personal Values, #32 & #33 Work Week Analysis, #34 Cosmetologist as Performer",
      "Technical: Testing & Demonstration (Pg 57–60)",
    ],
  },
  {
    week: "Week 12",
    title: "Income Expansion & Career Launch",
    desc: "Graduation Presentation: Each student presents their 12-month income plan, marketing strategy, retention plan, and financial goal sheet.",
    items: [
      "Teaching Assignments: #13 Vision, #14 Focus, #15 Self-Promotion, #21 Retention Strategy, #22 Success Principles",
      "Technical: Supplemental Income Services (Pg 61–64)",
    ],
  },
];

type CalendarRow = {
  week: string;
  dates: string;
  theme: string;
  technical: string;
  retail: string;
  competencies: string;
  achievements: string;
  notes: string;
};

const calendarData: CalendarRow[] = [
  { week: "1", dates: "June 1-5", theme: "Launch/Fast Track Essentials", technical: "Blowdry, Shaping, Styling", retail: "Thermal", competencies: "91-3", achievements: "20 Exemplars Master", notes: "Addons" },
  { week: "2-3", dates: "June 8-19", theme: "Cutting in Plain English", technical: "Cutting & Gowning", retail: "", competencies: "Framing Facts & Space", achievements: "50 Haircuts", notes: "DVD Dates" },
  { week: "", dates: "June 22- July 3", theme: "CGJ, Aligner, One Length", technical: "Jr-A, Hrs-13", retail: "", competencies: "", achievements: "", notes: "" },
  { week: "4-5", dates: "July 6-17", theme: "Color Confidence", technical: "Color, Formulation, Consultation, Lowlights", retail: "89-13", competencies: "Connect Like a Pro", achievements: "Workplace's Journey", notes: "Color Consultation" },
  { week: "", dates: "July 20-24", theme: "Color Liftings, Lighteners", technical: "", retail: "", competencies: "Precision, Formula Learning", achievements: "2 Foils + 2 Women", notes: "" },
  { week: "6-8", dates: "July 27- Aug 7", theme: "Precision + Classics Module", technical: "Brows, Perms, Updos", retail: "J20-24", competencies: "Under Pressure", achievements: "Perms (3 + Perm's 3)", notes: "Safety Review" },
  { week: "", dates: "Aug 10-14", theme: "High, Medium, Low, Thermal Styling (Pg 10-44)", technical: "", retail: "", competencies: "", achievements: "Foils + 3 Roll No 14 Partial Waves", notes: "Addons" },
  { week: "10-11", dates: "Aug 17-28", theme: "Mastery Weeklong", technical: "High, Color, Thermal", retail: "F25-30", competencies: "Volume & Versatility", achievements: "8 Cuts + 3 Full w/14 Partial Finish 4", notes: "" },
  { week: "12", dates: "Aug 31- Sept 17-21", theme: "Income, Ignitions & Lifestyle", technical: "Wear, Makeup Perm (pg17-84)", retail: "931-34", competencies: "Full Cycle Retail Experiences", achievements: "3 Makeup Waves", notes: "Graduation" },
];

export default function AcademyPage() {
  return (
    <>
      <Navbar />

      <main className="text-left bg-[#FDF8F5]" style={{ background: "linear-gradient(180deg, #FFFBF9 0%, #FDF8F5 100%)" }}>
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden flex items-center pt-24 md:pt-32">
          {/* Overlay with radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,165,154,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(224,196,180,0.1),transparent_50%)]" />

          <div className="relative mx-auto w-full max-w-[var(--container-max-width)] px-5 sm:px-8 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pb-16">
            <div className="max-w-[680px] text-center lg:text-left">
              <span className="mb-4 inline-block rounded-full bg-[#D4A59A]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-[#D4A59A]">
                SoZo Academy
              </span>
              <h1 className="mb-6 font-[family-name:var(--font-playfair)] text-[clamp(36px,5.5vw,60px)] font-semibold leading-[1.05] text-[#2C2118] tracking-tight">
                SoZo Academy
              </h1>
              <p className="mb-4 text-[18px] md:text-[21px] font-medium leading-[1.4] text-[#6B5444]">
                12-Week Paid Apprenticeship-to-Employment Program
              </p>
              <p className="mb-8 max-w-[480px] text-[15px] md:text-[17px] font-[family-name:var(--font-playfair)] italic leading-[1.7] text-[#8C7565] mx-auto lg:mx-0">
                &ldquo;From license to leader. Transforming passionate graduates into successful, high-earning beauty professionals.&rdquo;
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#program"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4A59A] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-white no-underline transition-all hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-lg shadow-[#D4A59A]/30"
                >
                  Explore Program
                </a>
                <a
                  href="#calendar"
                  className="inline-flex items-center justify-center rounded-full border border-[#D4A59A] bg-transparent px-8 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-[#D4A59A] no-underline transition-all hover:-translate-y-0.5 hover:bg-[#D4A59A]/10"
                >
                  View Schedule
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#D4A59A]/10 rounded-full blur-2xl animate-pulse" />
              <Image
                src="/landing/accadmy.png"
                alt="SoZo Academy Badge"
                width={380}
                height={380}
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(212,165,154,0.3)] relative z-10"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* PROGRAM SUMMARY CARDS */}
        <section className="py-12 bg-white border-y border-[#F3ECE9]">
          <div className={sectionClass}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4A59A]/10 flex items-center justify-center text-[#D4A59A] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#2C2118] mb-1">Duration</h3>
                  <p className="text-[14px] text-[#6B5444] leading-relaxed">12 weeks of intensive, high-speed practical & business training.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4A59A]/10 flex items-center justify-center text-[#D4A59A] flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#2C2118] mb-1">Elite Cohorts</h3>
                  <p className="text-[14px] text-[#6B5444] leading-relaxed">Limit of 5 students per session for highly personalized guidance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4A59A]/10 flex items-center justify-center text-[#D4A59A] flex-shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#2C2118] mb-1">Paid Apprenticeship</h3>
                  <p className="text-[14px] text-[#6B5444] leading-relaxed">$20/hour rate for all 480 training hours, converting to tuition value.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM STRUCTURE DETAILS */}
        <section id="program" className="py-20 md:py-28">
          <div className={sectionClass}>
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A] block mb-3">Our Core System</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[36px] md:text-[44px] font-semibold leading-[1.15] text-[#2C2118]">
                Professional Cosmetology Excellence
              </h2>
              <p className="text-[15px] md:text-[17px] text-[#6B5444] mt-4 leading-relaxed">
                We bridge the gap between beauty school graduation and a highly lucrative professional salon career.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                {/* Cohort Card */}
                <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(44,36,32,0.04)] border border-[#F3ECE9] flex flex-col justify-between">
                  <div>
                    <h3 className="text-[19px] font-bold text-[#2C2118] mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#D4A59A]" /> Cohort Dynamics
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <div className="p-4 rounded-2xl bg-[#FFFBF9] border border-[#F3ECE9]">
                        <span className="block text-[28px] font-bold text-[#D4A59A]">5</span>
                        <span className="text-[12px] uppercase font-bold tracking-[1px] text-[#6B5444]">Students Max</span>
                        <p className="text-[12px] text-[#8C7565] mt-1">Guarantees maximum direct support and feedback.</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#FFFBF9] border border-[#F3ECE9]">
                        <span className="block text-[28px] font-bold text-[#D4A59A]">12</span>
                        <span className="text-[12px] uppercase font-bold tracking-[1px] text-[#6B5444]">Weeks duration</span>
                        <p className="text-[12px] text-[#8C7565] mt-1">Intensive schedule mirroring full salon pace.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Unique Guarantee */}
                <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(44,36,32,0.04)] border border-[#F3ECE9] flex-1">
                  <h3 className="text-[19px] font-bold text-[#2C2118] mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#D4A59A]" /> The Unique Guarantee
                  </h3>
                  <p className="text-[14px] text-[#6B5444] mb-6 leading-relaxed">
                    If the student meets all requirements below, we guarantee transition to full employment with tuition reimbursement.
                  </p>
                  <ul className="space-y-3.5 pl-0 list-none">
                    {guaranteeBullets.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-[#5A4A42]">
                        <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Details - Investment & Reimbursement */}
              <div className="lg:col-span-5 rounded-3xl bg-[#2C2118] text-white p-8 shadow-[0_20px_50px_rgba(44,36,32,0.15)] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A59A]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A] block mb-2">Reimbursement Offer</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[28px] font-semibold mb-6 leading-tight">
                    Employment &amp; Tuition Refund
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[13px] text-white/50 uppercase tracking-[1px] mb-2">Upon Success:</p>
                      <ul className="space-y-4 pl-0 list-none">
                        {thenBullets.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[14px] text-white/80">
                            <span className="w-5 h-5 rounded-full bg-[#D4A59A]/20 text-[#D4A59A] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pl-8 space-y-2 border-l border-[#D4A59A]/30">
                      {commissionBullets.map((item, idx) => (
                        <p key={idx} className="text-[13px] text-white/90 font-medium">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[13px] text-[#D4A59A] italic">
                    This structure shifts the tuition into an earned, guaranteed investment for your long-term future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THREE-PILLAR TRAINING MODEL */}
        <section className="py-20 bg-white border-y border-[#F3ECE9]">
          <div className={sectionClass}>
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A] block mb-3">Training Framework</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[36px] md:text-[42px] font-semibold leading-[1.15] text-[#2C2118]">
                Three-Pillar Training Model
              </h2>
              <p className="text-[15px] text-[#6B5444] mt-4">
                Our curriculum consists of daily components structured to create balanced salon experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="rounded-3xl bg-[#FFFBF9] border border-[#F3ECE9] p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="text-[11px] font-bold text-[#D4A59A] uppercase tracking-[2px] block mb-2">Pillar 01 (40%)</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-bold text-[#2C2118] mb-4">
                    Floor Immersion
                  </h3>
                  <p className="text-[13px] text-[#8C7565] mb-6 font-medium">16 hours per week working directly alongside master stylists.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-[12px] uppercase font-bold tracking-[1px] text-[#2C2118] mb-2">Key Activities</p>
                      <ul className="space-y-2 pl-0 list-none text-[13px] text-[#6B5444]">
                        {["Assist Master & Senior Designers", "Observe real client consultations", "Mix color & apply treatments", "Blow dry & finish styling"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[12px] uppercase font-bold tracking-[1px] text-[#2C2118] mb-2">Deliverables</p>
                      <ul className="space-y-2 pl-0 list-none text-[13px] text-[#6B5444]">
                        {["Observation logs", "Client interaction sheets"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F3ECE9]">
                  <p className="text-[12px] font-semibold text-[#D4A59A] italic">Goal: Master the pace, rhythm, and flow of a high-end salon.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-3xl bg-[#FFFBF9] border border-[#F3ECE9] p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="text-[11px] font-bold text-[#D4A59A] uppercase tracking-[2px] block mb-2">Pillar 02 (35%)</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-bold text-[#2C2118] mb-4">
                    Practical Performance
                  </h3>
                  <p className="text-[13px] text-[#8C7565] mb-6 font-medium">14 hours per week performing services on models & live guests.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-[12px] uppercase font-bold tracking-[1px] text-[#2C2118] mb-2">Key Activities</p>
                      <ul className="space-y-2 pl-0 list-none text-[13px] text-[#6B5444]">
                        {["Practice cutting & coloring on models", "Perform services on live guests", "Complete technical demos", "Management review checks"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[12px] uppercase font-bold tracking-[1px] text-[#2C2118] mb-2">Assessments</p>
                      <ul className="space-y-2 pl-0 list-none text-[13px] text-[#6B5444]">
                        {["Timed haircut exams", "Color formulation tests"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F3ECE9]">
                  <p className="text-[12px] font-semibold text-[#D4A59A] italic">Goal: Accelerate precision and build hands-on consistency.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-3xl bg-[#FFFBF9] border border-[#F3ECE9] p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <span className="text-[11px] font-bold text-[#D4A59A] uppercase tracking-[2px] block mb-2">Pillar 03 (25%)</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[22px] font-bold text-[#2C2118] mb-4">
                    Classroom Mastery
                  </h3>
                  <p className="text-[13px] text-[#8C7565] mb-6 font-medium">10 hours per week focusing on the business mindset of a stylist.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-[12px] uppercase font-bold tracking-[1px] text-[#2C2118] mb-2">Key Areas</p>
                      <ul className="space-y-2 pl-0 list-none text-[13px] text-[#6B5444]">
                        {["Study the SoZo business manual", "Client retention & prebooking skills", "Retail psychology & positioning", "Financial goal mapping"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[12px] uppercase font-bold tracking-[1px] text-[#2C2118] mb-2">Focus Topics</p>
                      <ul className="space-y-2 pl-0 list-none text-[13px] text-[#6B5444]">
                        {["Product experience psychology", "Vision board & career pathway"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F3ECE9]">
                  <p className="text-[12px] font-semibold text-[#D4A59A] italic">Goal: Build high retention and sustainable personal income.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12-WEEK SCHEDULE TIMELINE */}
        <section className="py-20 md:py-28">
          <div className={sectionClass}>
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A] block mb-3">Timeline Roadmap</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[36px] md:text-[42px] font-semibold leading-[1.15] text-[#2C2118]">
                12-Week Course Roadmap
              </h2>
              <p className="text-[15px] text-[#6B5444] mt-4">
                Follow your journey step-by-step from day one through to graduation.
              </p>
            </div>

            <div className="relative border-l border-[#D4A59A]/30 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
              {scheduleBlocks.map((block, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline indicator circle */}
                  <span className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#D4A59A] flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-[#D4A59A]" />
                  
                  <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#F3ECE9] shadow-[0_4px_30px_rgba(44,36,32,0.02)] hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#D4A59A] block mb-1">{block.week}</span>
                        <h3 className="font-[family-name:var(--font-playfair)] text-[20px] md:text-[22px] font-bold text-[#2C2118]">
                          {block.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-[14px] font-medium text-[#8C7565] mb-4 bg-[#FFFBF9] px-4 py-2.5 rounded-xl border border-[#FDF2ED]">
                      {block.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {block.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#6B5444]">
                          <span className="w-5 h-5 rounded-full bg-[#D4A59A]/10 text-[#D4A59A] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MASTER CALENDAR TABLE */}
        <section id="calendar" className="py-20 md:py-28 bg-white border-t border-[#F3ECE9]">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A] block mb-3">Academic Term Schedule</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[36px] md:text-[42px] font-semibold leading-[1.15] text-[#2C2118]">
                Master 12-Week Calendar
              </h2>
              <p className="text-[15px] text-[#6B5444] mt-4">
                Comprehensive tracking syllabus representing weekly metrics, themes, and deliverables.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#F3ECE9] shadow-xl">
              <table className="w-full min-w-[1000px] border-collapse text-left text-[13px] bg-white">
                <thead>
                  <tr className="bg-[#2C2118] text-[#FFFBF9] text-[11px] uppercase tracking-[2px] font-semibold">
                    <th className="px-5 py-4 w-[8%]">Week</th>
                    <th className="px-5 py-4 w-[13%]">Dates</th>
                    <th className="px-5 py-4 w-[20%]">Theme</th>
                    <th className="px-5 py-4 w-[20%]">Technical Focus</th>
                    <th className="px-5 py-4 w-[10%]">Retail</th>
                    <th className="px-5 py-4 w-[14%]">Competencies</th>
                    <th className="px-5 py-4 w-[15%]">Major Achievements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3ECE9]">
                  {calendarData.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-[#FFFBF9]/50 transition-colors ${row.week ? "" : "bg-[#FFFDFD]/30"}`}>
                      <td className="px-5 py-4 font-bold text-[#2C2118]">{row.week || "—"}</td>
                      <td className="px-5 py-4 text-[#8C7565] font-medium">{row.dates}</td>
                      <td className="px-5 py-4 text-[#2C2118] font-semibold">{row.theme}</td>
                      <td className="px-5 py-4 text-[#6B5444] leading-relaxed">{row.technical || "—"}</td>
                      <td className="px-5 py-4 text-[#D4A59A] font-semibold">{row.retail || "—"}</td>
                      <td className="px-5 py-4 text-[#6B5444]">{row.competencies || "—"}</td>
                      <td className="px-5 py-4 text-[#6B5444] font-medium">{row.achievements || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
