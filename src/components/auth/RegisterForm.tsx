"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { axiosClient } from "@/lib/axios";
import { registerSchema, type RegisterFormValues } from "@/lib/validators/registerSchema";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCredentials, setError, setLoading } from "@/store/slices/authSlice";
import type { ApiErrorResponse, AuthResponse } from "@/types/auth.types";

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3l18 18M10.73 5.08A11.63 11.63 0 0 1 12 5c6.5 0 10.5 7 10.5 7a17.76 17.76 0 0 1-4.07 4.77M6.61 6.61A17.15 17.15 0 0 0 1.5 12s4 7 10.5 7a11.9 11.9 0 0 0 3.43-.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function RegisterForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    dispatch(setError(null));
    dispatch(setLoading(true));

    try {
      const response = await axiosClient.post<AuthResponse>("/auth/register", {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        address: values.address,
        password: values.password,
      });

      dispatch(setCredentials(response.data));
      router.push("/dashboard");
    } catch (err) {
      const axiosError = err as AxiosError<ApiErrorResponse>;
      const message = axiosError.response?.data?.message ?? "Unable to create account. Please try again.";
      dispatch(setError(message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onGoogleSignUp = async () => {
    dispatch(setError(null));
    setIsGoogleLoading(true);

    try {
      const response = await axiosClient.post<AuthResponse>("/auth/google", {
        token: "google-oauth-token",
      });

      dispatch(setCredentials(response.data));
      router.push("/dashboard");
    } catch (err) {
      const axiosError = err as AxiosError<ApiErrorResponse>;
      const message = axiosError.response?.data?.message ?? "Google sign-up failed.";
      dispatch(setError(message));
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 sm:gap-6 max-w-[440px] mx-auto w-full">
      <div className="text-center space-y-2">
        <h2 className="text-[16px] font-bold tracking-wide text-[#2D2D2D]">
          SoZo Hair, Spa & Wigs
        </h2>
        <h1 className="text-[40px] font-medium tracking-tight text-[#1a1a1a]">
          Sign up
        </h1>
        <p className="text-[14px] text-zinc-500">
          Sign up for free to access to any of our products
        </p>
      </div>

      <form className="space-y-3 mt-1" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          id="fullName"
          type="text"
          label="Full Name"
          placeholder="Enter your name"
          autoComplete="name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="email"
            autoComplete="email"
            error={errors.email?.message}
            className="pl-5 pr-4"
            {...register("email")}
          />

          <Input
            id="phone"
            type="tel"
            label="Phone"
            placeholder="Phone"
            autoComplete="tel"
            error={errors.phone?.message}
            className="pl-5 pr-4"
            {...register("phone")}
          />
        </div>

        <Input
          id="address"
          type="text"
          label="Address"
          placeholder="Address"
          autoComplete="street-address"
          error={errors.address?.message}
          {...register("address")}
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            label="Password"
            placeholder="Password"
            autoComplete="new-password"
            error={errors.password?.message}
            rightAdornment={
              <button
                type="button"
                className="cursor-pointer"
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            }
            {...register("password")}
          />

          <Input
            id="confirmPassword"
            type={isConfirmVisible ? "text" : "password"}
            label="Confirm Password"
            placeholder="Confirm"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            rightAdornment={
              <button
                type="button"
                className="cursor-pointer"
                aria-label={isConfirmVisible ? "Hide confirm password" : "Show confirm password"}
                onClick={() => setIsConfirmVisible((prev) => !prev)}
              >
                {isConfirmVisible ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            }
            {...register("confirmPassword")}
          />
        </div>

       

        <Checkbox
          id="agreeTerms"
          label={
            <>
              By creating an account, I agree to our{" "}
              <Link href="#" className="font-semibold text-zinc-700 underline underline-offset-2">
                Terms Of Use
              </Link>{" "}
              &amp;{" "}
              <Link href="#" className="font-semibold text-zinc-700 underline underline-offset-2">
                Privacy Policy
              </Link>
            </>
          }
          error={errors.agreeTerms?.message}
          {...register("agreeTerms")}
        />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 mt-2 rounded-full bg-[#D4A59A] text-white font-medium hover:bg-[#C4956A] transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      </form>

      <div className="space-y-4">
        <p className="text-center text-[13px] text-zinc-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-[#1a1a1a] hover:text-[#D4A59A]"
          >
            Sign in
          </Link>
        </p>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-100" />
          <span className="text-[13px] text-gray-400">Or continue with</span>
          <span className="h-px flex-1 bg-gray-100" />
        </div>

        <button
          type="button"
          disabled={isGoogleLoading}
          onClick={onGoogleSignUp}
          className="w-full h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors text-[14px] font-medium text-gray-700 disabled:opacity-70"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>
      </div>
    </div>
  );
}
