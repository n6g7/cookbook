const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@actions': path.resolve(__dirname, 'src/redux/actions')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg)$/,
        exclude: /node_modules/,
        use: [
          'url-loader',
          'img-loader'
        ]
      },
      {
        test: /\.ya?ml$/,
        exclude: /node_modules/,
        use: [
          'json-loader',
          'yaml-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
