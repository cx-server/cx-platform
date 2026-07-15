import { useEffect } from "react";
import "./tipico-ui.css";
import "./stepper.css";

function ThemeWrapper({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "tipico-light");
    document.body.setAttribute("data-theme", "tipico-light");
  }, []);

  return <div data-theme="tipico-light">{children}</div>;
}

/** @type { import('@storybook/react').Preview } */
const preview = {
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
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default preview;
