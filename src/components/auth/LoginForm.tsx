"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { GoogleButton } from "@/components/ui/GoogleButton";
import { Input } from "@/components/ui/Input";
import { axiosClient } from "@/lib/axios";
import { loginSchema, type LoginFormValues } from "@/lib/validators/loginSchema";
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

export function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    dispatch(setError(null));
    dispatch(setLoading(true));

    try {
      const response = await axiosClient.post<AuthResponse>("/auth/login", {
        email: values.email,
        password: values.password,
      });

      // Keep remember-me logic close to submission for easy persistence extension later.
      if (rememberMe) {
        localStorage.setItem("sozohair_remember_email", values.email);
      } else {
        localStorage.removeItem("sozohair_remember_email");
      }

      dispatch(setCredentials(response.data));
      router.push("/dashboard");
    } catch (err) {
      const axiosError = err as AxiosError<ApiErrorResponse>;
      const message = axiosError.response?.data?.message ?? "Unable to sign in. Please try again.";
      dispatch(setError(message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onGoogleSignIn = async () => {
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
      const message = axiosError.response?.data?.message ?? "Google sign-in failed.";
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
          Welcome Back
        </h1>
        <p className="text-sm text-zinc-600">
          Enter your email and password to access your account
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
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

        <div className="flex items-center justify-between gap-4 text-sm">
          <label htmlFor="rememberMe" className="flex items-center gap-2 text-zinc-700">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 rounded border border-[#e0e0e0] text-[#5C1F5C] focus:ring-[#6B2D6B]"
            />
            Remember me
          </label>
          <Link href="/forgot-password" className="font-medium text-zinc-700 hover:text-[#5C1F5C]">
            Forgot Password
          </Link>
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <Button type="submit" isLoading={isLoading}>
          Sign In
        </Button>
      </form>

      <div className="mt-5 space-y-4">
        <p className="text-center text-sm text-zinc-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[#1a1a1a] hover:text-[#5C1F5C]">
            Sign Up
          </Link>
        </p>

        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-[#e0e0e0]" />
          <span className="text-sm text-zinc-500">Or continue with</span>
          <span className="h-px flex-1 bg-[#e0e0e0]" />
        </div>

        <GoogleButton isLoading={isGoogleLoading} onClick={onGoogleSignIn}>
          Google
        </GoogleButton>
      </div>
    </div>
  );
}
