import remarkGfm from "remark-gfm";
import svgr from "vite-plugin-svgr";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  framework: "@storybook/react-vite",
  staticDirs: [],
  viteFinal: async (config) => {
    config.publicDir = false;
    config.build = config.build || {};
    config.build.cssMinify = false;
    config.plugins = config.plugins || [];
    config.plugins.push(svgr());
    return config;
  },
};

export default config;
