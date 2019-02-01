const path = require('path')
const { defaults: tsjPreset } = require('ts-jest/presets')

const currentPath = path.resolve(__dirname)
const setupFilePath = path.resolve(currentPath, 'init-test.js')

module.exports = {
  ...tsjPreset,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
  ],
  setupFiles: [setupFilePath],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
}
