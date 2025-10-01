import node from 'eslint-plugin-n';
import globals from 'globals';

const baseConfig = node.configs['flat/recommended-script'];

export const nodeConfig = [
  {
    plugins: {
      n: node,
    },
    languageOptions: {
      ...baseConfig.languageOptions,
      globals: {
        ...baseConfig.languageOptions.globals,
        ...globals.es2021,
        ...globals.nodeBuiltin,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...baseConfig.rules,
      'n/file-extension-in-import': ['error', 'always'],
      'n/no-extraneous-import': 'error',
      'n/no-extraneous-require': 'error',
      'n/no-missing-import': 'error',
      'n/no-missing-require': 'error',
      'n/no-unpublished-bin': 'error',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      'n/process-exit-as-throw': 'error',
      'n/no-deprecated-api': 'error',
      'n/prefer-global/console': ['error', 'always'],
      'n/prefer-global/process': ['error', 'never'],
      'n/prefer-global/text-decoder': ['error', 'always'],
      'n/prefer-global/text-encoder': ['error', 'always'],
      'n/prefer-global/url-search-params': ['error', 'always'],
      'n/prefer-global/url': ['error', 'always'],
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'n/no-mixed-requires': ['error', {
        grouping: true,
        allowCall: true,
      }],
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-unsupported-features/es-syntax': 'off',
    },
  },
];

export default nodeConfig;
