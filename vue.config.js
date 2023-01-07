const { VuetifyPlugin } = require('webpack-plugin-vuetify')

// vue.config.js
module.exports = {
  publicPath: "/raft-viz/",
  configureWebpack: {
    plugins: [new VuetifyPlugin()]
  }
}