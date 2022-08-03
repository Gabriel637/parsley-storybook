module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "refs": {
      'design-system': {
        title: 'My design system',
        //👇 The url provided by Chromatic when it was deployed
        url: 'https://62ea5a7471e21338a5f856d9-olswsxvctt.chromatic.com/',
      },
    },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}