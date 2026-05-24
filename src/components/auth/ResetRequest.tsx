"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/Input";

const MOCK_EMAIL = "admin@gmail.com";

export default function ResetRequest() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleNext() {
    setError("");
    if (email.trim().toLowerCase() === MOCK_EMAIL) {
      router.push("/forgot-password/verify");
      return;
    }
    setError("Email not found. Try admin@gmail.com as mock user.");
  }

  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-[400px] mx-auto w-full">
      <div className="text-center space-y-4">
        <h2 className="text-[16px] font-bold tracking-wide text-[#2D2D2D]">
          SoZo Hair, Spa & Wigs
        </h2>
        <h1 className="text-[40px] font-medium tracking-tight text-[#1a1a1a] leading-tight">
          Reset Password
        </h1>
        <p className="text-[14px] text-zinc-500">
          Type in your registered email address to reset password
        </p>
      </div>

      <div className="mt-2 space-y-4">
        <Input
          id="email"
          label="Email Address *"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
      </div>

      <div className="mt-4 flex flex-col items-center gap-6">
        <button
          onClick={handleNext}
          className="w-full h-12 rounded-full bg-[#D4A59A] text-white font-medium hover:bg-[#C4956A] transition-colors flex items-center justify-center"
        >
          Next
        </button>
        <p className="text-[13px] text-zinc-600">
          Remembered? <Link href="/login" className="font-bold text-[#1a1a1a] hover:text-[#D4A59A]">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
