import type { Meta, StoryObj } from "@storybook/react";
import { ContentHeader } from "@tipico/ui/ContentHeader";

const meta: Meta<typeof ContentHeader> = {
  title: "Components/ContentHeader",
  component: ContentHeader,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["interaction", "date"],
      description: "Visual variant — interaction (blue link) or date (bold highlight)",
    },
    horizontalOffset: {
      control: "boolean",
      description: "Apply px-4 horizontal padding",
    },
  },
  args: {
    id: "content-header",
    title: "Section Title",
    variant: "interaction",
    horizontalOffset: true,
  },
  parameters: {
    docs: {
      description: {
        component: "Section header with title, optional subtitle, and left/right content slots.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentHeader>;

export const Interaction: Story = {
  args: {
    title: "Popular",
    subtitle: "12 events",
  },
};

export const DateVariant: Story = {
  args: {
    title: "Today, 16 July",
    variant: "date",
  },
};

export const WithRightContent: Story = {
  args: {
    title: "Live Now",
    subtitle: "5 matches",
    rightContent: <span className="text-xs text-interaction cursor-pointer">See All</span>,
  },
};

export const NoOffset: Story = {
  args: {
    title: "No Padding",
    horizontalOffset: false,
  },
};
