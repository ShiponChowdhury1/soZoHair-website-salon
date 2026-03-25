import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  rightAdornment?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, rightAdornment, className = "", ...props },
  ref,
) {
  return (
    <div className="space-y-2.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#1a1a1a]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          ref={ref}
          className={`h-[52px] w-full rounded-full border border-[#e0e0e0] bg-white px-4 text-sm text-[#1a1a1a] placeholder:text-zinc-500 outline-none transition focus:border-[#6B2D6B] focus:ring-2 focus:ring-[#6B2D6B]/20 ${rightAdornment ? "pr-12" : ""} ${className}`}
          {...props}
        />
        {rightAdornment ? (
          <div className="absolute inset-y-0 right-4 flex items-center text-zinc-500">
            {rightAdornment}
          </div>
        ) : null}
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
});
