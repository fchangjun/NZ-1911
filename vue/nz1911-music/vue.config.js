const path = require("path")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports={
  productionSourceMap:false,
  publicPath:'./',
  lintOnSave:false,//关闭eslint
  devServer:{
    proxy:{    //配置代理服务器
      // 接口小暗号
      '/hehe':{
        target:'http://ustbhuangyi.com', //要转发的目标网址目标网址 
        changeOrigin:true,
        pathRewrite:{
          "^/hehe":''  //将路径中多余的暗号 删除
        }
      },
      // 老方的线上接口代理
      '/xixi':{
        target:'http://47.95.207.1:3000',
        changeOrigin:true,
        pathRewrite:{
          "^/xixi":''  //将路径中多余的暗号 删除
        }
      }
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))  //src的绝对路径起一个别名叫@
    .set('api',resolve('./src/api'))
    .set('style',resolve('./src/style'))
    .set('components',resolve('./src/components'))
    // 配置分析工具
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
      }
    } else {
    }
  // 配置gzip 
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionPlugin({
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  }

}