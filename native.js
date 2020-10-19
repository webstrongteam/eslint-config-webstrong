module.exports = {
  extends: [
    './rules/javascript.js',
    './rules/react.js',
    './rules/react-native.js',
  ].map(require.resolve),
  rules: {}
};