import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RollingNumbers } from "@tipico/ui/RollingNumbers";

const meta: Meta<typeof RollingNumbers> = {
  title: "Components/RollingNumbers",
  component: RollingNumbers,
  tags: [],
  argTypes: {
    value: { control: "text", description: "Numeric value to display" },
  },
  args: {
    id: "rolling",
    value: "1234",
  },
  parameters: {
    docs: {
      description: {
        component: "Animated rolling number display with per-digit transitions. Used for odds changes, balance updates, and counters.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RollingNumbers>;

export const Default: Story = {
  args: { id: "rolling-default", value: "42.50" },
  decorators: [
    (Story) => (
      <div className="text-2xl font-semibold text-highlight">
        <Story />
      </div>
    ),
  ],
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(100);
    return (
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold text-highlight">
          <RollingNumbers id="rolling-interactive" value={value.toFixed(2)} />
          <span className="ml-1 text-subtile">€</span>
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-card text-sm text-interaction border border-standard"
            onClick={() => setValue(v => v + Math.floor(Math.random() * 50))}
          >
            Add Random
          </button>
          <button
            className="px-3 py-1 rounded bg-card text-sm text-interaction border border-standard"
            onClick={() => setValue(0)}
          >
            Reset
          </button>
        </div>
      </div>
    );
  },
};

export const OddsChange: Story = {
  render: () => {
    const [odds, setOdds] = useState("2.45");
    return (
      <div className="flex flex-col gap-3">
        <span className="text-lg font-semibold text-highlight">
          <RollingNumbers id="rolling-odds" value={odds} />
        </span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-card text-sm border border-standard"
            onClick={() => setOdds((Math.random() * 4 + 1).toFixed(2))}
          >
            Change Odds
          </button>
        </div>
      </div>
    );
  },
};
