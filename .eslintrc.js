/* eslint-env node */

module.exports = {
  env: { es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'universe/native',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'sonarjs', 'unicorn', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    eqeqeq: ['error', 'always'],
    curly: 'error',
    semi: 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'error',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'unicorn/no-null': 'off',
  },
};
