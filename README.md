# LambdaTest CodeceptJS Sample - Desktop & Android Real Device

Sample CodeceptJS with WebDriverIO Automation Scripts for LambdaTest Selenium Grid and Real Device Cloud. This project supports both desktop web automation and Android real device testing.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- LambdaTest Account ([Sign up here](https://accounts.lambdatest.com/register))

## Install Node Package Manager

Download & Install Node.js and npm from:
https://nodejs.org/

## Project Setup

### 1. Clone or Download the Repository
```bash
git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample.git
cd lambdatest-codeceptjs-sample
```

### 2. Install Dependencies
```bash
npm install
```

## Configuration

### Set LambdaTest Credentials

Get your Username and Access Key from [LambdaTest Automation Dashboard](https://automation.lambdatest.com/)

#### For Windows (Command Prompt):
```bash
set LT_USERNAME=YOUR_USERNAME
set LT_ACCESS_KEY=YOUR_ACCESS_KEY
```

#### For Windows (PowerShell):
```powershell
$env:LT_USERNAME="YOUR_USERNAME"
$env:LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

#### For Linux/macOS:
```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

## Project Structure
```
lambdatest-codeceptjs-sample/
├── codecept.conf.js              # Desktop web automation config
├── codecept.android.conf.js      # Android real device config
├── googleTest_test.js            # Desktop web test
├── androidTest_test.js           # Android real device test
├── steps_file.js                 # Custom step definitions
├── steps.d.ts                    # TypeScript definitions
├── package.json                  # Project dependencies and scripts
├── jsconfig.json                 # JavaScript config
└── README.md                     # This file
```

## Configuration Files

### Desktop Web Automation (codecept.conf.js)

Configured for desktop browser testing on LambdaTest Selenium Grid:
- **Platform:** Windows 10
- **Browser:** Chrome (latest)
- **Hub:** hub.lambdatest.com

### Android Real Device (codecept.android.conf.js)

Configured for Android real device testing on LambdaTest Real Device Cloud:
- **Platform:** Android
- **Device:** Configurable (Pixel, Galaxy, etc.)
- **Hub:** mobile-hub.lambdatest.com

#### Sample Android Capabilities:
```javascript
desiredCapabilities: {
  "lt:options": {
    "w3c": true,
    "platformName": "android",
    "deviceName": "Galaxy S24",      // Specific device
    "platformVersion": "14",
    "isRealMobile": true,
    "build": "CodeceptJS Android Build",
    "name": "Android Test",
    "video": true,                    // Record video
    "visual": true,                   // Visual logs
    "network": true,                  // Network logs
    "console": true                   // Console logs
  }
}
```

## Running Tests

### Run Desktop Web Tests
```bash
npm run test:desktop
```

### Run Android Real Device Tests
```bash
npm run test:android
```

### Run All Tests (Default - Desktop)
```bash
npm test
```

### Run Specific Test File
```bash
npx codeceptjs run googleTest_test.js --steps
npx codeceptjs run androidTest_test.js --steps -c codecept.android.conf.js
```

## Available NPM Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run desktop web tests with default config |
| `npm run test:desktop` | Run desktop web automation tests |
| `npm run test:android` | Run Android real device tests |

## Customizing Tests

### Adding New Desktop Tests

Create a new test file (e.g., `myTest_test.js`):
```javascript
const { I } = inject();

Feature('My Feature');

Scenario('My test scenario', async ({ I }) => {
  await I.amOnPage('https://example.com');
  await I.see('Example Domain');
});
```

### Adding New Android Tests

Create a new test file with mobile-specific selectors:
```javascript
const { I } = inject();

Feature('Mobile Feature');

Scenario('test on android device', async ({ I }) => {
  await I.amOnPage('https://www.google.com');
  await I.waitForElement('textarea[name="q"]', 10);
  await I.fillField('textarea[name="q"]', 'LambdaTest');
  await I.pressKey('Enter');
  await I.wait(2);
});
```

## Supported Devices and Platforms

### Desktop Browsers
- Chrome, Firefox, Safari, Edge, IE
- Windows, macOS, Linux
- Multiple versions available

### Android Real Devices
- Samsung Galaxy series (S24, S23, S22, etc.)
- Google Pixel series (Pixel 8, Pixel 7, etc.)
- OnePlus, Xiaomi, and more
- Android versions 9 to 14+

### Finding Device Details
Generate capabilities for specific devices:
- [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/)
- [LambdaTest Real Device List](https://www.lambdatest.com/list-of-browsers)

## Device Name Patterns

You can use regex patterns for device selection:
```javascript
"deviceName": "Galaxy.*"     // Any Galaxy device
"deviceName": "Pixel.*"      // Any Pixel device
"deviceName": "Galaxy S24"   // Specific device
```

## Additional Capability Options

### Desktop Web Capabilities
```javascript
desiredCapabilities: {
  name: "Test Name",
  build: "Build Name",
  platformName: "Windows 10",
  browserName: "Chrome",
  version: "latest",
  resolution: "1920x1080",
  video: true,
  network: true,
  console: true,
  visual: true
}
```

### Android Real Device Capabilities
```javascript
"lt:options": {
  "w3c": true,
  "platformName": "android",
  "deviceName": "Galaxy S24",
  "platformVersion": "14",
  "isRealMobile": true,
  "build": "Build Name",
  "name": "Test Name",
  "deviceOrientation": "portrait",  // or "landscape"
  "video": true,
  "visual": true,
  "network": true,
  "console": true,
  "geoLocation": "US",
  "timezone": "UTC"
}
```

## Viewing Test Results

After running tests, view results on:
- [LambdaTest Automation Dashboard](https://automation.lambdatest.com/)
- [LambdaTest Real Device Dashboard](https://appautomation.lambdatest.com/)

Features available in dashboard:
- Video recordings
- Screenshots
- Network logs
- Console logs
- Test metadata
- Performance metrics

## Troubleshooting

### Common Issues

**Issue 1: Authentication Error**
```
Error: Invalid credentials
```
**Solution:** Verify your LT_USERNAME and LT_ACCESS_KEY environment variables are set correctly.

**Issue 2: Device Not Available**
```
Error: Device not found
```
**Solution:** Check device availability on LambdaTest platform or use regex pattern like "Galaxy.*"

**Issue 3: Timeout Errors**
```
Error: Timeout waiting for element
```
**Solution:** Increase wait time or check element selectors:
```javascript
await I.waitForElement('selector', 15); // 15 seconds
```

**Issue 4: Windows Script Error**
```
SyntaxError: missing ) after argument list
```
**Solution:** Use `npx codeceptjs` or just `codeceptjs` in scripts instead of direct path.

## Debug Mode

Run tests in debug mode with verbose output:
```bash
npx codeceptjs run --steps --debug -c codecept.android.conf.js
```

## Parallel Testing

For running tests in parallel, you can modify your configuration:
```javascript
// codecept.conf.js
exports.config = {
  // ... other config
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['chrome', 'firefox']
    }
  }
}
```

## Best Practices

1. **Use explicit waits** instead of hard waits when possible
2. **Use environment variables** for sensitive data
3. **Keep test data separate** from test logic
4. **Use descriptive test names** and scenario descriptions
5. **Organize tests** by feature or functionality
6. **Clean up test data** after test execution
7. **Use Page Objects** for complex applications (optional)

## Resources

- [CodeceptJS Documentation](https://codecept.io/)
- [LambdaTest Documentation](https://www.lambdatest.com/support/docs/)
- [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/)
- [LambdaTest Community](https://community.lambdatest.com/)
- [WebDriverIO Documentation](https://webdriver.io/)

## About LambdaTest

[LambdaTest](https://www.lambdatest.com/) is a cloud-based testing platform that provides:

- **3000+ Browser & OS combinations** for desktop web testing
- **Real Android and iOS devices** for mobile app and web testing
- **Selenium Grid** for automated cross-browser testing
- **Appium Grid** for mobile automation
- **Parallel testing** to reduce execution time
- **CI/CD integrations** with Jenkins, CircleCI, Travis, GitLab, and more
- **Debugging tools** including video recordings, screenshots, and logs

Perfect for bringing your [selenium automation testing](https://www.lambdatest.com/selenium-automation) and [mobile app testing](https://www.lambdatest.com/real-device-cloud) to a scalable cloud infrastructure.

## Support

For issues and questions:
- [GitHub Issues](https://github.com/LambdaTest/lambdatest-codeceptjs-sample/issues)
- [LambdaTest Support](https://www.lambdatest.com/support/)
- Email: support@lambdatest.com

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy Testing! 🚀**