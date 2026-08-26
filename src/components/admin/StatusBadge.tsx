import { CheckCircle2, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "active" | "inactive";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === "active";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
        isActive
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
          : "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20"
      }`}
    >
      {isActive ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
      ) : (
        <XCircle className="h-3.5 w-3.5 text-rose-600" />
      )}
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}
