const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets',resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  }
};