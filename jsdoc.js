import jsdoc from 'eslint-plugin-jsdoc';

import defaultConfig from './index.js';

const config = [
  ...defaultConfig,
  jsdoc.configs['flat/recommended'],
  {
    rules: {
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['category'],
      }],
    },
  },
];

export default config;
