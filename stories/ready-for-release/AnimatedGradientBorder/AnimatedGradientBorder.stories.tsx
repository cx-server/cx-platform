import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedGradientBorder } from "./AnimatedGradientBorder";

const meta: Meta<typeof AnimatedGradientBorder> = {
  title: "Ready for Release/AnimatedGradientBorder",
  component: AnimatedGradientBorder,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Animated conic-gradient border using the background-origin technique. A transparent border reveals an animated conic-gradient underneath, while the content area is masked with a solid background. The highlight travels around the border smoothly.",
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["info", "positive", "negative", "warning", "brand"],
      description: "Gradient highlight color from design system tokens.",
    },
    speed: {
      control: "select",
      options: ["slow", "normal", "fast"],
      description: "Animation speed: slow (6s), normal (4s), fast (2s).",
    },
    borderWidth: {
      control: "select",
      options: [1, 2, 3],
      description: "Border thickness in pixels.",
    },
    radius: {
      control: { type: "range", min: 0, max: 24, step: 2 },
      description: "Border radius in pixels.",
    },
    bg: {
      control: "select",
      options: ["card", "surface", "white", "input"],
      description: "Background fill — must match the surface the component sits on.",
    },
  },
  args: {
    id: "animated-border-demo",
    color: "info",
    speed: "normal",
    borderWidth: 2,
    radius: 12,
    bg: "card",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-animated-border",
    className: "w-72",
    children: (
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 text-standard">Animated Border</h3>
        <p className="text-sm text-subtile">The highlight travels around the border continuously.</p>
      </div>
    ),
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["info", "positive", "negative", "warning", "brand"] as const).map((color) => (
        <AnimatedGradientBorder key={color} id={`border-${color}`} color={color} className="w-44">
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-standard capitalize">{color}</p>
          </div>
        </AnimatedGradientBorder>
      ))}
    </div>
  ),
};

export const AllSpeeds: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["slow", "normal", "fast"] as const).map((speed) => (
        <AnimatedGradientBorder key={speed} id={`border-${speed}`} color="info" speed={speed}>
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-standard capitalize">{speed}</p>
          </div>
        </AnimatedGradientBorder>
      ))}
    </div>
  ),
};

export const ThickBorder: Story = {
  args: {
    id: "thick-border",
    color: "brand",
    borderWidth: 3,
    speed: "fast",
    radius: 16,
    className: "w-72",
    children: (
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 text-standard">3px Border</h3>
        <p className="text-sm text-subtile">Thicker border for prominent highlights.</p>
      </div>
    ),
  },
};

export const OnSurface: Story = {
  parameters: {
    backgrounds: { default: "Tipico Surface" },
  },
  args: {
    id: "surface-border",
    color: "positive",
    bg: "surface",
    className: "w-72",
    children: (
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 text-standard">On Surface</h3>
        <p className="text-sm text-subtile">Uses bg="surface" to match the page background.</p>
      </div>
    ),
  },
};

export const PromotionCard: Story = {
  render: () => (
    <AnimatedGradientBorder id="promo-card" color="brand" speed="normal" borderWidth={2} radius={16} className="w-80">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-2xl font-bold text-standard mb-0.5">17,479</div>
            <div className="text-sm text-subtile">Monthly visits</div>
          </div>
          <span className="text-xs font-medium text-[rgb(var(--signals-bg-positive))] bg-[rgb(var(--signals-bg-positive)/0.1)] px-2 py-1 rounded-full">
            +48%
          </span>
        </div>
        <div className="h-px bg-[rgb(var(--border-standard))] my-3" />
        <p className="text-xs text-subtile">Updated 2 hours ago</p>
      </div>
    </AnimatedGradientBorder>
  ),
};
