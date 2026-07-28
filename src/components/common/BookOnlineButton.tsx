"use client";

import Link from "next/link";
import React from "react";

interface BookOnlineButtonProps {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export default function BookOnlineButton({
  href = "/booking",
  className = "",
  size = "md",
  variant = "primary",
  fullWidth = false,
}: BookOnlineButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-[#C4956A] hover:bg-[#b0845a] text-white shadow-[0_4px_15px_rgba(196,149,106,0.3)] hover:shadow-[0_8px_25px_rgba(196,149,106,0.4)]",
    secondary:
      "bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]",
    outline:
      "bg-transparent border-[1.5px] border-[#C4956A] text-[#C4956A] hover:bg-[#C4956A] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md font-medium no-underline transition-all duration-300 transform hover:-translate-y-0.5 ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? "w-full" : "w-auto"} ${className}`}
    >
      <span>Book Online</span>
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
