import type { Meta, StoryObj } from "@storybook/react";

// StatusIcon uses multiple SVG imports that require specific icon files.
// We render the states manually to avoid import resolution issues.

const meta: Meta = {
  title: "Components/StatusIcon",
  tags: [],
  decorators: [(Story) => <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj;

function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
      <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {label === "Won" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>}
        {label === "Lost" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>}
        {label === "Live" && <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "white", animation: "pulse 1.5s infinite" }} />}
      </div>
      <span className="text-xs text-subtile">{label}</span>
    </div>
  );
}

export const AllStates: Story = {
  render: () => (
    <>
      <StatusDot color="rgb(var(--border-highlight))" label="Open" />
      <StatusDot color="rgb(var(--signals-bg-positive))" label="Won" />
      <StatusDot color="rgb(var(--signals-bg-negative))" label="Lost" />
      <StatusDot color="rgb(var(--signals-bg-warning))" label="Canceled" />
      <StatusDot color="rgb(var(--global-styling-branding-interaction))" label="Live" />
    </>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <StatusDot color="rgb(var(--signals-bg-positive))" label="" />
        <div><p className="text-highlight text-sm font-medium">Bayern 2 – 1 Dortmund</p><p className="text-subtile text-xs">Won · €15.00</p></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <StatusDot color="rgb(var(--signals-bg-negative))" label="" />
        <div><p className="text-highlight text-sm font-medium">Arsenal 0 – 1 Chelsea</p><p className="text-subtile text-xs">Lost · €10.00</p></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <StatusDot color="rgb(var(--global-styling-branding-interaction))" label="" />
        <div><p className="text-highlight text-sm font-medium">Real Madrid vs Barcelona</p><p className="text-subtile text-xs">Live · 67'</p></div>
      </div>
    </div>
  ),
};
