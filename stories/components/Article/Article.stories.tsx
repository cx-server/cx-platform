import type { Meta, StoryObj } from "@storybook/react";
import { Article } from "@tipico/ui/Article";

const meta: Meta<typeof Article> = {
  title: "Components/Article",
  component: Article,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: "Content container for article-style layouts with header and body sections.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
  render: () => (
    <Article id="article-default">
      <header className="font-semibold text-highlight text-base">Article Title</header>
      <div className="text-standard text-sm">
        This is the article content. It can contain any elements — text, images, lists, etc.
      </div>
    </Article>
  ),
};

export const NoHeaderGap: Story = {
  render: () => (
    <Article id="article-no-gap" noHeaderContentGap>
      <header className="font-semibold text-highlight text-base">Compact Layout</header>
      <div className="text-standard text-sm">
        With noHeaderContentGap, header and content sit closer together.
      </div>
    </Article>
  ),
};

export const WithList: Story = {
  render: () => (
    <Article id="article-list">
      <header className="font-semibold text-highlight text-base">Steps to Complete</header>
      <div className="text-standard text-sm flex flex-col gap-2">
        <p>1. Enter your details</p>
        <p>2. Verify your identity</p>
        <p>3. Make your first deposit</p>
      </div>
    </Article>
  ),
};
