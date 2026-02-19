# eslint-config-touch4it

![npm peer dependency version (scoped)](https://img.shields.io/npm/dependency-version/eslint-config-touch4it/peer/eslint)
![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)
![npm version](https://img.shields.io/npm/v/eslint-config-touch4it)
![node version](https://img.shields.io/node/v/eslint-config-touch4it)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-touch4it)
![last commit](https://img.shields.io/github/last-commit/touch4it/eslint-config-touch4it)

> ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [XO](https://github.com/xojs/eslint-config-xo)-based projects

## Install

```bash
npm install --save-dev eslint-config-touch4it
```

## Usage (ESLint 9+ Flat Config)

**1. Create a new `eslint.config.js` in your project root.**

**2. Import and use the configs you need:**

```js
import { defaultConfig } from 'eslint-config-touch4it';

export default [
  ...defaultConfig,
];
```

## Extended Example

```js
import {
  defaultConfig,
  mochaConfig,
  jsdocConfig,
  nodeConfig,
} from 'eslint-config-touch4it';

const config = [
  ...defaultConfig,
  ...nodeConfig,
  ...mochaConfig.map(cfg => ({
    files: ['test/**/*.js'],
    ...cfg,
  })),
  ...jsdocConfig,
  {
    files: ['**/*.js'],
    rules: {
      'mocha/no-mocha-arrows': 'off'
    },
    ignores: [
      "node_modules/",
      ".eslintcache",
      ".env",
      ".npm",
      "package-lock.json",
    ]
  },
];

export default config;
```

## License

[ISC](https://opensource.org/licenses/ISC) © [Touch4IT](https://www.touch4it.com)
