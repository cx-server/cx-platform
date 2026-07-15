import {useCallback, useEffect, useRef} from "react";

import {perspectiveShot} from "./perspectiveShot";

import type {HTMLProps, ReactNode} from "react";

export type CoinConfettiIntensity = "light" | "medium" | "heavy";
export type CoinConfettiMode = "rain" | "shot";
export type CoinConfettiSpeed = "short" | "normal" | "long";

export interface CoinConfettiProps extends Omit<HTMLProps<HTMLDivElement>, "id"> {
    id: string;
    trigger: boolean;
    mode?: CoinConfettiMode;
    /** Vertical origin for shot mode (0=top, 1=bottom). Default 0.15. */
    shotOriginY?: number;
    intensity?: CoinConfettiIntensity;
    opacity?: number;
    /** How long the rain lasts: short (300ms), normal (500ms), long (800ms). */
    speed?: CoinConfettiSpeed;
    /** Enable soft blur on particles. Disable on low-end devices. Default false. */
    blur?: boolean;
    colors?: string[];
    children: ReactNode;
}

const DEFAULT_COLORS = [
    "#078333",
    "#24CC5F",
    "#5BE28B",
    "#98EDB6",
    "#CFFCDF",
    "#09A540",
    "#056126",
    "#4ADE80",
    "#33CC66",
    "#A7F3D0"
];

const intensityMap: Record<CoinConfettiIntensity, number> = {
    light: 10,
    medium: 25,
    heavy: 50
};

const speedMap: Record<CoinConfettiSpeed, number> = {
    short: 250,
    normal: 600,
    long: 1500
};


export function CoinConfetti({
    id,
    trigger,
    mode = "rain",
    shotOriginY = 0.15,
    intensity = "medium",
    opacity = 0.7,
    speed = "normal",
    blur = false,
    colors = DEFAULT_COLORS,
    children,
    className,
    ...props
}: CoinConfettiProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shotCanvasRef = useRef<HTMLCanvasElement>(null);
    const confettiInstanceRef = useRef<unknown>(null);
    const frameRef = useRef<number>(0);
    const cancelShotRef = useRef<(() => void) | null>(null);
    const prevTrigger = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        let cancelled = false;

        import("canvas-confetti").then(mod => {
            if (cancelled) return;
            const create = mod.default?.create ?? mod.create;
            confettiInstanceRef.current = create(canvas, {
                resize: true,
                useWorker: true,
                disableForReducedMotion: true
            });
        }).catch(() => undefined);

        return () => {
            cancelled = true;
            const inst = confettiInstanceRef.current as {reset?: () => void} | null;
            if (inst?.reset) inst.reset();
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            if (cancelShotRef.current) cancelShotRef.current();
        };
    }, []);

    const startRain = useCallback(() => {
        const fire = confettiInstanceRef.current as ((o: unknown) => void) | null;
        if (!fire) return;

        const count = intensityMap[intensity];
        const duration = speedMap[speed];
        const end = Date.now() + duration;
        const start = Date.now();

        // Fill the top immediately — scattered, varied sizes
        for (let i = 0; i < 10; i++) {
            fire({
                particleCount: Math.max(1, Math.floor(count / 40)),
                angle: 270,
                spread: 60,
                startVelocity: 1 + Math.random() * 2,
                gravity: 0.3 + Math.random() * 0.1,
                drift: -0.1 + Math.random() * 0.2,
                ticks: 120 + Math.round(Math.random() * 40),
                decay: 0.97,
                colors,
                shapes: ["square", "circle"],
                scalar: 0.7 + Math.random() * 0.5,
                flat: false,
                origin: {x: Math.random(), y: Math.random() * 0.2}
            });
        }

        function frame() {
            const elapsed = Date.now() - start;
            const progress = elapsed / duration;

            // Gradually fewer bursts as time goes on
            const burstCount = Math.max(1, Math.round(4 * (1 - progress)));

            for (let i = 0; i < burstCount; i++) {
                // Particles get longer-lived and slower as the rain fades
                const lifeFactor = 1 + progress * 0.5;

                fire!({
                    particleCount: Math.max(1, Math.floor(count / 50)),
                    angle: 270,
                    spread: 60,
                    startVelocity: 1.5 + Math.random() * 2,
                    gravity: 0.3 + Math.random() * 0.05,
                    drift: -0.1 + Math.random() * 0.2,
                    ticks: Math.round((100 + Math.random() * 40) * lifeFactor),
                    decay: 0.975,
                    colors,
                    shapes: ["square", "circle"],
                    scalar: 0.8 + Math.random() * 0.4,
                    flat: false,
                    origin: {x: Math.random(), y: -0.03}
                });
            }

            if (Date.now() < end) {
                frameRef.current = requestAnimationFrame(frame);
            } else {
                // Final trailing particles — very slow, long-lived, scattered
                for (let i = 0; i < 20; i++) {
                    fire!({
                        particleCount: 1,
                        angle: 270,
                        spread: 80,
                        startVelocity: 0.5 + Math.random() * 1.5,
                        gravity: 0.08 + Math.random() * 0.05,
                        drift: -0.05 + Math.random() * 0.1,
                        ticks: 160 + Math.round(Math.random() * 60),
                        decay: 0.985,
                        colors,
                        shapes: ["square", "circle"],
                        scalar: 0.6 + Math.random() * 0.4,
                        flat: false,
                        origin: {x: Math.random(), y: Math.random() * 0.4}
                    });
                }
            }
        }
        frame();
    }, [intensity, speed, colors]);

    const startShot = useCallback(() => {
        const canvas = shotCanvasRef.current;
        if (!canvas) return;

        const container = containerRef.current;
        if (container) {
            const dpr = Math.min(window.devicePixelRatio, 2);
            canvas.width = container.clientWidth * dpr;
            canvas.height = container.clientHeight * dpr;
        }

        if (cancelShotRef.current) cancelShotRef.current();

        const count = intensity === "heavy" ? 140 : intensity === "medium" ? 100 : 50;

        cancelShotRef.current = perspectiveShot(canvas, {
            originX: 0.5,
            originY: shotOriginY,
            particleCount: count,
            colors,
            speed: 1.8,
            maxSize: 16
        });
    }, [intensity, colors, shotOriginY]);

    useEffect(() => {
        if (trigger && !prevTrigger.current) {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            if (cancelShotRef.current) cancelShotRef.current();

            if (mode === "shot") startShot();
            else startRain();
        }
        prevTrigger.current = trigger;
    }, [trigger, startRain, startShot, mode]);

    const canvasClasses = [
        "absolute inset-0 w-full h-full pointer-events-none will-change-auto",
        blur ? "blur-[0.5px]" : ""
    ].join(" ");

    return (
        <div
            ref={containerRef}
            id={id}
            data-testid={id}
            className={`relative overflow-hidden ${className ?? ""}`}
            {...props}
        >
            <canvas ref={canvasRef} className={canvasClasses} style={{opacity, zIndex: 5}} aria-hidden="true" />
            {mode === "shot" && (
                <canvas
                    ref={shotCanvasRef}
                    className={canvasClasses}
                    style={{opacity, zIndex: 5, width: "100%", height: "100%"}}
                    aria-hidden="true"
                />
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
