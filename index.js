module.exports = {
  extends: [
    './rules/react',
    './rules/javascript.js',
  ].map(require.resolve)
};