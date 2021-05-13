import LoadablePlugin from '@loadable/webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import 'webpack-dev-server';

import baseConfig from './webpack-config-base';


dotenv.config();

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../../src/app.tsx'),
  },
  output: {
    path: path.join(__dirname, '../../build/public/'),
  },
  optimization: {
    minimize: false,
  },
  // Add development plugins
  plugins: [
    new LoadablePlugin() as WebpackPluginInstance,
    new webpack.DefinePlugin({
      'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT),
      'process.env.SERVER_HOSTNAME': JSON.stringify(process.env.SERVER_HOSTNAME),
    }),
    // new CircularDependencyPlugin({
    //   exclude: /a\.js|node_modules/,
    //   failOnError: false,
    // }) as WebpackPluginInstance,
    new webpack.HotModuleReplacementPlugin(),
    // new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
      openAnalyzer: true,
    }) as any,
    new HtmlWebpackPlugin({
      inject: true,
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Webpack App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
          <div id="app"></div>
          </body>
        </html>
      `,
    }),

  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    clientLogLevel: 'warning',
    contentBase: path.join(__dirname, '../../build/public'),
    inline: true,
    hot: true,
    compress: true,
    writeToDisk: true,
    port: Number(process.env.WEBPACK_DEV_SERVER_PORT),
    host: process.env.SERVER_HOSTNAME,
    // disableHostCheck: true,
  },
  performance: {
    hints: false,
  },
});
