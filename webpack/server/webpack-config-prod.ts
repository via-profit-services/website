import path from 'path';
import { merge } from 'webpack-merge';
import CopyPlugin from 'copy-webpack-plugin';

import commonConfig from '../webpack-config-common';

const config = merge(commonConfig, {
  target: 'node',
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../../src/server/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    libraryTarget: 'commonjs2',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'server/js/chunk.[name].[chunkhash].js',
  },
  optimization: {
    minimize: false,
  },
  devtool: false,
  node: {
    __filename: true,
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../scripts/restart.sh'),
          to: path.resolve(__dirname, '../../dist/restart.sh'),
        },
      ],
    }) as any,
  ],
});

export default config;
