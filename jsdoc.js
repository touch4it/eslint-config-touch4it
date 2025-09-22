import jsdoc from 'eslint-plugin-jsdoc';

export const jsdocConfig = [
  {
    ...jsdoc.configs['flat/recommended'],
    rules: {
      ...jsdoc.configs['flat/recommended'].rules,
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['category'],
      }],
    },
  },
];
