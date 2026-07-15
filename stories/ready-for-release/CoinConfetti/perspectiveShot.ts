/**
 * Custom canvas-based "perspective shot" animation.
 * Particles start small at a center point and grow outward
 * (simulating flying toward the viewer), then slow down and
 * gently fall with gravity while fading out.
 */

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    maxSize: number;
    growSpeed: number;
    alpha: number;
    decay: number;
    gravity: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
}

export interface PerspectiveShotOptions {
    originX?: number;
    originY?: number;
    particleCount?: number;
    colors?: string[];
    speed?: number;
    maxSize?: number;
}

export function perspectiveShot(canvas: HTMLCanvasElement, options: PerspectiveShotOptions = {}): () => void {
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => undefined;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return () => undefined;
    }

    const {
        originX = 0.5,
        originY = 0.25,
        particleCount = 60,
        colors = ["#FFD700", "#FFDF00", "#FFC800", "#DAA520", "#B8860B", "#FFF8B0"],
        speed = 1,
        maxSize = 12
    } = options;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w * originX;
    const cy = h * originY;

    let animId = 0;
    let cancelled = false;

    const particles: Particle[] = [];

    // Create particles spreading outward from center
    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = (1.5 + Math.random() * 3) * speed;

        particles.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity * 0.7, // slightly less vertical spread
            size: 0.5,
            maxSize: 4 + Math.random() * (maxSize - 4),
            growSpeed: 0.15 + Math.random() * 0.2,
            alpha: 1,
            decay: 0.985 + Math.random() * 0.01,
            gravity: 0.02 + Math.random() * 0.03,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: -0.05 + Math.random() * 0.1
        });
    }

    function draw() {
        if (cancelled) return;

        ctx!.clearRect(0, 0, w, h);

        let aliveCount = 0;

        for (const p of particles) {
            if (p.alpha <= 0.01) continue;
            aliveCount++;

            // Grow toward max size (perspective: getting closer)
            if (p.size < p.maxSize) {
                p.size += p.growSpeed * p.size * 0.5;
                if (p.size > p.maxSize) p.size = p.maxSize;
            }

            p.x += p.vx;
            p.y += p.vy;

            p.vx *= 0.98;
            p.vy *= 0.98;

            // Gravity pulls down after initial burst
            p.vy += p.gravity;

            p.alpha *= p.decay;

            p.rotation += p.rotationSpeed;

            // Draw as an oval (coin-like when rotated)
            ctx!.save();
            ctx!.translate(p.x, p.y);
            ctx!.rotate(p.rotation);
            ctx!.globalAlpha = p.alpha;
            ctx!.fillStyle = p.color;
            ctx!.beginPath();
            // Oval shape: wider than tall (coin seen at an angle)
            ctx!.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
            ctx!.fill();

            // Subtle highlight on the coin
            ctx!.globalAlpha = p.alpha * 0.3;
            ctx!.fillStyle = "#FFFFFF";
            ctx!.beginPath();
            ctx!.ellipse(-p.size * 0.2, -p.size * 0.2, p.size * 0.3, p.size * 0.2, 0, 0, Math.PI * 2);
            ctx!.fill();

            ctx!.restore();
        }

        if (aliveCount > 0) {
            animId = requestAnimationFrame(draw);
        }
    }

    animId = requestAnimationFrame(draw);

    return () => {
        cancelled = true;
        cancelAnimationFrame(animId);
        if (ctx) ctx.clearRect(0, 0, w, h);
    };
}
