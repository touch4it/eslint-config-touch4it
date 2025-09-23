import browserConfig from './browser.js';
import jsdocConfig from './jsdoc.js';
import mochaConfig from './mocha.js';
import nodeConfig from './node.js';
import defaultConfig from './index.js';

const config = [
  ...defaultConfig,
  ...nodeConfig.map(cfg => ({
    files: ['**/*.node.js', 'scripts/**/*.js'],
    ...cfg,
  })),
  ...mochaConfig.map(cfg => ({
    files: ['test/**/*.js'],
    ...cfg,
  })),
  ...jsdocConfig.map(cfg => ({
    files: ['**/*.js'],
    ...cfg,
  })),
  ...browserConfig.map(cfg => ({
    files: ['src/browser/**/*.js'],
    ...cfg,
  })),
];

export default config;
