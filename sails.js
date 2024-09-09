import commonJsConfig from './common.js';
import nodeConfig from './node.js';

// TODO check and add tests
export default [
  ...commonJsConfig,
  ...nodeConfig,
  {
    languageOptions: {
      globals: {
        sails: true,
        async: true,
        _: true,
      },
    },

    rules: {
      'no-console': 'error',
    },
  },
];
