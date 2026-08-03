import { useEffect } from "react";
import "./tipico-ui.css";
import "./stepper.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Color theme",
      defaultValue: "tipico-light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "tipico-light", title: "Light", icon: "sun" },
          { value: "tipico-dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
    breakpoint: {
      name: "Breakpoint",
      description: "Viewport width breakpoint",
      defaultValue: "full",
      toolbar: {
        icon: "grow",
        items: [
          { value: "full", title: "Full width" },
          { value: "640", title: "sm · 640px" },
          { value: "768", title: "md · 768px" },
          { value: "1200", title: "lg · 1200px" },
          { value: "1280", title: "xl · 1280px" },
          { value: "1440", title: "2xl · 1440px" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "tipico-light";
      const breakpoint = context.globals.breakpoint || "full";

      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.body.setAttribute("data-theme", theme);
      }, [theme]);

      const containerStyle = {
        backgroundColor: "rgb(var(--bg-surface))",
        padding: "16px",
        borderRadius: "8px",
        minHeight: "48px",
        ...(breakpoint !== "full" && {
          maxWidth: `${breakpoint}px`,
          margin: "0 auto",
          border: "1px dashed rgb(var(--border-standard))",
        }),
      };

      return (
        <div data-theme={theme} style={containerStyle}>
          {breakpoint !== "full" && (
            <div style={{ textAlign: "right", fontSize: "11px", color: "rgb(var(--text-subtile))", marginBottom: "8px" }}>
              {breakpoint}px
            </div>
          )}
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
