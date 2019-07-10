const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { NamedModulesPlugin, EnvironmentPlugin } = require('webpack');
const { PATHS } = require('../settings');

module.exports = {
  entry: { app: ['react-hot-loader/patch', PATHS.entry] },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      app: PATHS.src.app,
      assets: PATHS.src.assets,
      settings: PATHS.src.settings,
      services: PATHS.src.services,
      store: PATHS.src.store,
      styles: PATHS.src.styles,
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.png$/,
      //   loader: 'file-loader',
      // },
      // {
      //   test: /\.svg$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'svg-url-loader',
      //     options: {
      //       limit: 8192,
      //       stripdeclarations: true,
      //       iesafe: true,
      //       encoding: 'base64',
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      filename: PATHS.index.output,
      template: PATHS.index.input,
      // favicon: PATHS.favicon,
    }),
    new CopyWebpackPlugin([
      {
        context: PATHS.src.assets,
        from: '**/*',
        to: 'assets/',
      },
    ]),
    new EnvironmentPlugin({
      //* Defaults in settings.js
      MAILCHIMP_URL: null,
    }),
  ],
  target: 'web',
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
};
