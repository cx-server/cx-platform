import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Colors", tags: [] };
export default meta;
type Story = StoryObj;

function Swatch({ name, variable, dark }: { name: string; variable: string; dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0" }}>
      <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: `rgb(var(${variable}))`, border: "1px solid rgb(var(--border-standard))" }} />
      <div>
        <p className="text-highlight text-sm font-medium">{name}</p>
        <p className="text-subtile text-xs font-mono">{variable}</p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h3 className="text-highlight text-lg font-semibold mb-3">{title}</h3>
      <div className="bg-card rounded-card p-4 border border-subtile">{children}</div>
    </div>
  );
}

export const Primitives: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <Section title="Neutrals">
        <Swatch name="Black" variable="--base-black" />
        <Swatch name="White" variable="--base-white" />
        <Swatch name="Neutrals 25" variable="--base-neutrals-25" />
        <Swatch name="Neutrals 50" variable="--base-neutrals-50" />
        <Swatch name="Neutrals 100" variable="--base-neutrals-100" />
        <Swatch name="Neutrals 200" variable="--base-neutrals-200" />
        <Swatch name="Neutrals 300" variable="--base-neutrals-300" />
        <Swatch name="Neutrals 400" variable="--base-neutrals-400" />
        <Swatch name="Neutrals 500" variable="--base-neutrals-500" />
        <Swatch name="Neutrals 600" variable="--base-neutrals-600" />
        <Swatch name="Neutrals 700" variable="--base-neutrals-700" />
        <Swatch name="Neutrals 800" variable="--base-neutrals-800" />
        <Swatch name="Neutrals 900" variable="--base-neutrals-900" />
        <Swatch name="Neutrals 950" variable="--base-neutrals-950" />
      </Section>
      <Section title="Brand">
        <Swatch name="Brand" variable="--global-styling-branding-brand" />
        <Swatch name="Interaction" variable="--global-styling-branding-interaction" />
        <Swatch name="Primary" variable="--global-styling-branding-primary" />
      </Section>
      <Section title="Signals">
        <Swatch name="Info" variable="--signals-bg-info" />
        <Swatch name="Positive" variable="--signals-bg-positive" />
        <Swatch name="Negative" variable="--signals-bg-negative" />
        <Swatch name="Warning" variable="--signals-bg-warning" />
      </Section>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <Section title="Backgrounds">
        <Swatch name="bg-surface" variable="--bg-surface" />
        <Swatch name="bg-card" variable="--bg-card" />
        <Swatch name="bg-modal" variable="--bg-modal" />
        <Swatch name="bg-input" variable="--bg-input" />
        <Swatch name="bg-inlay" variable="--bg-inlay" />
        <Swatch name="bg-overlay" variable="--bg-overlay" />
      </Section>
      <Section title="Text">
        <Swatch name="text-highlight" variable="--text-highlight" />
        <Swatch name="text-standard" variable="--text-standard" />
        <Swatch name="text-subtile" variable="--text-subtile" />
        <Swatch name="text-interaction" variable="--text-interaction" />
      </Section>
      <Section title="CTA Backgrounds">
        <Swatch name="bg-cta-primary" variable="--bg-cta-primary" />
        <Swatch name="bg-cta-secondary" variable="--bg-cta-secondary" />
        <Swatch name="bg-cta-tertiary" variable="--bg-cta-tertiary" />
      </Section>
      <Section title="Borders">
        <Swatch name="border-strong" variable="--border-strong" />
        <Swatch name="border-highlight" variable="--border-highlight" />
        <Swatch name="border-standard" variable="--border-standard" />
        <Swatch name="border-subtile" variable="--border-subtile" />
      </Section>
    </div>
  ),
};
