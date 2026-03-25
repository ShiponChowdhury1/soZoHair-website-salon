import type { ReactNode } from "react";
import Image from "next/image";

type AuthVariant = "login" | "register";

interface AuthLayoutProps {
  variant: AuthVariant;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

const variantClasses: Record<
  AuthVariant,
  {
    frame: string;
    image: string;
    form: string;
    content: string;
  }
> = {
  login: {
    frame: "lg:h-[1024px]",
    image: "lg:h-[1024px]",
    form: "lg:h-[1024px] lg:px-[76px] lg:py-6",
    content: "lg:w-[448px] lg:min-h-[731px]",
  },
  register: {
    frame: "lg:h-[1265px]",
    image: "lg:h-[1265px]",
    form: "lg:h-[1265px] lg:px-[76px] lg:py-20",
    content: "lg:w-[448px] lg:h-[1105px]",
  },
};

export function AuthLayout({ variant, imageSrc, imageAlt, children }: AuthLayoutProps) {
  const styles = variantClasses[variant];

  return (
    <main className="min-h-screen bg-white lg:flex lg:items-start lg:justify-center">
      <div
        className={`grid min-h-screen bg-white lg:w-[1440px] lg:grid-cols-[840px_600px] ${styles.frame}`}
      >
        <section className={`relative min-h-[360px] ${styles.image}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 840px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-6 left-6 text-6xl font-light tracking-tight text-white/35">
            SoZo 2026
          </p>
        </section>

        <section className={`flex items-center justify-center px-6 py-10 sm:px-10 ${styles.form}`}>
          <div className={`w-full max-w-md lg:max-w-none ${styles.content}`}>{children}</div>
        </section>
      </div>
    </main>
  );
}
