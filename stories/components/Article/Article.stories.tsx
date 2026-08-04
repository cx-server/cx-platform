import type { Meta, StoryObj } from "@storybook/react";
import { Article, ArticleHeader, ArticleContent } from "@tipico/ui/Article";

const meta: Meta<typeof Article> = {
  title: "Components/Article",
  component: Article,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: "Content container for article-style layouts with header and body sections. Use ArticleHeader and ArticleContent for proper spacing.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
  render: () => (
    <Article id="article-default">
      <ArticleHeader>
        <h3 className="font-semibold text-highlight text-base">Article Title</h3>
        <p className="text-subtile text-sm">Subtitle or meta info</p>
      </ArticleHeader>
      <ArticleContent>
        <p className="text-standard text-sm">
          This is the article content. It can contain any elements — text, images, lists, etc.
        </p>
      </ArticleContent>
    </Article>
  ),
};

export const NoHeaderGap: Story = {
  render: () => (
    <Article id="article-no-gap" noHeaderContentGap>
      <ArticleHeader>
        <h3 className="font-semibold text-highlight text-base">Compact Layout</h3>
      </ArticleHeader>
      <ArticleContent>
        <p className="text-standard text-sm">
          With noHeaderContentGap, header and content sit closer together.
        </p>
      </ArticleContent>
    </Article>
  ),
};

export const WithList: Story = {
  render: () => (
    <Article id="article-list">
      <ArticleHeader>
        <h3 className="font-semibold text-highlight text-base">Steps to Complete</h3>
      </ArticleHeader>
      <ArticleContent>
        <p className="text-standard text-sm">1. Enter your details</p>
        <p className="text-standard text-sm">2. Verify your identity</p>
        <p className="text-standard text-sm">3. Make your first deposit</p>
      </ArticleContent>
    </Article>
  ),
};
