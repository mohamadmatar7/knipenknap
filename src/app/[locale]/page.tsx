import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

import { isLocale, locales } from "@/config/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildMetadata(locale);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getContent(locale);

  return (
    <>
      <LocalBusinessJsonLd locale={locale} />

      <Navbar
        locale={locale}
        content={t.nav}
      />

      <main>
        <Hero content={t.hero} />
        <Services content={t.services} />
        <About content={t.about} />
        <Gallery content={t.gallery} />
        <Location content={t.location} />
      </main>

      <Footer content={t.footer} />

      <WhatsAppButton label={t.footer.whatsapp} />
    </>
  );
}