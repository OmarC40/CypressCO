const { defineConfig } = require('cypress')
module.exports = defineConfig ({
  viewportHeight:1080,
  viewportWidth:1920,
  video:true,
  env:{
    usernamer:"",
    password:"",
    apiUrl:""

  },
  
  retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 1
  },
  
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  
  
  e2e: {
    baseUrl:'http://localhost:4200',
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
