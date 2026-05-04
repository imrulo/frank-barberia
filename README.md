# Frank Barbero Cubano

Landing premium para **Frank Barbero Cubano**, barbero cubano de alto nivel en Novi Sad, Serbia. El proyecto está construido con Next.js 15 App Router, TypeScript estricto, Tailwind CSS, componentes estilo shadcn/ui, Framer Motion y SEO completo para deploy inmediato en Vercel.

## Stack

- Next.js 15 + App Router + React Server Components
- TypeScript estricto
- Tailwind CSS v4
- Componentes UI reutilizables inspirados en shadcn/ui
- `clsx` + `tailwind-merge` para composición de clases
- Framer Motion para micro-interacciones y scroll animations
- Lucide React icons
- `next/font` con Inter + Playfair Display
- `next/image` con imágenes optimizadas y blur placeholders
- Metadata, Open Graph, Twitter Cards y JSON-LD LocalBusiness/Barbershop

## Estructura

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
  booking-form.tsx
  gallery-lightbox.tsx
  motion-reveal.tsx
  navbar.tsx
  section-heading.tsx
  whatsapp-float.tsx
lib/
  site.ts
  utils.ts
```

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # servidor local
npm run build      # build de producción
npm run start      # servir build
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir archivos
```

## Variables de entorno

Copia `.env.example` si deseas fijar la URL canónica del sitio:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## Deploy en Vercel

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel, selecciona **New Project** e importa el repositorio.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output directory: `.next`.
6. Agrega `NEXT_PUBLIC_SITE_URL` con el dominio final.
7. Deploy.

## Personalización

Los datos principales viven en `lib/site.ts`:

- nombre y slogan
- teléfono / WhatsApp
- servicios y precios en RSD
- galería
- metadata SEO

Para usar fotos reales de Frank, reemplaza las URLs de Unsplash en `app/page.tsx` y `lib/site.ts` por archivos en `public/` o por URLs remotas permitidas en `next.config.ts`.
