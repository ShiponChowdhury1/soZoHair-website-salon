import Link from "next/link";
import { Button } from "../ui/Button";

export default function PasswordChanged() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-[400px] mx-auto w-full text-center">
      <div className="mx-auto mb-2 mt-4 h-24 w-24 rounded-full bg-green-50 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">✓</div>
      </div>

      <div className="space-y-4">
        <h2 className="text-[16px] font-bold tracking-wide text-[#2D2D2D]">
          SoZo Hair, Spa & Wigs
        </h2>
        <h1 className="text-[40px] font-medium tracking-tight text-[#1a1a1a] leading-tight">
          Success!
        </h1>
        <p className="text-[14px] text-zinc-500">
          Your password has been successfully changed.<br/>
          Sign in to your account with your new password.
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-6">
        <Link href="/login" className="w-full">
          <button className="w-full h-12 rounded-full bg-[#D4A59A] text-white font-medium hover:bg-[#C4956A] transition-colors flex items-center justify-center">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
