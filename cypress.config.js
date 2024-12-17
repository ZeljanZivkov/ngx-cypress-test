const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4000',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportWidth: 1080,
    viewportHeight: 1920,
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on , config){
      //implement node event lisener here
    },
  },
});