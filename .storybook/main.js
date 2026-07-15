/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  framework: "@storybook/react-vite",
  staticDirs: [],
  viteFinal: async (config) => {
    config.publicDir = false;
    config.css = config.css || {};
    config.css.lightningcss = undefined;
    config.build = config.build || {};
    config.build.cssMinify = false;
    return config;
  },
};

export default config;
