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
      "/foo": {
        target: "<other_url>"
      }
    }
  }
};
