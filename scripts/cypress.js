/* eslint no-console: 'off' */
const parcel = require('./parcel')({
  production: true,
});
const cypress = require('cypress');
const {
  publicPath,
  e2eServerPort,
  outputDir,
  cypressDir,
  testDir,
  projectRoot,
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

  try {
    const config = {
      baseUrl: `http://localhost:${e2eServerPort}${publicPath}`,
      fileServerFolder: outputDir,
      fixturesFolder: `${cypressDir}/fixtures`,
      integrationFolder: `${testDir}/e2e`,
      testFiles: '**/*.e2e.js',
      pluginsFile: `${cypressDir}/plugins/index.js`,
      supportFile: `${cypressDir}/support/index.js`,
      screenshotsFolder: `${projectRoot}/.cypress/screenshots`,
      videosFolder: `${projectRoot}/.cypress/videos`,
    };
    await parcel.serve(e2eServerPort);

    if (isHeadlessMode()) {
      console.info('running cypress in headless mode...');
      const result = await cypress.run({
        config,
      });
      process.exit(result.totalFailed || result.failures || 0);
    } else {
      console.info('opening cypress...');
      const exitCode = await cypress.open({
        config,
      });
      return process.exit(exitCode || 0);
    }
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
})();
