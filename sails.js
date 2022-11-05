module.exports = {
  extends: [
    'touch4it/node',
    'touch4it/commonjs',
  ],
  globals: {
    sails: true,
    async: true,
    _: true,
  },
  rules: {
    'no-console': 'error',
  },
};
