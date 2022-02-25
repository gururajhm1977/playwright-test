const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  workers: process.env.CI ? 2 : undefined,
};
module.exports = {
  expect: {
    toMatchSnapshot: { threshold: 0.1 },
  },
};
module.exports = config;
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config1 = {
  projects: [
    // "Pixel 4" tests use Chromium browser.
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },

    // "iPhone 11" tests use WebKit browser.
    {
      name: 'iPhone 13',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 13'],
      },
    },
  ],
};

module.exports = config1;