import path from 'path';
import fs from 'fs';
import { ProgressPlugin, Compiler } from 'webpack';
import { merge } from 'webpack-merge';

import baseConfig from './webpack-config-base';

const config =  merge(baseConfig, {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, '../../src/server/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../../dist/server'),
    libraryTarget: 'commonjs2',
    publicPath: '/public/',
  },
  mode: 'production',
  devtool: false,
  plugins: [
    new ProgressPlugin(),
    {
      apply: (compiler: Compiler) => {
        compiler.hooks.beforeRun.tapAsync('WebpackBeforeBuild', (_, callback) => {

          if (fs.existsSync(path.join(__dirname, '../../dist/server'))) {
            fs.rmdirSync(path.join(__dirname, '../../dist/server'), { recursive: true })
          }

          callback();
        });

        compiler.hooks.afterEmit.tapAsync('WebpackAfterBuild', (_, callback) => {
          const templates = fs.readdirSync(path.join(__dirname, '../../assets/templates'));
          fs.mkdirSync(path.join(__dirname, '../../dist/server/templates'), { recursive: true });
          templates.forEach((filename) => {
            fs.copyFileSync(
              path.resolve(__dirname, `../../assets/templates/${filename}`),
              path.resolve(__dirname, `../../dist/server/templates/${filename}`),
            );
          });
          callback();
        });

      },
    },
  ],
  optimization: {
    minimize: false,
  },
});


export default config;
