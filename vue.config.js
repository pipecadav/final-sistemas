module.exports = {
  // filenameHashing: false,
  // productionSourceMap: true,
  // css: {
  //   sourceMap: true,
  // },
  publicPath: '/',

  devServer: {
    disableHostCheck: true
  }
  // chainWebpack: (config) => {
  //   config.optimization.splitChunks(false)

  //   if (config.plugins.has('extract-css')) {
  //     const extractCSSPlugin = config.plugin('extract-css')
  //     if (extractCSSPlugin) {
  //       extractCSSPlugin.tap(() => [{
  //         filename: 'cfcss/[name].css',
  //         chunkFilename: 'cfcss/[name].css',
  //       }])
  //     }
  //   }
  // },
  // configureWebpack: {
  //   devtool: 'eval-source-map',
  //   output: {
  //     filename: 'cfjs/[name].js',
  //     chunkFilename: 'cfjs/[name].js',
  //   },
  // },
  // transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
}
