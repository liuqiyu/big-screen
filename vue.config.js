
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://10.12.19.190:8080/mes-mbp/bs/',
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/api': '' //规定请求地址以什么作为开头
          }
        }
      }
    }
  }
}
