import globals from 'globals';

import {fixupPluginRules} from '@eslint/compat';
import eslintComments from 'eslint-plugin-eslint-comments';
import xoConfig from 'eslint-config-xo';
import avaPlugin from 'eslint-plugin-ava';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import stylisticPlugin from '@stylistic/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';

const config = [
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.nodeBuiltin,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      ava: fixupPluginRules(avaPlugin),
      'eslint-comments': eslintComments,
      import: fixupPluginRules(importPlugin),
      promise: promisePlugin,
      unicorn: fixupPluginRules(unicornPlugin),
      '@stylistic': fixupPluginRules(stylisticPlugin),
    },

    rules: {
      ...xoConfig[0].rules,
      camelcase: 'error',

      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
      }],

      'no-multi-spaces': ['error', {
        ignoreEOLComments: true,
      }],

      'no-inline-comments': 'warn',
      'prefer-template': 'warn',
      'require-atomic-updates': 'warn',

      'spaced-comment': ['error', 'always', {
        block: {
          exceptions: ['*'],
          markers: ['!'],
        },
      }],

      'eslint-comments/disable-enable-pair': ['error', {
        allowWholeFile: true,
      }],

      'eslint-comments/no-aggregating-enable': 'error',
      'eslint-comments/no-duplicate-disable': 'error',
      'eslint-comments/no-unused-disable': 'error',
      'eslint-comments/no-unused-enable': 'error',

      'import/default': 'error',
      'import/export': 'error',

      'import/extensions': ['error', 'always', {
        ignorePackages: true,
      }],

      'import/first': 'error',
      'import/named': 'error',

      'import/namespace': ['error', {
        allowComputed: true,
      }],

      'import/newline-after-import': ['error', {}],
      'import/no-absolute-path': 'error',
      'import/no-self-import': 'error',

      'import/no-cycle': ['error', {
        ignoreExternal: true,
      }],

      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-amd': 'error',

      'import/no-duplicates': ['error', {
        'prefer-inline': true,
      }],

      'import/no-empty-named-blocks': 'error',

      'import/no-extraneous-dependencies': ['error', {
        includeTypes: true,
      }],

      'import/no-mutable-exports': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-named-as-default': 'error',

      'import/order': ['error', {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        warnOnUnassignedImports: true,
      }],

      'import/no-unassigned-import': ['error', {
        allow: [
          '@babel/polyfill',
          '**/register',
          '**/register.*',
          '**/register/**',
          '**/register/**.*',
          '**/*.css',
          '**/*.scss',
          '**/*.sass',
          '**/*.less',
        ],
      }],

      'import/no-anonymous-default-export': 'error',
      'import/no-named-default': 'error',
      'unicorn/consistent-function-scoping': 'off',

      'unicorn/expiring-todo-comments': ['error', {
        allowWarningComments: true,
      }],

      'unicorn/explicit-length-check': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-process-exit': 'error',
      'no-process-exit': 'off',
      'unicorn/prefer-flat-map': 'off',

      'unicorn/prevent-abbreviations': ['error', {
        checkFilenames: false,
        checkDefaultAndNamespaceImports: false,
        checkShorthandImports: false,
        extendDefaultReplacements: false,

        replacements: {
          application: {
            app: true,
          },

          applications: {
            apps: true,
          },

          arr: {
            array: true,
          },

          blacklist: {
            exclude: true,
          },

          e: {
            error: true,
            event: true,
          },

          el: {
            element: true,
          },

          elem: {
            element: true,
          },

          err: {
            error: true,
          },

          len: {
            length: true,
          },

          master: {
            main: true,
          },

          msg: {
            message: true,
          },

          num: {
            number: true,
          },

          obj: {
            object: true,
          },

          opts: {
            options: true,
          },

          param: {
            parameter: true,
          },

          params: {
            parameters: true,
          },

          prev: {
            previous: true,
          },

          req: {
            request: true,
          },

          res: {
            response: true,
            result: true,
          },

          ret: {
            returnValue: true,
          },

          slave: {
            secondary: true,
          },

          str: {
            string: true,
          },

          temp: {
            temporary: true,
          },

          tmp: {
            temporary: true,
          },

          val: {
            value: true,
          },

          whitelist: {
            include: true,
          },
        },

        allowList: {
          app: true,
          req: true,
          res: true,
          param: true,
          params: true,
        },
      }],

      'unicorn/better-regex': ['error', {
        sortCharacterClasses: false,
      }],

      'unicorn/no-empty-file': 'off',

      'unicorn/string-content': ['error', {
        patterns: {
          '\\.\\.\\.': '…',
        },
      }],

      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-ternary': ['error', 'only-single-line'],

      'promise/param-names': 'error',
      'promise/no-return-wrap': [
        'error',
        {
          allowReject: true,
        },
      ],
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/valid-params': 'error',
      'promise/prefer-await-to-then': 'error',
      'unicorn/prefer-module': 'error',
    },
  },
];

export default config;
