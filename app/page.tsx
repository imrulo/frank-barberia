import Image from "next/image";
import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Crown,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { MotionReveal } from "@/components/motion-reveal";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { blurDataUrl, gallery, services, siteConfig, stats } from "@/lib/site";

const perks = [
  "Consulta personalizada antes de cada corte",
  "Acabados con navaja, precisión y calma",
  "Ambiente privado, elegante y con buena música",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: siteConfig.name,
  image: siteConfig.ogImage,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Novi Sad",
    addressCountry: "RS",
  },
  areaServed: "Novi Sad, Serbia",
  slogan: siteConfig.slogan,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [siteConfig.whatsappUrl],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="overflow-hidden">
        <section
          id="home"
          className="relative min-h-screen border-b border-white/10 pt-28"
        >
          <Image
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2400&q=85"
            alt="Barbero profesional trabajando en una barberia premium"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.96)_0%,rgba(7,7,7,0.76)_45%,rgba(7,7,7,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(197,48,48,0.22),transparent_32%),radial-gradient(circle_at_16%_72%,rgba(192,138,58,0.2),transparent_28%)]" />

          <div className="container relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.78fr]">
            <MotionReveal className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold shadow-glow backdrop-blur">
                <Crown className="h-4 w-4" />
                Barbero cubano en Novi Sad
              </div>
              <h1 className="font-display text-5xl font-black leading-[0.9] tracking-tight text-cream sm:text-7xl lg:text-8xl">
                Frank
                <span className="block text-gradient">Barbero Cubano</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-cream/80 sm:text-2xl">
                El toque cubano que Novi Sad necesitaba: precision europea,
                alma caribena y una experiencia premium para hombres que cuidan
                cada detalle.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="xl">
                  <a href="#reserva">
                    Reservar ahora <CalendarCheck className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <a href={siteConfig.whatsappUrl}>
                    WhatsApp directo <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-black text-gold">{stat.value}</p>
                    <p className="mt-1 text-sm text-cream/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.18} className="hidden lg:block">
              <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/12 bg-black/45 p-5 shadow-2xl backdrop-blur">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85"
                  alt="Retrato editorial de barbero premium"
                  width={760}
                  height={960}
                  sizes="(min-width: 1024px) 380px, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="aspect-[4/5] rounded-[1.45rem] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 max-w-xs rounded-3xl border border-gold/25 bg-ink/90 p-5 shadow-glow">
                  <div className="flex items-center gap-2 text-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/80">
                    "Corte limpio, conversacion sabrosa y un acabado que se
                    nota desde que sales por la puerta."
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="servicios" className="section-padding relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="container">
            <SectionHeading
              eyebrow="Servicios"
              title="Rituales de barberia con precision, flow y respeto por tu estilo."
              description="Cada servicio combina tecnica clasica cubana, herramientas premium y criterio moderno para que salgas con presencia."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <MotionReveal key={service.title} delay={index * 0.06}>
                    <Card className="group h-full p-6">
                      <CardContent className="p-0">
                        <div className="mb-6 flex items-center justify-between gap-4">
                          <div className="rounded-2xl border border-gold/25 bg-gold/10 p-3 text-gold">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="rounded-full bg-cuban-red/15 px-4 py-2 text-sm font-bold text-cuban-red">
                            {service.price}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-black text-cream">
                          {service.title}
                        </h3>
                        <p className="mt-4 leading-7 text-cream/70">
                          {service.description}
                        </p>
                        <p className="mt-5 text-sm font-semibold text-gold">
                          {service.duration} · {service.detail}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section-padding bg-cream text-ink">
          <div className="container grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
            <MotionReveal>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1400&q=85"
                  alt="Frank preparando herramientas de barberia"
                  width={980}
                  height={1180}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="aspect-[4/5] rounded-[2rem] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-7 right-5 rounded-3xl bg-olive px-6 py-5 text-cream shadow-xl">
                  <p className="font-display text-3xl font-black">Cuba x Novi Sad</p>
                  <p className="mt-1 text-sm text-cream/75">una firma con caracter</p>
                </div>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <p className="eyebrow text-cuban-red">Sobre Frank</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                De Cuba a los Balcanes, con la navaja firme y el corazon
                caliente.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-ink/72">
                <p>
                  Frank llego a Novi Sad con una idea clara: traer una barberia
                  donde el hombre se sienta escuchado, cuidado y con confianza.
                  Su estilo nace de la tradicion cubana, de la calle, de la
                  musica y del respeto por un oficio que se aprende con paciencia.
                </p>
                <p>
                  En su silla no hay cortes en serie. Hay conversacion, lectura
                  del rostro, detalle en los contornos y una vibra caribena que
                  convierte cada visita en un momento para recargar presencia.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex gap-3 rounded-2xl bg-black/5 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-olive" />
                    <p className="text-sm font-semibold leading-6">{perk}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="galeria" className="section-padding">
          <div className="container">
            <SectionHeading
              eyebrow="Galeria"
              title="Antes, despues y atmosfera: prueba visual de una experiencia premium."
              description="Un grid elegante pensado para mostrar transformaciones, detalles de barba y el ambiente del local."
            />
            <GalleryLightbox images={gallery} />
          </div>
        </section>

        <section id="reserva" className="section-padding relative bg-[linear-gradient(135deg,rgba(192,138,58,0.18),rgba(197,48,48,0.12),rgba(7,7,7,1))]">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <MotionReveal>
              <p className="eyebrow">Reservas</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight text-cream sm:text-6xl">
                Tu proximo corte empieza con un mensaje.
              </h2>
              <p className="mt-6 text-lg leading-8 text-cream/72">
                Completa el formulario y Frank te confirma disponibilidad. Si
                prefieres algo directo, llama o escribe por WhatsApp al{" "}
                <a className="font-bold text-gold" href={siteConfig.whatsappUrl}>
                  {siteConfig.displayPhone}
                </a>
                .
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ["Confirmacion rapida", "Respuesta por WhatsApp o llamada."],
                  ["Agenda flexible", "Ideal para cortes, barba o ritual completo."],
                  ["Sin complicaciones", "Llegas, te sientas y Frank se encarga."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <ShieldCheck className="h-6 w-6 shrink-0 text-gold" />
                    <div>
                      <p className="font-bold text-cream">{title}</p>
                      <p className="text-sm text-cream/60">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <BookingForm />
            </MotionReveal>
          </div>
        </section>

        <section id="contacto" className="section-padding">
          <div className="container">
            <SectionHeading
              eyebrow="Contacto y ubicacion"
              title="Novi Sad ya tiene sabor cubano en la barberia."
              description="Reserva tu espacio y llega con tiempo para disfrutar una experiencia tranquila, precisa y con buena energia."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="grid gap-4">
                {[
                  {
                    icon: MapPin,
                    title: "Ubicacion",
                    text: "Novi Sad, Serbia",
                  },
                  {
                    icon: Phone,
                    title: "WhatsApp / llamada",
                    text: siteConfig.displayPhone,
                  },
                  {
                    icon: Clock3,
                    title: "Horario",
                    text: "Lun-Vie 10:00-20:00 · Sab 10:00-18:00",
                  },
                  {
                    icon: Sparkles,
                    title: "Especialidad",
                    text: "Fade, barba, clasico cubano y ritual completo",
                  },
                ].map((item) => (
                  <Card key={item.title} className="p-5">
                    <div className="flex gap-4">
                      <div className="rounded-2xl bg-gold/10 p-3 text-gold">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-cream">{item.title}</h3>
                        <p className="mt-1 text-cream/70">{item.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
                <iframe
                  title="Mapa de Novi Sad, Serbia"
                  src="https://www.google.com/maps?q=Novi%20Sad%2C%20Serbia&output=embed"
                  className="h-[430px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-2xl font-black text-cream">Frank</p>
            <p className="mt-1 text-sm text-cream/60">
              Autentico estilo cubano en Novi Sad.
            </p>
          </div>
          <a
            href={siteConfig.creatorUrl}
            className="text-sm font-semibold text-cream/70 transition hover:text-gold"
          >
            Sitio creado por <span className="text-gold">imrulo.eth</span>
          </a>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
