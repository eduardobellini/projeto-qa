const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.gov.br",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    blockHosts: [
      "*.google-analytics.com",
      "analytics.google.com",
      "www.google.com",
      "www.googletagmanager.com",
      "www.googleadservices.com",
      "c.go-mpulse.net",
      "*.go-mpulse.net",
    ],
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
