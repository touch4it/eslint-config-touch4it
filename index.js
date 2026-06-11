import globals from 'globals';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import eslintConfigXo from 'eslint-config-xo';
import avaPlugin from 'eslint-plugin-ava';
import importPlugin from 'eslint-plugin-import-x';
import promisePlugin from 'eslint-plugin-promise';
import unicornPlugin from 'eslint-plugin-unicorn';
import stylisticPlugin from '@stylistic/eslint-plugin';

const xoRules = eslintConfigXo().find(config => config.name === 'xo/base').rules;
const excludedXoOnlyRules = [
  'no-nested-ternary',
  'function-call-argument-newline',
  'require-unicode-regexp',
  'no-shadow',
  'preserve-caught-error',
];
const xoRuleEntries = Object.entries(xoRules).filter(([ruleName]) => (
  (!ruleName.includes('/') || ruleName.startsWith('@stylistic/'))
  && !ruleName.startsWith('@typescript-eslint/')
  && !excludedXoOnlyRules.includes(ruleName)
));
const xoOnlyRules = Object.fromEntries(xoRuleEntries);

export const defaultConfig = [
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
      ava: avaPlugin,
      '@eslint-community/eslint-comments': eslintComments,
      'import-x': importPlugin,
      promise: promisePlugin,
      unicorn: unicornPlugin,
      '@stylistic': stylisticPlugin,
    },
    settings: {
      'import-x/resolver': {
        node: true,
      },
    },
    rules: {
      ...xoOnlyRules,
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
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', {
        allowWholeFile: true,
      }],
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-enable': 'error',
      'import-x/default': 'error',
      'import-x/export': 'error',
      'import-x/extensions': ['error', 'always', {
        ignorePackages: true,
      }],
      'import-x/first': 'error',
      'import-x/named': 'error',
      'import-x/namespace': ['error', {
        allowComputed: true,
      }],
      'import-x/newline-after-import': ['error', {}],
      'import-x/no-absolute-path': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-cycle': ['error', {
        ignoreExternal: true,
      }],
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-duplicates': ['error', {
        'prefer-inline': true,
      }],
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-extraneous-dependencies': ['error', {
        includeTypes: true,
      }],
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/order': ['error', {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        warnOnUnassignedImports: true,
      }],
      'import-x/no-unassigned-import': ['error', {
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
      'import-x/no-anonymous-default-export': 'error',
      'import-x/no-named-default': 'error',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/expiring-todo-comments': ['error', {
        allowWarningComments: true,
        terms: ['TODO'],
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
      'unicorn/string-content': 'off',
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

export {browserConfig} from './browser.js';
export {jsdocConfig} from './jsdoc.js';
export {mochaConfig} from './mocha.js';
export {nodeConfig} from './node.js';
export {typescriptConfig} from './typescript.js';

export default defaultConfig;
