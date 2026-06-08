import {ESLint} from 'eslint';

function configureEslint(config) {
  return new ESLint({
    // useEslintrc: false,
    overrideConfig: config,
  });
}

async function runEslint(string, eslint, options = {}) {
  const [errors] = await eslint.lintText(string, options);
  return errors?.messages ?? [];
}

async function runEslintFile(filePath, eslint) {
  const results = await eslint.lintFiles([filePath]);
  return results[0]?.messages ?? [];
}

function matchRule(errors, ruleName) {
  return errors.filter(error => error.ruleId === ruleName);
}

function matchSeverity(matchedErrors, severity) {
  return matchedErrors.every(error => error.severity == severity);
}

export {
  configureEslint,
  runEslint,
  runEslintFile,
  matchRule,
  matchSeverity,
};
