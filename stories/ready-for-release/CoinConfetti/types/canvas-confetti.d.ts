declare module "canvas-confetti" {
    interface Options {
        particleCount?: number;
        angle?: number;
        spread?: number;
        startVelocity?: number;
        decay?: number;
        gravity?: number;
        drift?: number;
        flat?: boolean;
        ticks?: number;
        origin?: {x?: number; y?: number};
        colors?: string[];
        shapes?: Array<"square" | "circle" | "star">;
        scalar?: number;
        zIndex?: number;
        disableForReducedMotion?: boolean;
    }

    interface GlobalOptions {
        resize?: boolean;
        useWorker?: boolean;
        disableForReducedMotion?: boolean;
    }

    type ConfettiFunction = ((options?: Options) => Promise<null> | null) & {
        reset: () => void;
    };

    function create(canvas: HTMLCanvasElement, globalOptions?: GlobalOptions): ConfettiFunction;

    const confetti: ConfettiFunction & {
        create: typeof create;
        reset: () => void;
    };

    export = confetti;
}
