import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tab } from "@tipico/ui/Tab";
import { TabMenu } from "@tipico/ui/Tab";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: [],
  args: {
    id: "tab-demo",
    children: "Tab",
    selected: false,
  },
  decorators: [
    (Story) => (
      <TabMenu id="tab-menu-decorator">
        <Story />
      </TabMenu>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: { id: "tab-default", children: "Sports", selected: true },
};

export const Selected: Story = {
  args: { id: "tab-selected", children: "Casino", selected: true },
};

export const WithBadge: Story = {
  args: { id: "tab-badge", children: "Bets", badge: "3", selected: true },
};

export const Disabled: Story = {
  args: { id: "tab-disabled", children: "Promotions", disabled: true },
};

export const TabGroup: Story = {
  decorators: [], // Remove the default TabMenu decorator — we provide our own
  render: function TabGroupDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["All", "Live", "Today", "Tomorrow"];
    return (
      <TabMenu id="tab-group-demo">
        {tabs.map((label, i) => (
          <Tab key={label} id={`tab-${i}`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>
        ))}
      </TabMenu>
    );
  },
};

export const WithBadges: Story = {
  decorators: [],
  render: function BadgeDemo() {
    const [active, setActive] = useState(0);
    return (
      <TabMenu id="tab-badges-demo">
        <Tab id="t-open" selected={active === 0} badge="12" onClick={() => setActive(0)}>Open</Tab>
        <Tab id="t-settled" selected={active === 1} badge="48" onClick={() => setActive(1)}>Settled</Tab>
        <Tab id="t-cashout" selected={active === 2} badge="3" onClick={() => setActive(2)}>Cashout</Tab>
      </TabMenu>
    );
  },
};

export const SmallSize: Story = {
  decorators: [],
  render: function SmallDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["Sports", "Casino", "Live"];
    return (
      <TabMenu id="tab-sm-demo" size="sm">
        {tabs.map((label, i) => (
          <Tab key={label} id={`tab-sm-${i}`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>
        ))}
      </TabMenu>
    );
  },
};

export const Tabbars: Story = {
  decorators: [],
  render: function TabbarsDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["All", "Kombi", "System", "Single"];
    return (
      <TabMenu id="tab-bars-demo" variant="tabbars">
        {tabs.map((label, i) => (
          <Tab key={label} id={`tabbar-${i}`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>
        ))}
      </TabMenu>
    );
  },
};
