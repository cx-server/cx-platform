import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedGradientBorder } from "./AnimatedGradientBorder";

const meta: Meta<typeof AnimatedGradientBorder> = {
  title: "Ready for Release/AnimatedGradientBorder",
  component: AnimatedGradientBorder,
  tags: [],
  argTypes: {
    color: {
      control: "select",
      options: ["info", "positive", "negative", "warning", "brand", "interaction"],
    },
    speed: {
      control: "select",
      options: ["slow", "normal", "fast"],
    },
    borderWidth: {
      control: "select",
      options: [1, 2],
    },
  },
  args: {
    id: "agb-demo",
    color: "interaction",
    speed: "normal",
    borderWidth: 2,
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedGradientBorder>;

export const Default: Story = {
  render: (args) => (
    <AnimatedGradientBorder {...args}>
      <div className="bg-card rounded-card p-6">
        <p className="text-highlight font-semibold mb-2">Featured Content</p>
        <p className="text-standard text-sm">This card has an animated gradient border that draws attention.</p>
      </div>
    </AnimatedGradientBorder>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
      {(["info", "positive", "negative", "warning", "brand", "interaction"] as const).map((color) => (
        <AnimatedGradientBorder key={color} id={`agb-${color}`} color={color} speed="normal" borderWidth={2}>
          <div className="bg-card rounded-card p-4">
            <p className="text-highlight font-medium text-sm">{color}</p>
          </div>
        </AnimatedGradientBorder>
      ))}
    </div>
  ),
};

export const Speeds: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      {(["slow", "normal", "fast"] as const).map((speed) => (
        <AnimatedGradientBorder key={speed} id={`agb-${speed}`} color="interaction" speed={speed} borderWidth={2}>
          <div className="bg-card rounded-card p-4">
            <p className="text-highlight font-medium text-sm">{speed}</p>
          </div>
        </AnimatedGradientBorder>
      ))}
    </div>
  ),
};

export const OddsCard: Story = {
  render: () => (
    <div style={{ width: "120px" }}>
      <AnimatedGradientBorder id="odds-boosted" color="positive" speed="fast" borderWidth={2} rounded="rounded-odds">
        <div className="bg-card rounded-odds p-3 text-center">
          <p className="text-positive font-bold text-lg">2.50</p>
          <p className="text-subtile text-xs">Boosted</p>
        </div>
      </AnimatedGradientBorder>
    </div>
  ),
};
