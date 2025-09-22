import browserConfig from './browser.js';
import jsdocConfig from './jsdoc.js';
import mochaConfig from './mocha.js';
import nodeConfig from './node.js';
import defaultConfig from './index.js';

const config = [
  ...defaultConfig,

  ...nodeConfig.map(cfg => ({
    ...cfg,
    files: ['**/*.node.js', 'scripts/**/*.js'],
  })),

  ...mochaConfig.map(cfg => ({
    ...cfg,
    files: ['test/**/*.js'],
  })),

  ...jsdocConfig.map(cfg => ({
    ...cfg,
    files: ['**/*.js'],
  })),

  ...browserConfig.map(cfg => ({
    ...cfg,
    files: ['src/browser/**/*.js'],
  })),
];

export default config;
