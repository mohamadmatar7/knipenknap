"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`
        group fixed bottom-[5.75rem] right-5 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        border border-[var(--brand-gold)]/25
        bg-[var(--brand-espresso)]
        text-[var(--brand-gold-light)]
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-105
        hover:border-[var(--brand-gold)]/45
        hover:bg-[var(--brand-brown)]
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--brand-gold)]
        focus-visible:ring-offset-2

        sm:bottom-[7rem]
        sm:right-6
        sm:h-16
        sm:w-16

        ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-90 opacity-0"
        }
      `}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="
          h-7 w-7
          transition-transform duration-300
          group-hover:-translate-y-0.5
          sm:h-8 sm:w-8
        "
      >
        <path d="M6 14.5 12 8.5l6 6" />
      </svg>
    </button>
  );
}