"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
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
    <div className="mx-auto w-[570px] h-[366px] rounded-2xl bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-[#1a1a1a]">Reset your password</h2>
      <p className="mt-2 text-sm text-zinc-600">Type in your registered email address to reset password</p>

      <div className="mt-6">
        <Input
          id="email"
          label="Email Address *"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
      </div>

      <div className="mt-8">
        <Button onClick={handleNext} className="rounded-full bg-[#cfa09a] hover:bg-[#d6a79f]">Next</Button>
      </div>

      <p className="mt-4 text-sm text-zinc-500">Remembered? <Link href="/login" className="text-[#6B2D6B] underline">Sign in</Link></p>
    </div>
  );
}
