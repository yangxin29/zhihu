module.exports = {

  devServer: {
    proxy: {
      'api': {
        target: 'http://localhost:4000',
        changeOrigin: true // 必须加上这个才能跨域请求
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-aspect-ratio-mini": {},
        "postcss-write-svg": {
          utf8: false
        },
        "postcss-cssnext": {},
        "postcss-px-to-viewport": {
          viewportWidth: 750,
          unitPrecision: 3,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false
        },
        "postcss-viewport-units": {},
        "cssnano": {
          preset: "advanced",
          autoprefixer: false,
          "postcss-zindex": false
        }
      }
    }
  }
}
