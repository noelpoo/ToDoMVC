const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

const baseUrl = "https://todomvc.com/examples/react/dist/";

module.exports = defineConfig({
  e2e: {
    baseUrl: baseUrl,
    responseTimeout: 120000,
    pageLoadTimeout: 240000,
    requestTimeout: 30000,
    defaultCommandTimeout: 60000,
    specPattern: [
      "**/*.feature"
    ],
    experimentalRunAllSpecs: true,
    setupNodeEvents
  }
});
