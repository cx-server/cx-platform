import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@tipico/ui/Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "accent", "negative", "positive", "warning"],
      description: "Color variant",
    },
    inactive: {
      control: "boolean",
      description: "Dimmed/inactive state",
    },
  },
  args: {
    id: "label",
    variant: "neutral",
    inactive: false,
    children: "Label",
  },
  parameters: {
    docs: {
      description: {
        component: "Colored tag/label component with optional left and right icons. Used for categorization and status indicators.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Neutral: Story = {
  args: { id: "label-neutral", variant: "neutral", children: "Default" },
};

export const Accent: Story = {
  args: { id: "label-accent", variant: "accent", children: "Featured" },
};

export const Positive: Story = {
  args: { id: "label-positive", variant: "positive", children: "Won" },
};

export const Negative: Story = {
  args: { id: "label-negative", variant: "negative", children: "Lost" },
};

export const Warning: Story = {
  args: { id: "label-warning", variant: "warning", children: "Pending" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Label id="v-neutral" variant="neutral">Neutral</Label>
      <Label id="v-accent" variant="accent">Accent</Label>
      <Label id="v-positive" variant="positive">Positive</Label>
      <Label id="v-negative" variant="negative">Negative</Label>
      <Label id="v-warning" variant="warning">Warning</Label>
    </div>
  ),
};

export const Inactive: Story = {
  args: { id: "label-inactive", variant: "accent", inactive: true, children: "Inactive" },
};
