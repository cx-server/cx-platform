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
  args: {
    id: "stepper-all",
    items: [
      { number: "1", headline: "Resolved", status: "resolved", style: "text" },
      { number: "2", headline: "Active", status: "active", style: "text" },
      { number: "3", headline: "Warning", status: "warning", style: "text" },
      { number: "4", headline: "Error", status: "error", style: "text" },
      { number: "5", headline: "Pending", status: "pending", style: "text" },
      { number: "6", headline: "Default", status: "default", style: "text" },
    ],
  },
};
