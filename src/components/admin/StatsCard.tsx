import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string; // tailwind gradient or solid
  trend?: { value: string; up: boolean };
}

export default function StatsCard({ title, value, icon: Icon, color, trend }: StatsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#C4956A]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C4956A]/40 hover:shadow-md">
      {/* Background warm glow */}
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-15 blur-xl transition-all duration-500 group-hover:opacity-25`}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#666666]">{title}</p>
          <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-[#2D2D2D]">
            {value}
          </p>
          {trend && (
            <p
              className={`mt-2 flex items-center gap-1 text-xs font-medium ${
                trend.up ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              <span>{trend.up ? "↑" : "↓"}</span>
              {trend.value}
            </p>
          )}
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
