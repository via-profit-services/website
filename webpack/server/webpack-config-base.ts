import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(md|mustache)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        test: /favicon\.(ico|png)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/images/favicon.[ext]',
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[contenthash].[ext]',
              emitFile: false,
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },

      {
        test: /\.less$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/i, // scss | sass
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[contenthash].[ext]',
              emitFile: false,
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 0,
            name: 'video/[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.mjs$/, // fixes https://github.com/graphql/graphql-js/issues/1272
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  node: {
    __filename: true,
    __dirname: false,
    // fs: 'empty',
    // fetch: 'empty',
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.mjs',
      '.js',
      '.json',
      '.md',
      '.mdx',
      '.graphql',
      '.css',
      '.scss',
    ],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      '~': path.resolve(__dirname, '../../src'),
      assets: path.resolve(__dirname, '../../assets'),
      docs: path.resolve(__dirname, '../../docs'),
    },
  },
};

export default config;
