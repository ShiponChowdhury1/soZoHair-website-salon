import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({
  children,
  className = "",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[#5C1F5C] px-6 text-base font-semibold text-white transition hover:bg-[#6B2D6B] disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Please wait..." : children}
    </button>
  );
}
