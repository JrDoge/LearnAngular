export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [`./setup.js`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `./mock-module.js`,
  },
};