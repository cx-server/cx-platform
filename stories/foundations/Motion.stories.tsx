import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@tipico/ui/Button";
import { Card } from "@tipico/ui/Card";
import { Toast } from "@tipico/ui/Toast";
import { Alert } from "@tipico/ui/Alert";
import { Badge } from "@tipico/ui/Badge";
import "./motion.css";

const meta: Meta = {
  title: "Foundations/Motion",
  tags: [],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

/* ─── Token Definitions ─── */

const DURATIONS = {
  instant: { value: "100ms", ms: 100, tw: "duration-100", desc: "Micro" },
  fast: { value: "200ms", ms: 200, tw: "duration-200", desc: "Feedback" },
  normal: { value: "300ms", ms: 300, tw: "duration-300", desc: "Standard" },
  slow: { value: "500ms", ms: 500, tw: "duration-500", desc: "Movement" },
  deliberate: { value: "800ms", ms: 800, tw: "duration-800", desc: "Emphasis" },
} as const;

const EASINGS = {
  standard: { value: "cubic-bezier(0.2, 0, 0, 1)", tw: "ease-standard", desc: "Default" },
  enter: { value: "cubic-bezier(0, 0, 0, 1)", tw: "ease-enter", desc: "Appearing" },
  exit: { value: "cubic-bezier(0.2, 0, 1, 1)", tw: "ease-exit", desc: "Leaving" },
  bounce: { value: "cubic-bezier(0.34, 1.56, 0.64, 1)", tw: "ease-bounce", desc: "Playful" },
} as const;

const PATTERNS = {
  "fade": { label: "Fade", transform: { from: "none", to: "none" }, opacity: { from: 0, to: 1 } },
  "slide-up": { label: "Slide Up", transform: { from: "translateY(30px)", to: "translateY(0)" }, opacity: { from: 0, to: 1 } },
  "slide-down": { label: "Slide Down", transform: { from: "translateY(-30px)", to: "translateY(0)" }, opacity: { from: 0, to: 1 } },
  "slide-left": { label: "Slide Left", transform: { from: "translateX(40px)", to: "translateX(0)" }, opacity: { from: 0, to: 1 } },
  "slide-right": { label: "Slide Right", transform: { from: "translateX(-40px)", to: "translateX(0)" }, opacity: { from: 0, to: 1 } },
  "scale": { label: "Scale", transform: { from: "scale(0.85)", to: "scale(1)" }, opacity: { from: 0, to: 1 } },
  "scale-bounce": { label: "Scale Bounce", transform: { from: "scale(0)", to: "scale(1)" }, opacity: { from: 0, to: 1 } },
} as const;

type DurationKey = keyof typeof DURATIONS;
type EasingKey = keyof typeof EASINGS;
type PatternKey = keyof typeof PATTERNS;

/* ─── Preview Elements (Real @tipico/ui Components) ─── */

function PreviewCard() {
  return (
    <Card id="motion-card">
      <div className="flex flex-col gap-2 min-w-[260px]">
        <div className="flex items-center justify-between">
          <span className="text-highlight font-semibold text-sm">Bayern vs. Dortmund</span>
          <Badge id="live" variant="live">LIVE</Badge>
        </div>
        <span className="text-standard text-xs">Bundesliga · Matchday 12</span>
      </div>
    </Card>
  );
}

function PreviewToast() {
  return (
    <Toast id="motion-toast" status="positive" show>
      Deposit of €50.00 confirmed
    </Toast>
  );
}

function PreviewAlert() {
  return (
    <div style={{ width: "300px" }}>
      <Alert id="motion-alert" variant="info" header="Bet placed">
        Your bet has been added to the betslip.
      </Alert>
    </div>
  );
}

function PreviewButton() {
  return (
    <div className="flex gap-3 items-center">
      <Button id="btn-p" variant="primary" autoWidth>Place Bet</Button>
      <Button id="btn-o" variant="outline" autoWidth>Cancel</Button>
    </div>
  );
}

function PreviewDialog() {
  return (
    <div className="bg-card rounded-xl p-5 w-[280px] shadow-xl border border-subtile">
      <div className="text-base font-semibold text-highlight mb-2">Confirm Cashout</div>
      <div className="text-sm text-standard mb-4">Cash out €42.50 now?</div>
      <div className="flex gap-2 justify-end">
        <Button id="d-c" variant="outline" size="sm" autoWidth>Cancel</Button>
        <Button id="d-ok" variant="primary" size="sm" autoWidth>Cash Out</Button>
      </div>
    </div>
  );
}

function PreviewNotification() {
  return (
    <Toast id="motion-notif" status="info" show>
      New offer available: Free Bet €10
    </Toast>
  );
}

const ELEMENTS = {
  card: { label: "Card", component: PreviewCard },
  dialog: { label: "Dialog", component: PreviewDialog },
  toast: { label: "Toast", component: PreviewToast },
  alert: { label: "Alert", component: PreviewAlert },
  button: { label: "Button", component: PreviewButton },
  notification: { label: "Notification", component: PreviewNotification },
} as const;

type ElementKey = keyof typeof ELEMENTS;

/* ─── Playground Component ─── */

export const Playground: Story = {
  render: () => <MotionPlayground />,
};

function MotionPlayground() {
  const [duration, setDuration] = useState<DurationKey>("normal");
  const [easing, setEasing] = useState<EasingKey>("enter");
  const [pattern, setPattern] = useState<PatternKey>("slide-up");
  const [element, setElement] = useState<ElementKey>("card");
  const [phase, setPhase] = useState<"in" | "out">("out");
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Continuous loop: animate in → hold → animate out → hold → repeat
  const startLoop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const ms = DURATIONS[duration].ms;
    const holdTime = Math.max(ms * 2, 600); // hold at least 600ms or 2× duration
    const cycleTime = ms + holdTime;

    // Start with "out" then animate in
    setPhase("out");
    timeoutRef.current = setTimeout(() => {
      setPhase("in");
    }, 50);

    intervalRef.current = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setPhase("in");
      }, ms + 200); // brief pause in "out" state before animating back in
    }, cycleTime * 2);
  }, [duration]);

  useEffect(() => {
    startLoop();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startLoop, pattern, easing, element]);

  const ElementComponent = ELEMENTS[element].component;
  const pat = PATTERNS[pattern];

  const targetStyle: React.CSSProperties = {
    transition: `all ${DURATIONS[duration].value} ${EASINGS[easing].value}`,
    opacity: phase === "in" ? pat.opacity.to : pat.opacity.from,
    transform: phase === "in" ? pat.transform.to : pat.transform.from,
  };

  const cssOutput = `transition: all ${DURATIONS[duration].value} ${EASINGS[easing].value};`;
  const tailwindOutput = `transition-all ${DURATIONS[duration].tw} ${EASINGS[easing].tw}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-highlight">Motion Playground</h2>
        <p className="text-sm text-subtile mt-1">
          Proposed motion token standard. Pick any combination — the element loops continuously so you can feel the transition.
        </p>
      </div>

      {/* Controls */}
      <div className="motion-controls">
        {/* Element */}
        <div>
          <div className="motion-label">Element</div>
          <div className="motion-selector">
            {(Object.keys(ELEMENTS) as ElementKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className="motion-chip"
                data-active={element === key}
                onClick={() => setElement(key)}
              >
                {ELEMENTS[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Pattern */}
        <div>
          <div className="motion-label">Pattern</div>
          <div className="motion-selector">
            {(Object.keys(PATTERNS) as PatternKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className="motion-chip"
                data-active={pattern === key}
                onClick={() => setPattern(key)}
              >
                {PATTERNS[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <div className="motion-label">Duration</div>
          <div className="motion-selector">
            {(Object.keys(DURATIONS) as DurationKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className="motion-chip"
                data-active={duration === key}
                onClick={() => setDuration(key)}
              >
                <span>{key}</span>
                <span className="motion-chip-sub">{DURATIONS[key].value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Easing */}
        <div>
          <div className="motion-label">Easing</div>
          <div className="motion-selector">
            {(Object.keys(EASINGS) as EasingKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className="motion-chip"
                data-active={easing === key}
                onClick={() => setEasing(key)}
              >
                <span>{key}</span>
                <span className="motion-chip-sub">{EASINGS[key].desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stage */}
      <div className="motion-stage">
        <div className="motion-target" style={targetStyle}>
          <ElementComponent />
        </div>
      </div>

      {/* Code Output */}
      <div className="motion-code">
        <div className="motion-code-row">
          <span className="motion-code-key">CSS</span>
          <span className="motion-code-value">{cssOutput}</span>
        </div>
        <div className="motion-code-row">
          <span className="motion-code-key">Tailwind</span>
          <span className="motion-code-value">{tailwindOutput}</span>
        </div>
        <div className="motion-code-row">
          <span className="motion-code-key">Tokens</span>
          <span className="motion-code-value">--motion-duration-{duration} · --motion-ease-{easing}</span>
        </div>
      </div>

      {/* Recommended */}
      <div className="motion-controls" style={{ gap: "12px" }}>
        <div className="motion-label">Recommended Combinations</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
          {[
            { use: "Dialog / Sheet", combo: "slide-up · normal · enter" },
            { use: "Toast / Alert", combo: "fade · fast · standard" },
            { use: "Button Feedback", combo: "scale · instant · standard" },
            { use: "Rewards", combo: "scale-bounce · deliberate · bounce" },
            { use: "Page Transition", combo: "slide-left · normal · enter" },
            { use: "Dropdown", combo: "scale · fast · enter" },
          ].map((item) => (
            <div key={item.use}>
              <div className="text-xs font-semibold text-interaction mb-0.5">{item.use}</div>
              <div className="text-xs text-standard">{item.combo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Token Reference ─── */

export const TokenReference: Story = {
  render: () => (
    <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h2 className="text-xl font-semibold text-highlight">Motion Token Reference</h2>
        <p className="text-sm text-subtile mt-1">
          The complete proposed scale. Named, constrained tokens that replace arbitrary values.
        </p>
      </div>

      {/* Duration visual */}
      <div className="motion-controls">
        <div className="motion-label">Duration Scale</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {(Object.keys(DURATIONS) as DurationKey[]).map((key) => (
            <div key={key} style={{ display: "grid", gridTemplateColumns: "100px 60px 1fr 100px", alignItems: "center", gap: "12px" }}>
              <code className="text-xs text-interaction font-medium">{key}</code>
              <span className="text-xs text-highlight font-semibold">{DURATIONS[key].value}</span>
              <div style={{ height: "6px", borderRadius: "3px", background: "rgb(var(--bg-input))", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${(DURATIONS[key].ms / 800) * 100}%`,
                  background: "rgb(var(--text-interaction))",
                  borderRadius: "3px",
                  transition: "width 300ms ease",
                }} />
              </div>
              <span className="text-[11px] text-subtile text-right">{DURATIONS[key].desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Easings */}
      <div className="motion-controls">
        <div className="motion-label">Easing Curves</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {(Object.keys(EASINGS) as EasingKey[]).map((key) => (
            <div key={key} style={{ display: "grid", gridTemplateColumns: "80px 1fr 90px", alignItems: "center", gap: "12px" }}>
              <code className="text-xs text-interaction font-medium">{key}</code>
              <code className="text-[11px] text-standard" style={{ fontFamily: "monospace" }}>{EASINGS[key].value}</code>
              <span className="text-[11px] text-subtile text-right">{EASINGS[key].desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern guide */}
      <div className="motion-controls">
        <div className="motion-label">Pattern Guide — When to Use What</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { ctx: "Enter (Dialog, Sheet, Toast)", dur: "normal", ease: "enter", pat: "slide-up / fade" },
            { ctx: "Exit (Dismiss, Close)", dur: "fast", ease: "exit", pat: "fade / slide-down" },
            { ctx: "Feedback (Button, Toggle)", dur: "fast", ease: "standard", pat: "scale" },
            { ctx: "Loading (Skeleton, Spinner)", dur: "1.5s", ease: "linear", pat: "shimmer / rotate" },
            { ctx: "Celebration (Reward, Badge)", dur: "deliberate", ease: "bounce", pat: "scale-bounce" },
            { ctx: "Navigation (Page, Tab)", dur: "normal", ease: "enter", pat: "slide-left / slide-right" },
          ].map((row, i) => (
            <div key={row.ctx} style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 130px", gap: "12px", padding: "10px 0", borderTop: i > 0 ? "1px solid rgb(var(--border-subtile))" : "none" }}>
              <span className="text-xs text-highlight font-medium">{row.ctx}</span>
              <code className="text-[11px] text-interaction">{row.dur}</code>
              <code className="text-[11px] text-interaction">{row.ease}</code>
              <span className="text-[11px] text-subtile">{row.pat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind config snippet */}
      <div className="motion-controls">
        <div className="motion-label">Implementation (Tailwind Config)</div>
        <div className="motion-code" style={{ fontSize: "11px", lineHeight: "1.7" }}>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "rgb(var(--text-highlight))" }}>{`// tailwind.config.ts → theme.extend
transitionDuration: {
  instant: "100ms",
  fast: "200ms",
  normal: "300ms",
  slow: "500ms",
  deliberate: "800ms",
},
transitionTimingFunction: {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  enter: "cubic-bezier(0, 0, 0, 1)",
  exit: "cubic-bezier(0.2, 0, 1, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
},`}</pre>
        </div>
      </div>
    </div>
  ),
};
