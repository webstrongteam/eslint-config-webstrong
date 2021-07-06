module.exports = {
  extends: [
    './rules/react-hooks.js',
    './rules/react.js',
    './rules/javascript.js',
  ].map(require.resolve)
};