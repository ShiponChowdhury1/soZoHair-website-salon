"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartSidebar from "@/components/shared/CartSidebar/CartSidebar";
import WishlistSidebar from "@/components/shared/WishlistSidebar/WishlistSidebar";
import { productSections } from "@/data/products";
import { services } from "@/data/services";
import { SOZO_ARTICLES } from "@/data/articles";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import NotificationDropdown from "./NotificationDropdown";
import UserProfileDropdown from "./UserProfileDropdown";
import { useAuth } from "@/context/AuthContext";
import TopHeader from "@/components/layout/TopHeader";

type ActiveMenu = "services" | "shop" | "gallery" | "articles" | "more" | null;

type MobileSubItem = {
  label: string;
  href: string;
  isHeading?: boolean;
  isExternal?: boolean;
};

type MobileNavItem = {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  menuKey?: Exclude<ActiveMenu, null>;
};

const dropdownLeftItems = [
  { label: "Home", href: "/" },
  { label: "Academy", href: "/academy" },
  { label: "Team", href: "/teams" },
  { label: "Services", href: "/#services" },
  { label: "Wigs", href: "/wigs" },
  { label: "Shop", href: "/premium-products" },
  { label: "Galleries", href: "/gallery" },
  { label: "Articles", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const serviceItems: MobileSubItem[] = [
  { label: "Hair Cuts & Color", href: "/services/hair-cuts-color" },
  { label: "Specialty Hair Services", href: "/services/specialty-hair" },
  { label: "Hair Extensions", href: "/services/extensions-texturizing" },
  { label: "Waxing Services", href: "/services/waxing" },
  { label: "Lash & Brow Services", href: "/services/lash-brow" },
  { label: "Pure Plasma", href: "/services/pure-plasma" },
  { label: "The Relaxing Scalp Facial", href: "/services/scalp-facial" },
  { label: "Skin Services", href: "/services/skin-services" },
  { label: "HeadSpa", href: "/services/headspa" },
  { label: "CryoSkin Fat Loss Treatment", href: "/services/cryoskin" },
  { label: "Medical Spa Services", href: "/services/medical-spa-services", isHeading: true },
  { label: "  • Wrinkle Relaxers & Fillers", href: "/services/medical-spa-services" },
  { label: "  • Microneedling (SkinPen)", href: "/services/medical-spa-services" },
  { label: "  • VI-Peel Chemical Peel", href: "/services/medical-spa-services" },
  { label: "  • Lipo B12 Injections", href: "/services/medical-spa-services" },
  { label: "  • Body Sculpting", href: "/services/medical-spa-services" },
];

const shopItems: MobileSubItem[] = [
  { label: "Special Products", href: "/special-products" },
  { label: "Premium Products", href: "/premium-products" },
];

const galleryItems: MobileSubItem[] = [
  { label: "Before and After Happy Clients", href: "/gallery" },
  { label: "St Baldrick’s Fundraiser", href: "/st-baldricks-2009" },
  { label: "Virtual Tour", href: "/virtual-tour" },
];

const articleItems: MobileSubItem[] = [
  { label: "All Articles", href: "/blog" },
  { label: "Sozo Hair Salon Tips", href: "/blog?category=sozo-hair-salon-tips" },
  { label: "Hair Cuts", href: "/blog?category=hair-cuts" },
  { label: "Hair Extensions", href: "/blog?category=hair-extensions" },
  { label: "Foiling and Highlights", href: "/blog?category=foiling-and-highlights" },
  { label: "Professional Hair Color", href: "/blog?category=professional-hair-color" },
  { label: "Trendy Hair Styles", href: "/blog?category=trendy-hair-styles" },
];

const moreItemsMiddle: MobileSubItem[] = [
  { label: "About", href: "/about" },
  { label: "Virtual Tour", href: "/virtual-tour" },
  { label: "Medical Spa Services", href: "/services/medical-spa-services" },
  { label: "Speak Your Voice!", href: "/speak-your-voice" },
  { label: "SoZo on Social Media", href: "/social-media" },
  { label: "Ask the Expert", href: "/ask-expert" },
  { label: "View Our 5 Star Ratings", href: "https://na0.meevo.com/FiveStarRatingApp/five-star-rating?t=104044&l=107183", isExternal: true },
  { label: "Careers at SoZo Hair, Spa & Wigs", href: "/careers" },
];

const moreItemsRight: MobileSubItem[] = [
  { label: "Return Refund Policy", href: "/return-refund" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

// All mobile nav items combined
const mobileNavItems: MobileNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Academy", href: "/academy" },
  { label: "Team", href: "/teams" },
  { label: "Services", href: "/#services", hasSubmenu: true, menuKey: "services" as const },
  { label: "Wigs", href: "/wigs" },
  { label: "Shop", href: "/premium-products", hasSubmenu: true, menuKey: "shop" as const },
  { label: "Galleries", href: "/gallery", hasSubmenu: true, menuKey: "gallery" as const },
  { label: "Articles", href: "/blog", hasSubmenu: true, menuKey: "articles" as const },
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
  const [activeMoreSubmenu, setActiveMoreSubmenu] = useState<"home" | "services" | "shop" | "about_careers" | "policies">("home");
  const navRef = useRef<HTMLDivElement>(null);
  const { totalItems: totalCartItems } = useCart();
  const { totalItems: totalWishlistItems } = useWishlist();
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();

  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      if (typeof window !== "undefined") {
        setCurrentHash(window.location.hash);
      }
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isServicesActive = !activeMenu && (pathname.startsWith("/services") || currentHash === "#services");
  const isContactActive = !activeMenu && currentHash === "#contact";
  const isHomeActive = !activeMenu && pathname === "/" && currentHash !== "#services" && currentHash !== "#contact";
  const isTeamActive = !activeMenu && pathname.startsWith("/teams");
  const isAboutActive = !activeMenu && pathname === "/about";
  const isWigsActive = !activeMenu && pathname === "/wigs";
  const isShopActive = !activeMenu && (pathname.startsWith("/premium-products") || pathname.startsWith("/special-products"));
  const isGalleryActive = !activeMenu && pathname === "/gallery";
  const isAcademyActive = !activeMenu && pathname === "/academy";
  const isArticlesActive = !activeMenu && (pathname.startsWith("/articles") || pathname.startsWith("/blog"));

  const isMoreActive = !activeMenu && [
    "/about",
    "/virtual-tour",
    "/speak-your-voice",
    "/social-media",
    "/ask-expert",
    "/view-our-ratings",
    "/careers",
    "/return-refund",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy"
  ].some(path => pathname === path || pathname.startsWith(path + "/"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 200 && (window.location.hash === "#services" || window.location.hash === "#contact")) {
        window.history.replaceState(null, "", window.location.pathname);
        setCurrentHash("");
      }
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
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { products: [], servicesList: [], articlesList: [], pageLinks: [] };

    // 1. Products
    const allProducts = productSections.flatMap((s) => s.products || []);
    const matchingProducts = allProducts.filter((p) =>
      p.name?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
    ).slice(0, 4);

    // 2. Services
    const matchingServices = services.filter((s) =>
      s.title.toLowerCase().includes(q) ||
      s.intro.toLowerCase().includes(q) ||
      s.badge.toLowerCase().includes(q)
    ).slice(0, 4);

    // 3. Articles
    const matchingArticles = (SOZO_ARTICLES || []).filter((a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 4);

    // 4. Key Pages
    const sitePages = [
      { name: "Home", href: "/", desc: "Main landing page" },
      { name: "Services", href: "/#services", desc: "All hair, spa, & medical spa services" },
      { name: "Wigs", href: "/wigs", desc: "Human hair & synthetic wigs, hats, & accessories" },
      { name: "Academy", href: "/academy", desc: "Education & salon training" },
      { name: "Team", href: "/teams", desc: "Meet master stylists & experts" },
      { name: "Gallery", href: "/gallery", desc: "Photos of our work" },
      { name: "Articles & Blog", href: "/blog", desc: "Hair tips, trends, and care advice" },
      { name: "Virtual Tour", href: "/virtual-tour", desc: "360 degree virtual tour of landmark salon" },
      { name: "Ask The Expert", href: "/ask-expert", desc: "Beauty & hair advice Q&A" },
      { name: "Careers", href: "/careers", desc: "Job opportunities at SoZo" },
      { name: "View Our 5 Star Ratings", href: "/view-our-ratings", desc: "Client ratings & reviews" },
      { name: "Medical Spa Services", href: "/services/medical-spa-services", desc: "Wrinkle relaxers, fillers, skinpen, VI peel" },
    ];
    const matchingPages = sitePages.filter((p) =>
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    ).slice(0, 4);

    return {
      products: matchingProducts,
      servicesList: matchingServices,
      articlesList: matchingArticles,
      pageLinks: matchingPages,
    };
  }, [searchQuery]);

  useEffect(() => {
    if (!isSearchOpen) setSearchQuery("");
  }, [isSearchOpen]);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isHighlighted = useCallback((itemKey: string, isRouteActive: boolean) => {
    if (hoveredItem !== null) {
      return hoveredItem === itemKey;
    }
    return isRouteActive;
  }, [hoveredItem]);

  const handleMouseEnter = useCallback((itemKey: string, menu: ActiveMenu = null) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(itemKey);
    setActiveMenu(menu);
    if (menu === "services") {
      setActiveMoreSubmenu("services");
    } else if (menu === "shop") {
      setActiveMoreSubmenu("shop");
    } else if (menu === "gallery") {
      setActiveMoreSubmenu("home");
    } else if (menu === "more") {
      setActiveMoreSubmenu("about_careers");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setActiveMenu(null);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavClick = useCallback((id: ActiveMenu | "home" | "wigs" | "gallery" | "academy") => {
    setIsSearchOpen(false);
    if (id === "services" || id === "shop" || id === "gallery" || id === "articles" || id === "more") {
      setActiveMenu((prev) => {
        const next = prev === id ? null : id;
        if (next === "services") {
          setActiveMoreSubmenu("services");
        } else if (next === "shop") {
          setActiveMoreSubmenu("shop");
        } else if (next === "more") {
          setActiveMoreSubmenu("about_careers");
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
    if (key === "gallery") return galleryItems;
    if (key === "articles") return articleItems;
    if (key === "more") return [...moreItemsMiddle, ...moreItemsRight];
    return [];
  };

  return (
    <>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || activeMenu ? "bg-white border-b border-[#E8DFD8]/60 shadow-[0_4px_25px_rgba(0,0,0,0.03)]" : "bg-white/95 border-b border-transparent"
          }`}
      >
        <TopHeader />
        <nav className="relative max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 h-[70px] md:h-[90px] flex items-center justify-between gap-4">

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

          {/* Left Container with Logo & Nav Links */}
          <div className="flex items-center gap-4 xl:gap-8 h-full">
            <Link href="/" className="flex items-center justify-center no-underline mr-2" onClick={() => { setActiveMenu(null); closeMobile(); setCurrentHash(""); }}>
              <Image
                src="/logo.png"
                alt="SoZo Hair, Spa & Wigs"
                width={140}
                height={45}
                className="object-contain max-h-[48px] md:max-h-[55px] w-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Left Nav Links — hidden below lg */}
            <div className="hidden lg:flex items-center h-full gap-3 xl:gap-5 2xl:gap-6 mr-3 xl:mr-6">
              <Link
                href="/"
                onClick={() => { handleNavClick("home"); setCurrentHash(""); }}
                onMouseEnter={() => handleMouseEnter("home", null)}
                onMouseLeave={handleMouseLeave}
                className={`relative py-1 text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("home", isHomeActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
              >
                Home
              </Link>

              <Link
                href="/academy"
                onClick={() => handleNavClick("academy")}
                onMouseEnter={() => handleMouseEnter("academy", null)}
                onMouseLeave={handleMouseLeave}
                className={`relative py-1 text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("academy", isAcademyActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
              >
                Academy
              </Link>

              <Link
                href="/teams"
                onClick={() => handleNavClick(null)}
                onMouseEnter={() => handleMouseEnter("team", null)}
                onMouseLeave={handleMouseLeave}
                className={`relative py-1 text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("team", isTeamActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
              >
                Team
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter("services", "services")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/#services"
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#services");
                      setCurrentHash("#services");
                    }
                    setActiveMenu(null);
                  }}
                  className={`relative py-1 whitespace-nowrap flex items-center gap-1 text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 no-underline after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("services", activeMenu === "services" || isServicesActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
                >
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>

                {/* Floating Dropdown Panel */}
                {activeMenu === "services" && (
                  <div className="absolute top-full left-0 mt-0 w-[360px] sm:w-[380px] bg-white border border-t-0 border-[#EADCC9]/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)] rounded-b-xl rounded-t-none py-3.5 px-3 z-[150] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-[13px] font-extrabold tracking-[2px] uppercase text-[#D4A59A] px-3.5 py-2 mb-2 border-b border-[#F5ECE2]">
                      Our Services
                    </div>
                    <div className="flex flex-col gap-1 max-h-[440px] overflow-y-auto custom-scrollbar pr-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="px-3.5 py-2.5 text-[16px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/wigs"
                onClick={() => handleNavClick(null)}
                onMouseEnter={() => handleMouseEnter("wigs", null)}
                onMouseLeave={handleMouseLeave}
                className={`relative py-1 text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("wigs", isWigsActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
              >
                Wigs
              </Link>

              {/* Shop Dropdown */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter("shop", "shop")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/premium-products"
                  onClick={() => setActiveMenu(null)}
                  className={`relative py-1 whitespace-nowrap text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("shop", activeMenu === "shop" || isShopActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
                >
                  Shop
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavClick("shop");
                  }}
                  className="p-1 bg-transparent border-none cursor-pointer transition-colors ml-0.5"
                  aria-label="Toggle Shop menu"
                >
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "shop" ? "rotate-180 text-[#D4A59A]" : "text-[#111111]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Floating Dropdown Panel */}
                {activeMenu === "shop" && (
                  <div className="absolute top-full left-0 mt-0 w-[360px] sm:w-[380px] bg-white border border-t-0 border-[#EADCC9]/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)] rounded-b-xl rounded-t-none py-3.5 px-3 z-[150] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-[13px] font-extrabold tracking-[2px] uppercase text-[#D4A59A] px-3.5 py-2 mb-2 border-b border-[#F5ECE2]">
                      Shop Collections
                    </div>
                    <div className="flex flex-col gap-1">
                      {shopItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="px-3.5 py-2.5 text-[16px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Galleries Dropdown */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter("gallery", "gallery")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/gallery"
                  onClick={() => setActiveMenu(null)}
                  className={`relative py-1 whitespace-nowrap text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("gallery", activeMenu === "gallery" || isGalleryActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
                >
                  Galleries
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavClick("gallery");
                  }}
                  className="p-1 bg-transparent border-none cursor-pointer transition-colors ml-0.5"
                  aria-label="Toggle Galleries menu"
                >
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "gallery" ? "rotate-180 text-[#D4A59A]" : "text-[#111111]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Floating Dropdown Panel */}
                {activeMenu === "gallery" && (
                  <div className="absolute top-full left-0 mt-0 w-[360px] sm:w-[400px] bg-white border border-t-0 border-[#EADCC9]/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)] rounded-b-xl rounded-t-none py-3.5 px-3 z-[150] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-[13px] font-extrabold tracking-[2px] uppercase text-[#D4A59A] px-3.5 py-2 mb-2 border-b border-[#F5ECE2]">
                      Galleries
                    </div>
                    <div className="flex flex-col gap-1">
                      {galleryItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="px-3.5 py-2.5 text-[15px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Articles Dropdown */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter("articles", "articles")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/blog"
                  onClick={() => setActiveMenu(null)}
                  className={`relative py-1 whitespace-nowrap text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("articles", activeMenu === "articles" || isArticlesActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
                >
                  Articles
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavClick("articles");
                  }}
                  className="p-1 bg-transparent border-none cursor-pointer transition-colors ml-0.5"
                  aria-label="Toggle Articles menu"
                >
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "articles" ? "rotate-180 text-[#D4A59A]" : "text-[#111111]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Floating Dropdown Panel */}
                {activeMenu === "articles" && (
                  <div className="absolute top-full left-0 mt-0 w-[300px] sm:w-[320px] bg-white border border-t-0 border-[#EADCC9]/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)] rounded-b-xl rounded-t-none py-3.5 px-3 z-[150] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="text-[13px] font-extrabold tracking-[2px] uppercase text-[#D4A59A] px-3.5 py-2 mb-2 border-b border-[#F5ECE2]">
                      Articles & Tips
                    </div>
                    <div className="flex flex-col gap-1">
                      {articleItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="px-3.5 py-2.5 text-[15px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/#contact"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#contact");
                    setCurrentHash("#contact");
                  }
                  setActiveMenu(null);
                }}
                onMouseEnter={() => handleMouseEnter("contact", null)}
                onMouseLeave={handleMouseLeave}
                className={`relative py-1 whitespace-nowrap text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("contact", isContactActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
              >
                Contact
              </a>

              {/* More Dropdown */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter("more", "more")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick("more")}
                  className={`relative py-1 whitespace-nowrap flex items-center gap-1 text-[15px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-wide transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D4A59A] after:rounded-full after:transition-transform after:duration-300 after:ease-out after:origin-left ${isHighlighted("more", activeMenu === "more" || isMoreActive) ? "text-[#D4A59A] after:scale-x-100" : "text-[#111111] after:scale-x-0"}`}
                >
                  More
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "more" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Floating Dropdown Panel */}
                {activeMenu === "more" && (
                  <div className="absolute top-full right-0 mt-0 w-[360px] sm:w-[380px] bg-white border border-t-0 border-[#EADCC9]/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)] rounded-b-xl rounded-t-none py-3.5 px-3 z-[150] animate-in fade-in slide-in-from-top-2 duration-200 max-h-[480px] overflow-y-auto custom-scrollbar">
                    <div className="text-[13px] font-extrabold tracking-[2px] uppercase text-[#D4A59A] px-3.5 py-2 mb-2 border-b border-[#F5ECE2]">
                      About & Info
                    </div>
                    <div className="flex flex-col gap-1">
                      {moreItemsMiddle.map((item) => (
                        item.isExternal || item.href.startsWith("http") ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setActiveMenu(null)}
                            className="px-3.5 py-2.5 text-[16px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                          >
                            <span>{item.label}</span>
                            <svg className="w-4 h-4 text-[#D4A59A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="px-3.5 py-2.5 text-[16px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                          >
                            <span>{item.label}</span>
                          </Link>
                        )
                      ))}
                      <div className="text-[13px] font-extrabold tracking-[2px] uppercase text-[#D4A59A] px-3.5 py-2 mt-3 mb-2 border-b border-[#F5ECE2]">
                        Policies
                      </div>
                      {moreItemsRight.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="px-3.5 py-2.5 text-[16px] font-semibold text-[#111111] hover:text-[#D4A59A] hover:bg-[#FDF8F4] rounded-lg transition-all duration-150 flex items-center justify-between no-underline"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 z-20 flex-shrink-0 ml-auto">
            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search */}
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

              {/* Cart */}
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
            <UserProfileDropdown />
          </div>

          {/* Search Overlay — inside navbar */}
          <div
            className={`absolute top-0 left-0 w-full bg-white z-[120] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out ${
              isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          >
            {/* Search Input Row — matches navbar height */}
            <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 h-[70px] md:h-[90px] flex items-center gap-3 sm:gap-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C4956A] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, products, or artists..."
                className="flex-1 bg-transparent border-none outline-none text-base sm:text-lg md:text-xl font-[family-name:var(--font-playfair)] text-[#2D2D2D] placeholder:text-gray-300 focus:ring-0"
                autoFocus={isSearchOpen}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-[#D4A59A] transition-colors p-1 flex-shrink-0 bg-transparent border-none cursor-pointer"
                aria-label="Close search"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Search Results Dropdown */}
            {searchQuery && (
              <div className="border-t border-gray-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 py-6 max-h-[60vh] overflow-y-auto">
                  {searchResults.servicesList.length === 0 &&
                  searchResults.articlesList.length === 0 &&
                  searchResults.products.length === 0 &&
                  searchResults.pageLinks.length === 0 ? (
                    <p className="text-center text-[#666] py-8 text-[14px]">No results found for &quot;{searchQuery}&quot;.</p>
                  ) : (
                    <div className="space-y-6">
                      {/* Services */}
                      {searchResults.servicesList.length > 0 && (
                        <div>
                          <div className="text-[12px] font-bold uppercase tracking-widest text-[#D4A59A] mb-3">
                            Services
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {searchResults.servicesList.map((s) => (
                              <Link
                                key={s.id}
                                href={`/services/${s.id}`}
                                onClick={() => setIsSearchOpen(false)}
                                className="p-3 bg-[#FDF8F4] hover:bg-[#F5ECE2] rounded-xl border border-[#EADCC9] transition-all no-underline block"
                              >
                                <div className="text-[10px] font-bold uppercase tracking-wider text-[#D4A59A] mb-1">{s.badge}</div>
                                <div className="text-sm font-bold text-[#111]">{s.title}</div>
                                <div className="text-xs text-[#666] line-clamp-2 mt-1">{s.intro}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Articles */}
                      {searchResults.articlesList.length > 0 && (
                        <div>
                          <div className="text-[12px] font-bold uppercase tracking-widest text-[#D4A59A] mb-3">
                            Articles & Tips
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {searchResults.articlesList.map((a) => (
                              <Link
                                key={a.id}
                                href={`/articles/${a.id}`}
                                onClick={() => setIsSearchOpen(false)}
                                className="p-3 bg-[#FDF8F4] hover:bg-[#F5ECE2] rounded-xl border border-[#EADCC9] transition-all no-underline block"
                              >
                                <div className="text-[10px] font-bold uppercase tracking-wider text-[#D4A59A] mb-1">{a.category}</div>
                                <div className="text-sm font-bold text-[#111] line-clamp-1">{a.title}</div>
                                <div className="text-xs text-[#666] line-clamp-2 mt-1">{a.excerpt}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Site Pages */}
                      {searchResults.pageLinks.length > 0 && (
                        <div>
                          <div className="text-[12px] font-bold uppercase tracking-widest text-[#D4A59A] mb-3">
                            Pages & Information
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {searchResults.pageLinks.map((p) => (
                              <Link
                                key={p.name}
                                href={p.href}
                                onClick={() => setIsSearchOpen(false)}
                                className="p-3 bg-[#FDF8F4] hover:bg-[#F5ECE2] rounded-xl border border-[#EADCC9] transition-all no-underline block"
                              >
                                <div className="text-sm font-bold text-[#111]">{p.name}</div>
                                <div className="text-xs text-[#666] mt-0.5">{p.desc}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Products */}
                      {searchResults.products.length > 0 && (
                        <div>
                          <div className="text-[12px] font-bold uppercase tracking-widest text-[#D4A59A] mb-3">
                            Products
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {searchResults.products.map((p: any) => (
                              <ProductCard key={`${p.id}-${p.slug}`} product={p} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
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
              <Image
                src="/logo.png"
                alt="SoZo Hair"
                width={120}
                height={40}
                className="object-contain max-h-[40px] w-auto filter brightness-0 invert"
                priority
              />
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
                    className="block py-3.5 text-white/90 text-[17px] sm:text-[18px] font-semibold no-underline border-b border-white/10 transition-colors hover:text-[#D4A59A]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Sign Up */}
            <Link
              href="/register"
              onClick={closeMobile}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#D4A59A] text-white rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#c4958a]"
            >
              Sign up
            </Link>
            <Link
              href="/profile"
              onClick={closeMobile}
              className="mt-3 inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white/80 rounded-full text-[15px] font-medium no-underline transition-all duration-300 hover:border-[#D4A59A] hover:text-[#D4A59A]"
            >
              My Profile
            </Link>
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
