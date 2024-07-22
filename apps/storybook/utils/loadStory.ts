import type * as Playwright from '@playwright/test';

/**
 * Loads storybook story in isolated mode
 * @param page
 * @param id - story.id, includes component group, name and variant, i.e. group-name--variant
 */
export async function loadStory(page: Playwright.Page, id: string) {
  const search = new URLSearchParams({ viewMode: 'story', id });

  await page.goto(`iframe.html?${search.toString()}`, {
    waitUntil: 'networkidle',
  });

  await page.waitForSelector('#storybook-root');
}
