module.exports = {
  'testEnvironment': 'jsdom',
  'moduleNameMapper': {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.css$': '<rootDir>/mockTransformer.js',
  },
};
