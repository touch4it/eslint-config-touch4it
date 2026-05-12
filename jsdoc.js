import jsdocPlugin from 'eslint-plugin-jsdoc';

export const jsdocConfig = [
  {
    ...jsdocPlugin.configs['flat/recommended'],
    rules: {
      ...jsdocPlugin.configs['flat/recommended'].rules,
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['category'],
      }],
    },
  },
];

export default jsdocConfig;
