const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3002;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      '@Component': path.resolve(__dirname, './src/components'),
      '@Api': path.resolve(__dirname, './src/api'),
      '@Store': path.resolve(__dirname, './src/store'),
      '@Route': path.resolve(__dirname, './src/routes'),
      '@Util': path.resolve(__dirname, './src/utils'),
      '@Page': path.resolve(__dirname, './src/pages'),
      '@Layout': path.resolve(__dirname, './src/layouts')
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
