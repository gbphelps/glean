const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    module: {
        rules: [ {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            },
          },  {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader',]
          }]
    }
}