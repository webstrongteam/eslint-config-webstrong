module.exports = {
  env: {
    "react-native/react-native": true,
  },

  plugins: ['react-native'],

  rules: {
    "react-native/no-unused-styles": 'error',
    "react-native/split-platform-components": 'error',
    "react-native/no-raw-text": 'error',
    "react-native/no-color-literals": 'off',
  },
};