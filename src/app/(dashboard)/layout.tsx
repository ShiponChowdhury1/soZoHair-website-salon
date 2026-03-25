import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <p className="text-lg font-semibold text-[#1a1a1a]">SoZo Hair, Spa & Wigs</p>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl p-6">{children}</main>
    </div>
  );
}
