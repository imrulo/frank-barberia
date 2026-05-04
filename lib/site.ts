import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BadgeCheck,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

export const siteConfig = {
  name: "Frank Barbero Cubano",
  shortName: "Frank",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://frank-barbero-cubano.vercel.app",
  phone: "+381 64 1409093",
  displayPhone: "+381 64 1409093",
  phoneIntl: "+381641409093",
  whatsapp: "381641409093",
  whatsappUrl:
    "https://wa.me/381641409093?text=Hola%20Frank,%20quiero%20reservar%20una%20cita.",
  address: "Novi Sad, Serbia",
  email: "reservas@frankbarberocubano.com",
  instagram: "https://www.instagram.com/",
  slogan: "El toque cubano que Novi Sad necesitaba",
  description:
    "Barbería premium cubana en Novi Sad: cortes clásicos, fades modernos, barba y rituales completos con alma latina y precisión europea.",
  ogImage:
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
  creatorUrl: "https://wa.me/381641409093",
};

export type Service = {
  title: string;
  price: string;
  description: string;
  detail: string;
  duration: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Corte clásico cubano",
    price: "2.200 RSD",
    duration: "35 min",
    description: "Líneas limpias, tijera precisa y ese porte elegante de La Habana.",
    detail: "Ideal para un look profesional con carácter, pulido al detalle y acabado premium.",
    icon: Scissors,
  },
  {
    title: "Fade Caribe Premium",
    price: "2.700 RSD",
    duration: "45 min",
    description: "Degradado moderno con transición suave y contorno afilado.",
    detail: "El balance entre técnica europea y flow cubano para salir impecable.",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Beard grooming",
    price: "1.600 RSD",
    duration: "25 min",
    description: "Barba definida, hidratada y diseñada según tu rostro.",
    detail: "Incluye perfilado, navaja, aceite aromático y acabado elegante.",
    icon: BadgeCheck,
  },
  {
    title: "Ritual completo Frank",
    price: "4.200 RSD",
    duration: "70 min",
    description: "Corte, fade o tijera, barba, toalla caliente y styling final.",
    detail: "La experiencia completa: calma, precisión y buena vibra caribeña.",
    icon: Star,
    featured: true,
  },
  {
    title: "Kids con estilo",
    price: "1.700 RSD",
    duration: "30 min",
    description: "Corte cómodo para niños, con paciencia y alegría cubana.",
    detail: "Para pequeños campeones que quieren verse frescos sin estrés.",
    icon: Baby,
  },
  {
    title: "Perfilado express",
    price: "1.100 RSD",
    duration: "15 min",
    description: "Contornos, nuca y detalles para mantener el look al día.",
    detail: "Perfecto entre cortes cuando necesitas verte presentable rápido.",
    icon: Scissors,
  },
];

export const stats = [
  { value: "10+", label: "años de oficio" },
  { value: "4.9/5", label: "experiencia premium" },
  { value: "100%", label: "atención personalizada" },
];

export const gallery = [
  {
    title: "Fade limpio",
    category: "Antes / Después",
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=85",
    alt: "Corte fade masculino en barbería premium",
  },
  {
    title: "Barba con navaja",
    category: "Grooming",
    src: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?auto=format&fit=crop&w=1200&q=85",
    alt: "Perfilado de barba con navaja",
  },
  {
    title: "Ambiente premium",
    category: "Local",
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior elegante de barbería",
  },
  {
    title: "Detalle clásico",
    category: "Corte",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Barbero cortando cabello con tijeras",
  },
  {
    title: "Ritual de barba",
    category: "Experiencia",
    src: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?auto=format&fit=crop&w=1200&q=85",
    alt: "Toalla caliente en servicio de barbería",
  },
  {
    title: "Estilo europeo",
    category: "Styling",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
    alt: "Cliente con corte moderno y estilo premium",
  },
];

export const contactItems = [
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Frank,%20quiero%20reservar%20una%20cita.`,
    icon: MessageCircle,
  },
  {
    label: "Llamada",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Ubicación",
    value: siteConfig.address,
    href: "https://www.google.com/maps/search/?api=1&query=Novi+Sad+Serbia",
    icon: MapPin,
  },
];

export const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB4Mj0nMScgeTE9JzAnIHkyPScxJz48c3RvcCBzdG9wLWNvbG9yPScjMDcwNzA3Jy8+PHN0b3Agb2Zmc2V0PScwLjUnIHN0b3AtY29sb3I9JyM2ZjFmMWInLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNkNmE4NTAnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nMzInIGhlaWdodD0nMzInIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=";
