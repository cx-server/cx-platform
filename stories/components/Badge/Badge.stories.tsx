import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@tipico/ui/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: [],
  argTypes: {
    animate: { control: "boolean" },
  },
  args: { id: "badge-demo", animate: false },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { id: "badge-default", children: "3" } };
export const Animated: Story = { args: { id: "badge-animated", children: "1", animate: true } };
export const LargeNumber: Story = { args: { id: "badge-large", children: "99+" } };
export const OnButton: Story = {
  render: () => (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button className="btn btn-primary h-10 py-2 text-sm w-fit px-3 gap-2 min-w-20">Notifications</button>
      <Badge id="badge-on-btn" className="absolute -top-1 -right-1">5</Badge>
    </div>
  ),
};
