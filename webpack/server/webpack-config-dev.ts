import dotenv from 'dotenv';
import LoadablePlugin from '@loadable/webpack-plugin';
import NodemonPlugin from 'nodemon-webpack-plugin';
import path from 'path';
import { ProgressPlugin, DefinePlugin } from 'webpack';
import { merge } from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import baseConfig from './webpack-config-base';

const env = dotenv.config();

const p = {};
Object.entries(env.parsed).forEach(([key, value]) => {
  p[`process.env.${key}`] = JSON.stringify(value);
});

const config = merge(baseConfig, {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../../src/server/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../../build'),
    filename: '[name].bundle.js',
    chunkFilename: 'server/js/[name].[chunkhash].bundle.js',
  },
  mode: 'development',
  plugins: [
    new DefinePlugin(p),
    new LoadablePlugin() as any,
    new ProgressPlugin(),
    new NodemonPlugin({
      verbose: true,
      script: path.resolve(__dirname, '../../build/server/index.js'),
      watch: [path.resolve(__dirname, '../../build')],
    }),
  ],
  externals: [nodeExternals()],
});

export default config;
