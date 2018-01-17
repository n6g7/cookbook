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
      '@actions': path.resolve(__dirname, 'src/redux/actions'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@history': path.resolve(__dirname, 'src/history'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@selectors': path.resolve(__dirname, 'src/redux/selectors'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@theme': path.resolve(__dirname, 'src/theme')
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
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'img-loader'
        ]
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: [
          'url-loader',
          'img-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
