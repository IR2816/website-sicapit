"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  variant?: "soft" | "lift" | "quick";
};

const variantClassMap: Record<NonNullable<ScrollRevealProps["variant"]>, string> = {
  soft: "scroll-reveal--soft",
  lift: "scroll-reveal--lift",
  quick: "scroll-reveal--quick",
};

export function ScrollReveal({
  children,
  className = "",
  delay,
  duration,
  distance,
  variant,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const style: CSSProperties & Record<string, string> = {};

  if (delay !== undefined) {
    style["--reveal-delay"] = `${delay}ms`;
  }
  if (duration !== undefined) {
    style["--reveal-duration"] = `${duration}ms`;
  }
  if (distance !== undefined) {
    style["--reveal-distance"] = `${distance}px`;
  }

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`scroll-reveal ${variant ? variantClassMap[variant] : ""} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}


