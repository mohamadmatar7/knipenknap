"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/locales";
import { getContent } from "@/content";

export default function NotFound() {
  const pathname = usePathname();

  const locale: Locale =
    pathname.startsWith("/en") ? "en" : "nl";

  const t = getContent(locale);

  const pageContent = t.notFound;

  return (
    <>
      <Navbar
        locale={locale}
        content={t.nav}
      />

      <main className="bg-[var(--brand-ivory)] text-[var(--brand-espresso)]">
        <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
          {/* Soft gold glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand-gold)]/[0.08] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[var(--brand-gold)]/[0.05] blur-3xl" />

          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold-dark)]">
                {pageContent.eyebrow}
              </p>

              <p className="mt-7 text-[7rem] font-bold leading-none tracking-[-0.07em] text-[var(--brand-gold)] sm:text-[9rem] lg:text-[11rem]">
                404
              </p>

              <h1 className="mt-7 text-4xl font-semibold tracking-[-0.03em] text-[var(--brand-espresso)] sm:text-5xl lg:text-6xl">
                {pageContent.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--brand-text-muted)] sm:text-lg">
                {pageContent.text}
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={`/${locale}`}
                  className="
                    inline-flex w-full items-center justify-center
                    rounded-full
                    bg-[var(--brand-espresso)]
                    px-6 py-3
                    text-sm font-semibold
                    text-[var(--brand-ivory)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[var(--brand-brown)]
                    sm:w-auto
                  "
                >
                  {pageContent.home}
                </Link>

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
                  {pageContent.whatsapp}
                </a>
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