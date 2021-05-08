import LoadablePlugin from '@loadable/webpack-plugin';
import dotenv from 'dotenv';
import FileManagerPlugin from 'filemanager-webpack-plugin';
import NodemonPlugin from 'nodemon-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { ProgressPlugin } from 'webpack';
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
    path: path.join(__dirname, '../../build/server'),
  },
  mode: 'development',
  plugins: [
    new LoadablePlugin() as any,
    new webpack.DefinePlugin(p),
    new ProgressPlugin(),
    new NodemonPlugin({
      verbose: true,
      script: path.resolve(__dirname, '../../build/server/index.js'),
      watch: [
        path.resolve(__dirname, '../../build'),
      ],
    }),

  ],
  externals: [nodeExternals()],
});


export default config;
