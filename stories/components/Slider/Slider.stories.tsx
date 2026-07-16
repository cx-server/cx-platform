import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "@tipico/ui/Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: [],
  argTypes: {
    min: { control: "number", description: "Minimum value" },
    max: { control: "number", description: "Maximum value" },
    decimalPlaces: { control: "number", description: "Number of decimal places" },
    decimalSeparator: { control: "select", options: [".", ","], description: "Decimal separator" },
  },
  parameters: {
    docs: {
      description: {
        component: "Range slider with min/max labels and decimal formatting. Used for bet amount, limit, and threshold selection.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider id="slider-default" value={value} onChange={setValue} min={0} max={100} />;
  },
};

export const WithDecimals: Story = {
  render: () => {
    const [value, setValue] = useState(25.5);
    return (
      <Slider
        id="slider-decimals"
        value={value}
        onChange={setValue}
        min={1}
        max={100}
        decimalPlaces={2}
        decimalSeparator=","
        minLabel="Min "
        maxLabel="Max "
      />
    );
  },
};

export const BetAmount: Story = {
  render: () => {
    const [value, setValue] = useState(10);
    return (
      <div className="flex flex-col gap-2">
        <span className="text-highlight font-semibold text-lg">{value.toFixed(2)} €</span>
        <Slider
          id="slider-bet"
          value={value}
          onChange={setValue}
          min={1}
          max={200}
          decimalPlaces={0}
          minLabel=""
          maxLabel=""
        />
      </div>
    );
  },
};
