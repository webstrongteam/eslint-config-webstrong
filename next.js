module.exports = {
  extends: [
    './rules/react.js',
    './rules/javascript.js',
    './rules/next.js',
  ].map(require.resolve),
};