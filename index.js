module.exports = {
  env: {
    es6: true
  },
  plugins: [
    'ava',
    'eslint-comments',
    'import',
    'promise',
    'unicorn'
  ],
  extends: [
    'plugin:ava/recommended',
    'plugin:unicorn/recommended',
    'xo'
  ],
  rules: {
    camelcase: 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'no-inline-comments': 'warn',
    'prefer-template': 'warn',
    'require-atomic-updates': 'warn',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: ['*'],
          markers: ['!']
        }
      }
    ],

    // Eslint comments
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true
      }
    ],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    // Import
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        // TypeScript doesn't yet support using extensions and fails with error TS2691.
        pattern: {
          ts: 'never',
          tsx: 'never'
        }
      }
    ],
    'import/first': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true
      }
    ],
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': [
      'error',
      {
        ignoreExternal: true
      }
    ],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/order': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '@babel/polyfill',
          '**/register',
          '**/register.*',
          '**/register/**',
          '**/register/**.*',
          '**/*.css',
          '**/*.scss',
          '**/*.sass',
          '**/*.less'
        ]
      }
    ],
    'import/no-anonymous-default-export': 'error',
    'import/no-named-default': 'error',

    // Promise
    'promise/prefer-await-to-then': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': [
      'error',
      {
        allowReject: true
      }
    ],
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',

    // Unicorn
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true
      }
    ],
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-process-exit': 'error',
    'no-process-exit': 'off',
    'unicorn/prefer-flat-map': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        checkDefaultAndNamespaceImports: false,
        checkShorthandImports: false,
        extendDefaultReplacements: false,
        replacements: {
          // Not part of `eslint-plugin-unicorn`
          application: {
            app: true
          },
          applications: {
            apps: true
          },

          // Part of `eslint-plugin-unicorn`
          arr: {
            array: true
          },
          blacklist: {
            denyList: true
          },
          e: {
            error: true,
            event: true
          },
          el: {
            element: true
          },
          elem: {
            element: true
          },
          err: {
            error: true
          },
          len: {
            length: true
          },
          master: {
            main: true
          },
          msg: {
            message: true
          },
          num: {
            number: true
          },
          obj: {
            object: true
          },
          opts: {
            options: true
          },
          param: {
            parameter: true
          },
          params: {
            parameters: true
          },
          prev: {
            previous: true
          },
          req: {
            request: true
          },
          res: {
            response: true,
            result: true
          },
          ret: {
            returnValue: true
          },
          slave: {
            secondary: true
          },
          str: {
            string: true
          },
          temp: {
            temporary: true
          },
          tmp: {
            temporary: true
          },
          val: {
            value: true
          },
          whitelist: {
            allowList: true
          }
        },
        allowList: {
          req: true,
          res: true
        }
      }
    ],
    // The character class sorting is a bit buggy at the moment.
    'unicorn/better-regex': [
      'error',
      {
        sortCharacterClasses: false
      }
    ],
    'unicorn/consistent-destructuring': 'off',
    'unicorn/string-content': [
      'error',
      {
        patterns: {
          '\\.\\.\\.': '…'
        }
      }
    ],
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-ternary': [
      'error',
      'only-single-line'
    ],
  }
};
