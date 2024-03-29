const assert = require('node:assert');
const fs = require('node:fs');

const {
  configureEslint,
  runEslint,
  matchRule,
  matchSeverity,
} = require('./utils/eslint.js');

const mergeConfigs = require('./utils/merge-configs.js');

describe('Node rules', async function() {
  let config;
  let eslint;
  let testFile;

  before(function() {
    const indexConfig = require('../index.js');
    const nodeConfig = require('../node.js');

    config = mergeConfigs({}, indexConfig, nodeConfig);
    config.extends.splice(config.extends.indexOf('touch4it'), 1);

    eslint = configureEslint(config);

    testFile = fs.readFileSync('./test/test-file', {encoding: 'utf-8'});
  });

  it('Config exists', function() {
    assert.ok(typeof config === 'object');
    assert.ok(config !== null);

    assert.ok(typeof config === 'object');
    assert.ok(config.rules !== null);

    assert.ok(!config.extends.includes('touch4it'));
  });

  describe('Inherited rules', async function() {
    it('Tests rule "quotes"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'quotes');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "unicorn/no-process-exit"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'unicorn/no-process-exit');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "unicorn/prefer-module"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'unicorn/prefer-module');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });

  describe('Node rules', async function() {
    it('Tests rule "n/no-process-exit"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'n/no-process-exit');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });

    it('Tests rule "n/prefer-global/process"', async function() {
      const errors = await runEslint(testFile, eslint);
      const matchedErrors = matchRule(errors, 'n/prefer-global/process');
      assert.ok(matchedErrors.length > 0);
      assert.ok(matchSeverity(matchedErrors, 2));
    });
  });
});
