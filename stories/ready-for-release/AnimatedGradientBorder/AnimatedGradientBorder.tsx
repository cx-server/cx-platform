import {useMemo, useRef, useEffect, useState, useCallback} from "react";

import type {HTMLProps, ReactNode} from "react";

export type AnimatedGradientBorderColor = "info" | "positive" | "negative" | "warning" | "brand" | "interaction";
export type AnimatedGradientBorderSpeed = "slow" | "normal" | "fast";

export interface AnimatedGradientBorderProps extends Omit<HTMLProps<HTMLDivElement>, "id"> {
    id: string;
    /** The color token for the animated gradient. */
    color?: AnimatedGradientBorderColor;
    /** Animation speed: slow (6s), normal (4s), fast (2s). */
    speed?: AnimatedGradientBorderSpeed;
    /** Border width in pixels. */
    borderWidth?: 1 | 2;
    /** Border radius class override. Defaults to rounded-card. */
    rounded?: string;
    children: ReactNode;
}

const colorMap: Record<AnimatedGradientBorderColor, string> = {
    info: "rgb(var(--signals-bg-info))",
    positive: "rgb(var(--signals-bg-positive))",
    negative: "rgb(var(--signals-bg-negative))",
    warning: "rgb(var(--signals-bg-warning))",
    brand: "rgb(var(--global-styling-branding-brand))",
    interaction: "rgb(var(--global-styling-branding-interaction))"
};

const speedMap: Record<AnimatedGradientBorderSpeed, string> = {
    slow: "6s",
    normal: "4s",
    fast: "2s"
};

/**
 * Animated gradient border wrapper. Wraps any child element with a spinning
 * conic-gradient border effect. Uses design system color tokens.
 *
 * Architecture: Uses a relative container with an absolutely-positioned ::before
 * pseudo-element for the animated gradient. The child element renders on top with
 * its own background — no `bg` prop needed. The child just needs to have a background
 * and matching border-radius to cover the gradient underneath.
 *
 * Performance:
 * - `contain: paint` isolates repaints to this element.
 * - `will-change` on the pseudo-element only (not the container).
 * - IntersectionObserver pauses animation when element is offscreen.
 * - Style object memoized to avoid re-renders triggering re-paints.
 *
 * Accessibility:
 * - Respects `prefers-reduced-motion` — shows static colored border instead.
 *
 * Browser support: Chrome 85+, Safari 15.4+, Firefox 128+.
 * Graceful degradation: static gradient (no spin) in older browsers.
 */
export function AnimatedGradientBorder({
    id,
    color = "info",
    speed = "normal",
    borderWidth = 1,
    rounded = "rounded-card",
    children,
    className,
    ...props
}: AnimatedGradientBorderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        setIsVisible(entries[0]?.isIntersecting ?? true);
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0
        });
        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [handleIntersection]);

    const style = useMemo(() => {
        const accentColor = colorMap[color];
        return {
            "--animated-border-angle": "0deg",
            "--animated-border-duration": speedMap[speed],
            "--animated-border-color": accentColor,
            "--animated-border-width": `${borderWidth}px`,
            "--animated-border-play-state": isVisible ? "running" : "paused"
        } as React.CSSProperties;
    }, [color, speed, borderWidth, isVisible]);

    return (
        <div
            ref={ref}
            id={id}
            data-testid={id}
            className={`animated-gradient-border ${rounded} ${className ?? ""}`}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
}
