import "./tipico-ui.css";

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
    (Story) => {
      document.documentElement.setAttribute("data-theme", "tipico-light");
      document.body.setAttribute("data-theme", "tipico-light");
      return <Story />;
    },
  ],
};

export default preview;
