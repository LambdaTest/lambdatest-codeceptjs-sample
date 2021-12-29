exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
      WebDriverIO: {
         url: 'http://google.com/ncr',
         browser: 'chrome',
         host: 'hub.lambdatest.com',
         port: 80,
         user: process.env.LT_USERNAME, //Your Username
         key: process.env.LT_ACCESS_KEY,  ////Your Access key
         desiredCapabilities:{
            name: "Codeceptio Sample Test",
            build: "Codeceptio",
            platformName: "Windows 10",
            browserName: 'Chrome',
            version: 'latest'
         },
      }
   },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS'
}


