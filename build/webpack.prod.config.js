const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const { PATHS } = require('../settings');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: resolve(PATHS.cache, 'uglifyjs-webpack-plugin'),
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      // * Explicitly setting the node environment for clarity
      NODE_ENV: 'production',
    }),
  ],
});
