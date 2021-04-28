module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**/*.js',
        '**/server/**/*.js',
        '!**/__tests__/**',
        '!**/__tests_server__/**',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
            statements: 10,
            branches: 10,
            functions: 10,
            lines: 10,
        },
        './src/shared/**/*.js': {
            statements: 20,
            branches: 20,
            functions: 20,
            lines: 20,
        },
    },
    projects: [
        './test/jest.client.js',
        './test/jest.server.js',
    ],
  }