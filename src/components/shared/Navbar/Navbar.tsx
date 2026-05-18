"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";

type ActiveMenu = "services" | "shop" | "more" | null;

const dropdownLeftItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Wigs", href: "#wigs" },
  { label: "Shop", href: "#premium" },
  { label: "Articles", href: "#" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const serviceItems = [
  { label: "Hair Cuts & Color", href: "#services" },
  { label: "Specialty Hair Services", href: "#services" },
  { label: "Hair Extensions", href: "#services" },
  { label: "Waxing Services", href: "#services" },
  { label: "Lash & Brow Services", href: "#services" },
  { label: "CryoSkin Fat Loss Treatment", href: "#cryoskin" },
  { label: "Pure Plasma", href: "#pure-plasma" },
];

const serviceItemsRight = [
  { label: "The Relaxing Scalp Facial", href: "#services" },
];

const shopItems = [
  { label: "Special Products", href: "#premium" },
  { label: "Premium Products", href: "#premium" },
];

const moreItemsMiddle = [
  { label: "Teams", href: "#artists" },
  { label: "Medical Spa Services", href: "#services" },
  { label: "SoZo on Social Media", href: "#" },
  { label: "Ask the Expert", href: "#" },
  { label: "View Our Ratings", href: "#" },
  { label: "Careers at SoZo Hair, Spa & Wigs", href: "#" },
];

const moreItemsRight = [
  { label: "Legals", href: "#", isHeading: true },
  { label: "Return Refund Policy", href: "/return-refund" },
  { label: "Privacy Policy  Spa Services", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-service" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = useCallback((id: ActiveMenu | "home" | "wigs" | "gallery") => {
    if (id === "services" || id === "shop" || id === "more") {
      setActiveMenu((prev) => (prev === id ? null : id));
    } else {
      setActiveMenu(null);
    }
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || activeMenu ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <nav className="relative max-w-[var(--container-max-width)] mx-auto px-5 md:px-8 h-[90px] flex items-center justify-between">
        {/* Left Nav Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            onClick={() => handleNavClick("home")}
            className="text-[15px] font-medium text-[#2D2D2D] no-underline border-b-2 border-[#D4A59A] pb-1 transition-colors hover:text-[#D4A59A]"
          >
            Home
          </Link>
          
          <button
            onClick={() => handleNavClick("services")}
            className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors bg-transparent border-none cursor-pointer p-0 pb-1 ${
              activeMenu === "services" ? "text-[#D4A59A]" : "text-[#555] hover:text-[#2D2D2D]"
            }`}
          >
            Services
            <svg className={`w-4 h-4 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <Link
            href="#wigs"
            onClick={() => handleNavClick("wigs")}
            className="text-[15px] font-medium text-[#555] no-underline pb-1 transition-colors hover:text-[#2D2D2D]"
          >
            Wigs
          </Link>

          <button
            onClick={() => handleNavClick("shop")}
            className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors bg-transparent border-none cursor-pointer p-0 pb-1 ${
              activeMenu === "shop" ? "text-[#D4A59A]" : "text-[#555] hover:text-[#2D2D2D]"
            }`}
          >
            Shop
            <svg className={`w-4 h-4 transition-transform ${activeMenu === "shop" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <Link
            href="#gallery"
            onClick={() => handleNavClick("gallery")}
            className="text-[15px] font-medium text-[#555] no-underline pb-1 transition-colors hover:text-[#2D2D2D]"
          >
            Gallery
          </Link>

          <button
            onClick={() => handleNavClick("more")}
            className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors bg-transparent border-none cursor-pointer p-0 pb-1 ${
              activeMenu === "more" ? "text-[#D4A59A]" : "text-[#555] hover:text-[#2D2D2D]"
            }`}
          >
            More
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex flex-col items-center justify-center no-underline" onClick={() => setActiveMenu(null)}>
            <span className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2D2D2D] leading-none mb-1">
              SoZo Hair
            </span>
            <span className="text-[11px] font-medium text-[#555] tracking-[1px] uppercase">
              Hair, Spa & Wigs
            </span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          {/* Icons */}
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button aria-label="Shopping Bag" className="text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>

          {/* Sign in Button */}
          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center px-7 py-2.5 bg-[#D4A59A] text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-md"
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-[90px] left-0 w-full bg-[#FDF8F4] border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out shadow-xl ${
          activeMenu ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Column 1 - Main Links */}
            <div className="flex flex-col gap-4 md:gap-6">
              {dropdownLeftItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveMenu(null)}
                  className="font-[family-name:var(--font-playfair)] text-lg md:text-[22px] uppercase tracking-[2px] text-[#8B7B6B] no-underline transition-colors hover:text-[#2D2D2D]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Column 2 - Sub Items */}
            <div className="flex flex-col gap-4 md:gap-6">
              {activeMenu === "services" &&
                serviceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="font-[family-name:var(--font-playfair)] text-base md:text-[18px] uppercase tracking-[1.5px] text-[#555] no-underline transition-colors hover:text-[#D4A59A]"
                  >
                    {item.label}
                  </Link>
                ))}
              {activeMenu === "shop" &&
                shopItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="font-[family-name:var(--font-playfair)] text-base md:text-[18px] uppercase tracking-[1.5px] text-[#555] no-underline transition-colors hover:text-[#D4A59A]"
                  >
                    {item.label}
                  </Link>
                ))}
              {activeMenu === "more" &&
                moreItemsMiddle.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="font-[family-name:var(--font-playfair)] text-base md:text-[18px] uppercase tracking-[1.5px] text-[#555] no-underline transition-colors hover:text-[#D4A59A]"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>

            {/* Column 3 - Extra Sub Items */}
            <div className="flex flex-col gap-4 md:gap-6">
              {activeMenu === "services" &&
                serviceItemsRight.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="font-[family-name:var(--font-playfair)] text-base md:text-[18px] uppercase tracking-[1.5px] text-[#555] no-underline transition-colors hover:text-[#D4A59A]"
                  >
                    {item.label}
                  </Link>
                ))}
              {activeMenu === "more" &&
                moreItemsRight.map((item) => (
                  <div key={item.label}>
                    {item.isHeading ? (
                      <span className="font-[family-name:var(--font-playfair)] text-base md:text-[18px] uppercase tracking-[1.5px] text-[#2D2D2D] font-bold block mb-2">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="font-[family-name:var(--font-playfair)] text-base md:text-[18px] uppercase tracking-[1.5px] text-[#555] no-underline transition-colors hover:text-[#D4A59A]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}
