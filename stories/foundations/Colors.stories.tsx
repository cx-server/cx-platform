import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Colors", tags: [] };
export default meta;
type Story = StoryObj;

function Swatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px 0" }}>
      <div style={{ width: "36px", height: "36px", borderRadius: "6px", backgroundColor: `rgb(var(${variable}))`, border: "1px solid rgb(var(--border-standard))", flexShrink: 0 }} />
      <div style={{ minWidth: 0 }}>
        <p className="text-highlight text-sm font-medium">{name}</p>
        <p className="text-subtile text-xs font-mono truncate">{variable}</p>
      </div>
    </div>
  );
}

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h3 className="text-highlight text-base font-semibold mb-1">{title}</h3>
      {description && <p className="text-subtile text-xs mb-3">{description}</p>}
      <div className="bg-card rounded-card p-4 border border-subtile">{children}</div>
    </div>
  );
}

export const Primitives: Story = {
  name: "Primitives",
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <p className="text-subtile text-sm mb-6">Raw color values shared across all themes. These don't change between Light and Dark.</p>
      <Section title="Neutrals" description="Grayscale from white to near-black. Most UI surfaces and text use these.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
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
        </div>
      </Section>
      <Section title="Signals — Info" description="Used for informational messages and interaction highlights.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <Swatch name="Info 50" variable="--signals-info-50" />
          <Swatch name="Info 100" variable="--signals-info-100" />
          <Swatch name="Info 200" variable="--signals-info-200" />
          <Swatch name="Info 300" variable="--signals-info-300" />
          <Swatch name="Info 500" variable="--signals-info-500" />
          <Swatch name="Info 700" variable="--signals-info-700" />
          <Swatch name="Info 900" variable="--signals-info-900" />
        </div>
      </Section>
      <Section title="Signals — Positive" description="Success states, won bets, confirmed actions.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <Swatch name="Positive 50" variable="--signals-positive-50" />
          <Swatch name="Positive 200" variable="--signals-positive-200" />
          <Swatch name="Positive 400" variable="--signals-positive-400" />
          <Swatch name="Positive 500" variable="--signals-positive-500" />
          <Swatch name="Positive 600" variable="--signals-positive-600" />
          <Swatch name="Positive 700" variable="--signals-positive-700" />
        </div>
      </Section>
      <Section title="Signals — Negative" description="Errors, lost bets, destructive actions.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <Swatch name="Negative 50" variable="--signals-negative-50" />
          <Swatch name="Negative 300" variable="--signals-negative-300" />
          <Swatch name="Negative 500" variable="--signals-negative-500" />
          <Swatch name="Negative 700" variable="--signals-negative-700" />
          <Swatch name="Negative 900" variable="--signals-negative-900" />
        </div>
      </Section>
      <Section title="Signals — Warning" description="Caution states, pending actions.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <Swatch name="Warning 50" variable="--signals-warning-50" />
          <Swatch name="Warning 300" variable="--signals-warning-300" />
          <Swatch name="Warning 500" variable="--signals-warning-500" />
          <Swatch name="Warning 700" variable="--signals-warning-700" />
        </div>
      </Section>
      <Section title="Brand — Red" description="Tipico brand red. Used sparingly for brand CTAs and navigation.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <Swatch name="Red 50" variable="--colors-red-50" />
          <Swatch name="Red 300" variable="--colors-red-300" />
          <Swatch name="Red 500" variable="--colors-red-500" />
          <Swatch name="Red 700" variable="--colors-red-700" />
          <Swatch name="Red 900" variable="--colors-red-900" />
          <Swatch name="Red 975" variable="--colors-red-975" />
        </div>
      </Section>
      <Section title="Haze" description="Cool blue-gray tones for secondary backgrounds and odds.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          <Swatch name="Haze 50" variable="--colors-haze-50" />
          <Swatch name="Haze 200" variable="--colors-haze-200" />
          <Swatch name="Haze 300" variable="--colors-haze-300" />
          <Swatch name="Haze 500" variable="--colors-haze-500" />
          <Swatch name="Haze 800" variable="--colors-haze-800" />
        </div>
      </Section>
    </div>
  ),
};

