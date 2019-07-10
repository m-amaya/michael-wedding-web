const { resolve } = require('path');

/**
 * Directory Paths
 */
const ROOT = resolve(__dirname);
const OUTPUT = resolve(ROOT, 'dist');

const PATHS = {
  cache: resolve(ROOT, 'node_modules', '.cache'),
  configs: {
    babel: resolve(ROOT, 'babel.config.js'),
    tsconfig: resolve(ROOT, 'tsconfig.json'),
  },
  entry: resolve(ROOT, 'index.tsx'),
  favicon: resolve(ROOT, 'assets', 'icons', 'favicon.ico'),
  index: {
    input: resolve(ROOT, 'index.html'),
    output: resolve(OUTPUT, 'index.html'),
  },
  src: {
    app: resolve(ROOT, 'app'),
    assets: resolve(ROOT, 'assets'),
    settings: resolve(ROOT, 'settings'),
    services: resolve(ROOT, 'services'),
    store: resolve(ROOT, 'store'),
    styles: resolve(ROOT, 'styles'),
  },
  root: ROOT,
  output: OUTPUT,
};

/**
 * Services
 */
const mailChimp =
  process.env.MAILCHIMP_URL || '';

const SERVICES = {
  mailChimp,
};

module.exports = {
  PATHS,
  SERVICES,
};
