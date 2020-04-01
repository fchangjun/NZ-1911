const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
  mode:"development",
  entry:"./demo6/src/index.js",
  output:{
    path:path.join(__dirname,'./demo6/dist'),
    filename:"main.js"
  },
  // 配置加载器
  module: {
    rules:[
      // 加载css 
      {
        test: /\.(css)$/i,
        use: [
          'style-loader',
          'css-loader'
         ]
      }
    ]
  },
  plugins:[
     new HtmlWebpackPlugin({
      title: '天气太好',
      filename: 'assets/admin.html', // 要导出的文件名和路径
      template:'./demo6/public/index.html' // 按照哪一个模板来生成html
    })
  ]

}