export const Semantic: Story = {
  name: "Semantic (Theme-Aware)",
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <p className="text-subtile text-sm mb-6">These tokens change between Light and Dark. Switch the theme in the toolbar to see the difference.</p>
      <Section title="Text Colors" description="Use these for all text. Never hardcode hex for text.">
        <Swatch name="text-highlight" variable="--text-highlight" />
        <Swatch name="text-standard" variable="--text-standard" />
        <Swatch name="text-subtile" variable="--text-subtile" />
        <Swatch name="text-placeholder" variable="--text-placeholder" />
        <Swatch name="text-interaction" variable="--text-interaction" />
        <Swatch name="text-black" variable="--text-black" />
        <Swatch name="text-white" variable="--text-white" />
      </Section>
      <Section title="Background — Surfaces" description="Page and container backgrounds.">
        <Swatch name="bg-surface" variable="--bg-surface" />
        <Swatch name="bg-card" variable="--bg-card" />
        <Swatch name="bg-modal" variable="--bg-modal" />
        <Swatch name="bg-dialog" variable="--bg-dialog" />
        <Swatch name="bg-overlay" variable="--bg-overlay" />
        <Swatch name="bg-input" variable="--bg-input" />
        <Swatch name="bg-inlay" variable="--bg-inlay" />
        <Swatch name="bg-inline-message" variable="--bg-inline-message" />
      </Section>
      <Section title="Background — Interactive" description="Buttons, odds, lists, navigation.">
        <Swatch name="bg-interaction-default" variable="--bg-interaction-default" />
        <Swatch name="bg-interaction-active" variable="--bg-interaction-active" />
        <Swatch name="bg-list-hover" variable="--bg-list-hover" />
        <Swatch name="bg-list-active" variable="--bg-list-active" />
        <Swatch name="bg-odds-default" variable="--bg-odds-default" />
        <Swatch name="bg-odds-selected" variable="--bg-odds-selected" />
        <Swatch name="bg-tabbar" variable="--bg-tabbar" />
        <Swatch name="bg-dropdown" variable="--bg-dropdown" />
      </Section>
      <Section title="Background — CTA (Buttons)" description="Primary, Secondary, Tertiary call-to-action backgrounds.">
        <Swatch name="bg-cta-primary" variable="--bg-cta-primary" />
        <Swatch name="bg-cta-secondary" variable="--bg-cta-secondary" />
        <Swatch name="bg-cta-tertiary" variable="--bg-cta-tertiary" />
        <Swatch name="bg-cta-ghost" variable="--bg-cta-ghost" />
      </Section>
      <Section title="Background — Navigation" description="App bar and bottom navigation.">
        <Swatch name="bg-navigation-brand" variable="--bg-navigation-brand" />
        <Swatch name="bg-navigation-default" variable="--bg-navigation-default" />
      </Section>
      <Section title="Borders" description="Use border-standard for most borders, subtile for dividers.">
        <Swatch name="border-strong" variable="--border-strong" />
        <Swatch name="border-highlight" variable="--border-highlight" />
        <Swatch name="border-standard" variable="--border-standard" />
        <Swatch name="border-subtile" variable="--border-subtile" />
        <Swatch name="border-interaction" variable="--border-interaction" />
      </Section>
      <Section title="Branding — Global" description="Brand colors resolved from theme. Use via Tailwind: text-brand, bg-brand, etc.">
        <Swatch name="branding-brand" variable="--global-styling-branding-brand" />
        <Swatch name="branding-interaction" variable="--global-styling-branding-interaction" />
        <Swatch name="branding-primary" variable="--global-styling-branding-primary" />
        <Swatch name="branding-secondary" variable="--global-styling-branding-secondary" />
        <Swatch name="branding-tertiary" variable="--global-styling-branding-tertiary" />
      </Section>
      <Section title="Signals — Semantic" description="Signal colors resolved per theme. These are the values used by Alert, Toast, Pill, etc.">
        <Swatch name="signals-bg-info" variable="--signals-bg-info" />
        <Swatch name="signals-bg-positive" variable="--signals-bg-positive" />
        <Swatch name="signals-bg-negative" variable="--signals-bg-negative" />
        <Swatch name="signals-bg-warning" variable="--signals-bg-warning" />
        <Swatch name="signals-bg-info-subtile" variable="--signals-bg-info-subtile" />
        <Swatch name="signals-bg-positive-subtile" variable="--signals-bg-positive-subtile" />
        <Swatch name="signals-bg-negative-subtile" variable="--signals-bg-negative-subtile" />
        <Swatch name="signals-bg-warning-subtile" variable="--signals-bg-warning-subtile" />
      </Section>
      <Section title="CTA Text Colors" description="Text colors on CTA buttons — ensure contrast.">
        <Swatch name="branding-text-cta-primary" variable="--branding-text-cta-primary" />
        <Swatch name="branding-text-cta-secondary" variable="--branding-text-cta-secondary" />
        <Swatch name="branding-text-cta-brand" variable="--branding-text-cta-brand" />
        <Swatch name="signals-text-info" variable="--signals-text-info" />
        <Swatch name="signals-text-positive" variable="--signals-text-positive" />
        <Swatch name="signals-text-negative" variable="--signals-text-negative" />
        <Swatch name="signals-text-warning" variable="--signals-text-warning" />
      </Section>
    </div>
  ),
};
