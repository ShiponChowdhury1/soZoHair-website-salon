import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";

interface GoogleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function GoogleButton({
  children = "Google",
  className = "",
  isLoading = false,
  disabled,
  ...props
}: GoogleButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#e0e0e0] bg-white px-6 text-base font-semibold text-[#1a1a1a] transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      <Image src="/auth/google.svg" alt="Google" width={18} height={18} />
      {isLoading ? "Connecting..." : children}
    </button>
  );
}
