import path from 'node:path';
import {fileURLToPath} from 'node:url';
import globals from 'globals';

import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';
import mocha from 'eslint-plugin-mocha';

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
  ...compat.extends('plugin:mocha/recommended'),
  {
    plugins: {
      mocha,
    },

    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
