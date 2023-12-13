
import * as Playwright from '@playwright/test';

export async function loadStory(page: Playwright.Page, id: string) {
  const search = new URLSearchParams({ viewMode: 'story', id });

  await page.goto(`iframe.html?${search.toString()}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('#storybook-root');
}
