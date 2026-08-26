"use client";

import { useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { AdminDataProvider } from "@/context/AdminDataContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminGuard>
      <AdminDataProvider>
        <div className="flex h-screen bg-[#FAF6F0] overflow-hidden text-[#2D2D2D]">
          {/* Sidebar */}
          <AdminSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main content area */}
          <div className="flex flex-1 flex-col lg:ml-[272px] min-w-0">
            <AdminTopbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} />

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#FAF6F0]">
              {children}
            </main>
          </div>
        </div>
      </AdminDataProvider>
    </AdminGuard>
  );
}
