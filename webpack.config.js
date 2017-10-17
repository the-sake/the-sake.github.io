const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main',
    vendor: './src/vendor'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'dist/',
    filename: '[name].bundle.js'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      api: path.resolve(__dirname, './src/api'),
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      template: path.resolve(__dirname, './src/template')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html'
    })
  ],

  devServer: {
    contentBase: [path.resolve(__dirname, './dist'), path.resolve(__dirname, './data')],
    historyApiFallback: true,
    noInfo: true,
    port: 8080,
    host: '0.0.0.0'
  },

  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CopyWebpackPlugin([
      { from: 'data/images', to: 'images' }
    ])
  ])
}
