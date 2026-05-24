"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const MOCK_OTP = "123456";

export default function VerifyOtp() {
  const router = useRouter();
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  function handleChange(index: number, value: string) {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...digits];
    next[index] = value;
    setDigits(next);
    setError("");
    if (value && index < refs.current.length - 1) {
      refs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    const key = e.key;
    if (key === "Backspace") {
      e.preventDefault();
      const next = [...digits];
      if (next[index]) {
        next[index] = "";
        setDigits(next);
        // keep focus on current
        refs.current[index]?.focus();
      } else if (index > 0) {
        // move to previous and clear it
        refs.current[index - 1]?.focus();
        next[index - 1] = "";
        setDigits(next);
      }
    } else if (key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    } else if (key === "ArrowRight" && index < refs.current.length - 1) {
      refs.current[index + 1]?.focus();
    }
  }

  function handleVerify() {
    const code = digits.join("");
    if (code === MOCK_OTP) {
      router.push("/forgot-password/reset");
      return;
    }
    setError("Invalid code. Try 123456 as mock OTP.");
  }

  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-[400px] mx-auto w-full">
      <div className="text-center space-y-4">
        <h2 className="text-[16px] font-bold tracking-wide text-[#2D2D2D]">
          SoZo Hair, Spa & Wigs
        </h2>
        <h1 className="text-[40px] font-medium tracking-tight text-[#1a1a1a]">
          Verify Email
        </h1>
        <p className="text-[14px] text-zinc-500">
          We have sent a 6 digit OTP to your email address
        </p>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            value={digits[i]}
            onChange={(e) => handleChange(i, e.target.value.slice(-1))}
            onKeyDown={(e) => handleKeyDown(e as React.KeyboardEvent<HTMLInputElement>, i)}
            className="h-12 w-12 rounded-md border border-[#cfa09a] text-center text-lg focus:outline-none focus:border-[#cfa09a] focus:ring-2 focus:ring-[#cfa09a]/20 bg-white"
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>
      {error ? <p className="mt-2 text-xs text-red-600 text-center">{error}</p> : null}

      <div className="mt-6 flex flex-col items-center gap-4">
        <button
          onClick={handleVerify}
          className="w-full h-12 rounded-full bg-[#D4A59A] text-white font-medium hover:bg-[#C4956A] transition-colors flex items-center justify-center"
        >
          Verify
        </button>
        <p className="text-[13px] text-zinc-600">
          Don&apos;t get the code? <button className="font-bold text-[#1a1a1a] hover:text-[#D4A59A]">Resend</button>
        </p>
      </div>
    </div>
  );
}
