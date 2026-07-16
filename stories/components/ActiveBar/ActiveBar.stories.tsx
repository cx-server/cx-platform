import type { Meta, StoryObj } from "@storybook/react";
import { ActiveBar, ActiveBarItem } from "@tipico/ui/ActiveBar";

const meta: Meta<typeof ActiveBar> = {
  title: "Components/ActiveBar",
  component: ActiveBar,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: "Horizontal bar with clickable items separated by vertical dividers. Used for inline action groups.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActiveBar>;

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z" />
    </svg>
  );
}

export const Default: Story = {
  render: () => (
    <ActiveBar id="active-bar-default">
      <ActiveBarItem id="item-1" itemTitle="Action 1" />
      <ActiveBarItem id="item-2" itemTitle="Action 2" />
      <ActiveBarItem id="item-3" itemTitle="Action 3" />
    </ActiveBar>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ActiveBar id="active-bar-icons">
      <ActiveBarItem id="item-1" icon={<StarIcon />} itemTitle="Favorites" />
      <ActiveBarItem id="item-2" icon={<StarIcon />} itemTitle="Recent" />
      <ActiveBarItem id="item-3" icon={<StarIcon />} itemTitle="Popular" />
    </ActiveBar>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <ActiveBar id="active-bar-icon-only">
      <ActiveBarItem id="item-1" icon={<StarIcon />} />
      <ActiveBarItem id="item-2" icon={<StarIcon />} />
      <ActiveBarItem id="item-3" icon={<StarIcon />} />
    </ActiveBar>
  ),
};
