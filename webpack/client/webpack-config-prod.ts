import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import { merge } from 'webpack-merge';
import { DefinePlugin } from 'webpack';
// import OfflinePlugin from 'offline-plugin';
// import { GenerateSW } from 'workbox-webpack-plugin';

import baseConfig from './webpack-config-base';

module.exports = merge(baseConfig, {
  target: 'web',
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../../src/app.tsx'),
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../dist'),
    filename: 'public/js/[name].bundle.js',
    chunkFilename: 'public/js/[name].[chunkhash].bundle.js',
  },
  optimization: {
    minimize: false,
  },
  devtool: false,
  plugins: [
    new LoadablePlugin({
      filename: '/stats.json',
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new DefinePlugin({
      SC_DISABLE_SPEEDY: false, // Set as true to disable CSSOM for Yandex Webvisor
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
      openAnalyzer: true,
    }) as any,
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].css',
      chunkFilename: 'public/css/[name].css',
    }),
    // new GenerateSW({
    //   mode: 'production',
    //   swDest: 'public/js/sw.js',
    // }),
    // new OfflinePlugin({
    //   autoUpdate: true,
    //   safeToUseOptionalCaches: true,
    //   responseStrategy: 'network-first',
    //   caches: 'all',
    //   appShell: '/',
    //   externals: ['/'],
    //   // publicPath: '/public',
    //   ServiceWorker: {
    //     events: true,
    //     publicPath: '/sw.js',
    //     output: './js/sw.js',
    //   },
    //   AppCache: {
    //     events: true,
    //   },
    // }),
  ],
});
