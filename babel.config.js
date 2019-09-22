module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/react",
  ],
  plugins: [
    // Стрелочные функции для методов классов
    "@babel/plugin-proposal-class-properties",
  ],
};
