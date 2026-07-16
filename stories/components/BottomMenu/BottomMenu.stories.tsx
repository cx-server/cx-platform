import type { Meta, StoryObj } from "@storybook/react";
import { BottomMenu, BottomMenuItem } from "@tipico/ui/BottomMenu";

const meta: Meta<typeof BottomMenu> = {
  title: "Components/BottomMenu",
  component: BottomMenu,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: "Bottom navigation bar with selectable menu items. Used for primary app navigation.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomMenu>;

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2L2 9h3v7h4v-5h2v5h4V9h3L10 2z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <circle cx="8" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="12" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <circle cx="10" cy="6" r="4" />
      <path d="M3 18c0-4 3-6 7-6s7 2 7 6" />
    </svg>
  );
}

export const Default: Story = {
  render: () => (
    <BottomMenu>
      <BottomMenuItem id="home" iconComponent={<HomeIcon />} selected>
        <span className="text-xs">Home</span>
      </BottomMenuItem>
      <BottomMenuItem id="search" iconComponent={<SearchIcon />}>
        <span className="text-xs">Search</span>
      </BottomMenuItem>
      <BottomMenuItem id="profile" iconComponent={<UserIcon />}>
        <span className="text-xs">Profile</span>
      </BottomMenuItem>
    </BottomMenu>
  ),
};

export const FourItems: Story = {
  render: () => (
    <BottomMenu>
      <BottomMenuItem id="home" iconComponent={<HomeIcon />} selected>
        <span className="text-xs">Home</span>
      </BottomMenuItem>
      <BottomMenuItem id="search" iconComponent={<SearchIcon />}>
        <span className="text-xs">Search</span>
      </BottomMenuItem>
      <BottomMenuItem id="favorites" iconComponent={<HomeIcon />}>
        <span className="text-xs">Favorites</span>
      </BottomMenuItem>
      <BottomMenuItem id="profile" iconComponent={<UserIcon />}>
        <span className="text-xs">Profile</span>
      </BottomMenuItem>
    </BottomMenu>
  ),
};
