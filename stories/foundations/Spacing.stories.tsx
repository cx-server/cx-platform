import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Spacing", tags: [] };
export default meta;
type Story = StoryObj;

const spacingScale = [
  { class: "p-0.5 / gap-0.5", value: "0.125rem", px: "2px" },
  { class: "p-1 / gap-1", value: "0.25rem", px: "4px" },
  { class: "p-1.5 / gap-1.5", value: "0.375rem", px: "6px" },
  { class: "p-2 / gap-2", value: "0.5rem", px: "8px" },
  { class: "p-2.5 / gap-2.5", value: "0.625rem", px: "10px" },
  { class: "p-3 / gap-3", value: "0.75rem", px: "12px" },
  { class: "p-4 / gap-4", value: "1rem", px: "16px" },
  { class: "p-5 / gap-5", value: "1.25rem", px: "20px" },
  { class: "p-6 / gap-6", value: "1.5rem", px: "24px" },
  { class: "p-7 / gap-7", value: "1.75rem", px: "28px" },
  { class: "p-8 / gap-8", value: "2rem", px: "32px" },
  { class: "p-10 / gap-10", value: "2.5rem", px: "40px" },
  { class: "p-12 / gap-12", value: "3rem", px: "48px" },
  { class: "p-16 / gap-16", value: "4rem", px: "64px" },
];

export const Scale: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <p className="text-subtile text-sm mb-6">Tailwind spacing utilities: <code>p-*</code>, <code>m-*</code>, <code>gap-*</code>, <code>px-*</code>, <code>py-*</code>, <code>w-*</code>, <code>h-*</code></p>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {spacingScale.map((s) => (
          <div key={s.class} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "6px 0" }}>
            <div style={{ width: s.px, height: "24px", backgroundColor: "rgb(var(--signals-bg-info))", borderRadius: "4px", flexShrink: 0 }} />
            <div style={{ width: "180px" }}>
              <code className="text-xs text-interaction">{s.class}</code>
            </div>
            <span className="text-xs text-subtile">{s.value}</span>
            <span className="text-xs text-highlight font-medium">{s.px}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const CommonPatterns: Story = {
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      <p className="text-subtile text-sm mb-6">Common spacing patterns used across components.</p>
      <div className="bg-card rounded-card p-4 border border-subtile mb-4">
        <h4 className="text-highlight font-medium text-sm mb-3">Card Padding</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div><code className="text-xs text-interaction">p-3</code> <span className="text-xs text-subtile">— Compact cards (odds, pills)</span></div>
          <div><code className="text-xs text-interaction">p-4</code> <span className="text-xs text-subtile">— Standard cards</span></div>
          <div><code className="text-xs text-interaction">p-5</code> <span className="text-xs text-subtile">— Featured cards</span></div>
          <div><code className="text-xs text-interaction">p-6</code> <span className="text-xs text-subtile">— Dialog content, sections</span></div>
        </div>
      </div>
      <div className="bg-card rounded-card p-4 border border-subtile mb-4">
        <h4 className="text-highlight font-medium text-sm mb-3">Gaps (between items)</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div><code className="text-xs text-interaction">gap-1</code> <span className="text-xs text-subtile">— Icon + text, tight groups</span></div>
          <div><code className="text-xs text-interaction">gap-2</code> <span className="text-xs text-subtile">— Buttons in a row, chip list</span></div>
          <div><code className="text-xs text-interaction">gap-3</code> <span className="text-xs text-subtile">— Form fields, list items</span></div>
          <div><code className="text-xs text-interaction">gap-4</code> <span className="text-xs text-subtile">— Sections within a card</span></div>
        </div>
      </div>
      <div className="bg-card rounded-card p-4 border border-subtile">
        <h4 className="text-highlight font-medium text-sm mb-3">Page Layout</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div><code className="text-xs text-interaction">px-3</code> <span className="text-xs text-subtile">— Mobile screen padding</span></div>
          <div><code className="text-xs text-interaction">px-4</code> <span className="text-xs text-subtile">— Tablet screen padding</span></div>
          <div><code className="text-xs text-interaction">py-4</code> <span className="text-xs text-subtile">— Section vertical spacing</span></div>
        </div>
      </div>
    </div>
  ),
};
