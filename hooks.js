module.exports = {
  extends: [
    './rules/react.js',
    './rules/react-hooks.js',
    './rules/javascript.js',
  ].map(require.resolve)
};