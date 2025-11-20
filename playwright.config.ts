import { defineConfig, devices } from '@playwright/test';
import { env } from './src/config/env';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: env.UI_BASE_URL,
    extraHTTPHeaders: env.AUTH_TOKEN
      ? { Authorization: `Bearer ${env.AUTH_TOKEN}` }
      : {},
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'reports/junit.xml' }]
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
