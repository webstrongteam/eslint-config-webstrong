module.exports = {
  extends: [
    './rules/node.js',
    './rules/javascript.js',
  ].map(require.resolve)
};