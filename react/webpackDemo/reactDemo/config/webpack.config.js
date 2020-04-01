const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
module.exports={
  mode:'production',
  entry:path.join(__dirname,'../index.js'),
  output:{
    path:path.join(__dirname,'../dist'),
    filename:'main.js'
  },
  module:{
    rules:[
      // 处理jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, //node_modules 不需要做处理的
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-react-jsx']
            }
        }
    },
    // 处理css
    {
      test: /\.(css)$/,
      exclude: /(node_modules)/, //node_modules 不需要做处理的
      use:[
        'style-loader',
        'css-loader'
      ]
    },
    // less 处理
    {
      test: /\.(less)$/,
      exclude: /(node_modules)/, //node_modules 不需要做处理的
      use:[
        'style-loader',
        'css-loader',
        "less-loader"
      ]
    },
    ]
 },
 plugins:[
   new HtmlWebapckPlugin({
     filename:'index.html',
     template:path.join(__dirname,'../public/index.html')
   })
 ]
}