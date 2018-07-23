'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = function (env) {
  const sourceMapEnabled = isProduction
    ? config['build_' + env].productionSourceMap
    : config['dev_' + env].cssSourceMap

  return {
    loaders: utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config['dev_' + env].cacheBusting,
    transformToRequire: {
      video: ['src', 'poster'],
      source: 'src',
      img: 'src',
      image: 'xlink:href'
    }
  }

}
