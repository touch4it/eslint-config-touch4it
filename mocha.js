import globals from 'globals';
import mocha from 'eslint-plugin-mocha';

// TODO check and add tests

export const mochaConfig = [
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
      ...mocha.configs.recommended.rules,
      'prefer-arrow-callback': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-async-suite': 'off',
    },
  },
];

export default mochaConfig;
