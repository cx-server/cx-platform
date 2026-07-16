import type { Meta, StoryObj } from "@storybook/react";
import { InputBox } from "@tipico/ui/InputBox";

const meta: Meta<typeof InputBox> = {
  title: "Components/InputBox",
  component: InputBox,
  tags: [],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "selected", "typing", "disabled", "error", "empty"],
      description: "Input state",
    },
    isCentered: {
      control: "boolean",
      description: "Center content horizontally",
    },
    currencyPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of currency symbol",
    },
  },
  args: {
    id: "input-box",
    status: "default",
    isCentered: true,
  },
  parameters: {
    docs: {
      description: {
        component: "Numeric input display box with label, currency, multiplier, and blinking cursor support. Used for bet amount entry.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: { id: "inputbox-default" },
  render: (args) => (
    <InputBox {...args} label="Stake">
      <span>10.00</span>
    </InputBox>
  ),
};

export const WithCurrency: Story = {
  args: { id: "inputbox-currency", currency: "€" },
  render: (args) => (
    <InputBox {...args} label="Amount">
      <span>25.00</span>
    </InputBox>
  ),
};

export const Typing: Story = {
  args: { id: "inputbox-typing", status: "typing", blinkingCursorPosition: "right", currency: "€" },
  render: (args) => (
    <InputBox {...args} label="Stake">
      <span>10</span>
    </InputBox>
  ),
};

export const Error: Story = {
  args: { id: "inputbox-error", status: "error" },
  render: (args) => (
    <InputBox {...args} label="Stake">
      <span>0.00</span>
    </InputBox>
  ),
};

export const Empty: Story = {
  args: { id: "inputbox-empty", status: "empty", blinkingCursorPosition: "left", currency: "€" },
  render: (args) => (
    <InputBox {...args} label="Enter amount">
      <span></span>
    </InputBox>
  ),
};
