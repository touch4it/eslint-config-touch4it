import assert from 'node:assert';
import fs from 'node:fs';

import {defaultConfig} from '../index.js';
import {nodeConfig} from '../node.js';

import {
  configureEslint,
  runEslint,
  matchRule,
  matchSeverity,
} from './utils/eslint.js';

describe('Node rules', () => {
  let eslint;
  let testFile;
  let config;

  before(async function () {
    config = [...defaultConfig, ...nodeConfig];
    eslint = configureEslint(config);

    testFile = fs.readFileSync('./test/test-file', {encoding: 'utf-8'});
  });

  it('Config exists', function () {
    assert.ok(typeof config === 'object');
    assert.ok(config !== null);

    assert.ok(typeof config === 'object');
    assert.ok(config.rules !== null);
  });

  describe('Inherited rules', function () {
    it('Tests rule "@stylistic/quotes"', async function () {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, '@stylistic/quotes');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "unicorn/no-process-exit"', async function () {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'unicorn/no-process-exit');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "unicorn/prefer-module"', async function () {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'unicorn/prefer-module');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });

  describe('Node rules', () => {
    it('Tests rule "n/no-process-exit"', async function () {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'n/no-process-exit');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "n/prefer-global/process"', async function () {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'n/prefer-global/process');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });
});
