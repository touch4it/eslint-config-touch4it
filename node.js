module.exports = {
  plugins: [
    'mocha',
    'node'
  ],
  extends: [
    'plugin:mocha/recommended',
    'plugin:node/recommended',
    'touch4it'
  ],
  env: {
    es6: true,
    mocha: true,
    node: true
  },
  rules: {
    // Node
    'node/file-extension-in-import': [
      'error',
      'always',
      {
        // TypeScript doesn't yet support using extensions and fails with error TS2691.
        '.ts': 'never',
        '.tsx': 'never'
      }
    ],
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/process-exit-as-throw': 'error',
    'node/no-deprecated-api': 'error',
    'node/prefer-global/buffer': [
      'error',
      'always'
    ],
    'node/prefer-global/console': [
      'error',
      'always'
    ],
    'node/prefer-global/process': [
      'error',
      'always'
    ],
    'node/prefer-global/text-decoder': [
      'error',
      'always'
    ],
    'node/prefer-global/text-encoder': [
      'error',
      'always'
    ],
    'node/prefer-global/url-search-params': [
      'error',
      'always'
    ],
    'node/prefer-global/url': [
      'error',
      'always'
    ],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'node/no-mixed-requires': [
      'error',
      {
        grouping: true,
        allowCall: true
      }
    ],
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
  }
};
