module.exports = {
  env: {
    "react-native/react-native": true,
  },

  plugins: ['react-native'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "react-native/no-unused-styles": 'error',
    "react-native/split-platform-components": 'error',
    "react-native/no-color-literals": 'error',
    "react-native/no-raw-text": 'error',
  },
};