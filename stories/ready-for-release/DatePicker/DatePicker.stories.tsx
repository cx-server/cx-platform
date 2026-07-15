import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Ready for Release/DatePicker",
  component: DatePicker,
  tags: [],
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    locale: { control: "select", options: ["en-GB", "de-DE", "tr-TR"] },
  },
  args: {
    id: "datepicker-demo",
    label: "Date of Birth",
    disabled: false,
    error: false,
    locale: "en-GB",
  },
  decorators: [(Story) => <div style={{ maxWidth: "320px", minHeight: "400px" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: function DefaultDemo() {
    const [date, setDate] = useState<Date | null>(null);
    return <DatePicker id="dp-default" label="Date of Birth" value={date} onChange={setDate} />;
  },
};

export const WithValue: Story = {
  render: function WithValueDemo() {
    const [date, setDate] = useState<Date | null>(new Date(1995, 5, 15));
    return <DatePicker id="dp-value" label="Date of Birth" value={date} onChange={setDate} />;
  },
};

export const WithMinMax: Story = {
  render: function MinMaxDemo() {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <DatePicker
        id="dp-minmax"
        label="Select Date"
        value={date}
        onChange={setDate}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2026, 11, 31)}
        description="Between Jan 2024 and Dec 2026"
      />
    );
  },
};

export const German: Story = {
  render: function GermanDemo() {
    const [date, setDate] = useState<Date | null>(null);
    return <DatePicker id="dp-de" label="Geburtsdatum" value={date} onChange={setDate} locale="de-DE" />;
  },
};

export const Error: Story = {
  render: function ErrorDemo() {
    const [date, setDate] = useState<Date | null>(null);
    return <DatePicker id="dp-error" label="Date of Birth" value={date} onChange={setDate} error description="Please enter a valid date" />;
  },
};

export const Disabled: Story = {
  render: function DisabledDemo() {
    return <DatePicker id="dp-disabled" label="Date of Birth" value={new Date(1990, 3, 20)} onChange={() => {}} disabled />;
  },
};
