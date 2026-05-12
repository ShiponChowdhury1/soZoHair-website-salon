"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

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
    <div className="mx-auto w-[570px] h-[460px] rounded-2xl bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-[#1a1a1a]">Verify your email address</h2>
      <p className="mt-2 text-sm text-zinc-600">We have sent a 6 digit OTP in your email address</p>

      <div className="mt-8 flex items-center justify-center gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            ref={(el) => (refs.current[i] = el)}
            value={digits[i]}
            onChange={(e) => handleChange(i, e.target.value.slice(-1))}
            onKeyDown={(e) => handleKeyDown(e as any, i)}
            className="h-12 w-12 rounded-md border border-[#cfa09a] text-center text-lg focus:outline-none focus:border-[#cfa09a] focus:ring-2 focus:ring-[#cfa09a]/20 bg-white"
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>
      {error ? <p className="mt-2 text-xs text-red-600 text-center">{error}</p> : null}

      <div className="mt-8 flex justify-center">
        <Button onClick={handleVerify} className="rounded-full bg-[#cfa09a] hover:bg-[#d6a79f]">Verify</Button>
      </div>

      <p className="mt-4 text-sm text-zinc-500 text-center">Don’t get the code? <button className="text-[#6B2D6B] underline">Resend</button></p>
    </div>
  );
}
