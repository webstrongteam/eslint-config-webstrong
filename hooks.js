module.exports = {
  extends: [
    './rules/javascript.js',
    './rules/react.js',
    './rules/react-hooks.js',
  ].map(require.resolve),
  rules: {}
};