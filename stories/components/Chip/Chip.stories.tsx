import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@tipico/ui/Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: [],
  argTypes: {
    variant: { control: "select", options: ["primary", "accent", "positive", "warning", "negative"] },
    selected: { control: "boolean" },
    closeable: { control: "boolean" },
  },
  args: { id: "chip-demo", variant: "primary", selected: false, closeable: false },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { id: "chip-default", children: "Football" } };
export const Selected: Story = { args: { id: "chip-selected", children: "Live", selected: true } };
export const Closeable: Story = { args: { id: "chip-closeable", children: "Filter", closeable: true, onCloseClick: () => {} } };
export const Accent: Story = { args: { id: "chip-accent", variant: "accent", children: "Promoted" } };
export const Positive: Story = { args: { id: "chip-positive", variant: "positive", children: "Active" } };
export const Warning: Story = { args: { id: "chip-warning", variant: "warning", children: "Pending" } };
export const Negative: Story = { args: { id: "chip-negative", variant: "negative", children: "Expired" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Chip id="c-primary" variant="primary">Primary</Chip>
      <Chip id="c-accent" variant="accent">Accent</Chip>
      <Chip id="c-positive" variant="positive">Positive</Chip>
      <Chip id="c-warning" variant="warning">Warning</Chip>
      <Chip id="c-negative" variant="negative">Negative</Chip>
      <Chip id="c-selected" variant="primary" selected>Selected</Chip>
    </div>
  ),
};
