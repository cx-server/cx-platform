import type { Meta, StoryObj } from "@storybook/react";
import {
  AppBar,
  AppBarBackButton,
  AppBarCloseButton,
  AppBarIconButton,
  AppBarPageTitle,
  AppBarPill,
  TipicoLogo,
} from "@tipico/ui/AppBar";
import { Icon } from "@tipico/ui/Icon";
import { RoundedIcon } from "@tipico/ui/RoundedIcon";
import ChevronLeftIcon from "@tipico/ui/assets/icons/chevron-left-icon.svg";
import CloseIcon from "@tipico/ui/assets/icons/close-icon.svg?react";
import NotificationsIcon from "@tipico/ui/assets/icons/notifications.svg?react";
import UserIcon from "@tipico/ui/assets/icons/user.svg?react";

const meta: Meta<typeof AppBar> = {
  title: "Components/AppBar",
  component: AppBar,
  subcomponents: {
    AppBarBackButton: AppBarBackButton as any,
    AppBarIconButton: AppBarIconButton as any,
    AppBarPageTitle: AppBarPageTitle as any,
    AppBarPill: AppBarPill as any,
  },
  args: {
    hasBackground: true,
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  name: "Logged In (Home)",
  render: () => (
    <AppBar hasBackground>
      <div className="flex-grow pl-2">
        <TipicoLogo />
      </div>
      <AppBarPill id="balance" onClick={() => {}}>
        214,98€ <strong>+</strong>
      </AppBarPill>
      <AppBarIconButton id="notifications">
        <NotificationsIcon />
      </AppBarIconButton>
      <AppBarIconButton id="account">
        <UserIcon />
      </AppBarIconButton>
    </AppBar>
  ),
};

export const LoggedOut: Story = {
  render: () => (
    <AppBar hasBackground>
      <div className="flex-grow pl-2">
        <TipicoLogo />
      </div>
      <AppBarPill id="login" onClick={() => {}}>
        Login
      </AppBarPill>
    </AppBar>
  ),
};

export const WithBackAndTitle: Story = {
  name: "Back + Title (centered)",
  render: () => (
    <AppBar hasBackground>
      <div className="w-full flex flex-row items-center pb-2 border-b border-subtile">
        <AppBarBackButton id="back">
          <Icon href={ChevronLeftIcon} className="icon-md" />
        </AppBarBackButton>
        <AppBarPageTitle className="flex-1 mx-auto">Personal Details</AppBarPageTitle>
      </div>
    </AppBar>
  ),
};

export const WithBackTitleAndClose: Story = {
  name: "Back + Title + Close",
  render: () => (
    <AppBar hasBackground>
      <div className="w-full flex flex-row items-center pb-2 border-b border-subtile">
        <AppBarBackButton id="back">
          <Icon href={ChevronLeftIcon} className="icon-md" />
        </AppBarBackButton>
        <AppBarPageTitle className="flex-1 mx-auto">Settings</AppBarPageTitle>
        <AppBarIconButton id="close">
          <RoundedIcon id="close-icon">
            <CloseIcon />
          </RoundedIcon>
        </AppBarIconButton>
      </div>
    </AppBar>
  ),
};

export const TitleLeftAligned: Story = {
  name: "Back + Title (left)",
  render: () => (
    <AppBar hasBackground>
      <div className="w-full flex flex-row items-center pb-2 border-b border-subtile">
        <AppBarBackButton id="back">
          <Icon href={ChevronLeftIcon} className="icon-md" />
        </AppBarBackButton>
        <AppBarPageTitle className="flex-1" textLeft textSmall>
          Transaction History
        </AppBarPageTitle>
      </div>
    </AppBar>
  ),
};

export const Transparent: Story = {
  name: "Transparent (over gradient)",
  render: () => (
    <div style={{ background: "linear-gradient(180deg, rgb(var(--colors-red-500)) 0%, rgb(var(--base-neutrals-950)) 100%)", padding: "0 0 60px" }}>
      <AppBar hasBackground={false}>
        <div className="w-full flex flex-row items-center">
          <AppBarBackButton id="back">
            <Icon href={ChevronLeftIcon} className="icon-md" />
          </AppBarBackButton>
          <AppBarPageTitle className="flex-1 mx-auto">Profile</AppBarPageTitle>
        </div>
      </AppBar>
    </div>
  ),
};

export const LogoAndClose: Story = {
  name: "Logo + Close",
  render: () => (
    <AppBar hasBackground>
      <div className="w-full flex flex-row items-center justify-between pb-2 border-b border-subtile">
        <TipicoLogo />
        <AppBarIconButton id="close">
          <RoundedIcon id="close-icon">
            <CloseIcon />
          </RoundedIcon>
        </AppBarIconButton>
      </div>
    </AppBar>
  ),
};
