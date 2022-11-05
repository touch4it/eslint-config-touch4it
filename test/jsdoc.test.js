const assert = require('node:assert');
const fs = require('node:fs');

const {
  configureEslint,
  runEslint,
  matchRule,
  matchSeverity,
} = require('./utils/eslint.js');

describe('JSDoc rules', async function() {
  let config;
  let eslint;
  let testFile;

  before(function() {
    config = require('../jsdoc.js');
    eslint = configureEslint(config);

    testFile = fs.readFileSync('./test/test-file', {encoding: 'utf-8'});
  });

  it('Config exists', function() {
    assert.ok(typeof config === 'object');
    assert.ok(config !== null);

    assert.ok(typeof config === 'object');
    assert.ok(config.rules !== null);
  });

  describe('JSdoc rules', async function() {
    it('Tests rule "jsdoc/require-jsdoc"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'jsdoc/require-jsdoc');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 1));
    });

    it('Tests rule "jsdoc/require-returns-type"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'jsdoc/require-returns-type');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 1));
    });

    it('Tests rule "jsdoc/no-undefined-types"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'jsdoc/no-undefined-types');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 1));
    });

    it('Tests rule "jsdoc/require-param-type"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'jsdoc/require-param-type');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 1));
    });

    it('Tests rule "jsdoc/require-param"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'jsdoc/require-param');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 1));
    });
  });
});
