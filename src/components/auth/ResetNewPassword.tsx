"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function ResetNewPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleReset() {
    setError("");
    if (!password || !confirm) {
      setError("Please fill both password fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    // mock successful reset
    router.push("/forgot-password/success");
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
          Type in your new password
        </p>
      </div>

      <div className="mt-2 space-y-4">
        <Input id="new-password" label="New password *" placeholder="New password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input id="confirm-password" label="Retype new password *" placeholder="Retype new password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      </div>
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}

      <div className="mt-4 flex flex-col items-center gap-6">
        <button
          onClick={handleReset}
          className="w-full h-12 rounded-full bg-[#D4A59A] text-white font-medium hover:bg-[#C4956A] transition-colors flex items-center justify-center"
        >
          Reset password
        </button>
      </div>
    </div>
  );
}
