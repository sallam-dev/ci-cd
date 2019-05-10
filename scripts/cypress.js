/* eslint no-console: 'off' */
const parcel = require('./parcel')();
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
  const args = {
    get headless() {
      return process.argv.includes('--headless');
    },
    get noVideo() {
      return process.argv.includes('--no-video');
    },
  };

  try {
    const server = await parcel.serve(e2eServerPort);

    const config = {
      baseUrl: `http://localhost:${server.address().port}${publicPath}`,
      fileServerFolder: outputDir,
      fixturesFolder: `${cypressDir}/fixtures`,
      integrationFolder: `${testDir}/e2e`,
      testFiles: '**/*.e2e.js',
      pluginsFile: `${cypressDir}/plugins/index.js`,
      supportFile: `${cypressDir}/support/index.js`,
      screenshotsFolder: `${projectRoot}/.cypress/screenshots`,
      videoFolder: `${projectRoot}/.cypress/video`,
      video: !args.noVideo,
    };

    if (args.headless) {
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
