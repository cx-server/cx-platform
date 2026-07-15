import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Preloader",
  tags: [],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ position: "relative", height: "200px", background: "rgb(var(--bg-surface))" }}>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeContent: "center" }}>
        <svg className="icon-lg animate-spin text-interaction" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeDasharray="60" strokeDashoffset="15" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  ),
};

export const FullScreen: Story = {
  render: () => (
    <div style={{ position: "relative", height: "400px", background: "rgb(var(--bg-card))" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgb(0 0 0 / 0.5)", display: "grid", placeContent: "center" }}>
        <svg className="icon-lg animate-spin text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeDasharray="60" strokeDashoffset="15" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  ),
};
