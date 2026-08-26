"use client";

import Link from "next/link";
import StatsCard from "@/components/admin/StatsCard";
import { useAdminData } from "@/context/AdminDataContext";
import { FileText, Sparkles, Package, CheckCircle2, Plus } from "lucide-react";

export default function AdminOverviewPage() {
  const { articles, services, products } = useAdminData();

  const totalActive = [
    ...articles.filter((a) => a.status === "active"),
    ...services.filter((s) => s.status === "active"),
    ...products.filter((p) => p.status === "active"),
  ].length;

  const recentItems = [
    ...articles.map((a) => ({ ...a, type: "Article" as const, label: a.title })),
    ...services.map((s) => ({ ...s, type: "Service" as const, label: s.name })),
    ...products.map((p) => ({ ...p, type: "Product" as const, label: p.name })),
  ]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 6);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#2D2D2D] sm:text-3xl">
          Welcome back 👋
        </h2>
        <p className="mt-1 text-sm text-[#666666]">
          Here&apos;s an overview of your salon content and products today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Articles"
          value={articles.length}
          color="from-purple-600 to-indigo-600"
          icon={FileText}
        />
        <StatsCard
          title="Total Services"
          value={services.length}
          color="from-[#C4956A] to-[#B3845A]"
          icon={Sparkles}
        />
        <StatsCard
          title="Total Products"
          value={products.length}
          color="from-amber-600 to-orange-600"
          icon={Package}
        />
        <StatsCard
          title="Active Items"
          value={totalActive}
          color="from-emerald-600 to-teal-600"
          icon={CheckCircle2}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Link
          href="/admin/articles"
          className="group flex items-center gap-4 rounded-2xl border border-[#C4956A]/20 bg-white p-5 shadow-sm transition-all hover:border-[#C4956A]/50 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-100">
            <Plus className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-base font-bold text-[#2D2D2D]">Add Article</p>
            <p className="text-xs text-[#666666]">Create a new salon article</p>
          </div>
        </Link>

        <Link
          href="/admin/services"
          className="group flex items-center gap-4 rounded-2xl border border-[#C4956A]/20 bg-white p-5 shadow-sm transition-all hover:border-[#C4956A]/50 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF6F0] text-[#C4956A] transition-colors group-hover:bg-[#C4956A]/20">
            <Plus className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-base font-bold text-[#2D2D2D]">Add Service</p>
            <p className="text-xs text-[#666666]">List a new salon service</p>
          </div>
        </Link>

        <Link
          href="/admin/products"
          className="group flex items-center gap-4 rounded-2xl border border-[#C4956A]/20 bg-white p-5 shadow-sm transition-all hover:border-[#C4956A]/50 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-colors group-hover:bg-amber-100">
            <Plus className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-base font-bold text-[#2D2D2D]">Add Product</p>
            <p className="text-xs text-[#666666]">Add a new product item</p>
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="overflow-hidden rounded-2xl border border-[#C4956A]/20 bg-white shadow-sm">
        <div className="border-b border-[#C4956A]/15 bg-[#FAF6F0] px-6 py-4">
          <h3 className="font-serif text-base font-bold text-[#2D2D2D]">Recent Activity</h3>
        </div>
        {recentItems.length === 0 ? (
          <div className="p-8 text-center text-sm text-[#666666]">
            No activity yet. Start by adding articles, services, or products.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {recentItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-[#FAF6F0]/60"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                    item.type === "Article"
                      ? "bg-purple-100 text-purple-700"
                      : item.type === "Service"
                      ? "bg-[#FAF6F0] text-[#C4956A]"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.type === "Article" ? (
                    <FileText className="h-4 w-4" />
                  ) : item.type === "Service" ? (
                    <Sparkles className="h-4 w-4" />
                  ) : (
                    <Package className="h-4 w-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#2D2D2D]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#666666]">{item.type}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    item.status === "active"
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                      : "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20"
                  }`}
                >
                  {item.status}
                </span>
                <span className="text-xs text-[#666666] hidden sm:block font-medium">
                  {new Date(item.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
