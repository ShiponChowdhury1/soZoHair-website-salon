interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <p className={`text-2xl font-semibold tracking-tight text-[#1a1a1a] ${className}`}>
      SoZo Hair, Spa & Wigs
    </p>
  );
}
