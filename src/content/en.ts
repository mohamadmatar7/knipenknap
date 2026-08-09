import type { SiteContent } from "@/types/content";

const en: SiteContent = {
  seo: {
    title: "Barbershop Ghent | Men's Haircuts & Beard Grooming",
    description:
      "Professional barbershop in Ghent for men's haircuts, beard grooming and clipper cuts. Visit us at Noordstraat 27, 9000 Ghent.",
  },

  nav: {
    services: "Services",
    about: "About",
    location: "Location",
    book: "Book now",
  },

  hero: {
    eyebrow: "Barbershop in Ghent",
    title: "Your style, down to the details.",
    subtitle:
      "Professional men's haircuts and beard grooming in a modern and relaxed atmosphere in the heart of Ghent.",

    primaryButton: "Book now",
    secondaryButton: "View services",

    locationLabel: "Location",
    location: "Noordstraat 27, 9000 Ghent",

    hoursLabel: "Open",
    hours: "From 10:30",

    viewMap: "View map",
  },

  services: {
    eyebrow: "Our services",
    title: "Everything for your style.",
    description:
      "From a fresh haircut to a well-groomed beard. Explore our services and choose what suits you best.",

    items: [
      {
        title: "Haircut",
        description:
          "A clean, professional haircut tailored to your hair and personal style.",
        price: "€20",
      },
      {
        title: "Kids up to 7 years",
        description:
          "A comfortable and carefully finished haircut for children up to 7 years old.",
        price: "€15",
      },
      {
        title: "Beard shave",
        description:
          "A clean and precise shave for a fresh, well-groomed look.",
        price: "€12",
      },
      {
        title: "Beard shaping",
        description:
          "Your beard is carefully trimmed and shaped for a clean, defined finish.",
        price: "€12",
      },
      {
        title: "Haircut + beard",
        description:
          "Complete hair and beard grooming for a clean, finished look.",
        price: "€28",
      },
      {
        title: "Hair & beard with clippers",
        description:
          "Hair and beard trimmed entirely with clippers and finished with precision.",
        price: "€23",
      },
    ],
  },

  about: {
    eyebrow: "About us",
    title: "More than just a haircut.",
    text:
      "For us, it's about craftsmanship, attention to detail and finding a style that suits you. In a modern and relaxed environment, we take the time to give you a clean finish, so you leave looking fresh and feeling confident.",

    experience: "Years of experience",
    experienceDescription:
      "Craftsmanship with attention to your personal style.",

    quality: "Personal service",
    qualityDescription:
      "Personal attention and a carefully finished result.",
  },

  gallery: {
    eyebrow: "Our atmosphere",
    title: "A place where style and detail come together.",
  },

  location: {
    eyebrow: "Location",
    title: "Visit us in Ghent.",
    text:
      "You'll find our barbershop at Noordstraat 27 in Ghent. Stop by for a fresh look and personal service.",

    addressLabel: "Address",
    address: "Noordstraat 27, 9000 Ghent",

    hoursLabel: "Opening hours",
    hours: [
      { day: "Monday", time: "10:30 - 18:30" },
      { day: "Tuesday", time: "Closed" },
      { day: "Wednesday", time: "10:30 - 18:30" },
      { day: "Thursday", time: "10:30 - 18:30" },
      { day: "Friday", time: "10:30 - 18:30" },
      { day: "Saturday", time: "10:30 - 18:30" },
      { day: "Sunday", time: "10:30 - 18:30" },
    ],

    directions: "Get directions",
    whatsapp: "Book now",
  },

  footer: {
    tagline:
      "Craftsmanship, style and personal service in the heart of Ghent.",
    navigation: "Navigation",
    contact: "Contact",
    services: "Services",
    about: "About",
    location: "Location",
    rights: "All rights reserved.",
    whatsapp: "Book via WhatsApp",
    developerCredit: "Designed & developed by",
  },
};

export default en;