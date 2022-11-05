const {ESLint} = require('eslint');

function configureEslint(config) {
  return new ESLint({
    useEslintrc: false,
    overrideConfig: config,
  });
}

async function runEslint(string, eslint) {
  const [errors] = await eslint.lintText(string);
  return errors?.messages ?? [];
}

function matchRule(errors, ruleName) {
  return errors.filter(error => error.ruleId === ruleName);
}

function matchSeverity(matchedErrors, severity) {
  return matchedErrors.every(error => error.severity == severity);
}

module.exports = {
  configureEslint,
  runEslint,
  matchRule,
  matchSeverity,
};
