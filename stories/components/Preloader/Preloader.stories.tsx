import type { Meta, StoryObj } from "@storybook/react";
import { Preloader } from "@tipico/ui/Preloader";

const meta: Meta<typeof Preloader> = {
  title: "Components/Preloader",
  component: Preloader,
  tags: [],
  argTypes: {
    spinnerSize: {
      control: "select",
      options: ["icon-sm", "icon-md", "icon-lg", "icon-xl"],
      description: "Size class applied to the spinner SVG",
    },
  },
  args: {
    spinnerSize: "icon-lg",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
  render: () => (
    <div style={{ position: "relative", height: "300px" }}>
      <Preloader />
    </div>
  ),
};

export const SmallSpinner: Story = {
  render: () => (
    <div style={{ position: "relative", height: "200px" }}>
      <Preloader spinnerSize="icon-md" />
    </div>
  ),
};

export const LargeSpinner: Story = {
  render: () => (
    <div style={{ position: "relative", height: "400px" }}>
      <Preloader spinnerSize="icon-xl" />
    </div>
  ),
};
