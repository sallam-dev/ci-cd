const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

module.exports = {
  publicPath: '/',
  devServerPort: 4000,
  e2eServerPort: 44331,
  outputDir: resolve('dist'),
  entryPoint: resolve('src/index.html'),
  cypressDir: resolve('test/cypress'),
  sourceDir: resolve('src'),
  testDir: resolve('test'),
  parcelCacheDir: resolve('.cache'),
};
