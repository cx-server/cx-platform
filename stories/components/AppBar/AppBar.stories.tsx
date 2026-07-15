import type { Meta, StoryObj } from "@storybook/react";
import { AppBar, AppBarBackButton, AppBarCloseButton, AppBarPageTitle } from "@tipico/ui/AppBar";

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
      <AppBarBackButton id="back" onClick={() => {}} />
      <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
    </AppBar>
  ),
};

export const WithClose: Story = {
  render: () => (
    <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}} />
      <AppBarPageTitle id="title">Settings</AppBarPageTitle>
      <AppBarCloseButton id="close" onClick={() => {}} />
    </AppBar>
  ),
};

export const Transparent: Story = {
  render: () => (
    <div style={{ background: "linear-gradient(180deg, #c8102e 0%, #121214 100%)", padding: "0 0 40px" }}>
      <AppBar hasBackground={false}>
        <AppBarBackButton id="back" onClick={() => {}} />
        <AppBarPageTitle id="title">Profile</AppBarPageTitle>
      </AppBar>
    </div>
  ),
};

export const WithoutBack: Story = {
  render: () => (
    <AppBar hasBackground>
      <AppBarPageTitle id="title">Home</AppBarPageTitle>
    </AppBar>
  ),
};
