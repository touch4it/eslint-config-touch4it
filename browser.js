import globals from 'globals';

import eslintConfigXo from 'eslint-config-xo';

const xoRules = eslintConfigXo().find(config => config.name === 'xo/base').rules;
const excludedXoOnlyRules = [
  'no-nested-ternary',
  'function-call-argument-newline',
  'require-unicode-regexp',
  'no-shadow',
  'preserve-caught-error',
];
const xoRuleEntries = Object.entries(xoRules).filter(([ruleName]) => (!ruleName.includes('/') || ruleName.startsWith('@stylistic/')) && !excludedXoOnlyRules.includes(ruleName));
const xoOnlyRules = Object.fromEntries(xoRuleEntries);
const xoLanguageOptions = eslintConfigXo().find(config => config.name === 'xo/base').languageOptions;

export const browserConfig = [
  {
    languageOptions: {
      ...xoLanguageOptions,
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    rules: {
      ...xoOnlyRules,
    },
  },
];

export default browserConfig;
