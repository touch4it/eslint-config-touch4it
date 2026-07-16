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

Peer dependency expects ESLint 10, for example `npm install eslint@^10.7.0 --save-dev`

### Breaking: Node.js version

ESLint 10 and this config expect a supported Node.js release (for example `>= 22` as in this package’s `engines`). Older Node versions are not supported.

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

### Breaking: Unicorn rule renames

`eslint-plugin-unicorn` renamed and removed some rules used by this config:

| Before | After |
| --- | --- |
| `unicorn/prevent-abbreviations` | `unicorn/name-replacements` |
| `unicorn/better-regex` | replaced by `eslint-plugin-regexp` (XO `xo/regexp` rules; `regexp/sort-character-class-elements` is off, same as previous `sortCharacterClasses: false`) |
| `unicorn/prefer-flat-map` | `unicorn/prefer-array-flat-map` |

Update any local overrides or `eslint-disable` comments accordingly.

## Dependency upgrades after 21.0.0 (impact review)

### Peer / runtime

| Requirement | Impact |
| --- | --- |
| `eslint@^10.7.0` | Projects still on `10.3.x` must upgrade (unicorn needs `>=10.4`) |
| Node `>=22` (prefer `^22.13.0 \|\| >=24`) | Matches ESLint / jsdoc / unicorn engines; Node 20 is unsupported |

### `defaultConfig` (via `eslint-config-xo` 0.51 → 0.57)

Only core + `@stylistic/*` rules from XO base are applied (plugin rules from XO are filtered out).

**Stricter / noisier for consumers**
- `no-restricted-imports` — many legacy packages newly banned (`mkdirp`, `rimraf`, `object-assign`, `isarray`, …)
- `@stylistic/curly-newline` — `"always"` → `{consistent: true}` (different formatting)
- `@stylistic/no-mixed-operators` — groups option added

**Looser / rules turned off or removed**
- `no-return-await` removed
- `no-buffer-constructor` removed
- `logical-assignment-operators` → off
- `no-negated-condition` → off
- `@stylistic/brace-style` allows single-line braces
- `capitalized-comments` ignore pattern widened

### Unicorn (`63` → `71`)

This preset does **not** enable Unicorn recommended — only explicitly listed unicorn rules run. Upgrade impact is limited to those rules + renames above. No sudden flood of new unicorn errors from the major bump alone.

### `nodeConfig` (`eslint-plugin-n` 17 → 18)

- Package is ESM (this repo already is)
- `n/no-unpublished-bin` dropped from upstream recommended; this preset still sets it to `error`
- Optional peers `typescript` / `ts-declaration-location` only matter for advanced `n/no-sync` TS ignores

### `typescriptConfig` (highest consumer risk)

Filter now keeps only `xo/typescript*` blocks (no longer matches by file glob, which could pull `xo/jsdoc-typescript` without the jsdoc plugin).

**New / likely noisy**
- `@typescript-eslint/strict-boolean-expressions` (error) — often many findings
- `@typescript-eslint/no-unnecessary-template-expression`
- `@typescript-eslint/no-unnecessary-type-conversion`
- same expanded restricted-imports list as JS

**Relaxed vs previous XO**
- `member-ordering`, `no-unnecessary-boolean-literal-compare`, `no-unnecessary-type-arguments`, `no-unsafe-argument` off/removed
- `no-empty-interface`, `no-unsafe-type-assertion` removed

XO peers `typescript>=6` and `prettier>=3` are optional; `typescript-eslint` still accepts TypeScript `<6.1.0`.

### Low impact for this preset

- `eslint-plugin-ava` 17 — plugin is registered, but AVA recommended rules are not enabled here
- `eslint-plugin-jsdoc` 63 — mainly drops Node 20; recommended rule set otherwise similar
- `eslint` 10.3 → 10.7 — minor within v10; no flat-config redesign
