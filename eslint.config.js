import { nodeConfig } from './node.js';
import { mochaConfig } from './mocha.js';
import { jsdocConfig } from './jsdoc.js';
import { browserConfig } from './browser.js';
import defaultConfig from './index.js';

export default [
  ...defaultConfig,
  ...nodeConfig,
  ...mochaConfig,
  ...jsdocConfig,
  ...browserConfig,
];