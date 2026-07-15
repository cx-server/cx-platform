import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "@tipico/ui/Pill";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  component: Pill,
  tags: [],
  argTypes: {
    variant: { control: "select", options: ["neutral", "info", "negative", "positive", "warning"] },
    inactive: { control: "boolean" },
  },
  args: { id: "pill-demo", variant: "neutral", inactive: false },
};
export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = { args: { id: "pill-default", children: "Live" } };
export const Info: Story = { args: { id: "pill-info", variant: "info", children: "New" } };
export const Positive: Story = { args: { id: "pill-positive", variant: "positive", children: "Won" } };
export const Negative: Story = { args: { id: "pill-negative", variant: "negative", children: "Lost" } };
export const Warning: Story = { args: { id: "pill-warning", variant: "warning", children: "Pending" } };
export const Inactive: Story = { args: { id: "pill-inactive", variant: "neutral", inactive: true, children: "Expired" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Pill id="p-neutral" variant="neutral">Neutral</Pill>
      <Pill id="p-info" variant="info">Info</Pill>
      <Pill id="p-positive" variant="positive">Positive</Pill>
      <Pill id="p-negative" variant="negative">Negative</Pill>
      <Pill id="p-warning" variant="warning">Warning</Pill>
    </div>
  ),
};
