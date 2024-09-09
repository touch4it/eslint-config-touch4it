import path from 'node:path';
import {fileURLToPath} from 'node:url';

import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

import defaults from './index.js';

export default [
  ...defaults,
  ...compat.extends('plugin:jsdoc/recommended'),
  {
    languageOptions: {
      globals: {},
    },

    rules: {
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['category'],
      }],
    },
  },
];
