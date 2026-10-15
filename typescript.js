import eslintConfigXo from 'eslint-config-xo';

export const typescriptConfig = eslintConfigXo({space: true}).filter(config => config?.name?.startsWith('xo/typescript'));

export default typescriptConfig;
