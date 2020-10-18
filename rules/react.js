module.exports = {
  parser: "babel-eslint",

  env: {
    browser: true,
    es6: true,
    node: true
  },

  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  rules: {
    "no-return-assign": ["warn", "always"],
    'react/prop-types': 'off',
    'react/display-name': ['off', {ignoreTranspilerName: false}],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', 'never', {allowMultiline: true}],
    'react/jsx-indent-props': "off",
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
    'react/jsx-no-literals': ['off', {noStrings: true}],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-sort-props': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-will-update-set-state': 'off',
    'react/no-direct-mutation-state': 'off',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-target-blank': ['error', {enforceDynamicLinks: 'always'}],
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx']}],
    'react/jsx-no-comment-textnodes': 'error',
    'react/no-render-return-value': 'error',
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 'error',
    'react/boolean-prop-naming': ['off', {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: '',
    }],
    'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
    'react/jsx-one-expression-per-line': ['warn', {allow: 'single-child'}],
    'react/destructuring-assignment': ['warn', 'always'],
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false,
    }],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/no-unsafe': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    "react/jsx-curly-newline": "off",
    'react/jsx-no-useless-fragment': 'off',
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  }
}