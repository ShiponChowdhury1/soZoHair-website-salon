import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, label, error, className = "", ...props },
  ref,
) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex cursor-pointer items-start gap-2 text-sm text-zinc-700">
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className={`mt-1 h-4 w-4 rounded border border-[#e0e0e0] text-[#5C1F5C] focus:ring-[#6B2D6B] ${className}`}
          {...props}
        />
        <span>{label}</span>
      </label>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
});
