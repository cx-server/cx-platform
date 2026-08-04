import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListHeader } from "@tipico/ui/List";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: [],
  argTypes: {
    listSize: { control: "select", options: ["xs", "sm", "md", "lg"] },
    hoverable: { control: "boolean" },
    clickable: { control: "boolean" },
    itemsBorder: { control: "boolean" },
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

export const WithHeader: Story = {
  render: () => (
    <List id="list-header" itemsBorder listSize="sm">
      <ListHeader id="lh-1">Account</ListHeader>
      <ListItem id="li-profile">Profile</ListItem>
      <ListItem id="li-security">Security</ListItem>
      <ListItem id="li-limits">Limits</ListItem>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List id="list-clickable" clickable itemsBorder listSize="md">
      <ListItem id="li-c1">Deposit</ListItem>
      <ListItem id="li-c2">Withdrawal</ListItem>
      <ListItem id="li-c3">Transaction History</ListItem>
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
        <p className="text-subtile text-xs mb-2">sm</p>
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
