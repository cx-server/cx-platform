import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@tipico/ui/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: [],
  argTypes: {
    status: { control: "select", options: ["neutral", "info", "negative", "positive", "warning"] },
    show: { control: "boolean" },
  },
  args: { id: "toast-demo", status: "neutral", show: true },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Neutral: Story = { args: { id: "toast-neutral", status: "neutral", children: "Something happened." } };
export const Info: Story = { args: { id: "toast-info", status: "info", children: "Your bet has been placed." } };
export const Positive: Story = { args: { id: "toast-positive", status: "positive", children: "Deposit successful!" } };
export const Negative: Story = { args: { id: "toast-negative", status: "negative", children: "Payment failed." } };
export const Warning: Story = { args: { id: "toast-warning", status: "warning", children: "Session expiring soon." } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "360px" }}>
      <Toast id="t-neutral" status="neutral" show>Neutral message</Toast>
      <Toast id="t-info" status="info" show>Info message</Toast>
      <Toast id="t-positive" status="positive" show>Success message</Toast>
      <Toast id="t-negative" status="negative" show>Error message</Toast>
      <Toast id="t-warning" status="warning" show>Warning message</Toast>
    </div>
  ),
};
