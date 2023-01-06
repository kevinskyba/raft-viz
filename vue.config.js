const { VuetifyPlugin } = require('webpack-plugin-vuetify')

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [new VuetifyPlugin()]
  }
}