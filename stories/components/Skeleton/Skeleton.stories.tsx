import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@tipico/ui/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: [],
  args: { width: "100%", height: "20px", borderRadius: "8px" },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { args: { width: "200px", height: "20px" } };
export const Circle: Story = { args: { width: "48px", height: "48px", borderRadius: "50%" } };
export const Card: Story = { args: { width: "100%", height: "120px", borderRadius: "12px" } };

export const ContentPlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "320px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Skeleton width="40px" height="40px" borderRadius="50%" />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
          <Skeleton width="60%" height="14px" />
          <Skeleton width="40%" height="12px" />
        </div>
      </div>
      <Skeleton width="100%" height="16px" />
      <Skeleton width="90%" height="16px" />
      <Skeleton width="70%" height="16px" />
    </div>
  ),
};

export const ListPlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "8px 0" }}>
          <Skeleton width="32px" height="32px" borderRadius="8px" />
          <Skeleton width="60%" height="14px" />
          <Skeleton width="50px" height="14px" className="ml-auto" />
        </div>
      ))}
    </div>
  ),
};
