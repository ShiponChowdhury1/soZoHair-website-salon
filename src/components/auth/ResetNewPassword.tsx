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
    <div className="mx-auto w-[570px] h-[460px] rounded-2xl bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-[#1a1a1a]">Reset your password</h2>
      <p className="mt-2 text-sm text-zinc-600">Type in your new password</p>

      <div className="mt-6 space-y-4">
        <Input id="new-password" label="New password *" placeholder="New password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input id="confirm-password" label="Retype new password *" placeholder="Retype new password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      </div>
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}

      <div className="mt-6">
        <Button onClick={handleReset} className="rounded-full bg-[#cfa09a] hover:bg-[#d6a79f]">Reset password</Button>
      </div>
    </div>
  );
}
