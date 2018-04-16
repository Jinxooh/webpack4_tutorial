const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    index: [
      'react-hot-loader/patch',
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
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
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
      'node_modules', 'src', // able 'import xxx from 'src/something'
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './src/assets'),
      path.resolve(__dirname, './src/common'),
      path.resolve(__dirname, './src/actions'),
      path.resolve(__dirname, './src/reducers'),
      path.resolve(__dirname, './src/store'),
      path.resolve(__dirname, './src/styles'),
      path.resolve(__dirname, './src/utilities'),
      path.resolve(__dirname, './src/helpers'),
      path.resolve(__dirname, './src/components'),
      path.resolve(__dirname, './src/components/common'),
      path.resolve(__dirname, './src/components/auth'),
      path.resolve(__dirname, './src/components/modal'),
      path.resolve(__dirname, './src/components/admins'),
      path.resolve(__dirname, './src/components/adminMessages'),
      path.resolve(__dirname, './src/components/bannedWords'),
      path.resolve(__dirname, './src/components/cashLogs'),
      path.resolve(__dirname, './src/components/cashoutRequests'),
      path.resolve(__dirname, './src/components/fields'),
      path.resolve(__dirname, './src/components/photos'),
      path.resolve(__dirname, './src/components/photoComments'),
      path.resolve(__dirname, './src/components/pointLogs'),
      path.resolve(__dirname, './src/components/talks'),
      path.resolve(__dirname, './src/components/users'),
      path.resolve(__dirname, './src/components/userUpdateLogs'),
      path.resolve(__dirname, './src/components/videoChatLogs'),
      path.resolve(__dirname, './src/screens'),
    ],
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
    // new BundleAnalyzerPlugin(),
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
    runtimeChunk: true,
  },
};
