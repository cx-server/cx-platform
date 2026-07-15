import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@tipico/ui/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "link", "brand", "success", "negative", "warning", "info", "icon"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      description: "Size preset",
    },
    autoWidth: {
      control: "boolean",
      description: "When true, button only takes the width of its content. When false, full width.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    children: {
      control: "text",
      description: "Button label",
    },
  },
  args: {
    id: "button-demo",
    children: "Button",
    variant: "primary",
    size: "md",
    autoWidth: true,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Primary Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary Button" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline Button" },
};

export const Link: Story = {
  args: { variant: "link", children: "Link Button" },
};

export const Brand: Story = {
  args: { variant: "brand", children: "Brand Button" },
};

export const Success: Story = {
  args: { variant: "success", children: "Success" },
};

export const Negative: Story = {
  args: { variant: "negative", children: "Delete" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Warning" },
};

export const Info: Story = {
  args: { variant: "info", children: "Info" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Button id="btn-xs" variant="primary" size="xs" autoWidth>XS</Button>
      <Button id="btn-sm" variant="primary" size="sm" autoWidth>SM</Button>
      <Button id="btn-md" variant="primary" size="md" autoWidth>MD</Button>
      <Button id="btn-lg" variant="primary" size="lg" autoWidth>LG</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { variant: "primary", children: "Full Width Button", autoWidth: false },
  decorators: [(Story) => <div style={{ maxWidth: "400px" }}><Story /></div>],
};

export const Disabled: Story = {
  args: { variant: "primary", children: "Disabled", disabled: true },
};

export const AsLink: Story = {
  args: { variant: "primary", children: "Go to Homepage", href: "/" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Button id="v-primary" variant="primary" autoWidth>Primary</Button>
      <Button id="v-secondary" variant="secondary" autoWidth>Secondary</Button>
      <Button id="v-outline" variant="outline" autoWidth>Outline</Button>
      <Button id="v-link" variant="link" autoWidth>Link</Button>
      <Button id="v-brand" variant="brand" autoWidth>Brand</Button>
      <Button id="v-success" variant="success" autoWidth>Success</Button>
      <Button id="v-negative" variant="negative" autoWidth>Negative</Button>
      <Button id="v-warning" variant="warning" autoWidth>Warning</Button>
      <Button id="v-info" variant="info" autoWidth>Info</Button>
    </div>
  ),
};
