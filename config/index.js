'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev_spa: {

    // 开发环境相应的目录
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/oa/**': {
        target: 'http://localhost:3000'
      }
    },   // 开发环境跨域代理通过这里配置

    // 开发服务器配置
    host: '0.0.0.0', // 配置后监听该地址如果没有设置则自动配置process.env.HOST
    port: 8080, // 配置后监听该地址如果没有设置则自动配置process.env.PORT 如果该端口被使用，则向下进行查找未被使用的端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  dev_mpa: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/oa/**': {
        target: 'http://localhost:3000'
      }
    },   // 开发环境跨域代理通过这里配置


    host: '0.0.0.0',
    port: 8081,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,



    /**
     * Source Maps
     */
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build_spa: {
    // 模板html
    index: path.resolve(__dirname, '../dist/spa/index.html'),

    // 相关路径
    assetsRoot: path.resolve(__dirname, '../dist/spa'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    //devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  build_mpa: {
    index: path.resolve(__dirname, '../dist/mpa/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist/mpa'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    productionSourceMap: true,

    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
