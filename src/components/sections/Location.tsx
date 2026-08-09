import { siteConfig } from "@/config/site";
import type { LocationContent } from "@/types/content";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = {
  content: LocationContent;
};

export default function Location({ content }: Props) {
  return (
    <section
      id="location"
      className="bg-[var(--brand-cream)] py-20 text-[var(--brand-espresso)] lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.text}
            />

            {/* Address */}
            <div className="mt-10 border-t border-[var(--brand-gold)]/25 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-dark)]">
                {content.addressLabel}
              </p>

              <p className="mt-3 text-xl font-medium text-[var(--brand-espresso)]">
                {siteConfig.address.full}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={siteConfig.maps.url}
                  external
                  variant="dark"
                  className="w-full sm:w-auto"
                >
                  {content.directions}
                </Button>

                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex w-full items-center justify-center
                    rounded-full
                    border border-[var(--brand-gold)]/35
                    px-6 py-3
                    text-sm font-semibold
                    text-[var(--brand-espresso)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--brand-gold)]/60
                    hover:bg-[var(--brand-gold)]/10
                    sm:w-auto
                  "
                >
                  {content.whatsapp}
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="mt-10 border-t border-[var(--brand-gold)]/25 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-dark)]">
                {content.hoursLabel}
              </p>

              <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {content.hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between border-b border-[var(--brand-gold)]/15 py-3"
                  >
                    <span className="text-sm text-[var(--brand-text-muted)]">
                      {item.day}
                    </span>

                    <span
                      className={[
                        "text-sm font-semibold",
                        item.time === "Gesloten" || item.time === "Closed"
                          ? "text-[var(--brand-gold-dark)]"
                          : "text-[var(--brand-espresso)]",
                      ].join(" ")}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-[var(--brand-sand)] lg:min-h-[620px]">
            <iframe
              src={siteConfig.maps.embed}
              title="Barbershop location"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-[var(--brand-gold)]/15" />
          </div>
        </div>
      </Container>
    </section>
  );
}