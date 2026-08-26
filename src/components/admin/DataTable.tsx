"use client";

import { useState, useMemo } from "react";
import StatusBadge from "./StatusBadge";
import {
  Search,
  X,
  Inbox,
  Eye,
  EyeOff,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface DataTableProps<T extends { id: string; status: "active" | "inactive"; createdAt: string }> {
  columns: Column<T>[];
  data: T[];
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  onToggleStatus: (id: string) => void;
  searchKey: keyof T;
  emptyMessage?: string;
  emptyDescription?: string;
}

export default function DataTable<T extends { id: string; status: "active" | "inactive"; createdAt: string }>({
  columns,
  data,
  onEdit,
  onDelete,
  onToggleStatus,
  searchKey,
  emptyMessage = "No items yet",
  emptyDescription = "Create your first item to get started.",
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 8;

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((item) => {
      const val = item[searchKey];
      return typeof val === "string" && val.toLowerCase().includes(q);
    });
  }, [data, search, searchKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#C4956A]/20 bg-white shadow-sm">
      {/* Search bar header */}
      <div className="flex items-center justify-between gap-3 border-b border-[#C4956A]/15 bg-[#FAF6F0]/50 p-4">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-[#C4956A]/25 bg-white px-3.5 py-2 shadow-xs max-w-md">
          <Search className="h-4 w-4 text-[#C4956A]" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search entries…"
            className="flex-1 bg-transparent text-sm text-[#2D2D2D] outline-none placeholder:text-gray-400"
          />
          {search && (
            <button
              onClick={() => handleSearch("")}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <span className="text-xs font-semibold text-[#666666]">
          Total: {filtered.length} item{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {paginated.length === 0 ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF6F0] text-[#C4956A]">
            <Inbox className="h-8 w-8" />
          </div>
          <p className="text-base font-serif font-semibold text-[#2D2D2D]">{emptyMessage}</p>
          <p className="mt-1 text-sm text-[#666666]">{emptyDescription}</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#C4956A]/15 bg-[#FAF6F0]/80">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-[#3B2A1F]"
                      style={col.width ? { width: col.width } : undefined}
                    >
                      {col.label}
                    </th>
                  ))}
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-[#3B2A1F]">
                    Status
                  </th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-[#3B2A1F]">
                    Created Date
                  </th>
                  <th className="px-5 py-3.5 text-right text-[11px] font-bold uppercase tracking-wider text-[#3B2A1F] w-[140px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginated.map((item) => (
                  <tr
                    key={item.id}
                    className="group transition-colors hover:bg-[#FAF6F0]/60"
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="px-5 py-4 text-sm text-[#2D2D2D]"
                      >
                        {col.render
                          ? col.render(item)
                          : String((item as Record<string, unknown>)[col.key] ?? "")}
                      </td>
                    ))}
                    {/* Status */}
                    <td className="px-5 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                    {/* Date */}
                    <td className="px-5 py-4 text-xs font-medium text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    {/* Actions */}
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Toggle Status */}
                        <button
                          onClick={() => onToggleStatus(item.id)}
                          title={item.status === "active" ? "Deactivate" : "Activate"}
                          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-[#C4956A]/15 hover:text-[#C4956A] cursor-pointer"
                        >
                          {item.status === "active" ? (
                            <Eye className="h-4 w-4 text-amber-600" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          )}
                        </button>

                        {/* Edit */}
                        <button
                          onClick={() => onEdit(item)}
                          title="Edit"
                          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-[#C4956A]/15 hover:text-[#C4956A] cursor-pointer"
                        >
                          <Edit3 className="h-4 w-4 text-blue-600" />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => onDelete(item)}
                          title="Delete"
                          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-rose-100 hover:text-rose-600 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4 text-rose-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-[#C4956A]/15 bg-[#FAF6F0]/30 px-5 py-3.5">
              <p className="text-xs text-gray-600">
                Page <span className="font-bold text-[#2D2D2D]">{page}</span> of {totalPages}
              </p>
              <div className="flex gap-1.5">
                <button
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-xs transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      p === page
                        ? "bg-[#C4956A] text-white shadow-sm"
                        : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-xs transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
