import {fileURLToPath} from 'node:url';
import path from 'node:path';

import {
  fixupConfigRules,
  fixupPluginRules,
} from '@eslint/compat';

import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

import ava from 'eslint-plugin-ava';
import eslintComments from 'eslint-plugin-eslint-comments';
import _import from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
import unicorn from 'eslint-plugin-unicorn';
import xo from 'eslint-config-xo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // js.configs.recommended,
  ...fixupConfigRules(compat.extends(
    'plugin:ava/recommended',
    'plugin:unicorn/recommended',
  )),
  xo[0],
  {
    plugins: {
      ava: fixupPluginRules(ava),
      'eslint-comments': eslintComments,
      import: fixupPluginRules(_import),
      promise,
      unicorn: fixupPluginRules(unicorn),
    },

    rules: {
      camelcase: 'error',

      indent: ['error', 2, {
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

      // TODO update "eslint-plugin-import" after it is released with ESLint 9 support
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
    },
  },
];
