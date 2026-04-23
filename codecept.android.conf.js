exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.google.com',
      browser: 'chrome',
      host: 'mobile-hub.lambdatest.com',
      port: 80,
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      desiredCapabilities: {
        "lt:options": {
          "w3c": true,
          "platformName": "android",
          "deviceName": "Galaxy.*",  // You can use regex or specific device
          "platformVersion": "14",
          "isRealMobile": true,
          "build": "CodeceptJS Android Build",
          "name": "CodeceptJS Android Test",
          "video": true,
          "visual": true,
          "network": true,
          "console": true
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS-Android'
}