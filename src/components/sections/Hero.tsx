import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

import type { HeroContent } from "@/types/content";

type Props = {
  content: HeroContent;
};

export default function Hero({ content }: Props) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-espresso)] text-[var(--brand-ivory)]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--brand-gold)]/[0.06] blur-3xl" />

      <Container className="relative grid gap-10 py-12 sm:py-16 lg:min-h-[calc(100svh-73px)] lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16">
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)] sm:text-sm">
            {content.eyebrow}
          </p>

          <h1 className="mt-4 text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[var(--brand-ivory)] sm:mt-5 sm:text-6xl lg:text-7xl xl:text-8xl">
            {content.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--brand-text-warm)] sm:mt-6 sm:text-lg sm:leading-8">
            {content.subtitle}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href={siteConfig.whatsapp.url}
              external
              className="w-full sm:w-auto"
            >
              {content.primaryButton}
            </Button>

            <Button
              href="#services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {content.secondaryButton}
            </Button>
          </div>

          {/* Quick info */}
          <div className="mt-10 grid grid-cols-3 border-t border-[var(--brand-gold)]/20 pt-5 sm:mt-12 sm:max-w-xl sm:pt-6">
            {/* Location */}
            <div className="pr-3 sm:pr-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-gold)] sm:text-[11px]">
                {content.locationLabel}
              </p>

              <p className="mt-2 text-xs leading-5 text-[var(--brand-text-warm)] sm:text-sm sm:leading-6">
                {content.location}
              </p>
            </div>

            {/* Opening hours */}
            <div className="border-l border-[var(--brand-gold)]/20 px-3 sm:px-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-gold)] sm:text-[11px]">
                {content.hoursLabel}
              </p>

              <p className="mt-2 text-xs leading-5 text-[var(--brand-text-warm)] sm:text-sm sm:leading-6">
                {content.hours}
              </p>
            </div>

            {/* Walk-ins */}
            <div className="border-l border-[var(--brand-gold)]/20 pl-3 sm:pl-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-gold)] sm:text-[11px]">
                {content.walkInLabel}
              </p>

              <p className="mt-2 text-xs leading-5 text-[var(--brand-text-warm)] sm:text-sm sm:leading-6">
                {content.walkIn}
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="group relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[var(--brand-brown)] sm:min-h-[540px] sm:rounded-[2rem] lg:min-h-[640px]">
          <Image
            src="/images/5.jpeg"
            alt="Professional barber at work"
            fill
            priority
            className="
              object-cover
              brightness-[1.07]
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-espresso)]/60 via-transparent to-[var(--brand-gold)]/5" />

          {/* Champagne light */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-gold-light)]/10 blur-3xl" />

          {/* Gold inner edge */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-[var(--brand-gold-light)]/15" />

          {/* View map button */}
          <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
            <a
              href="#location"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[var(--brand-gold-light)]/25
                bg-[var(--brand-espresso)]/70
                px-4
                py-2.5
                text-xs
                font-semibold
                text-[var(--brand-ivory)]
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[var(--brand-gold)]/60
                hover:bg-[var(--brand-espresso)]/85
                sm:px-5
                sm:py-3
              "
            >
              {content.viewMap}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}