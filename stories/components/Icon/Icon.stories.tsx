import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@tipico/ui/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: [],
  argTypes: {
    href: { control: "text", description: "Path to SVG sprite or file" },
    iconId: { control: "text", description: "ID within the SVG sprite" },
    width: { control: "number", description: "Icon width in px" },
    height: { control: "number", description: "Icon height in px" },
  },
  args: {
    href: "./icons/common.svg",
    iconId: "default",
    width: 24,
    height: 24,
  },
  parameters: {
    docs: {
      description: {
        component: "SVG icon component using sprite references via <use href>. Falls back to <img> when BASE_ICONS_URL is set.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    href: "./icons/common.svg",
    iconId: "default",
  },
};

export const CustomSize: Story = {
  args: {
    href: "./icons/common.svg",
    iconId: "default",
    width: 48,
    height: 48,
  },
};

export const WithTitle: Story = {
  args: {
    href: "./icons/common.svg",
    iconId: "default",
    title: "Settings icon",
  },
};
