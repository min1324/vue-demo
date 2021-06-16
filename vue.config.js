process.env.VUE_APP_BASE_IP = require('./config.json').ip;

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: '/',
  assetsDir: 'assets',
};
