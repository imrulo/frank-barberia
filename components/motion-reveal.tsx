"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type MotionRevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function MotionReveal<T extends ElementType = "div">({
  as,
  children,
  delay = 0,
  className,
  ...props
}: MotionRevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion(as ?? "div");

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
