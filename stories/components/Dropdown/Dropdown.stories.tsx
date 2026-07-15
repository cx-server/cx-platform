import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@tipico/ui/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: [],
  args: { id: "dropdown-demo" },
  decorators: [(Story) => <div style={{ maxWidth: "280px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown id="dd-default">
      <option value="">Select an option</option>
      <option value="1">Germany</option>
      <option value="2">Austria</option>
      <option value="3">Switzerland</option>
    </Dropdown>
  ),
};

export const WithSelection: Story = {
  render: () => (
    <Dropdown id="dd-selected" defaultValue="2">
      <option value="1">Daily</option>
      <option value="2">Weekly</option>
      <option value="3">Monthly</option>
    </Dropdown>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Dropdown id="dd-disabled" disabled>
      <option>Locked option</option>
    </Dropdown>
  ),
};
