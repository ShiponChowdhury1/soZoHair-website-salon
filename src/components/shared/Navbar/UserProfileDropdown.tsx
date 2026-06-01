"use client";

import { useState, useRef, useEffect } from "react";
import { User, ShoppingCart, Heart, LogOut, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutModal from "./LogoutModal";
import { useAuth } from "@/context/AuthContext";

export default function UserProfileDropdown() {
  const { isLoggedIn, user, login, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Login Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      setError("");
      setIsDropdownOpen(false);
    } else {
      setError("Incorrect email or password");
    }
  };

  const handleLogoutConfirm = () => {
    logout();
    setIsLogoutModalOpen(false);
    setIsDropdownOpen(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div ref={dropdownRef} className="relative">
        {isLoggedIn && user ? (
          /* Profile Trigger (Avatar, Name, Email, Arrow) */
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 bg-[#FDF8F6] border border-[#F3ECE9] hover:border-[#D4A59A] px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={user.image}
                alt={user.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="hidden md:flex flex-col items-start text-left leading-tight">
              <span className="text-[14px] font-bold text-[#2D2D2D]">{user.name}</span>
              <span className="text-[11px] text-gray-500">{user.email}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
        ) : (
          /* Sign In Button when logged out */
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#D4A59A] text-white rounded-full text-[15px] font-medium transition-all duration-300 hover:bg-[#c4958a] hover:-translate-y-0.5 hover:shadow-md border-none cursor-pointer"
          >
            Sign in
          </button>
        )}

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            className="absolute right-0 top-[calc(100%+12px)] w-[320px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-[200] p-5 flex flex-col gap-4"
            style={{ animation: "profile-drop 0.25s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {isLoggedIn && user ? (
              /* LOGGED IN DROPDOWN MENU */
              <div className="flex flex-col gap-2">
                {/* User Header Info Card */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#D4A59A]/20">
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[16px] font-bold text-[#2D2D2D]">{user.name}</span>
                    <span className="text-[12px] text-gray-500">{user.email}</span>
                  </div>
                </div>

                {/* Dropdown List Items */}
                <div className="flex flex-col gap-1 mt-2">
                  {/* Profile */}
                  <Link
                    href="/profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[16px] font-semibold text-[#2D2D2D] hover:bg-[#FDF8F6] hover:text-[#D4A59A] transition-all duration-200 group no-underline"
                  >
                    <User className="w-5 h-5 text-gray-400 group-hover:text-[#D4A59A] transition-colors" />
                    <span>Profile</span>
                  </Link>

                  {/* Cart */}
                  <Link
                    href="/cart"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[16px] font-semibold text-[#2D2D2D] hover:bg-[#FDF8F6] hover:text-[#D4A59A] transition-all duration-200 group no-underline"
                  >
                    <div className="relative">
                      <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-[#D4A59A] transition-colors" />
                      <span className="absolute -top-1.5 -right-1.5 bg-[#D4A59A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                        {user.cartCount}
                      </span>
                    </div>
                    <span>Cart ({user.cartCount})</span>
                  </Link>

                  {/* Whish list */}
                  <Link
                    href="/wishlist"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[16px] font-semibold text-[#2D2D2D] hover:bg-[#FDF8F6] hover:text-[#D4A59A] transition-all duration-200 group no-underline"
                  >
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#D4A59A] transition-colors" />
                    <span>Whish list</span>
                  </Link>

                  {/* Sign Out */}
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsLogoutModalOpen(true);
                    }}
                    className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[16px] font-semibold text-[#2D2D2D] hover:bg-red-50 hover:text-red-500 transition-all duration-200 group bg-transparent border-none cursor-pointer text-left"
                  >
                    <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            ) : (
              /* LOG IN FORM */
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[18px] font-bold text-[#2D2D2D] tracking-tight">Login</h4>
                  <p className="text-[13px] text-gray-500">Enter your credentials to continue</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-[12px] font-semibold text-[#555] block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@gmail.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#D4A59A] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#555] block mb-1">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="123456"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#D4A59A] transition-all"
                    />
                  </div>
                </div>

                {error && <span className="text-[12px] font-medium text-red-500">{error}</span>}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4A59A] hover:bg-[#c4958a] text-white rounded-full text-[14px] font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-none shadow-sm"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Logout confirmation modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={() => setIsLogoutModalOpen(false)}
      />

      <style jsx>{`
        @keyframes profile-drop {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
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
