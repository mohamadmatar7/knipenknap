export const siteConfig = {
  name: "Knip & Knap",

  domain: "https://yourdomain.be",

  address: {
    street: "Noordstraat 27",
    postalCode: "9000",
    city: "Gent",
    country: "Belgium",
    countryCode: "BE",

    full: "Noordstraat 27, 9000 Gent",
  },

  whatsapp: {
    number: "32470000000",
    url: "https://wa.me/32470000000",
  },

  maps: {
    url: "https://www.google.com/maps/search/?api=1&query=Noordstraat+27,+9000+Gent",

    embed:
      "https://www.google.com/maps?q=Noordstraat+27,+9000+Gent&output=embed",
  },
} as const;