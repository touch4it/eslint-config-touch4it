import assert from 'node:assert';
import fs from 'node:fs';

import config from '../mocha.js';
import {
  configureEslint,
  runEslint,
  matchRule,
  matchSeverity,
} from './utils/eslint.js';

describe('Mocha rules', async function () {
  let eslint;
  let testFile;

  before(async function () {
    eslint = configureEslint(config);

    testFile = fs.readFileSync('./test/test-file-mocha', {encoding: 'utf-8'});
  });

  it('Config exists', function () {
    assert.ok(typeof config === 'object');
    assert.ok(config !== null);

    assert.ok(typeof config === 'object');
    assert.ok(config.rules !== null);
  });

  describe('Inherited rules', async function () {
    it('Tests rule "no-mocha-arrows"', async function () {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'no-mocha-arrows');
      assert.ok(matchedErrors.length === 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });
});
