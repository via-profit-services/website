import path from 'path';
import dotenv from 'dotenv';
import NodemonPlugin from 'nodemon-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import { ProgressPlugin } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack-config-common';

dotenv.config();
const isDev = process.env.NODE_ENV === 'development';
const config = merge(commonConfig, {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../src/server/index.ts'),
  },
  output: {
    path: isDev
      ? path.join(__dirname, '../build')
      : path.join(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'server/js/chunk.[chunkhash].js',
  },
  mode: isDev ? 'development' : 'production',
  optimization: {
    minimize: !isDev,
  },
  node: {
    __filename: true,
    __dirname: false,
  },
  plugins: [
    new ProgressPlugin(),
    // development only plugins
    ...(isDev
      ? [
          new NodemonPlugin({
            verbose: true,
            script: path.resolve(__dirname, '../build/index.js'),
            watch: [
              path.resolve(__dirname, '../build/server'),
              path.resolve(__dirname, '../build/index.js'),
            ],
          }),
        ]
      : // production only plugins
        []),
  ],
  externals: isDev? [nodeExternals()] : [],
});

export default config;
