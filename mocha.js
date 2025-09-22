import globals from 'globals';
import mocha from 'eslint-plugin-mocha';

// eslint-disable-next-line no-warning-comments
// TODO check and add tests

const config = [
  {
    plugins: {
      mocha,
    },

    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },

    rules: {
      ...mocha.configs.flat.recommended.rules,
      'prefer-arrow-callback': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-async-describe': 'off',
    },
  },
];

export default config;
