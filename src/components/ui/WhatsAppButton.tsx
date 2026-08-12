import { siteConfig } from "@/config/site";

type Props = {
  label: string;
};

export default function WhatsAppButton({ label }: Props) {
  return (
    <a
      href={siteConfig.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="
        group fixed bottom-5 right-5 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        transition-all duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#25D366]
        focus-visible:ring-offset-2
        sm:bottom-10 sm:right-6 sm:h-16 sm:w-16
      "
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
        fill="currentColor"
      >
        <path d="M16.04 3C8.86 3 3.02 8.82 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.75A12.98 12.98 0 0 0 16.03 29h.01c7.18 0 13.02-5.82 13.02-13S23.22 3 16.04 3Zm0 23.8h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.95 1.04 1.05-3.85-.25-.4A10.75 10.75 0 0 1 5.22 16c0-5.96 4.86-10.8 10.82-10.8 5.97 0 10.82 4.84 10.82 10.8 0 5.96-4.85 10.8-10.82 10.8Zm5.93-8.08c-.33-.16-1.92-.95-2.22-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.12-1.14 2.73s1.17 3.17 1.33 3.39c.16.22 2.3 3.52 5.58 4.93.78.34 1.39.54 1.87.69.79.25 1.5.21 2.07.13.63-.09 1.92-.79 2.19-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.63-.38Z" />
      </svg>

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute right-full mr-3
          hidden whitespace-nowrap
          rounded-xl
          bg-neutral-950
          px-3 py-2
          text-xs font-medium text-white
          opacity-0 shadow-lg
          transition-all duration-200
          group-hover:translate-x-0
          group-hover:opacity-100
          sm:block
        "
      >
        {label}

        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-950" />
      </span>
    </a>
  );
}