/* eslint no-console: 'off' */
const parcel = require('./parcel')();
const cypress = require('cypress');

const {
  publicPath,
  e2eServerPort,
  outputDir,
  cypressDir,
  testDir,
} = require('./configs');

(async function main() {
  function isHeadlessMode() {
    let modeArgIndex = process.argv.indexOf('--mode');
    let mode;
    if (modeArgIndex > -1) {
      mode = process.argv[modeArgIndex + 1];
    }

    return mode == 'headless';
  }

  const config = {
    baseUrl: `http://localhost:${e2eServerPort}${publicPath}`,
    fileServerFolder: outputDir,
    fixturesFolder: `${cypressDir}/fixtures`,
    integrationFolder: `${testDir}/e2e`,
    testFiles: '**/*.e2e.js',
    pluginsFile: `${cypressDir}/plugins/index.js`,
    supportFile: `${cypressDir}/support/index.js`,
  };
  await parcel.serve(e2eServerPort);

  if (isHeadlessMode()) {
    try {
      console.info('running cypress in headless mode...');
      const result = await cypress.run({
        config,
      });
      process.exit(result.totalFailed);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  } else {
    try {
      console.info('opening cypress...');
      const exitCode = await cypress.open({
        config,
      });
      process.exit(exitCode);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
})();
