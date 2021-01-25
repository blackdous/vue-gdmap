/*
 * @Descripttion: 打包环境配置
 * @Author: 19080088
 * @Date: 2021-01-25 11:00:21
 * @LastEditors: 19080088
 * @LastEditTime: 2021-01-25 14:41:33
 */
'use strict'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const config = reuqire('../config')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'develop',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name][hash].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}
