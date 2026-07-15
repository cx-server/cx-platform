import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tab } from "@tipico/ui/Tab";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: [],
  args: {
    id: "tab-demo",
    children: "Tab",
    selected: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: { id: "tab-default", children: "Sports" },
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
  render: function TabGroupDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["All", "Live", "Today", "Tomorrow"];
    return (
      <div style={{ display: "flex", gap: "0" }} role="tablist">
        {tabs.map((label, i) => (
          <Tab key={label} id={`tab-${i}`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>
        ))}
      </div>
    );
  },
};

export const WithBadges: Story = {
  render: function BadgeDemo() {
    const [active, setActive] = useState(0);
    return (
      <div style={{ display: "flex", gap: "0" }} role="tablist">
        <Tab id="t-open" selected={active === 0} badge="12" onClick={() => setActive(0)}>Open</Tab>
        <Tab id="t-settled" selected={active === 1} badge="48" onClick={() => setActive(1)}>Settled</Tab>
        <Tab id="t-cashout" selected={active === 2} badge="3" onClick={() => setActive(2)}>Cashout</Tab>
      </div>
    );
  },
};
