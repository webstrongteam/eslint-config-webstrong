# eslint-config-webstrong

[![npm version](https://badge.fury.io/js/eslint-config-webstrong.svg)](https://badge.fury.io/js/eslint-config-webstrong.svg)

React, React Hooks, React Native, TypeScript, NodeJS and NextJS specific linting rules for ESLint.

## Configuration

Our default export contains all of our ESLint rules, including ECMAScript 6+ React, React Hooks, React Native, TypeScript, NodeJS and NextJS support.

Install eslint-config-webstrong

  ```sh
  npm install --save-dev eslint-config-webstrong
  ```

Install requires packages:

  ```sh
  npx install-peerdeps --dev eslint-config-webstrong
  ```

## Usage

We export five ESLint configurations for your usage dependent on your technology.

### eslint-config-webstrong

Basic rules for React

`"extends": ["webstrong"]`

### eslint-config-webstrong/hooks

Rules for React Hooks

`"extends": ["webstrong/hooks"]`

### eslint-config-webstrong/native

Rules for React Native

`"extends": ["webstrong/native"]`

### eslint-config-webstrong/typescript

Rules for TypeScript

`"extends": ["webstrong/typescript"]`

### eslint-config-webstrong/node

Rules for NodeJS

`"extends": ["webstrong/node"]`

### eslint-config-webstrong/next

Rules for NextJS

`"extends": ["webstrong/next"]`

## Connecting rules

Also, you can connect few rules e.g.

`"extends": ["webstrong/typescript", "webstrong"]`

## Authors

### WebStrong &copy;
> **Web:** https://webstrong.pl <br />
> **GitHub:** https://github.com/webstrongteam
