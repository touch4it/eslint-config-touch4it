import globals from 'globals';

import xoBrowser from 'eslint-config-xo/browser';

import defaultConfig from './index.js';

const config = [
  ...defaultConfig,
  {
    plugins: {
      ...defaultConfig[0].plugins,
    },

    languageOptions: {
      ...defaultConfig[0].languageOptions,
      globals: {
        ...defaultConfig[0].languageOptions.globals,
        ...globals.browser,
      },
    },
    rules: {
      ...defaultConfig[0].rules,
      ...xoBrowser,
    },
  },
];

export default config;
