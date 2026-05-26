import type { ReactNode } from "react";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

type AuthVariant = "login" | "register";

interface AuthLayoutProps {
  variant: AuthVariant;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  showImage?: boolean;
}

export function AuthLayout({ variant, imageAlt, children, showImage = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#FDF9F5]">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow relative flex items-center justify-center py-20 px-4 sm:px-5 md:px-8 pt-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/auth/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#FDF9F5]/90" />
        </div>

        {/* Card Container */}
        <div className={`relative z-10 w-full bg-[#FFFFFF] mx-auto shadow-2xl ${
          showImage 
            ? "max-w-[var(--container-max-width)] overflow-hidden flex flex-col lg:flex-row" 
            : "max-w-[570px] rounded-2xl py-12 px-6 sm:px-10 flex flex-col items-center justify-center"
        }`}>
          
          {/* Register Layout: Image on Left */}
          {showImage && variant === "register" && (
            <div className="hidden lg:block lg:w-1/2 relative min-h-[800px]">
              <Image src="/auth/register.png" alt={imageAlt} fill className="object-cover" priority />
            </div>
          )}

          {/* Form Area */}
          <div className={showImage ? "w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16" : "w-full flex items-center justify-center"}>
            <div className={showImage ? "w-full max-w-[440px]" : "w-full"}>
              {children}
            </div>
          </div>

          {/* Login Layout: Image on Right */}
          {showImage && variant === "login" && (
            <div className="hidden lg:block lg:w-1/2 relative min-h-[800px]">
              <Image src="/auth/login.png" alt={imageAlt} fill className="object-cover" priority />
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
