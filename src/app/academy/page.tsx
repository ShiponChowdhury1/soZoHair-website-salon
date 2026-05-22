"use client";

import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const sectionClass = "mx-auto w-full max-w-[980px] px-5 sm:px-8 lg:px-10";

const overviewBullets = [
  "12 Weeks",
  "40 Hours Per Week",
  "480 Total Hours",
];

const cohortBullets = [
  "5 Students Per Session",
  "Competitive + Team-Based Environment",
];

const investmentBullets = [
  "$20/hour × 40 hrs/week × 12 weeks",
  "= $9,600 total tuition",
];

const guaranteeBullets = [
  "Earns a weekly average of 4.5-star performance grade",
  "Completes all coursework",
  "Maintains full attendance",
  "Demonstrates professionalism & team spirit",
  "Passes practical evaluations",
];

const thenBullets = [
  "You are offered employment",
  "You are reimbursed $20/hour over your first 12 weeks of employment",
  "After week 12 your pay converts to commission:",
];

const commissionBullets = [
  "40% up to $2,500 weekly sales",
  "45% up to $3,000 weekly sales",
  "50% over $3,500 weekly sales",
];

const scheduleBlocks = [
  {
    title: "WEEK 1: Administrative + Professional Identity",
    items: [
      "Teaching Assignments #1–2",
      "Professional dress standards",
      "Attendance standards",
      "Introduction to SoZo culture",
      "Client experience expectations",
      "Technical: The Basics (Manual Pg 5–7)",
      "Outcome: Students understand “I am not a student anymore. I am a professional.”",
    ],
  },
  {
    title: "WEEKS 2–3: Cutting Foundations + Professional Confidence",
    items: [
      "Teaching Assignments:",
      "#3 Objections",
      "#6 Client Turn-Offs",
      "#7 Taking Control",
      "#12 Role-Playing",
      "Technical: Basic & Advanced Cutting (Pg 8–14)",
      "Performance Focus:",
      "Consultation confidence",
      "Chair presence",
      "Voice tone",
      "Body posture",
    ],
  },
  {
    title: "WEEKS 4–5: Color Etiquette + Retail Psychology",
    items: [
      "Teaching Assignments:",
      "#4 Product Experience",
      "#5 Training the Client",
      "#20 Repeat Retail",
      "#28 Retail Success",
      "Technical: Color Basics & Styling (Pg 15–26)",
      "Goal: Every student must recommend 2 retail products in every model service.",
    ],
  },
  {
    title: "WEEKS 6–7: Advanced Color + Sales Psychology",
    items: [
      "Teaching Assignments:",
      "#8 SoZo Selling Tips",
      "#23 Nothing Sells Itself",
      "#24 Asking the Right Questions",
      "#29 & #30 Powerful Words",
      "Technical: Color Product Knowledge (Pg 27–50)",
      "Testing:",
      "3 complete color case studies",
      "Retail recommendation scoring",
    ],
  },
  {
    title: "WEEKS 8–9: Foiling + Service Expansion",
    items: [
      "Teaching Assignments:",
      "#17 When Things Are Slow",
      "#17.2 Staying Busy",
      "#18 Extraordinary Designer",
      "#31 Professional Experiences",
      "Technical: Foiling, Perms, Relaxers (Pg 51–56)",
      "Focus: Speed + productivity + initiative.",
    ],
  },
  {
    title: "WEEKS 10–11: Mastery, Testing, Financial Mindset",
    items: [
      "Teaching Assignments:",
      "#26 Financial Goals",
      "#27 Personal Values",
      "#32 & #33 Work Week Analysis",
      "#34 Cosmetologist as Performer",
      "Technical: Testing & Demonstration (Pg 57–60)",
      "Final Exams:",
      "Timed haircut",
      "Full color correction",
      "Retail quota",
      "Prebooking percentage target",
    ],
  },
  {
    title: "WEEK 12: Income Expansion + Career Launch",
    items: [
      "Teaching Assignments:",
      "#13 Vision",
      "#14 Focus",
      "#15 Self-Promotion",
      "#21 Retention Strategy",
      "#22 Success Principles",
      "Technical: Supplemental Income Services (Pg 61–64)",
      "Graduation Presentation:",
      "Each student presents:",
      "Their 12-month income plan",
      "Their marketing strategy",
      "Their retention plan",
      "Their financial goal sheet",
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

      <main className="text-left" style={{ background: "#F8F3EE" }}>
        {/* HERO SECTION */}
        <section className="relative min-h-[88vh] overflow-hidden bg-[linear-gradient(180deg,rgba(248,243,238,0)_0%,#F8F3EE_53.38%,rgba(248,243,238,0)_105.74%)] text-left">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F3EE] via-[#F8F3EE]/95 via-35% via-[#F8F3EE]/60 to-[#F8F3EE]/5" />

          <div className="relative mx-auto flex min-h-[88vh] max-w-[var(--container-max-width)] items-center justify-between px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
            <div className="max-w-[640px]">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[3px] text-[#D4A59A]">
                SoZo Academy
              </p>
              <h1 className="mb-6 font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.08] text-[#2C2118]">
                SoZo Academy
              </h1>
              <p className="mb-2 text-[18px] font-medium leading-[1.5] text-[#6B5444]">
                12-Week Paid Apprenticeship-to-Employment Program
              </p>
              <p className="mb-9 max-w-[420px] text-[16px] font-[family-name:var(--font-playfair)] italic leading-[1.78] text-[#D4A59A]">
                &quot;From License to Leader.&quot;
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#program"
                  className="inline-flex items-center justify-center rounded-sm bg-[#D4A59A] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-white no-underline transition-transform hover:-translate-y-0.5 hover:bg-[#c4897c]"
                >
                  Learn More
                </a>
                <a
                  href="#calendar"
                  className="inline-flex items-center justify-center rounded-sm border border-[#D4A59A] bg-transparent px-7 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-[#D4A59A] no-underline transition-transform hover:-translate-y-0.5 hover:bg-[#D4A59A]/10"
                >
                  View Calendar
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block flex-shrink-0 ml-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/accadmy.png"
                alt="SoZo Academy Badge"
                className="w-[340px] h-[340px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* PROGRAM STRUCTURE OVERVIEW */}
        <section id="program" className="py-16 text-left sm:py-20">
          <div className={sectionClass}>
            <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
              SoZo Academy of Professional Cosmetology Excellence
            </h2>

            <div className="space-y-8 text-[#2C2118]">
              <div>
                <div className="flex h-8 w-full items-center rounded-sm bg-[#1C1828] px-4 text-[12px] font-bold uppercase tracking-[1.5px] text-white">
                  PROGRAM STRUCTURE OVERVIEW
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-[16px] font-medium text-[#2C2118]">Duration:</p>
                  <ul className="list-none space-y-1 pl-0 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                    {overviewBullets.map((item) => (
                      <li key={item} className="relative pl-5 before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-[16px] font-medium text-[#2C2118]">Cohort Size:</p>
                  <ul className="list-none space-y-1 pl-0 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                    {cohortBullets.map((item) => (
                      <li key={item} className="relative pl-5 before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-[16px] font-medium text-[#2C2118]">Investment:</p>
                  <ul className="list-none space-y-1 pl-0 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                    {investmentBullets.map((item) => (
                      <li key={item} className="relative pl-5 before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-[16px] font-medium text-[#2C2118]">The Unique Guarantee if the Student:</p>
                  <ul className="list-none space-y-1 pl-0 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                    {guaranteeBullets.map((item) => (
                      <li key={item} className="relative pl-5 before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-[16px] font-medium text-[#2C2118]">Then:</p>
                  <ul className="list-none space-y-1 pl-0 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                    {thenBullets.map((item) => (
                      <li key={item} className="relative pl-5 before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 space-y-1 pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                    {commissionBullets.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>

                  <p className="mt-6 text-[14px] font-medium italic text-[#2C2118]">
                    This turns tuition into earned investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="mx-5 border-t border-[#D4A59A]/25 sm:mx-8 lg:mx-[80px]" />

        {/* THREE-PILLAR TRAINING MODEL */}
        <section className="py-16 text-left sm:py-20">
          <div className={sectionClass}>
            <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
              THREE-PILLAR TRAINING MODEL
            </h2>
            <p className="mb-8 text-[14px] font-light leading-[1.8] text-[#4A3728]">
              The program will run on three daily components:
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="mb-4 font-[family-name:var(--font-playfair)] text-[22px] font-medium uppercase text-[#2C2118]">
                  PILLAR 1: ON-THE-FLOOR IMMERSION (40%)
                </h3>
                <p className="mb-3 text-[14px] font-medium text-[#4A3728]">16 Hours Per Week, Students will:</p>
                <ul className="mb-4 list-none space-y-1 pl-0">
                  {[
                    "Assist Master & Senior Designers",
                    "Observe consultations",
                    "Mix color",
                    "Apply treatments",
                    "Shampoo & blow dry",
                    "Observe rebooking conversations",
                    "Observe retail recommendation scripts",
                    "Observe client retention strategies",
                  ].map((item) => (
                    <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-3 text-[14px] font-medium text-[#4A3728]">They will complete:</p>
                <ul className="mb-4 list-none space-y-1 pl-0">
                  {[
                    "Observation logs",
                    "Client interaction analysis sheets",
                    "\u201cWhat I learned today\u201d summaries",
                  ].map((item) => (
                    <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[14px] font-medium italic text-[#D4A59A]">Goal: Learn rhythm, speed, culture, professionalism.</p>
              </div>

              <div>
                <h3 className="mb-4 font-[family-name:var(--font-playfair)] text-[22px] font-medium uppercase text-[#2C2118]">
                  PILLAR 2: PRACTICAL PERFORMANCE (35%)
                </h3>
                <p className="mb-3 text-[14px] font-medium text-[#4A3728]">14 Hours Per Week, Students will:</p>
                <ul className="mb-4 list-none space-y-1 pl-0">
                  {[
                    "Practice cutting & color techniques",
                    "Perform services on models",
                    "Perform services on live guests (progressively)",
                    "Complete technical demonstrations",
                    "Receive management sign-off",
                  ].map((item) => (
                    <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-3 text-[14px] font-medium text-[#4A3728]">Testing:</p>
                <ul className="mb-4 list-none space-y-1 pl-0">
                  {[
                    "Timed haircut exams",
                    "Consultation simulations",
                    "Color formulation exams",
                    "Retail recommendation role play",
                    "Prebooking performance metrics",
                  ].map((item) => (
                    <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[14px] font-medium italic text-[#D4A59A]">Sign-Off Required for Advancement.</p>
              </div>

              <div>
                <h3 className="mb-4 font-[family-name:var(--font-playfair)] text-[22px] font-medium uppercase text-[#2C2118]">
                  PILLAR 3: CLASSROOM MASTERY (25%)
                </h3>
                <p className="mb-3 text-[14px] font-medium text-[#4A3728]">10 Hours Per Week</p>
                <p className="mb-3 text-[14px] font-light leading-[1.8] text-[#4A3728]">
                  This is where the Teaching Assignments become transformative.
                </p>
                <p className="text-[14px] font-light leading-[1.8] text-[#4A3728]">
                  This is where students learn time-tested business principles which are the foundation of their sustained growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="mx-5 border-t border-[#D4A59A]/25 sm:mx-8 lg:mx-[80px]" />

        {/* 12 WEEK SCHEDULE BREAKDOWN */}
        <section className="py-16 text-left sm:py-20">
          <div className={sectionClass}>
            <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
              12 WEEK SCHEDULE BREAKDOWN
            </h2>
            <p className="mb-10 text-[16px] font-light leading-[1.8] text-[#4A3728]">
              Detail about this program:
            </p>

            <div className="space-y-8">
              {scheduleBlocks.map((block) => (
                <div key={block.title} className="rounded-sm border border-[#D4A59A]/20 bg-white/70 p-6 sm:p-7">
                  <h3 className="mb-4 font-[family-name:var(--font-playfair)] text-[22px] font-medium uppercase leading-[1.25] text-[#2C2118]">
                    {block.title}
                  </h3>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="relative pl-5 text-[14px] font-light leading-[1.8] text-[#4A3728] before:absolute before:left-1 before:text-[18px] before:leading-none before:text-[#D4A59A] before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* MASTER 12-WEEK CALENDAR */}
        <section id="calendar" className="py-16 text-left sm:py-20">
          <div className="relative mx-auto max-w-[var(--container-max-width)] px-4 sm:px-5 md:px-8">
            <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-[1.15] text-[#2C2118]">
              Master 12-Week Calendar
            </h2>

            <div className="rounded-sm border border-[#D4A59A]/30 bg-white">
              <table className="w-full table-fixed text-left text-[12px]">
                <thead>
                  <tr className="bg-[#3B2F27] text-[11px] font-bold uppercase tracking-[1.5px] text-[#E8D5CC]">
                    <th className="w-[7%] px-3 py-3">Week</th>
                    <th className="w-[12%] px-3 py-3">Dates</th>
                    <th className="w-[19%] px-3 py-3">Theme</th>
                    <th className="w-[18%] px-3 py-3">Technical Focus</th>
                    <th className="w-[10%] px-3 py-3">Retail Theme</th>
                    <th className="w-[14%] px-3 py-3">Competencies</th>
                    <th className="w-[14%] px-3 py-3">Major Achievements</th>
                    <th className="w-[6%] px-3 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarData.map((row, i) => (
                    <tr key={i} className={`border-t border-[#D4A59A]/15 ${i % 2 === 0 ? "bg-white" : "bg-[#FDFAF8]"}`}>
                      <td className="break-words px-3 py-3 font-medium text-[#2C2118]">{row.week}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.dates}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.theme}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.technical}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.retail}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.competencies}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.achievements}</td>
                      <td className="break-words px-3 py-3 text-[#4A3728]">{row.notes}</td>
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
