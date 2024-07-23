import { includeKeys, excludeKeys } from 'filter-obj';

import { DEFAULT, EXAMPLE_SORT_KEYS } from '../globals';

import type { Stories, Story } from '../types';

/**
 * refineStories
 * @param stories Stories
 * @returns Array<[string, Story | undefined]>
 */
export const refineStories = (
  stories: Stories,
): Array<[string, Story | undefined]> => {
  const refinedStories: Array<[string, Story | undefined]> = [];

  // excluding struct
  let filteredStories = excludeKeys(stories, (key) => key === DEFAULT);

  // excluding hidden stories
  filteredStories = excludeKeys(
    filteredStories,
    (_, obj) => obj?.parameters?.hidden === true,
  );

  // order by sort keys first
  EXAMPLE_SORT_KEYS.forEach((key) => {
    const items = includeKeys(filteredStories, (name) => {
      if (typeof name !== 'string') return false;

      return nameStartWith(name, key);
    });

    refinedStories.push(...Object.entries(items));
  });

  // remaining keys next
  const restStoriesItems = excludeKeys(filteredStories, (name) => {
    let exclude = false;

    EXAMPLE_SORT_KEYS.forEach((key) => {
      if (typeof name !== 'string') {
        exclude = true;
        return;
      }

      if (nameStartWith(name, key)) {
        exclude = true;
      }
    });

    return exclude;
  });

  refinedStories.push(...Object.entries(restStoriesItems));

  return refinedStories;
};

/**
 * nameStartWith
 * @param name string
 * @param str string
 * @returns boolean
 */
function nameStartWith(name: string, str: string): boolean {
  return name.toLowerCase().startsWith(str);
}
