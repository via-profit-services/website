import LoadablePlugin from '@loadable/webpack-plugin';
import fs from 'fs';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import { Compiler } from 'webpack';

import baseConfig from './webpack-config-base';

module.exports = merge(baseConfig, {
  target: 'web',
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../../src/app.tsx'),
    babel: '@babel/polyfill',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../dist/'),
    filename: 'public/js/[contenthash].js',
    chunkFilename: 'public/js/[chunkhash].js',
  },
  devtool: false,
  plugins: [
    new LoadablePlugin({
      filename: '/stats.json',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
      openAnalyzer: true,
    }) as any,
    {
      apply: (compiler: Compiler) => {
        compiler.hooks.beforeRun.tapAsync('WebpackBeforeBuild', (_, callback) => {

          if (fs.existsSync(path.join(__dirname, '../../dist/public'))) {
            fs.rmdirSync(path.join(__dirname, '../../dist/public'), { recursive: true })
          }

          callback();
        });
      },
    },
  ],
});
