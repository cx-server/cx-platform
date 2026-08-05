import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@tipico/ui/EmptyState";
import { Button } from "@tipico/ui/Button";

// Placeholder icon matching the 72px sizing from the component
const PlaceholderIcon = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <path d="M28 32L36 24L44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 24V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 44H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BetIcon = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <circle cx="28" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="44" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M32 36H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
  </svg>
);

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: [],
  argTypes: {
    icon: {
      options: ["None", "Upload", "Bet"],
      mapping: {
        None: undefined,
        Upload: <PlaceholderIcon />,
        Bet: <BetIcon />,
      },
      control: "select",
    },
    articleClassName: { control: "text" },
  },
  args: { id: "empty-demo" },
  decorators: [(Story) => <div style={{ maxWidth: "400px", margin: "0 auto", padding: "40px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    id: "empty-default",
    title: "No bets yet",
    description: "Place your first bet to see it here.",
  },
};

export const WithIcon: Story = {
  args: {
    id: "empty-icon",
    title: "Your betslip is empty",
    description: "Below are some suggestions from our most popular categories to get started.",
    icon: <BetIcon />,
  },
};

export const WithAction: Story = {
  render: () => (
    <EmptyState
      id="empty-action"
      title="No results"
      description="Try adjusting your filters or search terms."
      icon={<PlaceholderIcon />}
    >
      <Button id="reset-btn" variant="outline" autoWidth style={{ marginTop: "16px" }}>Reset Filters</Button>
    </EmptyState>
  ),
};

export const NoBetsHistory: Story = {
  args: {
    id: "empty-bets",
    title: "No bet history",
    description: "Your settled bets will appear here once they're resolved.",
    icon: <BetIcon />,
  },
};

export const CustomStyling: Story = {
  args: {
    id: "empty-custom",
    title: "Nothing here",
    description: "This uses a custom articleClassName for extra spacing.",
    icon: <PlaceholderIcon />,
    articleClassName: "mt-4",
  },
};
