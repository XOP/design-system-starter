import { expect, test } from '@playwright/test';

import { getStories } from '../utils/getStories';
import { loadStory } from '../utils/loadStory';

(async () => {
  const stories = getStories();

  stories.forEach((story) => {
    test(`${story.kind}-${story.name}`, async ({ page }) => {
      await loadStory(page, story.id);
      await expect(page).toHaveScreenshot({ fullPage: true });
    });
  });
})();
