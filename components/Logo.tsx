import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // "dark" variant = dark logo on light bg (navbar); "light" variant = light logo on dark bg (footer)
  const src = variant === "light"
    ? "/soch-logo-dark.png"
    : "/soch-logo-light.png";

  return (
    <Link href="/" aria-label="Soch Catalyst home" className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Soch Catalyst"
        width={160}
        height={52}
        className="h-[52px] w-auto object-contain rounded-none bg-transparent"
        priority
      />
    </Link>
  );
}
