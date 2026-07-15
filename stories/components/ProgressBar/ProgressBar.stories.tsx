import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@tipico/ui/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: [],
  argTypes: {
    progressPercentage: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: { progressPercentage: 65 },
  decorators: [(Story) => <div style={{ maxWidth: "320px", padding: "20px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = { args: { progressPercentage: 65 } };
export const Empty: Story = { args: { progressPercentage: 0 } };
export const Half: Story = { args: { progressPercentage: 50 } };
export const Full: Story = { args: { progressPercentage: 100 } };

export const Steps: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div><span className="text-xs text-subtile">25%</span><ProgressBar progressPercentage={25} /></div>
      <div><span className="text-xs text-subtile">50%</span><ProgressBar progressPercentage={50} /></div>
      <div><span className="text-xs text-subtile">75%</span><ProgressBar progressPercentage={75} /></div>
      <div><span className="text-xs text-subtile">100%</span><ProgressBar progressPercentage={100} /></div>
    </div>
  ),
};
