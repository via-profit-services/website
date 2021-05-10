import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration =  {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader, // Node Sass does not work with Yarn PnP feature and doesn't support @use rule.
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.less$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 0, // For server side render
              name: 'images/[hash]-[name].[ext]',
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
            name: 'video/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      '~': path.resolve(__dirname, '../../src'),
      moment$: 'moment/moment.js',
    },
  },
  node: {
    
  },
};

export default config;
