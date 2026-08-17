import { ArrowRight } from "lucide-react";

const variants = {
  gold:
    "bg-gold text-[#1a1a1a] hover:bg-gold-hover",
  outline:
    "border border-white/80 text-white hover:bg-white/10",
  navy:
    "bg-navy text-white hover:bg-navy-deep",
  goldOutline:
    "border border-gold text-gold hover:bg-gold hover:text-navy",
} as const;

type ButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  href,
  variant = "gold",
  children,
  className = "",
  showArrow = true,
  onClick,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow ? <ArrowRight className="size-4" /> : null}
    </a>
  );
}
