const path = require('path')

module.exports = {
  context: __dirname,
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
    admin: ['@babel/polyfill', './admin/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[name].js'
  },
  resolve: {
    alias: {
      '@actions': path.resolve(__dirname, 'src/redux/actions'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@forms': path.resolve(__dirname, 'src/components/forms'),
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot|png|svg|ttf|woff2?)$/,
        include: /semantic-ui-css/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.(png|svg)$/,
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
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin/, to: '/admin.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  }
}
