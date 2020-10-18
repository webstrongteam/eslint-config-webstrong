# eslint-config-webstrong

[![npm version](https://badge.fury.io/js/eslint-config-webstrong.svg)](https://badge.fury.io/js/eslint-config-webstrong.svg)

React, React Hooks, React Native and TypeScript specific linting rules for ESLint.

## Configuration

Our default export contains all of our ESLint rules, including ECMAScript 6+ React, React Hooks, React Native and TypeScript support.

Install eslint-config-webstrong

  ```sh
  npm install --dev eslint-config-webstrong
  ```

Install requires pacakges:

  ```sh
  npx install-peerdeps --dev eslint-config-webstrong
  ```

## Usage

We export four ESLint configurations for your usage dependent on your technology.

### eslint-config-webstrong

Basic rules for React

`"extends": ["webstrong"]`

### eslint-config-webstrong/hooks

Rules for React Hooks

`"extends": ["webstrong", "webstrong/hooks]`

### eslint-config-webstrong/native

Rules for React Native

`"extends": ["webstrong", "webstrong/native]`

### eslint-config-webstrong/typescript

Rules for TypeScript

`"extends": ["webstrong/typescript]`

## Authors

### WebStrong &copy;
> **Web:** https://webstrong.pl <br />
> **GitHub:** https://github.com/webstrongteam
