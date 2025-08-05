const presets = [
  [
    "@babel/preset-env",
    {
      targets: "defaults, not IE 11, not dead",
      useBuiltIns: "entry",
      corejs: "^3",
    },
  ],
];

const plugins = ["@babel/plugin-transform-class-properties"];

module.exports = { presets, plugins };
