import {useState, useCallback} from "react";

import {CoinConfetti} from "./CoinConfetti";
import {Button} from "@tipico/ui/Button";
import {RollingNumbers} from "@tipico/ui/RollingNumbers";

import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof CoinConfetti> = {
    title: "Ready for Release/CoinConfetti",
    component: CoinConfetti,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Gold confetti celebration overlay. Renders a particle rain behind content. Replaces GIF-based celebrations with a performant canvas-confetti animation."
            }
        }
    },
    argTypes: {
        intensity: {control: "select", options: ["light", "medium", "heavy"]},
        mode: {control: "select", options: ["rain", "shot"]},
        shotOriginY: {control: {type: "range", min: 0, max: 1, step: 0.05}},
        opacity: {control: {type: "range", min: 0, max: 1, step: 0.1}},
        speed: {control: "select", options: ["short", "normal", "long"]},
        blur: {control: "boolean"},
        colors: {
            control: "select",
            options: ["gold", "silver", "info", "positive", "negative", "warning"],
            mapping: {
                gold: ["#FFD700", "#FFDF00", "#FFC800", "#DAA520", "#B8860B", "#FFF8B0", "#FFFACD", "#FFE657", "#C9A900", "#FFF2A0"],
                silver: ["#C0C0C0", "#A8A9AD", "#D3D3D3", "#808080", "#E8E8E8", "#B0B0B0", "#DCDCDC", "#F5F5F5", "#969696", "#CFCFCF"],
                info: ["#1C7EA1", "#26AAD9", "#5FC0E3", "#97D6ED", "#CFECF7", "#176683", "#114E64", "#ECF7FC", "#3BB8E0", "#0C3746"],
                positive: ["#078333", "#24CC5F", "#5BE28B", "#98EDB6", "#CFFCDF", "#09A540", "#056126", "#4ADE80", "#33CC66", "#A7F3D0"],
                negative: ["#CF3917", "#F87D54", "#FB9F76", "#EF4444", "#DC2626", "#F54A1D", "#FCA5A5", "#FF6B6B", "#B91C1C", "#FECACA"],
                warning: ["#E1AC00", "#FFCA1F", "#FFD95C", "#FFE79A", "#FFF6D7", "#B38900", "#856600", "#FFB800", "#FFFCF0", "#F5A623"]
            },
            description: "Particle color palette preset."
        }
    },
    args: {
        id: "coin-confetti-demo",
        mode: "shot",
        shotOriginY: 0.15,
        intensity: "medium",
        opacity: 0.7,
        speed: "normal",
        blur: true,
        colors: "positive"
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ─────────────────────────────────────────────────────────
   BET CARD
   ───────────────────────────────────────────────────────── */
function BetCard({title, subtitle, stake, paidOut}: {title: string; subtitle: string; stake: string; paidOut: string}) {
    return (
        <div style={{background: "rgb(var(--bg-card))", border: "1px solid rgb(var(--border-subtile))", borderRadius: "var(--radius-card)", padding: "16px", marginBottom: "12px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <div style={{flex: 1, marginRight: "12px"}}>
                    <p style={{color: "rgb(var(--text-highlight))", fontWeight: 600, fontSize: "15px"}}>{title}</p>
                    <p style={{color: "rgb(var(--text-subtile))", fontSize: "12px", marginTop: "2px"}}>{subtitle}</p>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <span style={{background: "rgb(var(--signals-bg-positive))", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "var(--radius-pills)"}}>WON</span>
                    <svg style={{width: "20px", height: "20px", color: "rgb(var(--text-subtile))"}} fill="none" viewBox="0 0 20 20">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgb(var(--border-subtile))"}}>
                <div>
                    <p style={{color: "rgb(var(--text-subtile))"}}>Stake</p>
                    <p style={{color: "rgb(var(--text-highlight))", fontWeight: 600, fontSize: "15px", marginTop: "2px"}}>{stake}</p>
                </div>
                <div style={{textAlign: "right"}}>
                    <p style={{color: "rgb(var(--text-subtile))"}}>Paid out</p>
                    <p style={{color: "rgb(var(--text-highlight))", fontWeight: 600, fontSize: "15px", marginTop: "2px"}}>{paidOut}</p>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   SIMILAR COMBIS SECTION
   ───────────────────────────────────────────────────────── */
function SimilarCombis() {
    return (
        <div style={{marginTop: "24px"}}>
            <p style={{color: "rgb(var(--text-standard))", fontWeight: 600, fontSize: "13px", textAlign: "center", marginBottom: "16px"}}>Similar combis today</p>
            <div style={{background: "rgb(var(--bg-card))", borderRadius: "var(--radius-card)", overflow: "hidden"}}>
                <div style={{display: "flex", borderBottom: "1px solid rgb(var(--border-subtile))"}}>
                    <div style={{flex: 1, textAlign: "center", padding: "12px 0", borderRight: "1px solid rgb(var(--border-subtile))"}}>
                        <div style={{background: "rgb(var(--signals-bg-info))", borderRadius: "999px", display: "inline-block", padding: "2px 12px", marginBottom: "4px"}}>
                            <span style={{color: "#fff", fontSize: "13px", fontWeight: 700}}>4.231</span>
                        </div>
                        <p style={{color: "rgb(var(--text-subtile))", fontSize: "10px"}}>Bets placed</p>
                    </div>
                    <div style={{flex: 1, textAlign: "center", padding: "12px 0", borderRight: "1px solid rgb(var(--border-subtile))"}}>
                        <p style={{color: "rgb(var(--text-standard))", fontSize: "13px", fontWeight: 700}}>3x</p>
                        <p style={{color: "rgb(var(--text-subtile))", fontSize: "10px"}}>Combi</p>
                    </div>
                    <div style={{flex: 1, textAlign: "center", padding: "12px 0"}}>
                        <p style={{color: "rgb(var(--text-standard))", fontSize: "13px", fontWeight: 700}}>17,40</p>
                        <p style={{color: "rgb(var(--text-subtile))", fontSize: "10px"}}>Total odds</p>
                    </div>
                </div>
                <div style={{padding: "16px", display: "flex", flexDirection: "column", gap: "12px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                        <span style={{fontSize: "18px"}}>🏆</span>
                        <div>
                            <p style={{color: "rgb(var(--text-standard))", fontSize: "13px", fontWeight: 500}}>Bayern Munich</p>
                            <p style={{color: "rgb(var(--text-subtile))", fontSize: "12px"}}>Vfb Stuttgart – TSG 1899 Hoffenheim</p>
                        </div>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                        <span style={{fontSize: "18px"}}>🏆</span>
                        <div>
                            <p style={{color: "rgb(var(--text-standard))", fontSize: "13px", fontWeight: 500}}>Dortmund</p>
                            <p style={{color: "rgb(var(--text-subtile))", fontSize: "12px"}}>Dortmund – RB Leipzig</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   BOTTOM NAVIGATION
   ───────────────────────────────────────────────────────── */
function BottomNav() {
    const items = [
        {icon: "🏠", label: "Home"},
        {icon: "⚽", label: "Wetten"},
        {icon: "📋", label: "Meine Wetten", active: true, badge: 3},
        {icon: "🎰", label: "Games"},
        {icon: "📝", label: "Wettschein"}
    ];
    return (
        <div style={{position: "absolute", bottom: 0, left: 0, right: 0, background: "rgb(var(--bg-card))", borderTop: "1px solid rgb(var(--border-subtile))", display: "flex", justifyContent: "space-around", padding: "8px 0 20px", zIndex: 30}}>
            {items.map(item => (
                <div key={item.label} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", position: "relative"}}>
                    <span style={{fontSize: "16px", opacity: item.active ? 1 : 0.5}}>{item.icon}</span>
                    {item.badge && (
                        <span style={{position: "absolute", top: "-2px", right: "-4px", background: "rgb(var(--signals-bg-negative))", color: "#fff", fontSize: "9px", borderRadius: "999px", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700}}>
                            {item.badge}
                        </span>
                    )}
                    <span style={{fontSize: "10px", color: item.active ? "rgb(var(--signals-bg-info))" : "rgb(var(--text-subtile))", fontWeight: item.active ? 600 : 400}}>
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   WIN OVERLAY
   ───────────────────────────────────────────────────────── */
function WinOverlay({amount, balance, animate = false}: {amount: number; balance: number; animate?: boolean}) {
    return (
        <div style={{padding: "0 12px 96px", overflowY: "auto", height: "100%", position: "relative"}}>
            <div style={{position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, background: "linear-gradient(to bottom, rgb(var(--signals-bg-positive) / 0.2) 0%, transparent 35%)"}} />
            <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "12px", paddingRight: "4px"}}>
                <button style={{width: "32px", height: "32px", borderRadius: "999px", border: "1px solid rgb(var(--border-subtile))", display: "flex", alignItems: "center", justifyContent: "center", color: "rgb(var(--text-subtile))", fontSize: "14px", background: "transparent", cursor: "pointer"}}>✕</button>
            </div>
            <div style={{textAlign: "center", paddingTop: "16px", paddingBottom: "32px"}}>
                <p style={{color: "rgb(var(--text-highlight))", fontSize: "13px", fontWeight: 500, marginBottom: "8px"}}>You've won</p>
                <RollingNumbers
                    id="win-amount"
                    value={animate ? `${amount.toFixed(2).replace(".", ",")} €` : `00,00 €`}
                    className="text-positive text-3xl"
                    style={{fontWeight: 700, display: "block", marginBottom: "16px"}}
                />
                <p style={{color: "rgb(var(--text-subtile))", fontSize: "12px", marginBottom: "4px"}}>New balance</p>
                <p style={{color: "rgb(var(--text-highlight))", fontSize: "13px"}}>
                    <span style={{textDecoration: "line-through", color: "rgb(var(--text-subtile))", marginRight: "8px"}}>73,80</span>
                    {balance.toFixed(2).replace(".", ",")} €
                </p>
            </div>
            <BetCard title="Single bet" subtitle="Vfb Stuttgart - TSG 1899 Hoffenheim" stake="2,00 €" paidOut="12,30 €" />
            <BetCard title="2x Combi" subtitle="TSG Hoffenheim - RB Leipzig | Bayern M..." stake="2,00 €" paidOut="22,30 €" />
            <div style={{textAlign: "center", padding: "16px 0"}}>
                <Button id="share-btn" variant="link" size="sm">Share</Button>
            </div>
            <SimilarCombis />
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   PHONE FRAME
   ───────────────────────────────────────────────────────── */
function PhoneFrame({children}: {children: React.ReactNode}) {
    return (
        <div style={{width: "390px", height: "844px", background: "rgb(var(--bg-surface))", position: "relative", overflow: "hidden", borderRadius: "44px", border: "6px solid #000", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"}}>
            {/* Notch */}
            <div style={{height: "47px", background: "#000", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "4px"}}>
                <div style={{width: "126px", height: "34px", background: "#000", borderRadius: "999px"}} />
            </div>
            {/* Header */}
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "rgb(var(--bg-surface))"}}>
                <p style={{color: "rgb(var(--text-standard))", fontWeight: 700, fontSize: "20px"}}>My Bets</p>
                <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <span style={{color: "rgb(var(--text-standard))", fontSize: "12px", border: "1px solid rgb(var(--border-standard))", borderRadius: "999px", padding: "6px 12px"}}>214,98€ +</span>
                    <svg style={{width: "24px", height: "24px", color: "rgb(var(--text-standard))"}} fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
            {/* Overlay background */}
            <div style={{position: "absolute", inset: 0, top: "100px", background: "rgba(0,0,0,0.4)", zIndex: 10}} />
            {/* Content area */}
            <div style={{position: "absolute", left: "12px", right: "12px", top: "110px", bottom: "76px", zIndex: 20}}>{children}</div>
            <BottomNav />
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   DEMO WRAPPERS
   ───────────────────────────────────────────────────────── */
function DefaultDemo({
    mode = "shot",
    shotOriginY = 0.15,
    intensity = "medium",
    opacity = 0.7,
    speed = "normal",
    blur = true,
    colors
}: {
    mode?: "rain" | "shot";
    shotOriginY?: number;
    intensity?: "light" | "medium" | "heavy";
    opacity?: number;
    speed?: "short" | "normal" | "long";
    blur?: boolean;
    colors?: string[];
}) {
    const [showAmount, setShowAmount] = useState(false);
    const [confettiActive, setConfettiActive] = useState(false);

    const handleClick = useCallback(() => {
        setShowAmount(false);
        setConfettiActive(false);
        setTimeout(() => {
            setShowAmount(true);
            setConfettiActive(true);
        }, 50);
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "center"}}>
            <Button id="trigger-btn" variant="primary" size="md" onClick={handleClick}>
                Trigger Celebration
            </Button>
            <PhoneFrame>
                <CoinConfetti
                    id="coin-confetti-demo"
                    trigger={confettiActive}
                    mode={mode}
                    shotOriginY={shotOriginY}
                    intensity={intensity}
                    opacity={opacity}
                    speed={speed}
                    blur={blur}
                    colors={colors}
                    style={{height: "100%", borderRadius: "12px", overflow: "hidden", background: "rgb(var(--bg-dialog, var(--bg-card)))", border: "1px solid rgb(var(--border-subtile))"}}
                >
                    <WinOverlay amount={34.6} balance={108.4} animate={showAmount} />
                </CoinConfetti>
            </PhoneFrame>
        </div>
    );
}

function ShotDemo() {
    const [active, setActive] = useState(false);
    const handleClick = useCallback(() => {
        setActive(false);
        setTimeout(() => setActive(true), 50);
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "center"}}>
            <Button id="shot-trigger" variant="primary" size="md" onClick={handleClick}>
                Confetti Cannon
            </Button>
            <PhoneFrame>
                <CoinConfetti
                    id="shot"
                    trigger={active}
                    mode="shot"
                    intensity="heavy"
                    opacity={0.8}
                    blur={true}
                    style={{height: "100%", borderRadius: "12px", overflow: "hidden", background: "rgb(var(--bg-dialog, var(--bg-card)))", border: "1px solid rgb(var(--border-subtile))"}}
                >
                    <WinOverlay amount={500.0} balance={630.0} />
                </CoinConfetti>
            </PhoneFrame>
        </div>
    );
}

/* ─── STORIES ─── */
export const Default: Story = {
    render: args => (
        <DefaultDemo
            mode={args.mode ?? "shot"}
            shotOriginY={args.shotOriginY ?? 0.15}
            intensity={args.intensity ?? "medium"}
            opacity={args.opacity ?? 0.7}
            speed={args.speed ?? "normal"}
            blur={args.blur ?? true}
            colors={args.colors as unknown as string[] | undefined}
        />
    )
};

export const ShotMode: Story = {
    render: () => <ShotDemo />
};

export const HowToUse: Story = {
    render: () => (
        <div style={{maxWidth: "640px", color: "rgb(var(--text-standard))", fontSize: "14px", lineHeight: 1.6, padding: "24px"}}>
            <h2 style={{fontSize: "20px", fontWeight: 600, marginBottom: "16px"}}>How to Use</h2>
            <pre style={{background: "rgb(var(--bg-input))", borderRadius: "8px", padding: "12px", fontSize: "12px", overflowX: "auto"}}>
                <code>{`import {CoinConfetti} from "@tipico/ui/CoinConfetti";

// Rain mode (gentle gold glitter)
<CoinConfetti id="win" trigger={hasWon} mode="rain" speed="normal">
  <YourContent />
</CoinConfetti>

// Shot mode (perspective burst from center)
<CoinConfetti id="jackpot" trigger={hasWon} mode="shot" shotOriginY={0.25}>
  <YourContent />
</CoinConfetti>`}</code>
            </pre>
            <ul style={{listStyle: "disc", paddingLeft: "20px", marginTop: "16px", color: "rgb(var(--text-subtile))", fontSize: "12px", display: "flex", flexDirection: "column", gap: "4px"}}>
                <li>Canvas renders BEHIND children (z-index layering)</li>
                <li>Background via className or style on CoinConfetti container</li>
                <li>Rain: canvas-confetti (Web Worker) | Shot: custom canvas perspective</li>
                <li>Both respect prefers-reduced-motion</li>
                <li>Dependency: canvas-confetti@1.9.4 (ISC, 16KB gzipped)</li>
            </ul>
        </div>
    ),
    parameters: {layout: "padded"}
};
