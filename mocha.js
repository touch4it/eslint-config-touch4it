import globals from 'globals';
import mocha from 'eslint-plugin-mocha';

import defaultConfig from './index.js';

// TODO check and add tests

const config = [
  ...defaultConfig,
  {
    plugins: {
      mocha,
    },

    languageOptions: {
      ...defaultConfig[0].languageOptions,
      globals: {
        ...defaultConfig[0].languageOptions.globals,
        ...globals.mocha,
      },
    },

    rules: {
      ...mocha.configs.flat.recommended.rules,
      'prefer-arrow-callback': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-async-describe': 'off',
    },
  },
];

export default config;
