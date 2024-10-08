import globals from 'globals';

import xoBrowser from 'eslint-config-xo/browser';

import defaultConfig from './index.js';

const config = [
  {
    ...defaultConfig,
    languageOptions: {
      ...defaultConfig.languageOptions,
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    rules: {
      ...defaultConfig.rules,
      ...xoBrowser,
    },
  },
];

export default config;
