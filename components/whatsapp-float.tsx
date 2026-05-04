"use client";

import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type WhatsAppFloatProps = {
  className?: string;
};

export function WhatsAppFloat({ className }: WhatsAppFloatProps) {
  return (
    <a
      aria-label="Reservar por WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_22px_55px_rgba(37,211,102,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366]",
        className,
      )}
      href={siteConfig.whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
