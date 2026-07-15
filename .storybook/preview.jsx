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

      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.body.setAttribute("data-theme", theme);
      }, [theme]);

      return (
        <div data-theme={theme} style={{ backgroundColor: "rgb(var(--bg-surface))", padding: "16px", borderRadius: "8px", minHeight: "48px" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
