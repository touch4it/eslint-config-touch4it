# eslint-config-touch4it

![npm peer dependency version (scoped)](https://img.shields.io/npm/dependency-version/eslint-config-touch4it/peer/eslint)
![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)
![npm version](https://img.shields.io/npm/v/eslint-config-touch4it)
![node version](https://img.shields.io/node/v/eslint-config-touch4it)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-touch4it)
![last commit](https://img.shields.io/github/last-commit/touch4it/eslint-config-touch4it)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) based on for [XO](https://github.com/xojs/eslint-config-xo)

## Install

```bash
npm install --save-dev eslint-config-touch4it
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
 "name": "my-awesome-project",
 "eslintConfig": {
  "extends": "touch4it"
 }
}
```

Or to `.eslintrc`:

```json
{
 "extends": "touch4it"
}
```

Built for ES6+

This package also exposes [`touch4it/node`](node.js) for general Node.js projects:

```json
{
 "extends": "touch4it/node"
}
```

[`touch4it/sails`](sails.js) for [Sails.js](https://sailsjs.com/) projects:

```json
{
 "extends": "touch4it/sails"
}
```

And [`touch4it/browser`](browser.js) for browser:

```json
{
 "extends": "touch4it/browser"
}
```

## License

ISC © [Touch4IT](https://www.touch4it.com)
