module.exports = {
  extends: [
    './rules/javascript.js',
    './rules/typescript.js',
  ].map(require.resolve),
  rules: {}
};