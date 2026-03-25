import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-6">
      <section className="w-full max-w-md rounded-3xl border border-[#e0e0e0] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-[#1a1a1a]">Forgot Password</h1>
        <p className="mt-3 text-sm text-zinc-600">
          Password reset flow can be connected here when backend endpoint is available.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex text-sm font-semibold text-[#5C1F5C] underline underline-offset-4"
        >
          Back to Sign In
        </Link>
      </section>
    </main>
  );
}
