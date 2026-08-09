import en from "./en";
import nl from "./nl";

import type { Locale } from "@/config/locales";
import type { SiteContent } from "@/types/content";

export const content: Record<Locale, SiteContent> = {
  nl,
  en,
};

export function getContent(locale: Locale) {
  return content[locale];
}