import Image from "next/image";

import type { AboutContent } from "@/types/content";

type Props = {
  content: AboutContent;
};

export default function About({ content }: Props) {
  return (
    <section
      id="about"
      className="bg-[var(--brand-espresso)] text-[var(--brand-ivory)]"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Image */}
        <div className="group relative min-h-[480px] overflow-hidden lg:min-h-[680px]">
          <Image
            src="/images/2.jpeg"
            alt="Inside the barbershop"
            fill
            className="
              object-cover
              brightness-[1.05]
              contrast-[1.06]
              saturate-[1.03]
              transition-transform
              duration-[1400ms]
              ease-out
              group-hover:scale-[1.025]
            "
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Warm cinematic overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-espresso)]/55 via-transparent to-[var(--brand-gold)]/5" />

          {/* Soft gold glow */}
          <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[var(--brand-gold)]/10 blur-3xl" />

          {/* Inner edge */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--brand-gold-light)]/10" />
        </div>

        {/* Content */}
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--brand-ivory)] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-[var(--brand-text-warm)]">
              {content.text}
            </p>

            <div className="mt-10 grid gap-6 border-t border-[var(--brand-gold)]/20 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-base font-semibold text-[var(--brand-ivory)]">
                  {content.quality}
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--brand-text-soft)]">
                  {content.qualityDescription}
                </p>
              </div>

              <div>
                <p className="text-base font-semibold text-[var(--brand-ivory)]">
                  {content.experience}
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--brand-text-soft)]">
                  {content.experienceDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}