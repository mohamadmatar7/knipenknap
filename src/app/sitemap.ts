import type { MetadataRoute } from "next";

import { locales } from "@/config/locales";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${siteConfig.domain}/${locale}`,
    ])
  );

  return locales.map((locale) => ({
    url: `${siteConfig.domain}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "nl" ? 1 : 0.9,

    alternates: {
      languages,
    },
  }));
}