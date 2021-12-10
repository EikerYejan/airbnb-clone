module.exports = {
  displayName: 'airbnb-clone-api',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/airbnb-clone-api',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 80,
      statements: 80,
    },
  },
}
