// craco.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./paths.json",
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("postcss-nested"),
        require("autoprefixer"),
      ],
    },
  },
};
