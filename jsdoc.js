module.exports = {
  env: {
    es2019: true,
  },
  extends: [
    'plugin:jsdoc/recommended',
  ],
  rules: {
    'jsdoc/check-tag-names': [
      'error',
      {
        'definedTags': [
          'category',
        ],
      },
    ],
  },
};
