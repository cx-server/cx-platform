import type { Meta, StoryObj } from "@storybook/react";
import { Stepper, type StepperItem } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Ready for Release/Stepper",
  component: Stepper,
  tags: [],
  decorators: [(Story) => <div style={{ maxWidth: "360px", padding: "20px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const registrationSteps: StepperItem[] = [
  { number: "1", headline: "Personal Details", status: "resolved", style: "text" },
  { number: "2", headline: "Verification", status: "active", style: "text" },
  { number: "3", headline: "Payment Setup", status: "default", style: "text" },
  { number: "4", headline: "Confirmation", status: "default", style: "text" },
];

export const Default: Story = {
  args: { id: "stepper-default", items: registrationSteps },
};

export const AllResolved: Story = {
  args: {
    id: "stepper-resolved",
    items: [
      { number: "1", headline: "Account Created", status: "resolved", style: "text" },
      { number: "2", headline: "Identity Verified", status: "resolved", style: "text" },
      { number: "3", headline: "First Deposit", status: "resolved", style: "text" },
    ],
  },
};

export const WithError: Story = {
  args: {
    id: "stepper-error",
    items: [
      { number: "1", headline: "Select Amount", status: "resolved", style: "text" },
      { number: "2", headline: "Payment Method", status: "error", description: "Card declined", style: "text" },
      { number: "3", headline: "Confirmation", status: "default", style: "text" },
    ],
  },
};

export const PointStyle: Story = {
  args: {
    id: "stepper-points",
    items: [
      { headline: "Step 1", status: "resolved", style: "point" },
      { headline: "Step 2", status: "resolved", style: "point" },
      { headline: "Step 3", status: "active", style: "point" },
      { headline: "Step 4", status: "default", style: "point" },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    id: "stepper-desc",
    items: [
      { number: "1", headline: "Email", description: "We'll send a confirmation link", status: "resolved", style: "text" },
      { number: "2", headline: "Password", description: "Choose a secure password", status: "active", style: "text" },
      { number: "3", headline: "Done", description: "You're all set", status: "default", style: "text" },
    ],
  },
};
