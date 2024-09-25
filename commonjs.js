import globals from 'globals';

import defaults from './index.js';

// TODO check and add tests
export default [
  ...defaults,
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },

    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
];
