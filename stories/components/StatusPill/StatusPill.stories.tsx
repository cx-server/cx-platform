import type { Meta, StoryObj } from "@storybook/react";
import { StatusPill } from "@tipico/ui/StatusPill";

const meta: Meta<typeof StatusPill> = {
  title: "Components/StatusPill",
  component: StatusPill,
  tags: [],
  argTypes: {
    backgroundColorIndicator: {
      control: "select",
      options: ["w", "l", "other"],
      description: "Color indicator: w=won (green), l=lost (red), other=neutral",
    },
    isUnderlined: {
      control: "boolean",
      description: "Show colored underline beneath the pill",
    },
  },
  args: {
    id: "status-pill",
    backgroundColorIndicator: "w",
    isUnderlined: false,
  },
  parameters: {
    docs: {
      description: {
        component: "Small circular status indicator with color coding for won/lost/neutral states. Used in betting history.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusPill>;

export const Won: Story = {
  args: { id: "pill-won", backgroundColorIndicator: "w", children: "W" },
};

export const Lost: Story = {
  args: { id: "pill-lost", backgroundColorIndicator: "l", children: "L" },
};

export const Neutral: Story = {
  args: { id: "pill-neutral", backgroundColorIndicator: "other", children: "—" },
};

export const WithUnderline: Story = {
  args: { id: "pill-underline", backgroundColorIndicator: "w", isUnderlined: true, children: "W" },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      <StatusPill id="sp-w" backgroundColorIndicator="w" isUnderlined>W</StatusPill>
      <StatusPill id="sp-l" backgroundColorIndicator="l" isUnderlined>L</StatusPill>
      <StatusPill id="sp-n" backgroundColorIndicator="other">—</StatusPill>
    </div>
  ),
};
