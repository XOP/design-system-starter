import { expect, test } from '@playwright/test';

import { getStories, loadStory } from '../utils';

(async () => {
  const stories = getStories({ ignoreTags: ['skipVrt'] });

  stories.forEach((story) => {
    const testName = `${story.title}-${story.name}`;

    test(testName, async ({ page }) => {
      await loadStory(page, story.id);
      await expect(page).toHaveScreenshot({ fullPage: true });
    });
  });
})();
