import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@tipico/ui/EmptyState";
import { Button } from "@tipico/ui/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: [],
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

export const WithAction: Story = {
  render: () => (
    <EmptyState id="empty-action" title="No results" description="Try adjusting your filters or search terms.">
      <Button id="reset-btn" variant="outline" autoWidth style={{ marginTop: "16px" }}>Reset Filters</Button>
    </EmptyState>
  ),
};

export const NoBetsHistory: Story = {
  args: {
    id: "empty-bets",
    title: "No bet history",
    description: "Your settled bets will appear here once they're resolved.",
  },
};
