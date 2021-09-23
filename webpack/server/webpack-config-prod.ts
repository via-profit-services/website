import path from 'path';
import { ProgressPlugin } from 'webpack';
import { merge } from 'webpack-merge';

import baseConfig from './webpack-config-base';

const config = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../../src/server/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    libraryTarget: 'commonjs2',
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: 'server/js/chunk.[name].[chunkhash].js',
  },
  devtool: false,
  plugins: [new ProgressPlugin()],
});

export default config;
