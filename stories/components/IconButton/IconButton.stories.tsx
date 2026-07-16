import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@tipico/ui/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["bare", "rounded"],
      description: "Visual style — bare (no border) or rounded (circle with border)",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      description: "Button size",
    },
    borderColor: {
      control: "select",
      options: ["default", "inverse"],
      description: "Border color (only for rounded variant)",
    },
    badge: {
      control: "boolean",
      description: "Show notification badge",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  args: {
    id: "icon-button",
    variant: "bare",
    size: "md",
    badge: false,
  },
  parameters: {
    docs: {
      description: {
        component: "Button that only contains an icon. Supports bare and rounded variants with optional badge.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a6 6 0 00-6 6v4l-2 2v1h16v-1l-2-2V8a6 6 0 00-6-6zm0 18a2 2 0 002-2h-4a2 2 0 002 2z" />
    </svg>
  );
}

export const Bare: Story = {
  args: { variant: "bare", id: "icon-btn-bare" },
  render: (args) => (
    <IconButton {...args}>
      <CloseIcon />
    </IconButton>
  ),
};

export const Rounded: Story = {
  args: { variant: "rounded", id: "icon-btn-rounded" },
  render: (args) => (
    <IconButton {...args}>
      <CloseIcon />
    </IconButton>
  ),
};

export const WithBadge: Story = {
  args: { variant: "bare", badge: true, badgeContent: "3", id: "icon-btn-badge" },
  render: (args) => (
    <IconButton {...args}>
      <BellIcon />
    </IconButton>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton id="xs" size="xs" variant="rounded"><CloseIcon /></IconButton>
      <IconButton id="sm" size="sm" variant="rounded"><CloseIcon /></IconButton>
      <IconButton id="md" size="md" variant="rounded"><CloseIcon /></IconButton>
      <IconButton id="lg" size="lg" variant="rounded"><CloseIcon /></IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: { variant: "rounded", disabled: true, id: "icon-btn-disabled" },
  render: (args) => (
    <IconButton {...args}>
      <CloseIcon />
    </IconButton>
  ),
};
