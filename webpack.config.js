const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = process.env && process.env.NODE_ENV === 'development'
const production = process.env && process.env.NODE_ENV === 'production'

const buildConfig = {
  destFolder: production ? '.dist' : '.dev'
}

const webpackConfig = {
  entry: {
    'main': './src/index.js'
  },
  output: {
    path: resolve(__dirname, buildConfig.destFolder),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

if (development) {
  webpackConfig.devServer = {
    contentBase: join(__dirname, buildConfig.destFolder),
    compress: true,
    port: 3000
  }
  webpackConfig.devtool = 'inline-source-map'
  webpackConfig.module.rules = [
    ...webpackConfig.module.rules,
    ...[
      {
        test: /\.(css|scss)/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  ]
}

if (production) {
  webpackConfig.devtool = 'source-map'
  webpackConfig.module.rules = [
    ...webpackConfig.module.rules,
    ...[
      {
        test: /\.(css|scss)/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:10]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  ]
}


module.exports = {
  ...webpackConfig
}
