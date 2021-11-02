import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import LoadablePlugin from '@loadable/webpack-plugin';
import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { DefinePlugin } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

import commonConfig from './webpack-config-common';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

const config = merge(commonConfig, {
  target: 'web',
  mode: isDev ? 'development' : 'production',
  entry: {
    main: path.resolve(__dirname, '../src/app.tsx'),
  },
  output: {
    publicPath: '/',
    path: isDev
      ? path.join(__dirname, '../build')
      : path.join(__dirname, '../dist'),
    filename: 'public/js/bundle.[chunkhash].js',
    chunkFilename: 'public/js/chunk.[chunkhash].js',
  },
  optimization: {
    minimize: !isDev,
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
  node: {},
  devtool: isDev ? 'inline-source-map' : false,
  devServer: isDev ? {
    historyApiFallback: {
      verbose: true,
      disableDotRule: true,
    },
    compress: true,
    port: Number(process.env.SERVER_PORT),
    host: process.env.SERVER_HOSTNAME,
  } : undefined,
  performance: {
    hints: false,
  },
  plugins: [
    new LoadablePlugin({
      filename: '/public/loadable-stats.json',
    }) as any,
    new HtmlWebpackPlugin({
      excludeChunks: ['main'],
      templateContent: fs.readFileSync(
        path.resolve(__dirname, '../assets/templates/main.mustache'),
        { encoding: 'utf8' },
      ),
      filename: path.resolve(
        __dirname,
        '../dist/server/templates/main.mustache',
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
    new DefinePlugin({
      SC_DISABLE_SPEEDY: false, // Set as true to disable CSSOM for Yandex Webvisor
    }),

    new MiniCssExtractPlugin({
      filename: 'public/css/[name].css',
      chunkFilename: 'public/css/[name].css',
    }),

    ...(isDev
      ? // development only plugins
        [
          new HotModuleReplacementPlugin(),
          new ReactRefreshWebpackPlugin({
            overlay: {
              sockPath: '/ws',
            },
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
            openAnalyzer: true,
          }) as any,
        ]
      : // production only plugins
        [
          new FaviconsWebpackPlugin({
            mode: 'webapp',
            logo: path.resolve(__dirname, '../assets/images/favicon.png'),
            manifest: path.resolve(__dirname, '../assets/manifest.json'),
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
          new CompressionPlugin({
            exclude: [/loadable-stats\.json$/, /\.mustache$/],
          }),
          new InjectManifest({
            swSrc: path.resolve(__dirname, '../src/service-worker.ts'),
            swDest: path.resolve(
              __dirname,
              '../dist/public/js/service-worker.js',
            ),
          }),
        ]),
  ],
});

export default config;
