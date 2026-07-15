import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@tipico/ui/Input";
import { InputField, InputFieldTitle, InputFieldDescription } from "@tipico/ui/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: [],
  args: {
    id: "input-demo",
    name: "demo",
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { id: "input-default", name: "default", placeholder: "Enter your name" },
};

export const WithValue: Story = {
  args: { id: "input-value", name: "value", defaultValue: "Max Mustermann" },
};

export const Disabled: Story = {
  args: { id: "input-disabled", name: "disabled", disabled: true, defaultValue: "Can't edit this" },
};

export const Search: Story = {
  args: { id: "input-search", name: "search", type: "search", placeholder: "Search games..." },
};

export const Password: Story = {
  args: { id: "input-password", name: "password", type: "password", placeholder: "Enter password" },
};

export const WithCurrency: Story = {
  args: { id: "input-currency", name: "amount", showCurrency: true, currency: "€", placeholder: "0.00" },
};

export const WithLabel: Story = {
  render: () => (
    <InputField id="field-demo">
      <InputFieldTitle id="field-title">Email Address</InputFieldTitle>
      <Input id="input-email" name="email" type="email" placeholder="name@example.com" />
      <InputFieldDescription id="field-desc">We'll never share your email.</InputFieldDescription>
    </InputField>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "320px" }}>
      <InputField id="f1"><InputFieldTitle id="t1">Text</InputFieldTitle><Input id="i1" name="text" placeholder="Default text input" /></InputField>
      <InputField id="f2"><InputFieldTitle id="t2">Search</InputFieldTitle><Input id="i2" name="search" type="search" placeholder="Search..." /></InputField>
      <InputField id="f3"><InputFieldTitle id="t3">Password</InputFieldTitle><Input id="i3" name="password" type="password" placeholder="Password" /></InputField>
      <InputField id="f4"><InputFieldTitle id="t4">Amount</InputFieldTitle><Input id="i4" name="amount" showCurrency={true} currency="€" placeholder="0.00" /></InputField>
    </div>
  ),
};
