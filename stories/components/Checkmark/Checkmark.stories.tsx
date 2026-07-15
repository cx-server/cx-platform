import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkmark } from "@tipico/ui/Checkmark";

const meta: Meta<typeof Checkmark> = {
  title: "Components/Checkmark",
  component: Checkmark,
  tags: [],
  argTypes: {
    isChecked: { control: "boolean" },
  },
  args: { id: "checkmark-demo", isChecked: false },
};
export default meta;
type Story = StoryObj<typeof Checkmark>;

export const Unchecked: Story = { args: { id: "cm-unchecked", isChecked: false } };
export const Checked: Story = { args: { id: "cm-checked", isChecked: true } };

export const Interactive: Story = {
  render: function InteractiveDemo() {
    const [checked, setChecked] = useState(false);
    return (
      <div
        style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
        onClick={() => setChecked(!checked)}
      >
        <Checkmark id="cm-interactive" isChecked={checked} className="w-6 h-6" />
        <span className="text-standard text-sm">I accept the Terms & Conditions</span>
      </div>
    );
  },
};

export const MultipleOptions: Story = {
  render: function MultiDemo() {
    const [selected, setSelected] = useState<Set<number>>(new Set([0]));
    const toggle = (i: number) => {
      const next = new Set(selected);
      next.has(i) ? next.delete(i) : next.add(i);
      setSelected(next);
    };
    const options = ["Email notifications", "Push notifications", "SMS notifications"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {options.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }} onClick={() => toggle(i)}>
            <Checkmark id={`cm-${i}`} isChecked={selected.has(i)} className="w-5 h-5" />
            <span className="text-standard text-sm">{label}</span>
          </div>
        ))}
      </div>
    );
  },
};
