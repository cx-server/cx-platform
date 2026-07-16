import type { Meta, StoryObj } from "@storybook/react";
import { AvatarBadge } from "@tipico/ui/Avatar";

const meta: Meta<typeof AvatarBadge> = {
  title: "Components/Avatar",
  component: AvatarBadge,
  tags: [],
  argTypes: {
    src: { control: "text", description: "Image URL for the avatar" },
    letter: { control: "text", description: "Fallback letter when no image" },
    showBlur: { control: "boolean", description: "Show blurred shadow behind image" },
  },
  args: {
    letter: "T",
  },
  parameters: {
    docs: {
      description: {
        component: "Avatar badge with image or letter fallback. Supports a blurred shadow effect.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarBadge>;

export const WithLetter: Story = {
  args: { letter: "T" },
  decorators: [
    (Story) => (
      <div className="size-12 rounded-full bg-card flex items-center justify-center text-highlight font-semibold text-lg">
        <Story />
      </div>
    ),
  ],
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/48?img=3",
    showBlur: false,
  },
  decorators: [
    (Story) => (
      <div className="size-12 rounded-full relative overflow-visible">
        <Story />
      </div>
    ),
  ],
};

export const WithBlur: Story = {
  args: {
    src: "https://i.pravatar.cc/48?img=5",
    showBlur: true,
  },
  decorators: [
    (Story) => (
      <div className="size-12 rounded-full relative overflow-visible mt-4">
        <Story />
      </div>
    ),
  ],
};
