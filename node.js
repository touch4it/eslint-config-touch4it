module.exports = {
  plugins: [
    'mocha',
    'node'
  ],
  extends: [
    'plugin:mocha/recommended',
    'plugin:n/recommended',
    'touch4it'
  ],
  env: {
    es2019: true,
    mocha: true,
    node: true,
  },
  rules: {
    // Node
    'n/file-extension-in-import': [
      'error',
      'always',
      {
        // TypeScript doesn't yet support using extensions and fails with error TS2691.
        '.ts': 'never',
        '.tsx': 'never'
      }
    ],
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'error',
    'n/no-missing-import': 'error',
    'n/no-missing-require': 'error',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'n/process-exit-as-throw': 'error',
    'n/no-deprecated-api': 'error',
    'n/prefer-global/buffer': [
      'error',
      'never'
    ],
    'n/prefer-global/console': [
      'error',
      'always'
    ],
    'n/prefer-global/process': [
      'error',
      'never'
    ],
    'n/prefer-global/text-decoder': [
      'error',
      'always'
    ],
    'n/prefer-global/text-encoder': [
      'error',
      'always'
    ],
    'n/prefer-global/url-search-params': [
      'error',
      'always'
    ],
    'n/prefer-global/url': [
      'error',
      'always'
    ],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'n/no-mixed-requires': [
      'error',
      {
        grouping: true,
        allowCall: true,
      }
    ],
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-unsupported-features/es-syntax': 'off',
  }
};
