import jsdoc from 'eslint-plugin-jsdoc';

const config = [
  jsdoc.configs['flat/recommended'],
  {
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['category'],
      }],
    },
  },
];

export default config;
