import type { Meta, StoryObj } from "@storybook/react";
import { RoundedIcon } from "@tipico/ui/RoundedIcon";

const meta: Meta<typeof RoundedIcon> = {
  title: "Components/RoundedIcon",
  component: RoundedIcon,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: "Icon wrapped in a circular border container. Used for list item leading icons and action indicators.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoundedIcon>;

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="8" r="1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="5 12 10 17 19 7" />
    </svg>
  );
}

export const Default: Story = {
  render: () => (
    <RoundedIcon id="rounded-icon-default">
      <ChevronRight />
    </RoundedIcon>
  ),
};

export const Info: Story = {
  render: () => (
    <RoundedIcon id="rounded-icon-info">
      <InfoIcon />
    </RoundedIcon>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-3">
      <RoundedIcon id="ri-1"><ChevronRight /></RoundedIcon>
      <RoundedIcon id="ri-2"><InfoIcon /></RoundedIcon>
      <RoundedIcon id="ri-3"><CheckIcon /></RoundedIcon>
    </div>
  ),
};
