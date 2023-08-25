module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        jsxBracketSameLine: false,
        bracketSpacing: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        proseWrap: 'preserve',
      },
    ],
  },
};
