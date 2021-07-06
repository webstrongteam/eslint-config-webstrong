module.exports = {
  extends: [
    './rules/react-native.js',
    './rules/react.js',
    './rules/javascript.js',
  ].map(require.resolve)
};