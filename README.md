# eslint-config-webstrong

[![npm version](https://badge.fury.io/js/eslint-config-webstrong.svg)](https://badge.fury.io/js/eslint-config-webstrong.svg)

React and React Native specific linting rules for ESLint

## Configuration

Our default export contains all of our ESLint rules, including ECMAScript 6+ React and React Native. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y` and `eslint-plugin-react-native`.

Install requires pacakges:

  ```sh
  npx install-peerdeps --dev eslint-config-webstrong
  ```

## Usage

We export three ESLint configurations for your usage.

### eslint-config-webstrong

Basic rules for react

`"extends": ["webstrong"]`

### eslint-config-webstrong/hooks

Rules for react hooks

`"extends": ["webstrong", "webstrong/hooks]`

### eslint-config-webstrong/native

Rules for react native

`"extends": ["webstrong", "webstrong/native]`
