import { type ComponentProps, type ReactElement, cloneElement, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListHeader } from "@tipico/ui/List";
import { Input, Toggle } from "@tipico/ui/Input";
import { Chip } from "@tipico/ui/Chip";

// Inline SVG placeholders matching monoverse icon patterns
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

/**
 * Interactive list render — handles selection state when clickable.
 * Same pattern as monoverse's useListRender.
 */
const useListRender = (args: ComponentProps<typeof List>) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <List {...args}>
      {(args.children as ReactElement[]).map((child) =>
        cloneElement(child, {
          selected: args.clickable && child.props.id === selected,
          onClick: args.clickable ? () => setSelected(child.props.id) : undefined,
        })
      )}
    </List>
  );
};

const meta: Meta<typeof List> = {
  title: "Components/List/List",
  component: List,
  subcomponents: { ListItem: ListItem as any, ListHeader: ListHeader as any },
  argTypes: {
    children: {},
    className: { control: { type: "text" } },
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  { title: "Bundesliga", subtitle: "Germany", count: "24" },
  { title: "La Liga", subtitle: "Spain", count: "32" },
  { title: "Serie A", subtitle: "Italy", count: "12" },
];

export const SimpleList: Story = {
  args: {
    id: "simple-list",
    children: mockData.map(({ title, subtitle, count }, i) => (
      <ListItem id={`list-item-${i}`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />}>
        {title}
      </ListItem>
    )),
  },
  render: useListRender,
};

export const ClickableList: Story = {
  args: {
    id: "clickable-list",
    clickable: true,
    children: mockData.map(({ title, subtitle, count }, i) => (
      <ListItem
        id={`list-item-${i}`}
        subtitle={subtitle}
        info={count}
        iconComponent={<GlobeIcon />}
        rightComponent={<ChevronRightIcon className="icon-md" />}
      >
        {title}
      </ListItem>
    )),
  },
  render: useListRender,
};

export const NoHoverList: Story = {
  args: {
    id: "no-hover-list",
    hoverable: false,
    children: mockData.map(({ title, subtitle, count }, i) => (
      <ListItem id={`list-item-${i}`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />}>
        {title}
      </ListItem>
    )),
  },
  render: useListRender,
};

export const ListWithHeader: Story = {
  args: {
    id: "list-with-header",
    children: [
      <ListHeader
        id="list-header"
        subtitle="Subtitle"
        info="Info"
        rightComponent={<ChevronRightIcon className="icon-md" />}
      >
        Section Header
      </ListHeader>,
      ...mockData.map(({ title, subtitle, count }, i) => (
        <ListItem id={`list-item-${i}`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />}>
          {title}
        </ListItem>
      )),
    ],
  },
  render: useListRender,
};

export const ItemsBorderList: Story = {
  args: {
    id: "items-border-list",
    itemsBorder: true,
    children: mockData.map(({ title, subtitle, count }, i) => (
      <ListItem
        id={`list-item-${i}`}
        subtitle={subtitle}
        info={count}
        iconComponent={<GlobeIcon />}
        rightComponent={<ChevronRightIcon className="icon-md" />}
      >
        {title}
      </ListItem>
    )),
  },
  render: useListRender,
};

export const CustomList: Story = {
  args: {
    id: "custom-list",
    children: mockData.map(({ title, subtitle, count }, i) => (
      <ListItem id={`list-item-${i}`} className="flex">
        <div className="flex-grow">
          <span className="text-highlight">{title}</span>&nbsp;|&nbsp;
          <span className="text-subtile">{subtitle}</span>
        </div>
        <div className="emphasis">{count}</div>
      </ListItem>
    )),
  },
  render: useListRender,
};

export const RadioList: Story = {
  args: {
    id: "radio-list",
    clickable: true,
    children: mockData.map(({ title, subtitle }, i) => (
      <ListItem
        id={`list-item-${i}`}
        htmlFor={`radio-${i}`}
        subtitle={subtitle}
        iconComponent={<GlobeIcon />}
        rightComponent={<Input id={`radio-${i}`} name="radio-group-1" type="radio" />}
      >
        {title}
      </ListItem>
    )),
  },
};

export const CheckboxList: Story = {
  args: {
    id: "checkbox-list",
    clickable: true,
    children: mockData.map(({ title, subtitle }, i) => (
      <ListItem
        id={`list-item-${i}`}
        htmlFor={`checkbox-${i}`}
        subtitle={subtitle}
        iconComponent={<GlobeIcon />}
        rightComponent={<Input id={`checkbox-${i}`} name="checkbox-group-1" type="checkbox" />}
      >
        {title}
      </ListItem>
    )),
  },
};

export const ChipList: Story = {
  args: {
    id: "chip-list",
    children: [
      <ListItem
        id="listitem-1"
        subtitle="Germany"
        iconComponent={<GlobeIcon />}
        rightComponent={<Chip id="listitem-chip-1" className="chip chip-warning">Pending</Chip>}
      >
        Bundesliga
      </ListItem>,
      <ListItem
        id="listitem-2"
        subtitle="Spain"
        iconComponent={<GlobeIcon />}
        rightComponent={<Chip id="listitem-chip-2" className="chip chip-positive">Completed</Chip>}
      >
        La Liga
      </ListItem>,
      <ListItem
        id="listitem-3"
        subtitle="Italy"
        iconComponent={<GlobeIcon />}
        rightComponent={<Chip id="listitem-chip-3" className="chip chip-negative">Failed</Chip>}
      >
        Serie A
      </ListItem>,
    ],
  },
  render: useListRender,
};

const getChainStatus = (index: number) => {
  if (index === 2 || index === 3) return "error";
  if (index === 4 || index === 5) return "warning";
  if (index === 6 || index === 7) return "info";
  return undefined;
};

export const ChainedList: Story = {
  args: {
    id: "chained-list",
    showChain: true,
    hoverable: false,
    children: [...mockData, ...mockData, ...mockData].map(({ title }, i) => (
      <ListItem id={`list-item-${i}`} chainStatus={getChainStatus(i)}>
        {title}
      </ListItem>
    )),
  },
  render: useListRender,
};
