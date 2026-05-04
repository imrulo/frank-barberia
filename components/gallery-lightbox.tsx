"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

type GalleryLightboxProps = {
  images: GalleryItem[];
};

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((item, index) => (
          <motion.button
            key={item.src}
            type="button"
            onClick={() => setActive(item)}
            className={cn(
              "group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-cream/5 text-left",
              index === 1 && "md:translate-y-10",
              index === 3 && "md:col-span-2",
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
            whileHover={{ y: -6 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="mb-2 w-fit rounded-full border border-gold/40 bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                {item.category}
              </p>
              <p className="max-w-xs text-lg font-semibold text-cream">
                {item.alt}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Cerrar galeria"
              className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-3 text-cream transition hover:border-gold hover:text-gold"
            >
              <X className="size-5" />
            </button>
            <motion.div
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">
                  {active.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-cream">
                  {active.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
