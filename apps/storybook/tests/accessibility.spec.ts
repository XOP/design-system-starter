import Axe from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

import { getDocs, loadDocs, STORY_TEST_ID } from '../utils';

const storySelector = `[data-testid="${STORY_TEST_ID}"]`;
const a11yTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

(async () => {
  const stories = getDocs();

  stories.forEach((story) => {
    const testName = `Accessibility - ${story.title}`;

    test(testName, async ({ page }) => {
      await loadDocs(page, story.id);

      const a11yResults = await new Axe({ page })
        .withTags(a11yTags)
        .include(storySelector)
        .analyze();

      expect(a11yResults.violations).toEqual([]);
    });
  });
})();
