import { useRef, useEffect, useState, useCallback } from "react";
import type { HTMLProps, ReactNode } from "react";

export type AnimatedGradientBorderColor = "info" | "positive" | "negative" | "warning" | "brand";
export type AnimatedGradientBorderSpeed = "slow" | "normal" | "fast";
export type AnimatedGradientBorderBg = "card" | "surface" | "white" | "input";

export interface AnimatedGradientBorderProps extends Omit<HTMLProps<HTMLDivElement>, "id"> {
  id: string;
  color?: AnimatedGradientBorderColor;
  speed?: AnimatedGradientBorderSpeed;
  borderWidth?: 1 | 2 | 3;
  radius?: number;
  bg?: AnimatedGradientBorderBg;
  children: ReactNode;
}

const colorMap: Record<AnimatedGradientBorderColor, [string, string]> = {
  info: ["rgb(var(--signals-bg-info))", "rgb(var(--signals-bg-info) / 0.3)"],
  positive: ["rgb(var(--signals-bg-positive))", "rgb(var(--signals-bg-positive) / 0.3)"],
  negative: ["rgb(var(--signals-bg-negative))", "rgb(var(--signals-bg-negative) / 0.3)"],
  warning: ["rgb(var(--signals-bg-warning))", "rgb(var(--signals-bg-warning) / 0.3)"],
  brand: ["rgb(var(--global-styling-branding-brand))", "rgb(var(--global-styling-branding-brand) / 0.3)"],
};

const bgMap: Record<AnimatedGradientBorderBg, string> = {
  card: "rgb(var(--bg-card))",
  surface: "rgb(var(--bg-surface))",
  white: "rgb(var(--bg-white, 255 255 255))",
  input: "rgb(var(--bg-input))",
};

const speedMap: Record<AnimatedGradientBorderSpeed, number> = {
  slow: 6000,
  normal: 4000,
  fast: 2000,
};

export function AnimatedGradientBorder({
  id,
  color = "info",
  speed = "normal",
  borderWidth = 2,
  radius = 12,
  bg = "card",
  children,
  className,
  style,
  ...props
}: AnimatedGradientBorderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    setIsVisible(entries[0]?.isIntersecting ?? true);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [handleIntersection]);

  const [accentBright, accentDim] = colorMap[color];
  const bgColor = bgMap[bg];
  const duration = speedMap[speed];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const padGradient = `linear-gradient(${bgColor}, ${bgColor}) padding-box`;

    if (reducedMotion || !isVisible) {
      element.style.background = [
        padGradient,
        `conic-gradient(from 135deg, ${accentDim} 0%, ${accentBright} 25%, ${accentDim} 50%, ${accentBright} 75%, ${accentDim} 100%) border-box`,
      ].join(", ");
      return;
    }

    let startTime: number | null = null;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const angle = (((timestamp - startTime) / duration) * 360) % 360;

      element!.style.background = [
        padGradient,
        `conic-gradient(from ${angle}deg, ${accentDim} 80%, ${accentBright} 86%, ${accentBright} 90%, ${accentBright} 94%, ${accentDim} 100%) border-box`,
      ].join(", ");

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, reducedMotion, accentBright, accentDim, bgColor, duration]);

  return (
    <div
      ref={ref}
      id={id}
      data-testid={id}
      className={className}
      style={{
        borderRadius: `${radius}px`,
        border: `${borderWidth}px solid transparent`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
