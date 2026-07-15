import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Collapsible } from "@tipico/ui/Collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: [],
  decorators: [(Story) => <div style={{ maxWidth: "400px" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: function CollapsibleDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Collapsible
        id="col-default"
        header={<span className="text-highlight font-medium">What is cashout?</span>}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <p className="text-standard text-sm p-3">
          Cashout lets you settle a bet before the event ends. You can take a profit early or cut your losses.
        </p>
      </Collapsible>
    );
  },
};

export const WithSubHeader: Story = {
  render: function SubHeaderDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Collapsible
        id="col-sub"
        header={<span className="text-highlight font-medium">Deposit Limits</span>}
        subHeader={<span className="text-subtile text-xs">Daily: €500 | Weekly: €2,000</span>}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <div className="p-3 text-sm text-standard">
          <p>You can adjust your deposit limits at any time. Decreases take effect immediately, increases after 7 days.</p>
        </div>
      </Collapsible>
    );
  },
};

export const Multiple: Story = {
  render: function MultipleDemo() {
    const [openId, setOpenId] = useState<string | null>("faq-1");
    const faqs = [
      { id: "faq-1", q: "How do I withdraw?", a: "Go to Account → Withdrawal and select your payment method." },
      { id: "faq-2", q: "How long do withdrawals take?", a: "Most withdrawals are processed within 24 hours." },
      { id: "faq-3", q: "Can I cancel a withdrawal?", a: "Yes, if the withdrawal hasn't been processed yet." },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {faqs.map((faq) => (
          <Collapsible
            key={faq.id}
            id={faq.id}
            header={<span className="text-highlight font-medium text-sm">{faq.q}</span>}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          >
            <p className="text-standard text-sm p-3">{faq.a}</p>
          </Collapsible>
        ))}
      </div>
    );
  },
};
