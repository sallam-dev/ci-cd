const Bundler = require('parcel-bundler');
const shell = require('shelljs');
const {
  entryPoint,
  devServerPort,
  parcelCacheDir,
  outputDir,
  publicPath,
} = require('./configs');

module.exports = function bundlerCreator({ production = false } = {}) {
  shell.rm('-rf', outputDir, parcelCacheDir);
  const config = {
    outDir: outputDir,
    outFile: 'index.html', // The name of the outputFile
    publicUrl: publicPath, // The url to serve on, defaults to '/'
    watch: !production, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
    cache: true, // Enabled or disables caching, defaults to true
    cacheDir: parcelCacheDir, // The directory cache gets put in, defaults to .cache
    contentHash: true, // Disable content hash from being included on the filename
    global: false, // Expose modules as UMD under this name, disabled by default
    minify: production, // Minify files, enabled if process.env.NODE_ENV === 'production'
    scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
    target: 'browser', // Browser/node/electron, defaults to browser
    bundleNodeModules: true, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
    https: false,
    logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors
    hmr: !production, // Enable or disable HMR while watching
    hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
    sourceMaps: !production, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
    hmrHostname: '', // A hostname for hot module reload, default to ''
    detailedReport: production, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
  };

  const bundler = new Bundler(entryPoint, config);

  return {
    serve(port = devServerPort, ...args) {
      return bundler.serve(port, ...args);
    },
    bundle(...args) {
      return bundler.bundle(...args);
    },
  };
};
