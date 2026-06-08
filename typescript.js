import eslintConfigXo, {tsFilesGlob} from 'eslint-config-xo';

const typescriptFilePatterns = new Set([
  tsFilesGlob,
  '**/*.d.ts',
  '**/*.test-d.ts',
  '**/*.tsx',
]);

export const typescriptConfig = eslintConfigXo({space: true}).filter(config => {
  if (!config?.files) {
    return false;
  }

  const files = Array.isArray(config.files) ? config.files : [config.files];
  return files.some(filePattern => typescriptFilePatterns.has(filePattern));
});

export default typescriptConfig;
