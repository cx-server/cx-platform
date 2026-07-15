import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@tipico/ui/Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: [],
  argTypes: {
    variant: { control: "select", options: ["brand", "card", "positive"] },
  },
  args: { variant: "brand" },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Brand: Story = { args: { variant: "brand", children: "NEW" } };
export const Card: Story = { args: { variant: "card", children: "Popular" } };
export const Positive: Story = { args: { variant: "positive", children: "LIVE" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Tag variant="brand">NEW</Tag>
      <Tag variant="card">Popular</Tag>
      <Tag variant="positive">LIVE</Tag>
    </div>
  ),
};

export const OnCard: Story = {
  render: () => (
    <div className="bg-card rounded-card p-4 relative" style={{ width: "200px" }}>
      <div style={{ position: "absolute", top: "8px", right: "8px" }}>
        <Tag variant="positive">LIVE</Tag>
      </div>
      <p className="text-highlight font-medium mt-6">Bayern vs Dortmund</p>
      <p className="text-subtile text-xs">Bundesliga</p>
    </div>
  ),
};
