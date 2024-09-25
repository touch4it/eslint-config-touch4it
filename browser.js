import globals from 'globals';

import xoBrowser from 'eslint-config-xo/browser';

import defaults from './index.js';

// TODO check and add tests
export default [
  ...defaults,
  ...xoBrowser,
  {
    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.node).map(([key]) => [key, 'off'])),
        ...globals.browser,
      },
    },
  },
];
