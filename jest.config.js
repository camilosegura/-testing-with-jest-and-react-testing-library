module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.css$': require.resolve('./test/style-mock.js'),
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**/*.js',
    ],
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
        './src/shared/**/*.js': {
            statements: 20,
            branches: 20,
            functions: 20,
            lines: 20,
        },
    },
  }