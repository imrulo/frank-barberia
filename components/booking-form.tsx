"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Corte clasico cubano",
  "Fade premium",
  "Beard grooming",
  "Ritual completo",
  "Kids cut",
  "Consulta de estilo",
];

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    service: services[0],
    date: "",
    message: "",
  });

  const whatsappHref = useMemo(() => {
    const text = [
      "Hola Frank, quiero reservar una cita.",
      form.name ? `Nombre: ${form.name}` : "",
      form.service ? `Servicio: ${form.service}` : "",
      form.date ? `Fecha/hora ideal: ${form.date}` : "",
      form.message ? `Detalle: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [form]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="border-gold/20 bg-black/45 shadow-2xl shadow-black/30">
      <CardContent className="p-5 sm:p-8">
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-cream" htmlFor="name">
              Nombre
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              required
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-cream" htmlFor="service">
              Servicio
            </label>
            <select
              id="service"
              name="service"
              className="h-12 rounded-full border border-white/10 bg-black/40 px-4 text-sm text-cream outline-none transition focus:border-gold/70 focus:ring-2 focus:ring-gold/20"
              value={form.service}
              onChange={(event) =>
                setForm((current) => ({ ...current, service: event.target.value }))
              }
            >
              {services.map((service) => (
                <option className="bg-black text-cream" key={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-cream" htmlFor="date">
              Fecha y hora ideal
            </label>
            <Input
              id="date"
              name="date"
              placeholder="Ej: Viernes 18:30"
              value={form.date}
              onChange={(event) =>
                setForm((current) => ({ ...current, date: event.target.value }))
              }
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-cream" htmlFor="message">
              Detalles del look
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuéntame si quieres fade alto, barba definida, cambio de estilo..."
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            <CalendarCheck className="size-5" />
            Enviar reserva por WhatsApp
          </Button>
        </form>

        <div className="mt-6 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
          <a
            className="flex items-center gap-2 rounded-2xl border border-white/10 p-3 transition hover:border-gold/50 hover:text-cream"
            href={siteConfig.whatsappUrl}
          >
            <MessageCircle className="size-4 text-gold" />
            WhatsApp directo
          </a>
          <a
            className="flex items-center gap-2 rounded-2xl border border-white/10 p-3 transition hover:border-gold/50 hover:text-cream"
            href={`tel:${siteConfig.phoneIntl}`}
          >
            <Phone className="size-4 text-gold" />
            Llamar ahora
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
