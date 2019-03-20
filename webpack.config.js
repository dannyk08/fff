const { resolve } = require('path');



module.exports = {
  entry: {
    'main': './src/index.js'
  },
  output: {
    path: resolve(__dirname, '.dev'),
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
  }
}
