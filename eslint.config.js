import path from 'node:path';
import {fileURLToPath} from 'node:url';

import globals from 'globals';
import js from '@eslint/js';

import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('eslint:recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'array-element-newline': ['error', 'consistent'],
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
    },
  },
];
