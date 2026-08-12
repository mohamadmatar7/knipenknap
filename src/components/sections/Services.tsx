import type { ServicesContent } from "@/types/content";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = {
  content: ServicesContent;
};

export default function Services({ content }: Props) {
  return (
    <section
      id="services"
      className="bg-[var(--brand-ivory)] py-20 text-[var(--brand-espresso)] lg:py-32"
    >
      <Container>
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-16 grid border-t border-[var(--brand-gold)]/25 md:grid-cols-2">
          {content.items.map((service, index) => (
            <article
              key={service.title}
              className={[
                "group relative border-b border-[var(--brand-gold)]/25 py-8",
                index % 2 === 0
                  ? "md:border-r md:pr-10"
                  : "md:pl-10",
                service.promo ? "bg-[#9b4a3f]/[0.045]" : "",
              ].join(" ")}
            >
              {/* Promo badge */}
              {service.promo && (
                <span
                  className="
                    pointer-events-none
                    absolute left-3 top-2
                    z-20 
                    rounded-full
                    bg-[#9b4a3f]/90
                    px-3 py-1
                    text-[10px] font-bold uppercase
                    tracking-[0.16em]
                    text-white
                    shadow-sm
                  "
                >
                  {service.promo}
                </span>
              )}

              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--brand-espresso)] transition-colors duration-300 group-hover:text-[var(--brand-gold-dark)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-[var(--brand-text-muted)]">
                    {service.description}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/15 px-3 py-1.5 text-sm font-semibold text-[var(--brand-gold-dark)]">
                  {service.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}