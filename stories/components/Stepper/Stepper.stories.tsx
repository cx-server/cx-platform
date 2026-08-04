import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@tipico/ui/Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: [],
  argTypes: {
    showConnector: {
      control: "boolean",
      description: "Show connector lines between steps",
    },
  },
  args: {
    id: "stepper",
    showConnector: true,
  },
  parameters: {
    docs: {
      description: {
        component: "Vertical progress stepper with configurable step indicators (text, point, icon), status colors, and connector lines.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    id: "stepper-default",
    items: [
      { number: "1", headline: "Personal Details", status: "resolved", style: "text" },
      { number: "2", headline: "Verification", status: "active", style: "text" },
      { number: "3", headline: "Payment Method", status: "default", style: "text" },
      { number: "4", headline: "Confirmation", status: "default", style: "text" },
    ],
  },
};

export const PointStyle: Story = {
  args: {
    id: "stepper-points",
    items: [
      { headline: "Step 1", description: "Create your account", status: "resolved", style: "point" },
      { headline: "Step 2", description: "Verify your identity", status: "active", style: "point" },
      { headline: "Step 3", description: "Make a deposit", status: "default", style: "point" },
    ],
  },
};

export const IconStyle: Story = {
  args: {
    id: "stepper-icons",
    items: [
      { headline: "Registration", status: "resolved", style: "icon" },
      { headline: "Verification", status: "resolved", style: "icon" },
      { headline: "First Deposit", status: "active", style: "icon" },
      { headline: "Place First Bet", status: "default", style: "icon" },
    ],
  },
};

export const WithErrors: Story = {
  args: {
    id: "stepper-errors",
    items: [
      { number: "1", headline: "Account Created", status: "resolved", style: "text" },
      { number: "2", headline: "Identity Check", description: "Document expired", status: "error", style: "text" },
      { number: "3", headline: "Deposit", status: "pending", style: "text" },
    ],
  },
};

export const AllStatuses: Story = {
  render: function AllStatusesDemo(args) {
    const style = args.indicatorStyle || "text";
    const items = [
      { number: "1", headline: "Resolved", description: "Step completed", status: "resolved" as const, style },
      { number: "2", headline: "Active", description: "Currently in progress", status: "active" as const, style },
      { number: "3", headline: "Warning", description: "Needs attention", status: "warning" as const, style },
      { number: "4", headline: "Error", description: "Failed validation", status: "error" as const, style },
      { number: "5", headline: "Pending", description: "Waiting for action", status: "pending" as const, style },
      { number: "6", headline: "Default", description: "Not started", status: "default" as const, style },
    ];
    return <Stepper id="stepper-all" items={items} showConnector={args.showConnector} />;
  },
  args: {
    id: "stepper-all",
    showConnector: true,
    indicatorStyle: "text",
  },
  argTypes: {
    indicatorStyle: {
      control: "select",
      options: ["text", "point", "icon"],
      description: "Indicator style for all steps",
      name: "Indicator Style",
    },
  },
};
