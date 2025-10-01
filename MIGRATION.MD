# Eslint 9 Config Touch4IT

## Breaking: `Eslint` package need to be updated to version 9

`Eslint` package need to be updated to version 9, for example `npm install eslint@^9.12.0 --save-dev`

## Breaking: `.eslintrc` removed

The `.eslintrc` file is now removed, need to be created `eslint.config.js`, becouse new version using `Flat config`. 

Example:

```js
import { defaultConfig, mochaConfig, nodeConfig, jsdocConfig, browserConfig } from 'eslint-config-touch4it';

export default [
  ...defaultConfig,
  ...nodeConfig.map(cfg => ({
    files: ['**/*.node.js', 'scripts/**/*.js'],
    ...cfg,
  })),
  ...mochaConfig.map(cfg => ({
    files: ['test/**/*.js'],
    ...cfg,
  })),
  ...jsdocConfig.map(cfg => ({
    files: ['**/*.js'],
    ...cfg,
  })),
  ...browserConfig.map(cfg => ({
    files: ['src/browser/**/*.js'],
    ...cfg,
  })),
];
```