import path from 'node:path';
import {fileURLToPath} from 'node:url';

import node from 'eslint-plugin-n';
import globals from 'globals';
import js from '@eslint/js';

import {FlatCompat} from '@eslint/eslintrc';

import defaults from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...defaults,
  ...compat.extends('plugin:n/recommended'),
  {
    plugins: {
      ...defaults.plugins,
      node,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      ...defaults.rules,
      'n/file-extension-in-import': ['error', 'always'],
      'n/no-extraneous-import': 'error',
      'n/no-extraneous-require': 'error',
      'n/no-missing-import': 'error',
      'n/no-missing-require': 'error',
      'n/no-unpublished-bin': 'error',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      'n/process-exit-as-throw': 'error',
      'n/no-deprecated-api': 'error',
      'n/prefer-global/console': ['error', 'always'],
      'n/prefer-global/process': ['error', 'never'],
      'n/prefer-global/text-decoder': ['error', 'always'],
      'n/prefer-global/text-encoder': ['error', 'always'],
      'n/prefer-global/url-search-params': ['error', 'always'],
      'n/prefer-global/url': ['error', 'always'],
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',

      'n/no-mixed-requires': ['error', {
        grouping: true,
        allowCall: true,
      }],

      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-unsupported-features/es-syntax': 'off',
    },
  },
];
