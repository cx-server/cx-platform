import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "@tipico/ui/List";
import { Input, Toggle } from "@tipico/ui/Input";

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

const meta: Meta<typeof ListItem> = {
  title: "Components/List/ListItem",
  component: ListItem,
  decorators: [
    (Story) => (
      <List id="list-item-story" clickable>
        <Story />
      </List>
    ),
  ],
  argTypes: {
    children: {},
    className: { control: { type: "text" } },
    iconComponent: {
      options: ["None", "GlobeIcon"],
      mapping: {
        None: null,
        GlobeIcon: <GlobeIcon />,
      },
    },
    rightComponent: {
      options: ["None", "ChevronRightIcon", "RadioInput", "CheckboxInput", "ToggleInput"],
      mapping: {
        None: null,
        ChevronRightIcon: <ChevronRightIcon className="icon-md" />,
        RadioInput: <Input id="input" name="radio-group" type="radio" />,
        CheckboxInput: <Input id="input" name="checkbox-group" type="checkbox" />,
        ToggleInput: <Toggle id="input" name="switch-group" checked={false} />,
      },
    },
    htmlFor: {
      control: { type: "text" },
      if: { arg: "rightComponent", truthy: true },
    },
    selected: { control: { type: "boolean" } },
  },
  args: {
    htmlFor: "input",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleListItem: Story = {
  args: {
    id: "simple-list-item",
    children: "Bundesliga",
  },
};

export const FullListItem: Story = {
  args: {
    id: "full-list-item",
    children: "Bundesliga",
    subtitle: "Germany",
    info: "24",
    iconComponent: <GlobeIcon />,
    rightComponent: <ChevronRightIcon className="icon-md" />,
    htmlFor: undefined,
    border: true,
  },
};

export const CustomListItem: Story = {
  args: {
    id: "custom-list-item",
    className: "flex",
    children: (
      <>
        <div className="flex-grow">
          <span className="text-highlight">Bundesliga</span>&nbsp;|&nbsp;
          <span className="text-subtile">Germany</span>
        </div>
        <div className="emphasis">24</div>
      </>
    ),
  },
};

export const InputListItem: Story = {
  args: {
    id: "input-list-item",
    iconComponent: <GlobeIcon />,
    children: "Bundesliga",
    subtitle: "Germany",
    htmlFor: "input-list-item",
    rightComponent: <Input id="input-list-item" name="checkbox-group-1" type="checkbox" />,
  },
};
