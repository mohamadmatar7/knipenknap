export const siteConfig = {
  name: "Knip En Knap",

  domain: "https://yourdomain.be",

  business: {
    vatNumber: "BE 0740.767.719",
    enterpriseNumber: "0740.767.719",
  },

  address: {
    street: "Noordstraat 27",
    postalCode: "9000",
    city: "Gent",
    country: "Belgium",
    countryCode: "BE",

    full: "Noordstraat 27, 9000 Gent",
  },

  contact: {
    email: "info@knipenknap.be",
    phone: "+32 465 56 63 07",
  },

  whatsapp: {
    number: "32465566307",
    url: "https://wa.me/32465566307",
  },

  maps: {
    url: "https://www.google.com/maps/search/?api=1&query=Noordstraat+27,+9000+Gent",

    embed:
      "https://www.google.com/maps?q=Noordstraat+27,+9000+Gent&output=embed",
  },
} as const;