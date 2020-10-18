module.exports = {
  extends: [
    './rules/typescript.js',
  ].map(require.resolve),
  rules: {}
};