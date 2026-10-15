import {configs as jsdocConfigs} from 'eslint-plugin-jsdoc';

export const jsdocConfig = [
  {
    ...jsdocConfigs['flat/recommended'],
    rules: {
      ...jsdocConfigs['flat/recommended'].rules,
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['category'],
      }],
    },
  },
];

export default jsdocConfig;
