"use client";

import { useState, useRef, useEffect } from "react";
import { User, ShoppingCart, Heart, LogOut, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutModal from "./LogoutModal";

// ─── Mock Auth State ────────────────────────────────────────────────────────
const MOCK_USER = {
  name: "Angelina Cherry",
  email: "angelina@gmail.com",
  image: "https://i.pravatar.cc/150?img=47",
  cartCount: 2,
  wishlistCount: 5,
};

const MOCK_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "123456",
};
// ────────────────────────────────────────────────────────────────────────────

interface UserProfileDropdownProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export default function UserProfileDropdown({ isLoggedIn, onLogin, onLogout }: UserProfileDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState(MOCK_CREDENTIALS.email);
  const [loginPassword, setLoginPassword] = useState(MOCK_CREDENTIALS.password);
  const [loginError, setLoginError] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = () => {
    const email = loginEmail.trim().toLowerCase();
    const password = loginPassword.trim();
    if (
      email === MOCK_CREDENTIALS.email.toLowerCase() &&
      password === MOCK_CREDENTIALS.password
    ) {
      onLogin();
      setLoginError("");
      setIsDropdownOpen(false);
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    onLogout();
    setIsLogoutModalOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div ref={dropdownRef} className="relative flex items-center">
        {/* Trigger Button */}
        {isLoggedIn ? (
          /* User Avatar + Name Button */
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-1 pr-3 py-1 hover:border-[#D4A59A] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#D4A59A]/30 flex-shrink-0">
              <Image
                src={MOCK_USER.image}
                alt={MOCK_USER.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="hidden md:flex flex-col items-start leading-none">
              <span className="text-[13px] font-semibold text-[#2D2D2D] whitespace-nowrap">
                {MOCK_USER.name}
              </span>
              <span className="text-[11px] text-gray-400 whitespace-nowrap">
                {MOCK_USER.email}
              </span>
            </div>
          </button>
        ) : (
          /* Sign In Button when logged out */
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="hidden sm:inline-flex items-center justify-center px-5 md:px-7 py-2 md:py-2.5 bg-[#D4A59A] text-white rounded-full text-sm md:text-[15px] font-medium no-underline transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-md border-none cursor-pointer"
          >
            Sign in
          </button>
        )}

        {/* Dropdown Panel */}
        {isDropdownOpen && (
          <div
            className="absolute right-0 top-[calc(100%+12px)] w-[280px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[200]"
            style={{ animation: "profile-drop 0.2s ease" }}
          >
            {/* Arrow */}
            <div className="absolute -top-2 right-5 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

            {isLoggedIn ? (
              /* ── Logged-in View ── */
              <div className="p-2">
                {/* User Header */}
                <div className="flex items-center gap-3 px-4 py-3 mb-1">
                  <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#D4A59A]/40 flex-shrink-0">
                    <Image
                      src={MOCK_USER.image}
                      alt={MOCK_USER.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#2D2D2D] leading-tight">
                      {MOCK_USER.name}
                    </p>
                    <p className="text-[12px] text-gray-400">{MOCK_USER.email}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mx-4 mb-1" />

                {/* Menu Items */}
                <Link
                  href="/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] text-[#444] hover:bg-[#FDF6F4] hover:text-[#D4A59A] transition-all duration-150 group no-underline"
                >
                  <User className="w-4 h-4 text-[#aaa] group-hover:text-[#D4A59A] transition-colors" />
                  <span className="font-medium">Profile</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-[#D4A59A] transition-colors" />
                </Link>

                <Link
                  href="/cart"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] text-[#444] hover:bg-[#FDF6F4] hover:text-[#D4A59A] transition-all duration-150 group no-underline"
                >
                  <ShoppingCart className="w-4 h-4 text-[#aaa] group-hover:text-[#D4A59A] transition-colors" />
                  <span className="font-medium">Cart</span>
                  <span className="ml-auto bg-[#D4A59A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {MOCK_USER.cartCount}
                  </span>
                </Link>

                <Link
                  href="/wishlist"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] text-[#444] hover:bg-[#FDF6F4] hover:text-[#D4A59A] transition-all duration-150 group no-underline"
                >
                  <Heart className="w-4 h-4 text-[#aaa] group-hover:text-[#D4A59A] transition-colors" />
                  <span className="font-medium">Wish list</span>
                </Link>

                {/* Divider */}
                <div className="h-px bg-gray-100 mx-4 my-1" />

                {/* Sign Out */}
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsLogoutModalOpen(true);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] text-red-500 hover:bg-red-50 transition-all duration-150 group bg-transparent border-none cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-red-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            ) : (
              /* ── Login Form View ── */
              <div className="p-5">
                <h3 className="text-[17px] font-semibold text-[#2D2D2D] mb-1 tracking-tight">
                  Welcome back 👋
                </h3>
                <p className="text-[13px] text-gray-400 mb-4">
                  Sign in to your SoZo account
                </p>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-[12px] font-medium text-[#555] block mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="admin@gmail.com"
                      autoComplete="off"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[14px] text-[#2D2D2D] outline-none focus:border-[#D4A59A] focus:ring-2 focus:ring-[#D4A59A]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[#555] block mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••"
                      onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[14px] text-[#2D2D2D] outline-none focus:border-[#D4A59A] focus:ring-2 focus:ring-[#D4A59A]/20 transition-all"
                    />
                  </div>

                  {loginError && (
                    <p className="text-[12px] text-red-500 font-medium">{loginError}</p>
                  )}

                  <button
                    onClick={handleLogin}
                    className="w-full py-2.5 rounded-full bg-[#D4A59A] hover:bg-[#c4958a] text-white text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md border-none cursor-pointer mt-1"
                  >
                    Sign In
                  </button>
                </div>

                <p className="text-[12px] text-center text-gray-400 mt-4">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-[#D4A59A] font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleLogout}
        onCancel={() => setIsLogoutModalOpen(false)}
      />

      <style jsx>{`
        @keyframes profile-drop {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
