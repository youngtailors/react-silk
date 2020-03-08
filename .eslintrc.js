module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
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
    'no-bitwise': 'off',
    'typescript/no-type-alias': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    react: {
        version: 'detect',
    },
  },
}
