# ESLint 9 and 10 – eslint-config-touch4it

## ESLint 9

### Breaking: `eslint` package need to be updated to version 9

`eslint` package need to be updated to version 9, for example `npm install eslint@^9.12.0 --save-dev`

### Breaking: `.eslintrc` removed

The `.eslintrc` file is now removed, need to be created `eslint.config.js`, because new version using `Flat config`.

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

## ESLint 10

### Breaking: `eslint` package need to be updated to version 10

Peer dependency expects ESLint 10, for example `npm install eslint@^10.3.0 --save-dev`

### Breaking: Node.js version

ESLint 10 and this config expect a supported Node.js release (for example `>= 20.19` as in this package’s `engines`). Older Node versions are not supported.

### Breaking: flat config only in ESLint 10

Legacy `.eslintrc.*` is not supported in ESLint 10. Projects must use `eslint.config.js` (or equivalent flat config). See the [official ESLint v10 migration guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0) for other engine and CLI changes.

### Breaking: `eslint-plugin-import` → `eslint-plugin-import-x` (rule and settings namespace)

This config uses [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) with the plugin id **`import-x`**, not `import`. That affects anything that referenced the old `import` plugin name.

| Before (`eslint-plugin-import`) | After (`eslint-plugin-import-x`) |
| --- | --- |
| Rules `import/…` | Rules `import-x/…` |
| `settings.import/resolver` | `settings['import-x/resolver']` |
| `eslint-disable import/order` (and similar) | `eslint-disable import-x/order` |

If your `eslint.config.js` overrides rules, merges configs, or adds `plugins.import`, rename them to the `import-x` namespace to match this package. You can remove `eslint-plugin-import` if you only kept it to mirror the previous rule set.
