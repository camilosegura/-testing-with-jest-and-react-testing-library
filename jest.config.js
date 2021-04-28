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
    projects: [
        './test/jest.client.js',
        './test/jest.server.js',
    ],
  }