export type NavContent = {
  services: string;
  about: string;
  location: string;
  book: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;

  locationLabel: string;
  location: string;

  hoursLabel: string;
  hours: string;

  viewMap: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  price: string;
  promo?: string;
};

export type ServicesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  text: string;

  experience: string;
  experienceDescription: string;

  quality: string;
  qualityDescription: string;
};

export type GalleryContent = {
  eyebrow: string;
  title: string;
};

export type OpeningHour = {
  day: string;
  time: string;
};

export type LocationContent = {
  eyebrow: string;
  title: string;
  text: string;
  addressLabel: string;
  address: string;
  hoursLabel: string;
  hours: OpeningHour[];
  directions: string;
  whatsapp: string;
};

export type FooterContent = {
  tagline: string;
  navigation: string;
  contact: string;
  services: string;
  about: string;
  location: string;
  rights: string;
  whatsapp: string;
  developerCredit: string;
};

export type SeoContent = {
  title: string;
  description: string;
};

export type SiteContent = {
  nav: NavContent;
  hero: HeroContent;
  services: ServicesContent;
  about: AboutContent;
  gallery: GalleryContent;
  location: LocationContent;
  footer: FooterContent;
  seo: SeoContent;
};