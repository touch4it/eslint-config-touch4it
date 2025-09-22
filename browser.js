import globals from 'globals';

import confusingBrowserGlobals from 'confusing-browser-globals';
import xoConfig from 'eslint-config-xo';

export const browserConfig = [
  {
    languageOptions: {
      ...xoConfig[0].languageOptions,
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    rules: {
      ...xoConfig[0].rules,
      'no-restricted-globals': [
        'error',
        ...confusingBrowserGlobals,
      ],
    },
  },
];
