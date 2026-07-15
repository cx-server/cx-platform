import type { Meta, StoryObj } from "@storybook/react";
import { AppBar, AppBarBackButton, AppBarCloseButton, AppBarPageTitle } from "@tipico/ui/AppBar";

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

const meta: Meta<typeof AppBar> = {
  title: "Components/AppBar",
  component: AppBar,
  tags: [],
  args: {
    hasBackground: true,
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  render: () => (
    <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}}>
        <ChevronLeft />
      </AppBarBackButton>
      <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
    </AppBar>
  ),
};

export const WithClose: Story = {
  render: () => (
    <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}}>
        <ChevronLeft />
      </AppBarBackButton>
      <AppBarPageTitle id="title">Settings</AppBarPageTitle>
      <AppBarCloseButton id="close" onClick={() => {}} />
    </AppBar>
  ),
};

export const Transparent: Story = {
  render: () => (
    <div style={{ background: "linear-gradient(180deg, #c8102e 0%, #121214 100%)", padding: "0 0 60px" }}>
      <AppBar hasBackground={false}>
        <AppBarBackButton id="back" onClick={() => {}}>
          <ChevronLeft />
        </AppBarBackButton>
        <AppBarPageTitle id="title">Profile</AppBarPageTitle>
      </AppBar>
    </div>
  ),
};

export const WithoutBack: Story = {
  render: () => (
    <AppBar hasBackground>
      <AppBarPageTitle id="title" textLeft>Home</AppBarPageTitle>
    </AppBar>
  ),
};
