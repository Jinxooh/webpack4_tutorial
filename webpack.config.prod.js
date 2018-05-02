const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, '../');
// 적용시 hot module작동 안함
const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
});

module.exports = {
  entry: {
    index: [
      './src/index.js',
    ],
  },
  module: {
    rules: [{
      // "oneOf" will traverse all following loaders until one will
      // match the requirements. When no loader matches it will fall
      // back to the "file" loader at the end of the loader list.
      oneOf: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          // use: ['style-loader', 'css-loader'],
          use: extractSass.extract({
            use: [{
              loader: 'css-loader',
            }],
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.scss$/,
          // use: ['style-loader', 'css-loader', 'sass-loader'],
          use: extractSass.extract({
            use: [{
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
            }],
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader',
          options: {
            name: '[hash].[ext]',
            limit: 10000,
          },
        },
        {
          exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
          loader: 'file-loader',
        },
      ],
    }],
  },
  resolve: {
    modules: [
      'node_modules', 'src', // able 'import xxx from 'something/'
      path.resolve(__dirname, './src/assets'),
    ],
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: ROOT_DIR }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist', 'index.html'),
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(jsx|js|css|scss)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
    extractSass,
    new Dotenv(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: false,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
