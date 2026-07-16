import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@tipico/ui/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: "Content card with rounded corners, background, and optional action footer.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card id="card-default">
      <p className="text-standard text-sm">Card content goes here.</p>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card
      id="card-actions"
      actions={
        <button className="text-interaction text-sm font-medium">View Details</button>
      }
    >
      <div className="flex flex-col gap-1">
        <span className="text-highlight font-semibold">Match Result</span>
        <span className="text-standard text-sm">Bayern München vs. Dortmund</span>
      </div>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Card id="card-1">
        <span className="text-standard text-sm">First card</span>
      </Card>
      <Card id="card-2">
        <span className="text-standard text-sm">Second card</span>
      </Card>
      <Card id="card-3">
        <span className="text-standard text-sm">Third card</span>
      </Card>
    </div>
  ),
};
