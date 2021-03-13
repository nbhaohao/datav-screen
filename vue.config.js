module.exports = {
  configureWebpack: {
    resolve: { symlinks: false }
  },
  productionSourceMap: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/datav-screen-demo/" : "/"
};
