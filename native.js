module.exports = {
  extends: [
    './rules/react.js',
    './rules/react-native.js',
    './rules/javascript.js',
  ].map(require.resolve)
};