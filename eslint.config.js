import mochaConfig from './mocha.js';
import defaultConfig from './index.js';

const config = [
  ...defaultConfig,
  {
    ...mochaConfig[1],
    files: ['test/*.js', 'test/**/*.js'],
  },
];

export default config;
