module.exports = {
  extends: [
    './rules/javascript.js',
    './rules/node.js',
  ].map(require.resolve),
  rules: {}
};