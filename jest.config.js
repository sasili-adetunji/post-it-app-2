module.exports = {
  setupFiles: [
    '<rootDir>/mock/localStorage',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/server/test/',
  ],
  coveragePathIgnorePatterns: [
    'localStorage',
  ],
};
