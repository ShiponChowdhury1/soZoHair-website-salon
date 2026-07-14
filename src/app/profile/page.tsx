"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export default function ProfilePage() {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn || !user) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen text-[#2C2420]"
        style={{
          background:
            "linear-gradient(135deg, #F8F3EE 0%, #F7EDE1 50%, #F5E6D3 100%)",
        }}
      >
        {/* Spacer for fixed navbar */}
        <div className="h-[70px] md:h-[90px]" />

        <div className="mx-auto max-w-[var(--container-max-width)] px-5 sm:px-8 lg:px-10 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-[13px] text-[#8A7A72]">
            <Link href="/" className="hover:text-[#B8836E] transition-colors no-underline text-[#8A7A72]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#2C2420] font-medium">My Profile</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* Left Sidebar — Profile Card */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(44,36,32,0.06)] border border-[#F0EBE5]">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#D4A59A]/20 mb-5">
                    <Image
                      src={user.image}
                      alt={user.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#2C2420]">
                    {user.name}
                  </h2>
                  <p className="text-[13px] text-[#8A7A72] mt-1">{user.email}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#D4A59A]/10 px-4 py-1.5 text-[12px] font-medium text-[#D4A59A]">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified Member
                  </span>
                </div>

                <div className="mt-8 space-y-4 border-t border-[#F0EBE5] pt-6">
                  <div className="flex items-center gap-3 text-[14px]">
                    <svg className="w-4 h-4 text-[#B8836E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.74A16 16 0 0 0 16 16.83l1.08-.54a2 2 0 0 1 2.11.44 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-[#5A4A42]">(513) 874-9999</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px]">
                    <svg className="w-4 h-4 text-[#B8836E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-[#5A4A42]">West Chester, Ohio</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px]">
                    <svg className="w-4 h-4 text-[#B8836E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="text-[#5A4A42]">Member since 2026</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(44,36,32,0.06)] border border-[#F0EBE5]">
                <h3 className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#8A7A72] mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/cart"
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[14px] font-medium text-[#2C2420] no-underline transition-all hover:bg-[#FDF8F6] hover:text-[#D4A59A]"
                  >
                    <svg className="w-4.5 h-4.5 text-[#8A7A72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    My Cart
                  </Link>
                  <Link
                    href="/track-order"
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[14px] font-medium text-[#2C2420] no-underline transition-all hover:bg-[#FDF8F6] hover:text-[#D4A59A]"
                  >
                    <svg className="w-4.5 h-4.5 text-[#8A7A72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    Track Order
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[14px] font-medium text-[#2C2420] no-underline transition-all hover:bg-[#FDF8F6] hover:text-[#D4A59A]"
                  >
                    <svg className="w-4.5 h-4.5 text-[#8A7A72]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              {/* Account Overview */}
              <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(44,36,32,0.06)] border border-[#F0EBE5]">
                <h2 className="font-[family-name:var(--font-playfair)] text-[24px] font-semibold text-[#2C2420] mb-6">
                  Account Overview
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Personal Info */}
                  <div className="rounded-2xl bg-[#FDF8F6] p-5 border border-[#F0EBE5]">
                    <h4 className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#B8836E] mb-4">
                      Personal Information
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="block text-[11px] text-[#8A7A72] mb-0.5">Full Name</span>
                        <span className="text-[14px] font-medium text-[#2C2420]">{user.name}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#8A7A72] mb-0.5">Email</span>
                        <span className="text-[14px] font-medium text-[#2C2420]">{user.email}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#8A7A72] mb-0.5">Phone</span>
                        <span className="text-[14px] font-medium text-[#2C2420]">(513) 874-9999</span>
                      </div>
                    </div>
                  </div>

                  {/* Address Info */}
                  <div className="rounded-2xl bg-[#FDF8F6] p-5 border border-[#F0EBE5]">
                    <h4 className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#B8836E] mb-4">
                      Default Address
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="block text-[11px] text-[#8A7A72] mb-0.5">Street</span>
                        <span className="text-[14px] font-medium text-[#2C2420]">9069 Cincinnati Dayton Road</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#8A7A72] mb-0.5">City</span>
                        <span className="text-[14px] font-medium text-[#2C2420]">West Chester, Ohio 45069</span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#8A7A72] mb-0.5">Country</span>
                        <span className="text-[14px] font-medium text-[#2C2420]">United States</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(44,36,32,0.06)] border border-[#F0EBE5]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-[family-name:var(--font-playfair)] text-[24px] font-semibold text-[#2C2420]">
                    Recent Orders
                  </h2>
                  <Link
                    href="/track-order"
                    className="text-[13px] font-medium text-[#B8836E] no-underline hover:text-[#2C2420] transition-colors"
                  >
                    View all →
                  </Link>
                </div>

                <div className="space-y-4">
                  {/* Order Item 1 */}
                  <div className="flex items-center justify-between rounded-2xl bg-[#FDF8F6] p-4 border border-[#F0EBE5]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E8DDD7] flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#B8836E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#2C2420]">Order #SZ-2026-001</p>
                        <p className="text-[12px] text-[#8A7A72]">July 10, 2026 • 2 items</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-600">
                      Delivered
                    </span>
                  </div>

                  {/* Order Item 2 */}
                  <div className="flex items-center justify-between rounded-2xl bg-[#FDF8F6] p-4 border border-[#F0EBE5]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E8DDD7] flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#B8836E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#2C2420]">Order #SZ-2026-002</p>
                        <p className="text-[12px] text-[#8A7A72]">July 5, 2026 • 1 item</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-600">
                      In Transit
                    </span>
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(44,36,32,0.06)] border border-[#F0EBE5]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-[family-name:var(--font-playfair)] text-[24px] font-semibold text-[#2C2420]">
                    Upcoming Appointments
                  </h2>
                  <Link
                    href="/register"
                    className="text-[13px] font-medium text-[#B8836E] no-underline hover:text-[#2C2420] transition-colors"
                  >
                    Book new →
                  </Link>
                </div>

                <div className="rounded-2xl bg-[#FDF8F6] p-5 border border-[#F0EBE5] flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4A59A]/10 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[20px] font-bold text-[#D4A59A] leading-none">18</span>
                    <span className="text-[11px] font-medium text-[#D4A59A] mt-0.5">JUL</span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#2C2420]">
                      Hair Cut & Color
                    </p>
                    <p className="text-[13px] text-[#8A7A72] mt-1">
                      Friday, July 18, 2026 • 10:00 AM
                    </p>
                    <p className="text-[12px] text-[#B8836E] mt-1">
                      with Stylist Shelly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
