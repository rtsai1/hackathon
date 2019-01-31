// App config
const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@styles": path.resolve(__dirname, 'src/styles')
      }
    }
  }
}