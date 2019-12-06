exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
      WebDriverIO: {
         url: 'http://google.com/ncr',
         browser: 'chrome',
         host: 'hub.lambdatest.com',
         port: 80,
         user: '{LT username}',
         key: '{LT accesskey}',
         desiredCapabilities:{
            name: "Codeceptio Sample Test",
            platform: "win10",
            browserName: 'Chrome',
            version: '76',
            video: 'true'
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


