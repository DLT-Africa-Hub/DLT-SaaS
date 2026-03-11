import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type Direction = "up" | "down" | "left" | "right";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delayMs?: number;
};

const hiddenByDirection: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  direction = "up",
  delayMs = 0,
}) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  const base =
    "opacity-0 transition-all duration-700 ease-out will-change-transform";
  const hidden = hiddenByDirection[direction];
  const visible = "opacity-100 translate-x-0 translate-y-0";
  const style =
    delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${base} ${hidden} ${isVisible ? visible : ""} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

