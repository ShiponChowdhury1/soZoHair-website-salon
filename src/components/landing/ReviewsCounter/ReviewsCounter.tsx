"use client";

import CountUp from "react-countup";

// ─── Icons ────────────────────────────────────────────────────────────────────

function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="9.8" y1="8.2" x2="22" y2="20" />
      <line x1="9.8" y1="15.8" x2="22" y2="4" />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

// ─── Stat Item ────────────────────────────────────────────────────────────────

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  decimals?: number;
  suffix?: string;
  label: string;
}

function StatItem({ icon, end, decimals = 0, suffix = "", label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center group">

      {/* Icon circle — rose-gold gradient */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-7 shadow-lg group-hover:scale-105 transition-transform duration-300"
        style={{
          background: "linear-gradient(135deg, #e8b49a 0%, #d4956e 50%, #c9856a 100%)",
        }}
      >
        {icon}
      </div>

      {/* CountUp number */}
      <CountUp
        end={end}
        decimals={decimals}
        duration={2.5}
        separator=","
        delay={0}
        enableScrollSpy
        scrollSpyOnce={false}
      >
        {({ countUpRef }) => (
          <div
            className="flex items-start leading-none mb-3"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            <span
              ref={countUpRef}
              className="text-[56px] font-semibold tracking-tight text-[#2a2118]"
            />
            <span className="text-3xl font-semibold text-[#2a2118] mt-2 ml-0.5">
              {suffix}
            </span>
          </div>
        )}
      </CountUp>

      {/* Label */}
      <p
        className="text-[14px] font-normal text-[#7a6a5a] tracking-wide"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function StatsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        className="relative w-full py-20 px-6 overflow-hidden"
        style={{ backgroundColor: "#f5efe8" }}
      >
        {/* Heading block */}
        <div className="text-center mb-16">
          <span
            className="text-[10px] uppercase tracking-[2px] font-medium mb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#a08e7a",
            }}
          >
            ✦ Trusted by Thousands ✦
          </span>
          <h2
            className="text-[42px] md:text-[52px] font-normal leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#2a2118",
            }}
          >
            Why{" "}
            <em className="italic font-normal">Clients</em>{" "}
            Choose Us
          </h2>
        </div>

        {/* Stats row — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 max-w-4xl mx-auto">

          <StatItem
            icon={<UsersIcon />}
            end={25000}
            suffix="+"
            label="Happy Clients"
          />

          <StatItem
            icon={<AwardIcon />}
            end={25}
            suffix="+"
            label="Years Serving You"
          />

          <StatItem
            icon={<ServicesIcon />}
            end={30}
            suffix="+"
            label="Services"
          />

          <StatItem
            icon={<StarOutlineIcon />}
            end={5.0}
            decimals={1}
            suffix="+"
            label="Stars Reviews"
          />

        </div>
      </section>
    </>
  );
}
