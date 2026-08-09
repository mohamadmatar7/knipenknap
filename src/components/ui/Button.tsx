import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
  external?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: Props) {
  const variants = {
    primary:
      "bg-[var(--brand-gold)] text-[var(--brand-espresso)] hover:bg-[var(--brand-gold-light)] shadow-[0_8px_24px_rgba(213,172,104,0.12)] hover:shadow-[0_12px_30px_rgba(213,172,104,0.18)]",

    secondary:
      "border border-[var(--brand-gold)]/30 bg-transparent text-[var(--brand-ivory)] hover:border-[var(--brand-gold)]/50 hover:bg-[var(--brand-gold)]/10",

    dark:
      "bg-[var(--brand-espresso)] text-[var(--brand-ivory)] hover:bg-[var(--brand-brown)]",
  };

  const classes = `
    inline-flex items-center justify-center
    rounded-full
    px-6 py-3
    text-sm font-semibold
    transition-all duration-300
    hover:-translate-y-0.5
    ${variants[variant]}
    ${className}
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}