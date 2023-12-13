import { expect, test } from '@playwright/test';

import { loadStory } from '../utils/loadStory';

test('Button', async ({ page }) => {
  await loadStory(page, 'form-button');
  await expect(page).toHaveScreenshot({ fullPage: true });
});
