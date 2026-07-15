import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CoinConfetti } from "./CoinConfetti";
import { Button } from "@tipico/ui/Button";

const meta: Meta<typeof CoinConfetti> = {
  title: "Ready for Release/CoinConfetti",
  component: CoinConfetti,
  tags: [],
  argTypes: {
    mode: { control: "select", options: ["rain", "shot"] },
    intensity: { control: "select", options: ["light", "medium", "heavy"] },
    speed: { control: "select", options: ["short", "normal", "long"] },
    blur: { control: "boolean" },
    opacity: { control: { type: "range", min: 0.3, max: 1, step: 0.1 } },
  },
  args: {
    id: "confetti-demo",
    trigger: false,
    mode: "shot",
    intensity: "medium",
    speed: "normal",
    blur: false,
    opacity: 0.9,
  },
};

export default meta;
type Story = StoryObj<typeof CoinConfetti>;

export const Shot: Story = {
  render: function ShotDemo() {
    const [trigger, setTrigger] = useState(false);
    return (
      <CoinConfetti id="confetti-shot" trigger={trigger} mode="shot" intensity="medium">
        <div style={{ padding: "40px", textAlign: "center" }}>
          <Button id="trigger-shot" variant="success" autoWidth onClick={() => { setTrigger(true); setTimeout(() => setTrigger(false), 100); }}>
            Trigger Confetti 🎉
          </Button>
        </div>
      </CoinConfetti>
    );
  },
};

export const Rain: Story = {
  render: function RainDemo() {
    const [trigger, setTrigger] = useState(false);
    return (
      <CoinConfetti id="confetti-rain" trigger={trigger} mode="rain" intensity="heavy" speed="long">
        <div style={{ padding: "40px", textAlign: "center" }}>
          <Button id="trigger-rain" variant="brand" autoWidth onClick={() => { setTrigger(true); setTimeout(() => setTrigger(false), 100); }}>
            Make it Rain 💰
          </Button>
        </div>
      </CoinConfetti>
    );
  },
};

export const CashoutSuccess: Story = {
  render: function CashoutDemo() {
    const [trigger, setTrigger] = useState(false);
    return (
      <CoinConfetti id="confetti-cashout" trigger={trigger} mode="shot" intensity="heavy" speed="normal">
        <div className="bg-card rounded-card p-8 text-center" style={{ maxWidth: "320px", margin: "0 auto" }}>
          <p className="text-positive text-2xl font-bold mb-2">€42.50</p>
          <p className="text-standard text-sm mb-4">Cashout successful!</p>
          <Button id="cashout-btn" variant="positive" autoWidth onClick={() => { setTrigger(true); setTimeout(() => setTrigger(false), 100); }}>
            Simulate Cashout
          </Button>
        </div>
      </CoinConfetti>
    );
  },
};
