import type { Locale } from "@/config/locales";

import { siteConfig } from "@/config/site";

type Props = {
  locale: Locale;
};

export default function LocalBusinessJsonLd({
  locale,
}: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BarberShop",

    name: siteConfig.name,

    url: `${siteConfig.domain}/${locale}`,

    image: `${siteConfig.domain}/images/og-barbershop.jpg`,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.countryCode,
    },

    areaServed: {
      "@type": "City",
      name: "Gent",
    },

    priceRange: "€",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Monday",
        opens: "10:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Wednesday",
        opens: "10:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Thursday",
        opens: "10:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Friday",
        opens: "10:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Saturday",
        opens: "10:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Sunday",
        opens: "10:30",
        closes: "18:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}