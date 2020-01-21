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
    'xo',
    'xo/esnext'
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
    'multiline-ternary': [
      'error',
      'always-multiline'
    ],
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
      {
        js: 'never',
        jsx: 'never',
        json: 'always'
      }
    ],
    'import/namespace': [
      'error',
      {
        allowComputed: true
      }
    ],
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
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
          '@babel/register'
        ]
      }
    ],

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
    'unicorn/prevent-abbreviations': 'off'
  }
};
