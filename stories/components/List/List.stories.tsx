import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListHeader } from "@tipico/ui/List";

// Placeholder icons
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10H21" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/></svg>
);
const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: [],
  argTypes: {
    listSize: { control: "select", options: ["xs", "sm", "md", "lg"] },
    hoverable: { control: "boolean" },
    clickable: { control: "boolean" },
    itemsBorder: { control: "boolean" },
    showChain: { control: "boolean" },
  },
  args: { id: "list-demo", listSize: "sm", hoverable: false, clickable: false, itemsBorder: true },
  decorators: [(Story) => <div style={{ maxWidth: "360px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem id="li-1">Account Settings</ListItem>
      <ListItem id="li-2">Payment Methods</ListItem>
      <ListItem id="li-3">Notifications</ListItem>
      <ListItem id="li-4">Help & Support</ListItem>
    </List>
  ),
};

export const WithSubtitles: Story = {
  render: () => (
    <List id="list-subtitles" itemsBorder listSize="md">
      <ListItem id="li-dep" subtitle="Visa, PayPal, Apple Pay">Deposit</ListItem>
      <ListItem id="li-wd" subtitle="Bank transfer, PayPal">Withdrawal</ListItem>
      <ListItem id="li-hist" subtitle="Last 30 days">Transaction History</ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  name: "With Icons & Right Component",
  render: () => (
    <List id="list-icons" itemsBorder listSize="md" clickable>
      <ListItem id="li-profile" iconComponent={<UserIcon />} rightComponent={<ChevronRight />}>Profile</ListItem>
      <ListItem id="li-wallet" iconComponent={<WalletIcon />} rightComponent={<ChevronRight />} subtitle="3 methods">Payment</ListItem>
      <ListItem id="li-security" iconComponent={<LockIcon />} rightComponent={<ChevronRight />}>Security</ListItem>
    </List>
  ),
};

export const WithInfo: Story = {
  name: "With Info Text",
  render: () => (
    <List id="list-info" itemsBorder listSize="md">
      <ListItem id="li-bal" info="€ 142.50">Balance</ListItem>
      <ListItem id="li-bonus" info="€ 10.00" subtitle="Expires in 3 days">Bonus</ListItem>
      <ListItem id="li-free" info="2 left">Free Bets</ListItem>
    </List>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <List id="list-header" itemsBorder listSize="sm">
      <ListHeader id="lh-1" subtitle="Manage your profile">Account</ListHeader>
      <ListItem id="li-profile">Profile</ListItem>
      <ListItem id="li-security">Security</ListItem>
      <ListItem id="li-limits">Limits</ListItem>
    </List>
  ),
};

export const Selected: Story = {
  name: "Selected State",
  render: () => (
    <List id="list-selected" itemsBorder listSize="md" clickable>
      <ListItem id="li-s1">All Bets</ListItem>
      <ListItem id="li-s2" selected>Open Bets</ListItem>
      <ListItem id="li-s3">Settled</ListItem>
      <ListItem id="li-s4">Cashed Out</ListItem>
    </List>
  ),
};

export const Chain: Story = {
  name: "Chain (Timeline)",
  render: () => (
    <List id="list-chain" showChain listSize="md">
      <ListItem id="li-ch1" chainStatus="info" subtitle="2026-08-05, 14:22">Bet placed</ListItem>
      <ListItem id="li-ch2" chainStatus="info" subtitle="2026-08-05, 14:22">Confirmed</ListItem>
      <ListItem id="li-ch3" chainStatus="warning" subtitle="2026-08-05, 15:10">In Progress</ListItem>
      <ListItem id="li-ch4" chainStatus="default" subtitle="Pending">Result</ListItem>
    </List>
  ),
};

export const ChainError: Story = {
  name: "Chain with Error",
  render: () => (
    <List id="list-chain-err" showChain listSize="md">
      <ListItem id="li-ce1" chainStatus="info" subtitle="Step 1 of 3">Identity verified</ListItem>
      <ListItem id="li-ce2" chainStatus="info" subtitle="Step 2 of 3">Address confirmed</ListItem>
      <ListItem id="li-ce3" chainStatus="error" subtitle="Document rejected">Upload ID</ListItem>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List id="list-clickable" clickable itemsBorder listSize="md">
      <ListItem id="li-c1" rightComponent={<ChevronRight />}>Deposit</ListItem>
      <ListItem id="li-c2" rightComponent={<ChevronRight />}>Withdrawal</ListItem>
      <ListItem id="li-c3" rightComponent={<ChevronRight />}>Transaction History</ListItem>
    </List>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p className="text-subtile text-xs mb-2">xs</p>
        <List id="l-xs" listSize="xs" itemsBorder>
          <ListItem id="xs-1">Item 1</ListItem>
          <ListItem id="xs-2">Item 2</ListItem>
        </List>
      </div>
      <div>
        <p className="text-subtile text-xs mb-2">sm (default)</p>
        <List id="l-sm" listSize="sm" itemsBorder>
          <ListItem id="sm-1">Item 1</ListItem>
          <ListItem id="sm-2">Item 2</ListItem>
        </List>
      </div>
      <div>
        <p className="text-subtile text-xs mb-2">md</p>
        <List id="l-md" listSize="md" itemsBorder>
          <ListItem id="md-1">Item 1</ListItem>
          <ListItem id="md-2">Item 2</ListItem>
        </List>
      </div>
      <div>
        <p className="text-subtile text-xs mb-2">lg</p>
        <List id="l-lg" listSize="lg" itemsBorder>
          <ListItem id="lg-1">Item 1</ListItem>
          <ListItem id="lg-2">Item 2</ListItem>
        </List>
      </div>
    </div>
  ),
};
