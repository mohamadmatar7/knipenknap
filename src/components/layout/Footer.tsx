import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/locales";
import type { FooterContent } from "@/types/content";

import Container from "@/components/ui/Container";

type Props = {
  content: FooterContent;
  locale: Locale;
};

export default function Footer({ content, locale }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-espresso)] text-[var(--brand-ivory)]">
      <Container>
        {/* Main footer */}
        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold tracking-[-0.03em] text-[var(--brand-ivory)]">
              {siteConfig.name}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--brand-text-soft)]">
              {content.tagline}
            </p>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)] transition hover:text-[var(--brand-gold-light)]"
            >
              {content.whatsapp}

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
              {content.navigation}
            </p>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href={`/${locale}#services`}
                className="w-fit text-[var(--brand-text-warm)] transition hover:text-[var(--brand-ivory)]"
              >
                {content.services}
              </a>

              <a
                href={`/${locale}#about`}
                className="w-fit text-[var(--brand-text-warm)] transition hover:text-[var(--brand-ivory)]"
              >
                {content.about}
              </a>

              <a
                href={`/${locale}#location`}
                className="w-fit text-[var(--brand-text-warm)] transition hover:text-[var(--brand-ivory)]"
              >
                {content.location}
              </a>

              <Link
                href={`/${locale}/privacy`}
                className="w-fit text-[var(--brand-text-warm)] transition hover:text-[var(--brand-ivory)]"
              >
                {content.privacy}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
              {content.contact}
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--brand-text-warm)]">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block w-fit transition hover:text-[var(--brand-ivory)]"
              >
                {siteConfig.contact.email}
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="block w-fit transition hover:text-[var(--brand-ivory)]"
              >
                {siteConfig.contact.phone}
              </a>

              <p className="text-[var(--brand-text-soft)]">
                BTW {siteConfig.business.vatNumber}
              </p>

              <a
                href={siteConfig.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit text-[var(--brand-text-soft)] transition hover:text-[var(--brand-gold-light)]"
              >
                Google Maps ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[var(--brand-gold)]/15 py-6 text-xs text-[var(--brand-text-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {content.rights}
          </p>

          <p>
            {content.developerCredit}{" "}
            <a
              href="https://mohamad-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--brand-gold-soft)] transition hover:text-[var(--brand-gold-light)]"
            >
              Mohamad Matar
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}