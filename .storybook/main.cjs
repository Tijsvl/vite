module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "staticDirs": [
    "../assets",
    {from: "../public/rel/fonts", to: "fonts"},
    {from: "../public/rel/icons", to: "icons"}
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
}