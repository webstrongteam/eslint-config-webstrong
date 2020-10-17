module.exports = {
  extends: [
    './rules/react-native.js',
  ].map(require.resolve),
  rules: {}
};