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
    imageOrder: string;
    formOrder: string;
    formJustify: string;
  }
> = {
  login: {
    frame: "lg:h-[100dvh]",
    image: "lg:h-[100dvh]",
    form: "lg:h-[100dvh] lg:px-[76px] lg:py-3",
    content: "lg:w-[448px]",
    imageOrder: "lg:order-2",
    formOrder: "lg:order-1",
    formJustify: "lg:justify-center",
  },
  register: {
    frame: "lg:h-[100dvh]",
    image: "lg:h-[100dvh]",
    form: "lg:h-[100dvh] lg:px-[76px] lg:py-2",
    content: "lg:w-[448px]",
    imageOrder: "lg:order-1",
    formOrder: "lg:order-2",
    formJustify: "lg:justify-center",
  },
};

export function AuthLayout({ variant, imageSrc, imageAlt, children }: AuthLayoutProps) {
  const styles = variantClasses[variant];

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div
        className={`grid w-full min-h-screen gap-0 bg-white lg:min-h-0 lg:w-[1440px] lg:grid-cols-[840px_600px] ${styles.frame}`}
      >
        <section className={`relative min-h-[360px] ${styles.imageOrder} ${styles.image}`}>
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

        <section
          className={`flex items-center justify-center px-6 py-10 sm:px-10 ${styles.formOrder} ${styles.formJustify} ${styles.form}`}
        >
          <div className={`w-full max-w-md lg:max-w-none ${styles.content}`}>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
