import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

import { isLocale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title:
      locale === "nl"
        ? `Privacybeleid | ${siteConfig.name}`
        : `Privacy Policy | ${siteConfig.name}`,

    description:
      locale === "nl"
        ? `Lees het privacybeleid van ${siteConfig.name} in Gent.`
        : `Read the privacy policy of ${siteConfig.name} in Ghent.`,

    alternates: {
      canonical: `${siteConfig.domain}/${locale}/privacy`,

      languages: {
        nl: `${siteConfig.domain}/nl/privacy`,
        en: `${siteConfig.domain}/en/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getContent(locale);
  const privacy = t.privacy;

  const backLabel =
    locale === "nl"
      ? "Terug naar home"
      : "Back to home";

  const enterpriseLabel =
    locale === "nl"
      ? "Ondernemingsnummer"
      : "Enterprise number";

  const vatLabel =
    locale === "nl"
      ? "BTW-nummer"
      : "VAT number";

  return (
    <>
      <Navbar
        locale={locale}
        content={t.nav}
      />

      <main>
        {/* Intro */}
        <section className="bg-[var(--brand-ivory)] py-20 text-[var(--brand-espresso)] lg:py-28">
          <Container>
            <Link
              href={`/${locale}`}
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold-dark)] transition hover:text-[var(--brand-espresso)]"
            >
              <span aria-hidden="true">←</span>
              {backLabel}
            </Link>

            <SectionTitle
              eyebrow={siteConfig.name}
              title={privacy.title}
              description={privacy.intro}
            />
          </Container>
        </section>

        {/* Privacy content */}
        <section className="bg-[var(--brand-cream)] py-20 text-[var(--brand-espresso)] lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
              {/* Business details */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-dark)]">
                  {siteConfig.name}
                </p>

                <div className="mt-5 text-sm leading-7 text-[var(--brand-text-muted)]">
                  <p className="font-semibold text-[var(--brand-espresso)]">
                    {siteConfig.address.street}
                  </p>

                  <p>
                    {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.city}
                    <br />
                    {siteConfig.address.country}
                  </p>

                  <div className="mt-6 border-t border-[var(--brand-gold)]/20 pt-6">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="block w-fit transition hover:text-[var(--brand-gold-dark)]"
                    >
                      {siteConfig.contact.email}
                    </a>

                    <a
                      href={`tel:${siteConfig.contact.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="mt-1 block w-fit transition hover:text-[var(--brand-gold-dark)]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>

                  <div className="mt-6 border-t border-[var(--brand-gold)]/20 pt-6">
                    <p>
                      {enterpriseLabel}
                      <br />
                      <span className="font-semibold text-[var(--brand-espresso)]">
                        {siteConfig.business.enterpriseNumber}
                      </span>
                    </p>

                    <p className="mt-4">
                      {vatLabel}
                      <br />
                      <span className="font-semibold text-[var(--brand-espresso)]">
                        {siteConfig.business.vatNumber}
                      </span>
                    </p>
                  </div>
                </div>
              </aside>

              {/* Legal text */}
              <div className="border-t border-[var(--brand-gold)]/25">
                <PrivacySection
                  title={privacy.controllerTitle}
                  text={privacy.controllerText}
                />

                <PrivacySection
                  title={privacy.dataTitle}
                  text={privacy.dataText}
                />

                <PrivacySection
                  title={privacy.thirdPartiesTitle}
                  text={privacy.thirdPartiesText}
                />

                <PrivacySection
                  title={privacy.rightsTitle}
                  text={privacy.rightsText}
                />

                <PrivacySection
                  title={privacy.contactTitle}
                  text={privacy.contactText}
                />

                <div className="pt-8">
                  <p className="text-sm text-[var(--brand-text-muted)]">
                    {privacy.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer
        content={t.footer}
        locale={locale}
        />

      <WhatsAppButton label={t.footer.whatsapp} />
      <ScrollToTopButton />
    </>
  );
}

type PrivacySectionProps = {
  title: string;
  text: string;
};

function PrivacySection({
  title,
  text,
}: PrivacySectionProps) {
  return (
    <section className="border-b border-[var(--brand-gold)]/20 py-9 first:pt-8 sm:py-10">
      <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--brand-espresso)] sm:text-2xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--brand-text-muted)]">
        {text}
      </p>
    </section>
  );
}