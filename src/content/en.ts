import type { SiteContent } from "@/types/content";

const en: SiteContent = {
  seo: {
    title: "Knip En Knap | Barbershop & Men's Haircuts in Ghent",
    description:
      "Knip En Knap is a professional barbershop in Ghent for men's haircuts, beard grooming and clipper cuts. Visit us at Noordstraat 27, 9000 Ghent.",
  },

  nav: {
    services: "Services",
    about: "About",
    location: "Location",
    book: "Book now",
  },

  hero: {
    eyebrow: "Barbershop in Ghent",
    title: "Your style, down to the details",
    subtitle:
      "Professional men's haircuts and beard grooming in a modern and relaxed atmosphere in the heart of Ghent.",

    primaryButton: "Book now",
    secondaryButton: "View services",

    locationLabel: "Location",
    location: "Noordstraat 27, 9000 Ghent",

    hoursLabel: "Open",
    hours: "From 10:00",

    viewMap: "View map",

    walkInLabel: "Appointment",
    walkIn: "Not required",
  },

  services: {
    eyebrow: "Our services",
    title: "Everything for your style",
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
        promo: "Promo",
      },
      {
        title: "Haircut + beard",
        description:
          "Complete hair and beard grooming for a clean, finished look.",
        price: "€28",
        promo: "Promo",
      },
      {
        title: "Hair & beard with razor",
        description:
          "Hair and beard fully shaved with a razor for a smooth, clean finish.",
        price: "€25",
        promo: "Promo",
      },
    ],
  },

  about: {
    eyebrow: "About us",
    title: "More than just a haircut",
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
    title: "A place where style and detail come together",
  },

  location: {
    eyebrow: "Location",
    title: "Visit us in Ghent",
    text:
      "You'll find our barbershop at Noordstraat 27 in Ghent. Stop by for a fresh look and personal service.",

    addressLabel: "Address",
    address: "Noordstraat 27, 9000 Ghent",

    hoursLabel: "Opening hours",
    hours: [
      { day: "Monday", time: "10:00 - 18:00" },
      { day: "Tuesday", time: "Closed" },
      { day: "Wednesday", time: "10:00 - 18:00" },
      { day: "Thursday", time: "10:00 - 18:00" },
      { day: "Friday", time: "10:00 - 18:00" },
      { day: "Saturday", time: "10:00 - 18:00" },
      { day: "Sunday", time: "11:00 - 17:00" },
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
    privacy: "Privacy Policy",
  },

  privacy: {
    title: "Privacy Policy",

    intro:
      "Knip En Knap takes the protection of your personal data and privacy seriously. This privacy policy explains which data may be processed through this website, why it may be processed, and what rights you have.",

    controllerTitle: "1. Data Controller",

    controllerText:
      "Knip En Knap is responsible for the processing of personal data in connection with this website. Knip En Knap is located at Noordstraat 27, 9000 Ghent, Belgium. Enterprise number: 0740.767.719. VAT number: BE 0740.767.719. You can contact us at info@knipenknap.be or by phone at +32 465 56 63 07.",

    dataTitle: "2. What Personal Data Do We Process?",

    dataText:
      "This website does not provide user accounts, online payments, or a direct contact form. When you contact us by email, phone, or WhatsApp, information such as your name, phone number, email address, and the content of your message may be processed in order to answer your request or arrange an appointment. When you visit the website, technical information such as your IP address, browser information, and device information may also be processed for security purposes and to ensure the proper operation of the website.",

    thirdPartiesTitle: "3. Third-Party Services",

    thirdPartiesText:
      "The website is hosted using Cloudflare Pages. Cloudflare may process technical information necessary to provide the website securely and reliably. For contact and appointments, the website may redirect you to WhatsApp. When you use WhatsApp, the privacy terms of WhatsApp and Meta apply. The website also uses Google Maps to display the location of the barbershop. When Google Maps is loaded or used, Google may process information in accordance with its own privacy policy.",

    rightsTitle: "4. Your Privacy Rights",

    rightsText:
      "Under the General Data Protection Regulation (GDPR), and where the applicable legal requirements are met, you may have the right to access, correct or delete your personal data, restrict its processing, or object to certain processing activities. You can exercise these rights by contacting us at info@knipenknap.be. If you believe that your personal data is not being processed correctly, you may also lodge a complaint with the Belgian Data Protection Authority.",

    contactTitle: "5. Cookies and Contact",

    contactText:
      "Knip En Knap does not itself use advertising or marketing cookies and currently does not use analytics tracking tools such as Google Analytics or Meta Pixel. External services such as Google Maps may use their own cookies or similar technologies when they are used. If you have any questions about this privacy policy or the processing of your personal data, you can contact us at info@knipenknap.be.",

    lastUpdated: "Last updated: August 2026",
  },

  notFound: {
    eyebrow: "Page not found",
    title: "This page doesn't exist",
    text:
      "The page you're looking for may have been moved, removed or no longer exists. Return to the homepage or book an appointment.",
    home: "Back to home",
    whatsapp: "Book now",
  },
};

export default en;