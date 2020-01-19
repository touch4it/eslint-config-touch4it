module.exports = {
  env: {
    es6: true
  },
  plugins: [
    'ava',
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
    'promise/prefer-await-to-then': 'error',
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
