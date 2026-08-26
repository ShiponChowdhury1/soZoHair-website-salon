"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  Package,
  LogOut,
  X,
  Scissors,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Articles",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    label: "Services",
    href: "/admin/services",
    icon: Sparkles,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: Package,
  },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const { logout, user } = useAuth();

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[272px] flex-col border-r border-[#3B2A1F]/10 bg-[#3B2A1F] text-[#F8F3EE] transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex h-[72px] items-center gap-3 border-b border-white/10 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C4956A] to-[#B3845A] text-white shadow-md shadow-[#C4956A]/30">
            <Scissors className="h-5 w-5" />
          </div>
          <div>
            <p className="font-serif text-base font-bold text-white tracking-wide">SoZo Hair</p>
            <p className="text-[11px] text-[#C4956A]">Admin Portal</p>
          </div>
          {/* Mobile close */}
          <button
            onClick={onClose}
            className="ml-auto rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white lg:hidden cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-5">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-[#C4956A]/80">
            Main Menu
          </p>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#C4956A] text-white shadow-md shadow-[#C4956A]/25"
                    : "text-[#F8F3EE]/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    active ? "text-white" : "text-[#C4956A] group-hover:text-white"
                  }`}
                />
                {item.label}
                {active && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-white shadow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User / Logout */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C4956A] text-xs font-bold text-white shadow-sm">
              {user?.name?.charAt(0) || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {user?.name || "Admin User"}
              </p>
              <p className="truncate text-[11px] text-gray-300">
                {user?.email || "admin@gmail.com"}
              </p>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-red-500/20 hover:text-red-300 cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
