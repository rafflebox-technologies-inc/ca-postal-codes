module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
    '!<rootDir>/src/types/**',
    '!<rootDir>/node_modules/',
    '!<rootDir>/*.js',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.json',
    },
  },
  testTimeout: 60000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [ '<rootDir>/config.*.js'],
};
