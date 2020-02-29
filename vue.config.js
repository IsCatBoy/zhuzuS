module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "https://apis.map.qq.com/ws/place/v1",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/fuwu": {
        target: "http://175.24.82.120:8888",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/fuwu": "/"
        }
      }
    }
    // port: 8080,
    // host: "0.0.0.0",
    // autoOpenBrowser: false,
    // assetsSubDirectory: "static",
    // assetsPublicPath: "/",
    // proxy: {
    //   "/apis": {
    //     target: "http://175.24.82.120:8888",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/apis": "/"
    //     }
    //   }
  }
};
