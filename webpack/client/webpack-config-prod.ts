import path from 'path';
import fs from 'fs';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import { merge } from 'webpack-merge';
import { DefinePlugin } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageminWebpWebpackPlugin from 'imagemin-webp-webpack-plugin';

import baseConfig from './webpack-config-base';

const templateContent = fs.readFileSync(
  path.resolve(__dirname, '../../assets/templates/main.mustache'),
  { encoding: 'utf8' },
);

module.exports = merge(baseConfig, {
  target: 'web',
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../../src/app.tsx'),
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../dist'),
    filename: 'public/js/bundle.[name].[chunkhash].js',
    chunkFilename: 'public/js/chunk.[name].[chunkhash].js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        highlight: {
          test: /[\\/]node_modules[\\/](highlight\.js|react-syntax-highlighter)[\\/]/,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-router|react-router-dom|react-dom)[\\/]/,
        },
        intl: {
          test: /[\\/]node_modules[\\/]@formatjs[\\/]/,
        },
        icons: {
          test: /[\\/]node_modules[\\/]mdi-react$/,
        },
      },
    },
  },
  devtool: false,
  plugins: [
    new LoadablePlugin({
      filename: '/public/loadable-stats.json',
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
    new CompressionPlugin({
      exclude: [/loadable-stats\.json$/, /\.mustache$/],
    }),
    new InjectManifest({
      swDest: path.resolve(__dirname, '../../dist/public/js/service-worker.js'),
      swSrc: path.resolve(__dirname, '../../src/service-worker.ts'),
    }),
    new FaviconsWebpackPlugin({
      mode: 'webapp',
      logo: path.resolve(__dirname, '../../assets/images/favicon.png'),
      manifest: path.resolve(__dirname, '../../assets/manifest.json'),
      prefix: './public/assets/',
      favicons: {
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: true,
          windows: true,
          yandex: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      templateContent,
      excludeChunks: ['main'],
      filename: path.resolve(
        __dirname,
        '../../dist/server/templates/main.mustache',
      ),
      minify: {
        caseSensitive: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(png|jpg|jpeg)$/,
          options: {
            quality: 75,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: true,
    }),
  ],
});
