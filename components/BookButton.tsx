"use client";

import { Icon } from "@/components/Icons";
import { useBookingModal } from "@/context/BookingModalContext";

type Variant = "primary" | "secondary" | "dark" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-ink ring-1 ring-ink/20 hover:ring-ink/45",
  dark: "bg-ink text-white hover:bg-ink-soft",
  light: "bg-transparent text-white ring-1 ring-white/45 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
};

type Props = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

export function BookButton({
  children = "Book a Discovery Call",
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: Props) {
  const { openModal } = useBookingModal();
  const cls = `group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <button type="button" onClick={openModal} className={cls}>
      {children}
      {arrow && (
        <Icon
          name="arrow"
          className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}
