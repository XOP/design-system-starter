
import * as Playwright from '@playwright/test';
import fs from 'fs';

// config
const PROJECT_ROOT = new URL('../', import.meta.url);
const STORYBOOK_DIR = new URL('./storybook-static/', PROJECT_ROOT);

export async function loadStory(page: Playwright.Page, id: string) {
  const overviewId = `${id}--overview`;

  // load stories.json
  const storiesDataPath = new URL('stories.json', STORYBOOK_DIR);

  if (!fs.existsSync(storiesDataPath)) {
    console.error('⚠️ Could not find storybook-static/stories.json.');
    process.exit(1);
  }

  const storiesData = JSON.parse(fs.readFileSync(storiesDataPath, 'utf8'));

  // load specific story
  const storyMeta = storiesData.stories[overviewId];

  // console.log(storyMeta);

  if (!storyMeta) {
    console.error(`⚠️ Could not find overview for ID "${id}".`);
    process.exit(1);
  }

  const search = new URLSearchParams({ viewMode: 'docs', id: overviewId });

  await page.goto(`iframe.html?${search.toString()}`, { waitUntil: 'networkidle' });

  // wait for page to finish rendering before starting test
  await page.waitForSelector('#storybook-docs');
}
