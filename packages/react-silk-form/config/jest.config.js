const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  rootDir: '../',
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFiles: ['<rootDir>/config/initTest.js'],
}
