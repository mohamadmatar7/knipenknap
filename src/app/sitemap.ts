import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.domain}/nl`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          nl: `${siteConfig.domain}/nl`,
          en: `${siteConfig.domain}/en`,
        },
      },
    },

    {
      url: `${siteConfig.domain}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          nl: `${siteConfig.domain}/nl`,
          en: `${siteConfig.domain}/en`,
        },
      },
    },

    {
      url: `${siteConfig.domain}/nl/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          nl: `${siteConfig.domain}/nl/privacy`,
          en: `${siteConfig.domain}/en/privacy`,
        },
      },
    },

    {
      url: `${siteConfig.domain}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          nl: `${siteConfig.domain}/nl/privacy`,
          en: `${siteConfig.domain}/en/privacy`,
        },
      },
    },
  ];
}