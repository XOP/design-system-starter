import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const PORT = process.env.PORT || 3030;
const viewport = { width: 1280, height: 800 };
const deviceScaleFactor = 2;
const locale = 'en-us';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:3030',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        userAgent: devices['Desktop Chrome'].userAgent,
        defaultBrowserType: devices['Desktop Chrome'].defaultBrowserType,
        viewport,
        deviceScaleFactor,
        isMobile: false,
        hasTouch: false,
        locale,
      },
    },

    {
      name: 'firefox',
      use: {
        userAgent: devices['Desktop Firefox'].userAgent,
        defaultBrowserType: devices['Desktop Firefox'].defaultBrowserType,
        viewport,
        deviceScaleFactor,
        isMobile: false,
        hasTouch: false,
        locale,
      },
    },

    {
      name: 'webkit',
      use: {
        userAgent: devices['Desktop Safari'].userAgent,
        defaultBrowserType: devices['Desktop Safari'].defaultBrowserType,
        viewport,
        deviceScaleFactor,
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
