type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.25em] ${
          light
            ? "text-[var(--brand-gold)]"
            : "text-[var(--brand-gold-dark)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl ${
          light
            ? "text-[var(--brand-ivory)]"
            : "text-[var(--brand-espresso)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light
              ? "text-[var(--brand-text-warm)]"
              : "text-[var(--brand-text-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}