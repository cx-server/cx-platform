import type { Meta, StoryObj } from "@storybook/react";
import { List } from "@tipico/ui/List";

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
      <li>Account Settings</li>
      <li>Payment Methods</li>
      <li>Notifications</li>
      <li>Help & Support</li>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List id="list-clickable" clickable itemsBorder listSize="md">
      <li>Deposit</li>
      <li>Withdrawal</li>
      <li>Transaction History</li>
    </List>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div><p className="text-subtile text-xs mb-2">xs</p><List id="l-xs" listSize="xs" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
      <div><p className="text-subtile text-xs mb-2">sm</p><List id="l-sm" listSize="sm" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
      <div><p className="text-subtile text-xs mb-2">md</p><List id="l-md" listSize="md" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
      <div><p className="text-subtile text-xs mb-2">lg</p><List id="l-lg" listSize="lg" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
    </div>
  ),
};
