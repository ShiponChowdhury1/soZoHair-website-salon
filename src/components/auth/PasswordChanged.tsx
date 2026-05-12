import Link from "next/link";
import { Button } from "../ui/Button";

export default function PasswordChanged() {
  return (
    <div className="mx-auto w-[570px] h-[460px] rounded-2xl bg-white p-8 text-center shadow-md">
      <div className="mx-auto mb-6 mt-6 h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center">✓</div>
      </div>

      <h2 className="text-2xl font-semibold text-[#1a1a1a]">Your Password Successfully Changed</h2>
      <p className="mt-3 text-sm text-zinc-600">Sign in to your account with your new password</p>

      <div className="mt-8 max-w-xs mx-auto">
        <Link href="/login">
          <Button className="rounded-full bg-[#cfa09a] hover:bg-[#d6a79f]">Sign in</Button>
        </Link>
      </div>
    </div>
  );
}
