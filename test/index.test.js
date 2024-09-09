import assert from 'node:assert';
import fs from 'node:fs';

import {
  configureEslint,
  runEslint,
  matchRule,
  matchSeverity,
} from './utils/eslint.js';

import config from '../index.js';

describe('Main rules', async function() {
  let eslint;
  let testFile;

  before(async function() {
    eslint = configureEslint(config);

    testFile = fs.readFileSync('./test/test-file', {encoding: 'utf-8'});
  });

  it('Config exists', function() {
    assert.ok(typeof config === 'object');
    assert.ok(config !== null);

    assert.ok(typeof config === 'object');
    assert.ok(config.rules !== null);
  });

  describe('Defined rules', async function() {
    it('Tests rule "camelcase"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'camelcase');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "indent"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, '@stylistic/indent');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });

  describe('Unicorn rules', async function() {
    it('Tests rule "unicorn/prevent-abbreviations"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'unicorn/prevent-abbreviations');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "unicorn/no-process-exit"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'unicorn/no-process-exit');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });

  describe('XO / Ava rules', async function() {
    it('Tests rule "comma-dangle"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, '@stylistic/comma-dangle');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "quotes"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, '@stylistic/quotes');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "semi"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, '@stylistic/semi');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "space-before-function-paren"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, '@stylistic/space-before-function-paren');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });
});
