//这是commonJS的模块化，不是ES6的模块化
module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  //关闭语法检查
  lintOnSave:false,
  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      // 只要请求前缀是students,就给5000
      '/students': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws: true,//用于支持websocket
        // changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
      }
    }
  }
}


