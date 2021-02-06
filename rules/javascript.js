module.exports = {
  parser: "babel-eslint",

  env: {
    browser: true,
    es6: true,
  },

  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    'prettier',
  ],

  rules: {
    'no-shadow': 'off',
    'no-continue': 'off',
    'no-console': 'warn',
    'consistent-return': 'off',
    'default-case': 'off',
    'spaced-comment': 'off',
    'no-prototype-builtins': 'off',
    'lines-between-class-members': 'off',
    'no-await-in-loop': 'off',
    'no-return-assign': ['warn', 'always'],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': ['error', { props: false }],
    // ESLint bug https://github.com/prettier/prettier-eslint/issues/182
    'implicit-arrow-linebreak': 'off',
    "no-invalid-this": "off",

    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "import/no-namespace": "off",
    "import/no-unresolved": 'off',
  },
}