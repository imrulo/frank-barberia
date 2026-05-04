import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-black tracking-tight text-cream sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-balance text-base leading-8 text-cream/68 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
