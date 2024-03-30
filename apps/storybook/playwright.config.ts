import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const PORT = process.env.PORT || 3030;
const locale = 'en-us';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Mobile / iOS',
      use: {
        userAgent: devices['iPhone 13'].userAgent,
        defaultBrowserType: devices['iPhone 13'].defaultBrowserType,
        viewport: devices['iPhone 13'].viewport,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        locale,
      },
    },
    {
      name: 'Desktop / Chrome',
      use: {
        userAgent: devices['Desktop Chrome'].userAgent,
        defaultBrowserType: devices['Desktop Chrome'].defaultBrowserType,
        viewport: devices['Desktop Chrome'].viewport,
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        locale,
      },
    },
  ],

  webServer: {
    command: 'pnpm serve',
    url: `http://127.0.0.1:${PORT}`,
  },
});
