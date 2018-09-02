module.exports = {
  devServer: {
    proxy: {
      'api': {
        target: 'http://localhost:4000',
        changeOrigin: true // 必须加上这个才能跨域请求
      }
    }
  }
}
