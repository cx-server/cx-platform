import type { Meta, StoryObj } from "@storybook/react";
import { StatusIcon } from "@tipico/ui/StatusIcon";

const meta: Meta<typeof StatusIcon> = {
  title: "Components/StatusIcon",
  component: StatusIcon,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["open", "won", "lost", "lost_subtle", "canceled", "live", "more", "not_evaluated", "won_subtle"],
      description: "Status variant determining icon shape and color",
    },
    active: {
      control: "boolean",
      description: "When false, the icon renders at 50% opacity",
    },
  },
  args: {
    id: "status-icon-demo",
    variant: "open",
    active: true,
  },
  decorators: [(Story) => <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof StatusIcon>;

export const Open: Story = { args: { id: "si-open", variant: "open", active: true } };
export const Won: Story = { args: { id: "si-won", variant: "won", active: true } };
export const Lost: Story = { args: { id: "si-lost", variant: "lost", active: true } };
export const LostSubtle: Story = { args: { id: "si-lost-subtle", variant: "lost_subtle", active: true } };
export const Canceled: Story = { args: { id: "si-canceled", variant: "canceled", active: true } };
export const Live: Story = { args: { id: "si-live", variant: "live", active: true } };
export const More: Story = { args: { id: "si-more", variant: "more", active: true } };
export const NotEvaluated: Story = { args: { id: "si-not-evaluated", variant: "not_evaluated", active: true } };
export const WonSubtle: Story = { args: { id: "si-won-subtle", variant: "won_subtle", active: true } };

export const Inactive: Story = { args: { id: "si-inactive", variant: "won", active: false } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-open" variant="open" active />
        <span className="text-xs text-subtile">Open</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-won" variant="won" active />
        <span className="text-xs text-subtile">Won</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-lost" variant="lost" active />
        <span className="text-xs text-subtile">Lost</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-canceled" variant="canceled" active />
        <span className="text-xs text-subtile">Canceled</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-live" variant="live" active />
        <span className="text-xs text-subtile">Live</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-more" variant="more" active />
        <span className="text-xs text-subtile">More</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <StatusIcon id="all-not-eval" variant="not_evaluated" active />
        <span className="text-xs text-subtile">Not Evaluated</span>
      </div>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <StatusIcon id="ctx-won" variant="won" active />
        <div><p className="text-highlight text-sm font-medium">Bayern 2 – 1 Dortmund</p><p className="text-subtile text-xs">Won · €15.00</p></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <StatusIcon id="ctx-lost" variant="lost" active />
        <div><p className="text-highlight text-sm font-medium">Arsenal 0 – 1 Chelsea</p><p className="text-subtile text-xs">Lost · €10.00</p></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <StatusIcon id="ctx-live" variant="live" active />
        <div><p className="text-highlight text-sm font-medium">Real Madrid vs Barcelona</p><p className="text-subtile text-xs">Live · 67'</p></div>
      </div>
    </div>
  ),
};
