"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import { Logo } from "@/components/shared/Logo";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { GoogleButton } from "@/components/ui/GoogleButton";
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
    <div className="flex h-full flex-col gap-7 sm:gap-8">
      <Logo />

      <div className="space-y-1.5">
        <h1 className="text-4xl font-semibold tracking-tight text-[#1a1a1a] lg:text-5xl">
          Sign up
        </h1>
        <p className="text-sm text-zinc-600">Sign up for free to access to in any of our products</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
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
          placeholder="Confirm Password"
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

        <p className="text-xs text-zinc-500">
          Use 8 or more characters with a mix of letters, numbers &amp; symbols
        </p>

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

        <Button type="submit" isLoading={isLoading}>
          Sign up
        </Button>
      </form>

      <div className="mt-5 space-y-4">
        <p className="text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#1a1a1a] hover:text-[#5C1F5C]">
            Sign in
          </Link>
        </p>

        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-[#e0e0e0]" />
          <span className="text-sm text-zinc-500">Or continue with</span>
          <span className="h-px flex-1 bg-[#e0e0e0]" />
        </div>

        <GoogleButton isLoading={isGoogleLoading} onClick={onGoogleSignUp}>
          Google
        </GoogleButton>
      </div>
    </div>
  );
}
