const CircularDependencyPlugin = require('circular-dependency-plugin');
const { EnvironmentPlugin, HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const { PATHS } = require('../settings');

module.exports = merge.strategy({ plugins: 'prepend' })(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: PATHS.output,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    staticOptions: { redirect: false },
    port: 8000,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      // * Explicitly setting the node environment for clarity
      NODE_ENV: 'development',
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
    }),
  ],
});
