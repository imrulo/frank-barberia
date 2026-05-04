import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-full border border-cream/10 bg-cream/[0.04] px-5 py-3 text-base text-cream shadow-sm outline-none transition placeholder:text-cream/40 focus:border-gold focus:ring-4 focus:ring-gold/10 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}
