import Link from "next/link";

/**
 * Placeholder wordmark + mark. Replace the SVG / text when the real
 * brand identity is finalised; this is the only file to touch.
 */
export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="Soch Catalyst home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand transition-colors duration-200 group-hover:bg-brand-dark">
        {/* catalyst "spark / rise" mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M6 15.5l4.5-5 3 2.6L18.5 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 7H18.5V11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`text-[1.3rem] font-medium tracking-tight ${text}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        Soch<span className="text-brand"> Catalyst</span>
      </span>
    </Link>
  );
}
