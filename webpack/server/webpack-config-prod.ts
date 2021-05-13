import path from 'path';
import fs from 'fs';
import { ProgressPlugin, Compiler } from 'webpack';
import { merge } from 'webpack-merge';

import baseConfig from './webpack-config-base';

const config =  merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../../src/server/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    libraryTarget: 'commonjs2',
    publicPath: '/public/',
    filename: (pathData) => pathData?.chunk?.name === 'index'
      ? 'index.js'
      : 'js/chunk.[chunkhash].js',
    chunkFilename: 'js/chunk.[chunkhash].js',
  },
  devtool: false,
  plugins: [
    new ProgressPlugin(),
    {
      apply: (compiler: Compiler) => {
        compiler.hooks.beforeRun.tapAsync('WebpackBeforeBuild', (_, callback) => {

          if (fs.existsSync(path.join(__dirname, '../../dist/js'))) {
            fs.rmdirSync(path.join(__dirname, '../../dist/js'), { recursive: true })
          }

          callback();
        });
      },
    },
  ],
});


export default config;
