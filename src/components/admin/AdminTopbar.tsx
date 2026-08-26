"use client";

import { usePathname } from "next/navigation";
import { Menu, Search, Bell } from "lucide-react";

interface AdminTopbarProps {
  onMenuToggle: () => void;
}

const PAGE_TITLES: Record<string, string> = {
  "/admin": "Dashboard Overview",
  "/admin/articles": "Articles Management",
  "/admin/services": "Services Management",
  "/admin/products": "Products Management",
};

export default function AdminTopbar({ onMenuToggle }: AdminTopbarProps) {
  const pathname = usePathname();
  const title = PAGE_TITLES[pathname] || "Admin Dashboard";

  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center gap-4 border-b border-[#C4956A]/20 bg-[#FAF6F0]/90 px-4 backdrop-blur-xl sm:px-6 shadow-sm">
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="rounded-xl p-2 text-[#3B2A1F] transition-colors hover:bg-[#C4956A]/10 lg:hidden cursor-pointer"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Page title */}
      <div className="flex-1">
        <h1 className="font-serif text-xl font-bold text-[#2D2D2D] sm:text-2xl">{title}</h1>
        <p className="hidden text-xs text-[#666666] sm:block">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Search */}
      <div className="hidden items-center gap-2 rounded-xl border border-[#C4956A]/25 bg-white px-3.5 py-2 shadow-xs md:flex">
        <Search className="h-4 w-4 text-[#C4956A]" />
        <input
          type="text"
          placeholder="Search…"
          className="w-48 bg-transparent text-sm text-[#2D2D2D] outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Notification bell */}
      <button className="relative rounded-xl border border-[#C4956A]/20 bg-white p-2.5 text-[#3B2A1F] transition-colors hover:bg-[#C4956A]/10 shadow-xs cursor-pointer">
        <Bell className="h-4 w-4" />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#C4956A] shadow-sm ring-2 ring-white" />
      </button>
    </header>
  );
}
