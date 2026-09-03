import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // "dark" variant = full-color logo on light bg (navbar); "light" variant = white logo on dark bg (footer)
  const src = variant === "light"
    ? "/signal-house-logo-white.png"
    : "/signal-house-logo.png";

  return (
    <Link href="/" aria-label="Signal House home" className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Signal House"
        width={708}
        height={279}
        className="h-11 w-auto object-contain rounded-none bg-transparent"
        priority
      />
    </Link>
  );
}
