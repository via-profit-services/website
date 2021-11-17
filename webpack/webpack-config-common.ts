import path from 'path';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins:
                process.env.NODE_ENV === 'development'
                  ? ['react-refresh/babel']
                  : [],
            },
          },
        ],
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
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(svg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/images/[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // all images will be converted to *.webp by image-minimizer-webpack-plugin
              name: 'public/images/[contenthash].webp',
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
              name: 'public/fonts/[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(mp4|webm)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            name: 'public/video/[contenthash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      loader: false,
      deleteOriginalAssets: true,
      minimizerOptions: {
        plugins: [
          ['imagemin-webp', { quality: 25 }],
          ['imagemin-mozjpeg', { quality: 25 }],
          ['imagemin-pngquant', { quality: [0.6, 0.8] }],
        ],
      },
    }),
  ],
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
      '~': path.resolve(__dirname, '../src'),
      '~assets': path.resolve(__dirname, '../assets'),
      '~content': path.resolve(__dirname, '../content'),
    },
  },
  ignoreWarnings: [
    {
      // https://github.com/webpack/webpack/issues/1576
      module: /node_modules\/express\/lib\/view\.js/,
      message: /the request of a dependency is an expression/,
    },
  ],
};

export default config;
