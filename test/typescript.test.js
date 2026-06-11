import assert from 'node:assert';

import {defaultConfig} from '../index.js';
import {typescriptConfig} from '../typescript.js';
import {
  configureEslint,
  runEslintFile,
  matchRule,
  matchSeverity,
} from './utils/eslint.js';

describe('TypeScript rules', function () {
  let eslint;
  let config;

  before(async function () {
    config = [...defaultConfig, ...typescriptConfig];
    eslint = configureEslint(config);
  });

  it('Config exists', function () {
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
    assert.ok(config.some(entry => entry.rules && Object.keys(entry.rules).length > 0));
  });

  describe('TypeScript rules', function () {
    it('Tests rule "@typescript-eslint/no-require-imports"', async function () {
      const errors = await runEslintFile('./test/test-file.ts', eslint);
      const matchedErrors = matchRule(errors, '@typescript-eslint/no-require-imports');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "@typescript-eslint/no-restricted-types"', async function () {
      const errors = await runEslintFile('./test/test-file.ts', eslint);
      const matchedErrors = matchRule(errors, '@typescript-eslint/no-restricted-types');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "@typescript-eslint/no-inferrable-types"', async function () {
      const errors = await runEslintFile('./test/test-file.ts', eslint);
      const matchedErrors = matchRule(errors, '@typescript-eslint/no-inferrable-types');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "@typescript-eslint/naming-convention"', async function () {
      const errors = await runEslintFile('./test/test-file.ts', eslint);
      const matchedErrors = matchRule(errors, '@typescript-eslint/naming-convention');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "@stylistic/indent"', async function () {
      const errors = await runEslintFile('./test/test-file.ts', eslint);
      const matchedErrors = matchRule(errors, '@stylistic/indent');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });
});
