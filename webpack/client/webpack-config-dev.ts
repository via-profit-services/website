import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Mustache from 'mustache';
import 'webpack-dev-server';

import baseConfig from './webpack-config-base';

dotenv.config();
const templateContent = fs.readFileSync(
  path.resolve(__dirname, '../../assets/templates/main.mustache'),
  { encoding: 'utf8' },
);

const preloadedStates = {
  REDUX: {},
  ENVIRONMENT: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    SUBSCRIPTION_ENDPOINT: process.env.GRAPHQL_SUBSCRIPTIONS,
  },
};

const preloadedStatesBase64 = Buffer.from(
  JSON.stringify(preloadedStates),
).toString('base64');

const devConfig = merge(baseConfig, {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../../src/app.tsx'),
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../build'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new LoadablePlugin() as any,
    new DefinePlugin({
      'process.env.REACT_APP_SC_DISABLE_SPEEDY': true,
      'process.env.SC_DISABLE_SPEEDY': true,
      SC_DISABLE_SPEEDY: true,
    }),
    new HTMLWebpackPlugin({
      templateContent: Mustache.render(templateContent, {
        preloadedStatesBase64,
      }),
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin() as any,
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPath: '/ws',
      },
    }),
  ],
  devtool: 'eval-nosources-cheap-module-source-map',
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
