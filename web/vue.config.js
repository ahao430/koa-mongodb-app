module.exports = {
  // 项目根路径
  publicPath: '/admin',
  // 开发服务器
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true
      },
    }
  }
};
