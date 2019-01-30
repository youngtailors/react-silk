module.exports = {
  parser: 'eslint-plugin-typescript/parser',
  extends: ['typescript-recommended', 'plugin:prettier/recommended'],
  plugins: ['typescript'],
  rules: {
    'no-unexpected-multiline': 'error',
    'sort-keys': 'off',
    'sort-imports': 'off',
    'typescript/explicit-member-accessibility': 'off',
    camelcase: 'off',
    'no-console': 'warn',
    'max-classes-per-file': 'off',
    'no-shadow': 'off',
    'no-empty': 'off',
    'one-var': 'off',
    'typescript/no-var-requires': 'off',
    'typescript/interface-name-prefix': 'off',
  },
}
