import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListHeader } from "@tipico/ui/List";

// Inline SVG placeholders
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 12h18M12 3c2.5 2.7 4 6.3 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.3-4-9s1.5-6.3 4-9z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const ChevronRightIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof ListHeader> = {
  title: "Components/List/ListHeader",
  component: ListHeader,
  decorators: [
    (Story) => (
      <List id="list-header-story" clickable>
        <Story />
        <ListItem id="list-item-1" subtitle="Germany" iconComponent={<GlobeIcon />}>
          Bundesliga
        </ListItem>
        <ListItem id="list-item-2" subtitle="Spain" iconComponent={<GlobeIcon />}>
          La Liga
        </ListItem>
        <ListItem id="list-item-3" subtitle="Italy" iconComponent={<GlobeIcon />}>
          Serie A
        </ListItem>
      </List>
    ),
  ],
  argTypes: {
    children: {},
    className: { control: { type: "text" } },
    rightComponent: {
      options: ["None", "ChevronRightIcon"],
      mapping: {
        None: null,
        ChevronRightIcon: <ChevronRightIcon className="icon-md" />,
      },
    },
    onClick: {
      control: { disable: true },
      if: { arg: "rightComponent", truthy: true },
    },
  },
  args: {
    onClick: () => {},
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleListHeader: Story = {
  args: {
    id: "simple-list-header",
    children: "Section Header",
  },
};

export const FullListHeader: Story = {
  args: {
    id: "full-list-header",
    children: "Section Header",
    subtitle: "Subtitle",
    info: "Info",
    rightComponent: <ChevronRightIcon className="icon-md" />,
  },
};
