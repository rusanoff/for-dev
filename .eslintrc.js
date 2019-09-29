module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {},
  overrides: [
    {
      env: {
        es6: true,
        node: true,
        browser: true,
      },
      extends: [
        'eslint:recommended',
        'airbnb',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      files: [
        "**/*.ts",
        "**/*.tsx"
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
        'react',
        'jsx-a11y',
      ],
      rules: {
        /* ESLint Rules */

        // Possible Errors
        "no-console": [
          'error',
          {
            allow: [
              'warn',
              'error',
            ],
          },
        ],
        // ECMAScript 6
        "arrow-body-style": [
          'error',
          'always',
        ],
        // Stylistic Issues
        "object-curly-spacing": [
          'error',
          'always',
        ],
        "object-curly-newline": [
          'error',
          {
            ObjectExpression: 'always',
            ObjectPattern: {
              multiline: true,
            },
            ImportDeclaration: 'never',
            ExportDeclaration: {
              multiline: true,
              minProperties: 1,
            },
          },
        ],
        "semi": [
          'error',
          'always',
        ],

        /* Rules For React */
        "react/button-has-type": 'warn',
        "react/default-props-match-prop-types": 'error',
        "react/destructuring-assignment": [
          'error',
          'always',
        ],
        "react/display-name": 'error',
        "react/forbid-component-props": 'error',
        "react/forbid-dom-props": 'error',
        // JSX-specific rules
        "react/jsx-curly-newline": [
          'error',
          {
            multiline: 'require',
            singleline: 'forbid',
          },
        ],
        "react/jsx-curly-spacing": [
          'error',
          {
            when: 'always',
            children: true,
            allowMultiline: true,
          },
        ],
        "react/jsx-uses-react": 'error',
        "react/jsx-uses-vars": 'error',
        "react/jsx-filename-extension": [
          'error',
          {
            extensions: [
              '.jsx',
              '.tsx',
            ],
          },
        ],
        "react/prop-types": 'off',

        /* Import Rules */
        "import/prefer-default-export": 'off',
      },
    },
  ],
};
