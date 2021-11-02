import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import commonConfig from '../webpack-config-common';

const config = merge(commonConfig, {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../../src/server/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../../build'),
    libraryTarget: 'commonjs2',
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: 'server/js/chunk.[name].[chunkhash].js',
  },
  mode: 'development',
  node: {
    __filename: true,
    __dirname: false,
  },
  plugins: [
    new ProgressPlugin(),
    new NodemonPlugin({
      verbose: true,
      script: path.resolve(__dirname, '../../build/index.js'),
      watch: [
        path.resolve(__dirname, '../../build/server'),
        path.resolve(__dirname, '../../build/index.js'),
      ],
    }),
  ],
  externals: [nodeExternals()],
});

export default config;
