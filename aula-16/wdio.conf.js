export const config = {
    // runner: 'local',
    // port: 4723,
    user: 'oauth-estaciodifabio-897f1',
    key: 'f8ea76f8-71d5-4977-bd9d-fe6cfd8473ba',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [
        {
        // capabilities for local Appium web tests on an Android Emulator
        // platformName: 'Android',
        // browserName: 'Chrome',
        // 'appium:deviceName': 'ebac',
        // 'appium:platformVersion': '9.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        // 'appium:appWaitActivity': '.MainActivity',
        // 'appium:disableIdLocatorAutocompletion': true,
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Samsung.*',
            'appium:platformVersion': '12',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Ebac Shop Test',
                deviceOrientation: 'PORTRAIT',
                "appiumVersion": "2.0.0"
            },
            "appium:disableIdLocationAutocompletion": true,
        }
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
