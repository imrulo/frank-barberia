"use client";

import Link from "next/link";
import { Menu, Scissors, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#galeria", label: "Galeria" },
  { href: "#reserva", label: "Reserva" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Frank Barbero Cubano"
        >
          <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-[0_0_40px_rgba(211,168,92,0.18)] transition group-hover:bg-gold group-hover:text-black">
            <Scissors className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl font-semibold tracking-wide text-cream">
              Frank
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.35em] text-gold">
              Barbero Cubano
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cream/75 transition hover:bg-white/10 hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="#reserva">Reservar ahora</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/15 p-2 text-cream lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="space-y-1 px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base text-cream/80 hover:bg-white/10 hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link href="#reserva" onClick={() => setOpen(false)}>
                Reservar ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
