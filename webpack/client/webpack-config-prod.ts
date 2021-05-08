import LoadablePlugin from '@loadable/webpack-plugin';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import baseConfig from './webpack-config-base';

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../../src/app.tsx'),
    babel: '@babel/polyfill',
  },
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, '../../dist/public/'),
  },
  devtool: false,
  plugins: [
    new LoadablePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
      openAnalyzer: true,
    }) as any,
  ],
  optimization: {
    minimize: false,
  },
});
