exports.config = {
   tests: './*_test.js',
   output: './output',

   helpers: {
      WebDriver: {
         url: 'http://google.com/ncr',
         browser: 'chrome',
         host: 'hub.lambdatest.com',
         port: 80,
         user: process.env.LT_USERNAME,
         key: process.env.LT_ACCESS_KEY,

         desiredCapabilities: {
            name: "[CodeceptJS] Automation Sample",
            build: "[CodeceptJS] Automation Sample",
            platformName: "Windows 11",
            browserName: 'Chrome',
            browserVersion: 'dev'
         }
      },

      LTHelper: {
         require: 'codeceptjs-lambdatest-service',
         user: process.env.LT_USERNAME,
         key: process.env.LT_ACCESS_KEY,
         updateTestName: true
      }
   },

   include: {
      I: './steps_file.js'
   },

   bootstrap: null,
   mocha: {},
   name: 'CodeceptJS'
}