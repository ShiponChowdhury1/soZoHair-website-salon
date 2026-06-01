"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartSidebar from "@/components/shared/CartSidebar/CartSidebar";
import WishlistSidebar from "@/components/shared/WishlistSidebar/WishlistSidebar";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

type ActiveMenu = "services" | "shop" | "more" | null;

type MobileSubItem = {
  label: string;
  href: string;
  isHeading?: boolean;
};

type MobileNavItem = {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  menuKey?: Exclude<ActiveMenu, null>;
};

const dropdownLeftItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Wigs", href: "/wigs" },
  { label: "Shop", href: "/#premium" },
  { label: "Articles", href: "/articles" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

const serviceItems: MobileSubItem[] = [
  { label: "Hair Cuts & Color", href: "/services/hair-cuts-color" },
  { label: "Specialty Hair Services", href: "/services/specialty-hair" },
  { label: "Hair Extensions", href: "/services/extensions-texturizing" },
  { label: "Waxing Services", href: "/services/waxing" },
  { label: "Lash & Brow Services", href: "/services/lash-brow" },
  { label: "CryoSkin Fat Loss Treatment", href: "/services/cryoskin" },
  { label: "Pure Plasma", href: "/services/pure-plasma" },
  { label: "The Relaxing Scalp Facial", href: "/services/scalp-facial" },
];

const shopItems: MobileSubItem[] = [
  { label: "Special Products", href: "/special-products" },
  { label: "Premium Products", href: "/premium-products" },
];

const moreItemsMiddle: MobileSubItem[] = [
  { label: "Teams", href: "/teams" },
  { label: "Medical Spa Services", href: "/services/medical-spa-services" },
  { label: "SoZo on Social Media", href: "/social-media" },
  { label: "Ask the Expert", href: "/ask-expert" },
  { label: "View Our Ratings", href: "/view-our-ratings" },
  { label: "Careers at SoZo Hair, Spa & Wigs", href: "/careers" },
  { label: "Academy", href: "/academy" },
];

const moreItemsRight: MobileSubItem[] = [
  { label: "Return Refund Policy", href: "/return-refund" },
  { label: "Privacy Policy  Spa Services", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-service" },
   { label: "Cookie Policy", href: "/cookie-policy", },
];

// All mobile nav items combined
const mobileNavItems: MobileNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasSubmenu: true, menuKey: "services" as const },
  { label: "Wigs", href: "/wigs" },
  { label: "Articles", href: "/articles" },
  { label: "Shop", href: "/premium-products", hasSubmenu: true, menuKey: "shop" as const },
  { label: "Gallery", href: "/gallery" },
  { label: "Teams", href: "/teams" },
  { label: "Contact", href: "/#contact" },
  { label: "More", href: "#", hasSubmenu: true, menuKey: "more" as const },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("sozo_auth") === "true");
  }, []);

  const [activeMoreSubmenu, setActiveMoreSubmenu] = useState<"home" | "services" | "shop" | "info">("home");
  const navRef = useRef<HTMLDivElement>(null);
  const { totalItems: totalCartItems } = useCart();
  const { totalItems: totalWishlistItems } = useWishlist();
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services");
  const isWigsActive = pathname === "/wigs";
  const isShopActive = pathname.startsWith("/premium-products") || pathname.startsWith("/special-products");
  const isGalleryActive = pathname === "/gallery";

  const isMoreActive = [
    "/teams",
    "/social-media",
    "/ask-expert",
    "/view-our-ratings",
    "/careers",
    "/academy",
    "/return-refund",
    "/privacy-policy",
    "/terms-of-service"
  ].some(path => pathname === path || pathname.startsWith(path + "/"));

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
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback((menu: ActiveMenu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
    if (menu === "services") {
      setActiveMoreSubmenu("services");
    } else if (menu === "shop") {
      setActiveMoreSubmenu("shop");
    } else if (menu === "more") {
      setActiveMoreSubmenu("home");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavClick = useCallback((id: ActiveMenu | "home" | "wigs" | "gallery") => {
    setIsSearchOpen(false);
    if (id === "services" || id === "shop" || id === "more") {
      setActiveMenu((prev) => {
        const next = prev === id ? null : id;
        if (next === "services") {
          setActiveMoreSubmenu("services");
        } else if (next === "shop") {
          setActiveMoreSubmenu("shop");
        } else if (next === "more") {
          setActiveMoreSubmenu("home");
        }
        return next;
      });
    } else {
      setActiveMenu(null);
    }
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setMobileSubmenu(null);
  };

  const getMobileSubItems = (key: string): MobileSubItem[] => {
    if (key === "services") return serviceItems;
    if (key === "shop") return shopItems;
    if (key === "more") return [...moreItemsMiddle, ...moreItemsRight];
    return [];
  };

  return (
    <>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || activeMenu ? "bg-white shadow-md" : "bg-white/95"
          }`}
      >
        <nav className="relative max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 h-[70px] md:h-[90px] flex items-center justify-between">

          {/* Hamburger — visible on mobile/tablet (below lg) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex flex-col justify-center items-center gap-[5px] lg:hidden bg-transparent border-none cursor-pointer p-2 z-[200] relative"
          >
            <span
              className={`block w-6 h-[2px] bg-[#2D2D2D] rounded-sm transition-all duration-300 ${isMobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#2D2D2D] rounded-sm transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#2D2D2D] rounded-sm transition-all duration-300 ${isMobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </button>

          {/* Left Nav Links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              onClick={() => handleNavClick("home")}
              onMouseEnter={() => handleMouseEnter(null)}
              onMouseLeave={handleMouseLeave}
              className={`text-[15px] font-medium no-underline pb-1 border-b-2 transition-all duration-300 ${isHomeActive ? "text-[#2D2D2D] border-[#D4A59A]" : "text-[#555] border-transparent hover:text-[#2D2D2D] hover:border-[#D4A59A]"}`}
            >
              Home
            </Link>

            <button
              onClick={() => handleNavClick("services")}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center gap-1.5 text-[15px] font-medium transition-all duration-300 bg-transparent border-none cursor-pointer p-0 pb-1 border-b-2 ${activeMenu === "services" || isServicesActive ? "text-[#D4A59A] border-[#D4A59A]" : "text-[#555] border-transparent hover:text-[#2D2D2D] hover:border-[#D4A59A]"}`}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <Link
              href="/wigs"
              onClick={() => handleNavClick(null)}
              onMouseEnter={() => handleMouseEnter(null)}
              onMouseLeave={handleMouseLeave}
              className={`text-[15px] font-medium no-underline pb-1 border-b-2 transition-all duration-300 ${isWigsActive ? "text-[#D4A59A] border-[#D4A59A]" : "text-[#555] border-transparent hover:text-[#2D2D2D] hover:border-[#D4A59A]"}`}
            >
              Wigs
            </Link>

            <button
              onClick={() => handleNavClick("shop")}
              onMouseEnter={() => handleMouseEnter("shop")}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center gap-1.5 text-[15px] font-medium transition-all duration-300 bg-transparent border-none cursor-pointer p-0 pb-1 border-b-2 ${activeMenu === "shop" || isShopActive ? "text-[#D4A59A] border-[#D4A59A]" : "text-[#555] border-transparent hover:text-[#2D2D2D] hover:border-[#D4A59A]"}`}
            >
              Shop
              <svg className={`w-4 h-4 transition-transform ${activeMenu === "shop" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <Link
              href="/gallery"
              onClick={() => handleNavClick("gallery")}
              onMouseEnter={() => handleMouseEnter(null)}
              onMouseLeave={handleMouseLeave}
              className={`text-[15px] font-medium no-underline pb-1 border-b-2 transition-all duration-300 ${isGalleryActive ? "text-[#D4A59A] border-[#D4A59A]" : "text-[#555] border-transparent hover:text-[#2D2D2D] hover:border-[#D4A59A]"}`}
            >
              Gallery
            </Link>

            <button
              onClick={() => handleNavClick("more")}
              onMouseEnter={() => handleMouseEnter("more")}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center gap-1.5 text-[15px] font-medium transition-all duration-300 bg-transparent border-none cursor-pointer p-0 pb-1 border-b-2 ${activeMenu === "more" || isMoreActive ? "text-[#D4A59A] border-[#D4A59A]" : "text-[#555] border-transparent hover:text-[#2D2D2D] hover:border-[#D4A59A]"}`}
            >
              More
            </button>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex flex-col items-center justify-center no-underline" onClick={() => { setActiveMenu(null); closeMobile(); }}>
              <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#2D2D2D] leading-none mb-1">
                SoZo Hair
              </span>
              <span className="text-[10px] md:text-[11px] font-medium text-[#555] tracking-[1px] uppercase">
                Hair, Spa &amp; Wigs
              </span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search — always visible */}
              <button
                aria-label="Search"
                onClick={() => { setIsSearchOpen(!isSearchOpen); setActiveMenu(null); }}
                className="text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              {/* Notification Bell — only when logged in */}
              {isLoggedIn && <NotificationDropdown />}

              {/* Wishlist — only when logged in */}
              {isLoggedIn && (
                <button
                  aria-label="Wishlist"
                  onClick={() => setIsWishlistOpen(true)}
                  className="relative text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  {totalWishlistItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#D4A59A] text-white text-[10px] font-bold flex items-center justify-center">
                      {totalWishlistItems}
                    </span>
                  )}
                </button>
              )}

              {/* Cart — always visible */}
              <button
                aria-label="Shopping Bag"
                onClick={() => setIsCartOpen(true)}
                className="relative text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#D4A59A] text-white text-[10px] font-bold flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>

            {/* User Profile / Sign In */}
            <UserProfileDropdown
              isLoggedIn={isLoggedIn}
              onLogin={() => {
                localStorage.setItem("sozo_auth", "true");
                setIsLoggedIn(true);
              }}
              onLogout={() => {
                localStorage.removeItem("sozo_auth");
                setIsLoggedIn(false);
              }}
            />
          </div>

          {/* Search Overlay Inside Navbar */}
          <div
            className={`absolute inset-0 bg-white z-[60] flex items-center justify-center transition-all duration-300 ease-in-out ${isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
              }`}
          >
            <div className="w-full max-w-3xl px-4 sm:px-5 md:px-8 flex items-center gap-3 sm:gap-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C4956A] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search for services, products, or artists..."
                className="flex-1 bg-transparent border-none outline-none text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-playfair)] text-[#2D2D2D] placeholder:text-gray-300 focus:ring-0"
                autoFocus={isSearchOpen}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-[#D4A59A] transition-colors p-1 sm:p-2 flex-shrink-0 bg-transparent border-none cursor-pointer"
                aria-label="Close search"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* ===== MOBILE MENU OVERLAY ===== */}
        <div
          className={`fixed inset-0 bg-black/50 z-[140] transition-opacity duration-300 lg:hidden ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          onClick={closeMobile}
        />

        {/* ===== MOBILE SLIDE-IN MENU ===== */}
        <div
          className={`fixed top-0 left-0 w-[300px] sm:w-[340px] h-full bg-[#2D2D2D] z-[150] transition-transform duration-350 ease-in-out lg:hidden overflow-y-auto ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
            <Link href="/" onClick={closeMobile} className="no-underline">
              <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white leading-none">
                SoZo Hair
              </span>
            </Link>
            <button
              onClick={closeMobile}
              className="text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex flex-col px-6 py-4">
            {mobileNavItems.map((item) => (
              <div key={item.label}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.menuKey ? null : (item.menuKey ?? null))}
                      className="w-full flex items-center justify-between py-3.5 text-white/90 text-[16px] font-normal bg-transparent border-none cursor-pointer border-b border-white/10 transition-colors hover:text-[#D4A59A]"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 text-white/40 transition-transform duration-200 ${mobileSubmenu === item.menuKey ? "rotate-180" : ""
                          }`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {/* Submenu Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === item.menuKey ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="pl-4 py-2 flex flex-col gap-1">
                        {getMobileSubItems(item.menuKey ?? "").map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={closeMobile}
                            className={`py-2.5 text-[14px] no-underline transition-colors ${sub.isHeading
                              ? "text-white font-semibold uppercase tracking-wider text-[13px] mt-2"
                              : "text-white/60 hover:text-[#D4A59A]"
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block py-3.5 text-white/90 text-[16px] font-normal no-underline border-b border-white/10 transition-colors hover:text-[#D4A59A]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Sign In */}
            <Link
              href="/register"
              onClick={closeMobile}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#D4A59A] text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#c4958a]"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* ===== UNIFIED DESKTOP MEGA MENU DROPDOWN ===== */}
        <div
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
          className={`fixed top-[70px] md:top-[90px] inset-x-0 bottom-0 bg-[#FDF8F4]/98 backdrop-blur-lg border-t border-[#F5ECE2] overflow-y-auto transition-all duration-300 ease-in-out shadow-2xl hidden lg:block ${
            (activeMenu === "more" || activeMenu === "services" || activeMenu === "shop") ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="max-w-[var(--container-max-width)] mx-auto px-8 py-16 flex items-start gap-16 min-h-[450px]">
            {/* Column 1 - Main Links */}
            <div className="w-1/3 flex flex-col gap-6 border-r border-[#EADCC9] pr-16">
              {dropdownLeftItems.map((item) => {
                const isInteractive = item.label === "Services" || item.label === "Shop";
                const isCurrentActive =
                  (item.label === "Services" && activeMoreSubmenu === "services") ||
                  (item.label === "Shop" && activeMoreSubmenu === "shop") ||
                  (item.label === "Home" && activeMoreSubmenu === "home");

                return (
                  <div key={item.label} className="group flex items-center justify-between">
                    {isInteractive ? (
                      <button
                        onMouseEnter={() => setActiveMoreSubmenu(item.label.toLowerCase() as "services" | "shop")}
                        onClick={() => setActiveMoreSubmenu(item.label.toLowerCase() as "services" | "shop")}
                        className={`font-[family-name:var(--font-playfair)] text-[24px] uppercase tracking-[2px] text-left bg-transparent border-none cursor-pointer p-0 transition-all duration-300 flex items-center justify-between w-full ${
                          isCurrentActive ? "text-[#D4A59A] translate-x-2" : "text-[#8B7B6B] hover:text-[#2D2D2D] hover:translate-x-2"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg className={`w-5 h-5 transition-all duration-300 ${isCurrentActive ? "translate-x-1 opacity-100 stroke-[#D4A59A]" : "opacity-0 group-hover:opacity-100 translate-x-0 stroke-[#8B7B6B]"}`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        onMouseEnter={() => {
                          if (item.label === "Home" || item.label === "About" || item.label === "Wigs" || item.label === "Articles" || item.label === "Gallery" || item.label === "Contact") {
                            setActiveMoreSubmenu("home");
                          }
                        }}
                        className={`font-[family-name:var(--font-playfair)] text-[24px] uppercase tracking-[2px] no-underline transition-all duration-300 block w-full ${
                          (item.label === "Home" && activeMoreSubmenu === "home")
                            ? "text-[#D4A59A] translate-x-2"
                            : "text-[#8B7B6B] hover:text-[#2D2D2D] hover:translate-x-2"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Extra Info & Policies Trigger */}
              <button
                onMouseEnter={() => setActiveMoreSubmenu("info")}
                onClick={() => setActiveMoreSubmenu("info")}
                className={`font-[family-name:var(--font-playfair)] text-[24px] uppercase tracking-[2px] text-left bg-transparent border-none cursor-pointer p-0 transition-all duration-300 flex items-center justify-between w-full ${
                  activeMoreSubmenu === "info" ? "text-[#D4A59A] translate-x-2" : "text-[#8B7B6B] hover:text-[#2D2D2D] hover:translate-x-2"
                }`}
              >
                <span>Info &amp; Policies</span>
                <svg className={`w-5 h-5 transition-all duration-300 ${activeMoreSubmenu === "info" ? "translate-x-1 opacity-100 stroke-[#D4A59A]" : "opacity-0 group-hover:opacity-100 translate-x-0 stroke-[#8B7B6B]"}`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Right Column - Dynamic Submenu Panel */}
            <div className="w-2/3 pl-8 py-2 flex flex-col justify-center">
              <div className="transition-all duration-300">
                {activeMoreSubmenu === "home" && (
                  <div className="max-w-md">
                    <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#D4A59A] block mb-2">Welcome to SoZo Hair</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[36px] text-[#2D2D2D] leading-tight mb-4">
                      Your Premium Hair, Spa &amp; Wigs Experience
                    </h3>
                    <p className="text-[15px] text-[#777] leading-relaxed mb-6 font-sans">
                      Discover our high-end hair design, relaxing scalp facials, medical spa treatments, and professional custom-styled wigs. We believe in providing a personalized, premium experience for every guest.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="/#booking"
                        onClick={() => setActiveMenu(null)}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-[#D4A59A] text-white rounded-full text-[14px] font-medium no-underline transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-md"
                      >
                        Book Appointment
                      </Link>
                      <Link
                        href="/#about"
                        onClick={() => setActiveMenu(null)}
                        className="inline-flex items-center justify-center px-6 py-2.5 border border-[#D4A59A] text-[#D4A59A] rounded-full text-[14px] font-medium no-underline transition-all duration-300 hover:bg-[#D4A59A] hover:text-white hover:-translate-y-0.5"
                      >
                        Our Story
                      </Link>
                    </div>
                  </div>
                )}

                {activeMoreSubmenu === "services" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[3px] text-[#D4A59A] font-semibold mb-8">Our Premium Services</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="font-[family-name:var(--font-playfair)] text-[17px] uppercase tracking-[1.5px] text-[#555] no-underline transition-all duration-200 hover:text-[#D4A59A] hover:translate-x-1.5 transform block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMoreSubmenu === "shop" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[3px] text-[#D4A59A] font-semibold mb-8">Shop Collection</h3>
                    <div className="grid grid-cols-1 gap-y-6">
                      {shopItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="font-[family-name:var(--font-playfair)] text-[17px] uppercase tracking-[1.5px] text-[#555] no-underline transition-all duration-200 hover:text-[#D4A59A] hover:translate-x-1.5 transform block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMoreSubmenu === "info" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[3px] text-[#D4A59A] font-semibold mb-8">Information &amp; Policies</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                      {[...moreItemsMiddle, ...moreItemsRight].map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className={`font-[family-name:var(--font-playfair)] text-[16px] uppercase tracking-[1.5px] no-underline transition-all duration-200 hover:text-[#D4A59A] hover:translate-x-1.5 transform block ${
                            item.isHeading ? "text-[#2D2D2D] font-bold mt-4" : "text-[#555]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Wishlist Sidebar */}
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
}
