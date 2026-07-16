import type { Meta, StoryObj } from "@storybook/react";
import { InputEmphasis } from "@tipico/ui/InputEmphasis";

const meta: Meta<typeof InputEmphasis> = {
  title: "Components/InputEmphasis",
  component: InputEmphasis,
  tags: [],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "placeholder", "error", "disabled"],
      description: "Input state",
    },
    blinkingCursorPosition: {
      control: "select",
      options: [undefined, "left", "right"],
      description: "Blinking cursor position",
    },
  },
  args: {
    id: "input-emphasis",
    status: "default",
  },
  parameters: {
    docs: {
      description: {
        component: "Centered, emphasized numeric input display. Used for prominent value entry (e.g. cashout amount).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputEmphasis>;

export const Default: Story = {
  args: { id: "emphasis-default", currency: "€", label: "Amount" },
  render: (args) => (
    <InputEmphasis {...args}>
      <span>50.00</span>
    </InputEmphasis>
  ),
};

export const WithMultiplier: Story = {
  args: { id: "emphasis-multi", multiplier: "x", currency: "€", label: "Potential Win" },
  render: (args) => (
    <InputEmphasis {...args}>
      <span>125.50</span>
    </InputEmphasis>
  ),
};

export const WithCursor: Story = {
  args: { id: "emphasis-cursor", blinkingCursorPosition: "right", currency: "€", label: "Stake" },
  render: (args) => (
    <InputEmphasis {...args}>
      <span>10</span>
    </InputEmphasis>
  ),
};

export const ErrorState: Story = {
  args: { id: "emphasis-error", status: "error", currency: "€", label: "Stake", description: "Minimum stake is €1.00" },
  render: (args) => (
    <InputEmphasis {...args}>
      <span>0.50</span>
    </InputEmphasis>
  ),
};

export const Disabled: Story = {
  args: { id: "emphasis-disabled", status: "disabled", currency: "€", label: "Stake" },
  render: (args) => (
    <InputEmphasis {...args}>
      <span>10.00</span>
    </InputEmphasis>
  ),
};
