const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-form',
      'redux-thunk',
    ],
    index: [
      'react-hot-loader/patch',
      './src/index.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules', 'src', // able 'import xxx from 'src/something'
      path.resolve(__dirname, './src/assets'),
      path.resolve(__dirname, './src/actions'),
      path.resolve(__dirname, './src/helpers'),
      path.resolve(__dirname, './src/components'),
      path.resolve(__dirname, './src/components/common'),
      path.resolve(__dirname, './src/components/auth'),
      path.resolve(__dirname, './src/components/modal'),
    ],
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: true, // refresh problem at deep routes
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
  },
};
