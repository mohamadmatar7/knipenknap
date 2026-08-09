import type { Metadata } from "next";

import { locales, type Locale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";

export function buildMetadata(locale: Locale): Metadata {
  const t = getContent(locale);

  const languageAlternates = Object.fromEntries(
    locales.map((item) => [
      item,
      `${siteConfig.domain}/${item}`,
    ])
  );

  return {
    metadataBase: new URL(siteConfig.domain),

    title: t.seo.title,
    description: t.seo.description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...languageAlternates,
        "x-default": `${siteConfig.domain}/nl`,
      },
    },

    openGraph: {
      type: "website",
      url: `/${locale}`,
      title: t.seo.title,
      description: t.seo.description,
      siteName: siteConfig.name,
      locale: locale === "nl" ? "nl_BE" : "en_BE",

      images: [
        {
          url: "/images/og-barbershop.jpeg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Barbershop Gent`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
      images: ["/images/og-barbershop.jpeg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}