"use client";

import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/locales";
import type { NavContent } from "@/types/content";

type Props = {
  locale: Locale;
  content: NavContent;
};

export default function Navbar({ locale, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--nav-border)] bg-[var(--nav-bg)]/95 text-[var(--nav-text)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold tracking-tight text-[var(--nav-text)] transition hover:text-[var(--nav-accent)]"
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-[var(--nav-text-secondary)] transition hover:text-[var(--nav-accent)]"
          >
            {content.services}
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[var(--nav-text-secondary)] transition hover:text-[var(--nav-accent)]"
          >
            {content.about}
          </a>

          <a
            href="#location"
            className="text-sm font-medium text-[var(--nav-text-secondary)] transition hover:text-[var(--nav-accent)]"
          >
            {content.location}
          </a>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/nl"
              className={
                locale === "nl"
                  ? "text-[var(--nav-accent)]"
                  : "text-[var(--nav-muted)] transition hover:text-[var(--nav-text)]"
              }
            >
              NL
            </Link>

            <span className="text-[var(--nav-divider)]">/</span>

            <Link
              href="/en"
              className={
                locale === "en"
                  ? "text-[var(--nav-accent)]"
                  : "text-[var(--nav-muted)] transition hover:text-[var(--nav-text)]"
              }
            >
              EN
            </Link>
          </div>

          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--nav-text)] px-5 py-2.5 text-sm font-semibold text-[var(--nav-bg)] transition hover:bg-[var(--nav-button-hover)]"
          >
            {content.book}
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nav-button-border)] transition hover:bg-[var(--nav-hover-bg)] md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-[var(--nav-text)] transition duration-200 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-[var(--nav-text)] transition duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-[var(--nav-text)] transition duration-200 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--nav-border)] bg-[var(--nav-bg)] px-5 py-6 sm:px-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[var(--nav-text-secondary)] transition hover:text-[var(--nav-accent)]"
            >
              {content.services}
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[var(--nav-text-secondary)] transition hover:text-[var(--nav-accent)]"
            >
              {content.about}
            </a>

            <a
              href="#location"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[var(--nav-text-secondary)] transition hover:text-[var(--nav-accent)]"
            >
              {content.location}
            </a>
          </nav>

          <div className="mt-7 flex items-center justify-between gap-4 border-t border-[var(--nav-border)] pt-6">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <Link
                href="/nl"
                onClick={() => setIsOpen(false)}
                className={
                  locale === "nl"
                    ? "text-[var(--nav-accent)]"
                    : "text-[var(--nav-muted)] transition hover:text-[var(--nav-text)]"
                }
              >
                NL
              </Link>

              <span className="text-[var(--nav-divider)]">/</span>

              <Link
                href="/en"
                onClick={() => setIsOpen(false)}
                className={
                  locale === "en"
                    ? "text-[var(--nav-accent)]"
                    : "text-[var(--nav-muted)] transition hover:text-[var(--nav-text)]"
                }
              >
                EN
              </Link>
            </div>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="shrink-0 rounded-full bg-[var(--nav-text)] px-5 py-3 text-sm font-semibold text-[var(--nav-bg)] transition hover:bg-[var(--nav-button-hover)]"
            >
              {content.book}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}