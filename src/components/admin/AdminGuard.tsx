"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { isLoggedIn, isAdmin } = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
      return;
    }
    if (!isAdmin) {
      router.replace("/");
      return;
    }
    setChecked(true);
  }, [isLoggedIn, isAdmin, router]);

  if (!checked) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#0f0f23]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#C4956A] border-t-transparent" />
          <p className="text-sm text-gray-400">Verifying access…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
