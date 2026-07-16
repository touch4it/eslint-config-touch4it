# Migration guide

Each section describes upgrading **to** that version of `eslint-config-touch4it`.

| Upgrade | Section |
| --- | --- |
| 21 → 22 | [22.0.0](#2200) |
| 20 → 21 | [21.0.0](#2100) |
| 19 → 20 | [20.0.0](#2000) |
| 18 → 19 | [19.0.0](#1900) |

---

## 22.0.0

**From:** `eslint-config-touch4it@21`

### Install

```bash
npm install eslint-config-touch4it@^22.0.0
npm install eslint@^10.7.0 --save-dev
```

**Requirements:** Node `>= 22`, ESLint `^10.7.0` (was `^10.3.0` in v21).

### Update in your project

Only needed if you reference these rules in `eslint.config.js`, overrides, or `eslint-disable` comments:

| v21 | v22 |
| --- | --- |
| `unicorn/prevent-abbreviations` | `unicorn/name-replacements` |
| `unicorn/better-regex` | `regexp/*` (via `eslint-plugin-regexp`) |
| `unicorn/prefer-flat-map` | `unicorn/prefer-array-flat-map` |

`unicorn/better-regex` was removed upstream. v22 uses XO regexp rules instead; `regexp/sort-character-class-elements` stays off (same as old `sortCharacterClasses: false`).

No change to `eslint.config.js` imports is required if you already use `typescriptConfig` from this package.

### Possible new lint findings

Dependency bumps (`eslint-config-xo` 0.57, `eslint-plugin-unicorn` 71, `eslint-plugin-n` 18, and others) may surface new issues:

- **JS** — stricter `no-restricted-imports` (legacy packages like `mkdirp`, `rimraf`, `object-assign`), `@stylistic/curly-newline`, `@stylistic/no-mixed-operators`
- **TypeScript** — new `@typescript-eslint/strict-boolean-expressions`, `no-unnecessary-template-expression`, `no-unnecessary-type-conversion`; same expanded import ban as JS
- **Regexp** — new `regexp/*` rules (replacement for `unicorn/better-regex`)

Some rules were relaxed or removed (`no-return-await`, `logical-assignment-operators`, several `@typescript-eslint/*` strict rules). Unicorn recommended is not enabled — only explicit unicorn rules in this config apply.

---

## 21.0.0

**From:** `eslint-config-touch4it@20`

TypeScript rules were moved to a separate export: `typescriptConfig` from `typescript.js`.

```js
import { defaultConfig, typescriptConfig } from 'eslint-config-touch4it';

export default [
  ...defaultConfig,
  ...typescriptConfig,
];
```

---

## 20.0.0

**From:** `eslint-config-touch4it@19`

### Install

```bash
npm install eslint-config-touch4it@^20.0.0
npm install eslint@^10.3.0 --save-dev
```

**Requirements:** Node `>= 22`, ESLint `^10.3.0`, flat config only (no `.eslintrc.*`).

See also the [ESLint v10 migration guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0).

### Update in your project

`eslint-plugin-import` was replaced with `eslint-plugin-import-x`. Rename everything from the `import` namespace to `import-x`:

| Before | After |
| --- | --- |
| Rules `import/…` | Rules `import-x/…` |
| `settings.import/resolver` | `settings['import-x/resolver']` |
| `eslint-disable import/order` | `eslint-disable import-x/order` |

`eslint-plugin-eslint-comments` was replaced with `@eslint-community/eslint-plugin-eslint-comments` (rule prefix `@eslint-community/eslint-comments/`).

---

## 19.0.0

**From:** `eslint-config-touch4it@18` (or older with `.eslintrc`)

### Breaking changes

- Migrated to flat config — create `eslint.config.js`, remove `.eslintrc.*`
- Rewritten to ESM (CJS and `commonjs` / `sails` configs removed)
- Node `>= 18`

### Example `eslint.config.js`

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

### Install ESLint 9+

```bash
npm install eslint@^9.12.0 --save-dev
```
