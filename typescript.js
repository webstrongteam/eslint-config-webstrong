module.exports = {
  extends: [
    './rules/typescript.js',
    './rules/javascript.js',
  ].map(require.resolve),
};