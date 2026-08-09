import Image from "next/image";

import type { GalleryContent } from "@/types/content";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = {
  content: GalleryContent;
};

const images = [
  {
    src: "/images/1.jpeg",
    alt: "Barbershop interior",
    size: "large",
  },
  {
    src: "/images/2.jpeg",
    alt: "Professional haircut",
    size: "small",
  },
  {
    src: "/images/3.jpeg",
    alt: "Barber tools",
    size: "small",
  },
  {
    src: "/images/4.jpeg",
    alt: "Fresh barber style",
    size: "large",
  },
] as const;

export default function Gallery({ content }: Props) {
  return (
    <section className="bg-[var(--brand-ivory)] py-20 text-[var(--brand-espresso)] lg:py-32">
      <Container>
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {images.map((image, index) => {
            const isLarge = image.size === "large";

            return (
              <div
                key={image.src}
                className={[
                  "group relative overflow-hidden rounded-3xl bg-[var(--brand-sand)]",
                  index < 2 ? "min-h-[420px]" : "min-h-[360px]",
                  isLarge ? "lg:col-span-7" : "lg:col-span-5",
                ].join(" ")}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="
                    object-cover
                    brightness-[1.04]
                    contrast-[1.05]
                    saturate-[1.03]
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.035]
                  "
                  sizes={
                    isLarge
                      ? "(max-width: 1024px) 100vw, 60vw"
                      : "(max-width: 1024px) 100vw, 40vw"
                  }
                />

                {/* Warm cinematic overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-espresso)]/18 via-transparent to-[var(--brand-gold)]/5" />

                {/* Gold inner highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-[var(--brand-gold)]/15" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}