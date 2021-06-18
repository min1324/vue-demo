process.env.VUE_APP_BASE_URL = require('./config.json').url;

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: '/',
  assetsDir: 'assets',
};
