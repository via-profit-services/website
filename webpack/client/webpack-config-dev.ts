import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import LoadablePlugin from '@loadable/webpack-plugin';
import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'webpack-dev-server';
import Mustache from 'mustache';

import baseConfig from './webpack-config-base';

dotenv.config();
const templateContent = fs.readFileSync(
  path.resolve(__dirname, '../../assets/templates/main.mustache'),
  { encoding: 'utf8' },
);

const devConfig = merge(baseConfig, {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../../src/app.tsx'),
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../build'),
    filename: 'public/js/[name].js',
    chunkFilename: 'public/js/chunk.[name].[chunkhash].js',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new LoadablePlugin({
      filename: '/public/loadable-stats.json',
    }),
    new HTMLWebpackPlugin({
      templateContent: Mustache.render(templateContent, {}),
      // templateContent,
      // filename: path.resolve(
      //   __dirname,
      //   '../../build/server/templates/main.mustache',
      // ),
      minify: false,
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin() as any,
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPath: '/ws',
      },
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      verbose: true,
      disableDotRule: true,
    },
    compress: true,
    port: Number(process.env.SERVER_PORT),
    host: process.env.SERVER_HOSTNAME,
  },
  performance: {
    hints: false,
  },
});

export default devConfig;
