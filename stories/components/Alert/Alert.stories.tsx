import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@tipico/ui/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "info", "negative", "positive", "warning", "plain"],
    },
    showIcon: { control: "boolean" },
  },
  args: {
    id: "alert-demo",
    variant: "info",
    showIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { id: "alert-info", variant: "info", header: "Information", children: "Your deposit is being processed." },
};

export const Positive: Story = {
  args: { id: "alert-positive", variant: "positive", header: "Success", children: "Your bet has been placed." },
};

export const Negative: Story = {
  args: { id: "alert-negative", variant: "negative", header: "Error", children: "Payment could not be processed." },
};

export const Warning: Story = {
  args: { id: "alert-warning", variant: "warning", header: "Warning", children: "Your session expires in 5 minutes." },
};

export const Neutral: Story = {
  args: { id: "alert-neutral", variant: "neutral", header: "Note", children: "Maintenance scheduled for tonight." },
};

export const Plain: Story = {
  args: { id: "alert-plain", variant: "plain", children: "This is a plain alert without background color." },
};

export const WithoutIcon: Story = {
  args: { id: "alert-no-icon", variant: "info", showIcon: false, header: "No Icon", children: "Alert without an icon." },
};

export const WithClose: Story = {
  args: { id: "alert-close", variant: "info", header: "Dismissible", children: "Click the X to dismiss.", onCloseClick: () => {} },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "480px" }}>
      <Alert id="v-info" variant="info" header="Info">Informational message</Alert>
      <Alert id="v-positive" variant="positive" header="Success">Positive outcome</Alert>
      <Alert id="v-negative" variant="negative" header="Error">Something went wrong</Alert>
      <Alert id="v-warning" variant="warning" header="Warning">Proceed with caution</Alert>
      <Alert id="v-neutral" variant="neutral" header="Neutral">General information</Alert>
      <Alert id="v-plain" variant="plain">Plain alert</Alert>
    </div>
  ),
};
