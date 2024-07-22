import type * as Playwright from '@playwright/test';

/**
 * Loads storybook docs in isolated mode
 * @param page
 * @param id - docs.id, includes component group, name and docs tag, i.e. group-name--overview
 */
export async function loadDocs(
  page: Playwright.Page,
  id: string,
  tag = 'overview',
) {
  const fullId = id.includes(`--${tag}`) ? id : `${id}--${tag}`;
  const search = new URLSearchParams({ viewMode: 'docs', id: fullId });

  await page.goto(`iframe.html?${search.toString()}`, {
    waitUntil: 'networkidle',
  });

  await page.waitForSelector('#storybook-docs');
}
