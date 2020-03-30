const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  // 应用的入口
  entry: {
    app: path.join(__dirname, '../client/app.js') // 告诉webpack app.js为 app的入口
  },
  // 指定打包后输出的配置
  output: {
    filename: '[name].[hash].js',  // eg: app.ansdkansj123.js
    path: path.join(__dirname, '../dist'),  // 打包输出的地址
    publicPath: ''  // 静态资源指定路径
  },
  module: {
    rules: [  // 配置文件类型（正则） + loader
      {
        test: /.jsx$/,  // 正则
        loader: 'babel-loader'  // loader
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}