import { readFileSync, existsSync } from 'node:fs';

import { STORYBOOK_BUILD } from './constants';
import type { StoryParams } from './types';

const rootPath = new URL('../', import.meta.url);
const storybookPath = new URL(STORYBOOK_BUILD, rootPath);

/**
 * Converts stories.json into collection
 * includes only docs pages
 * @returns Story[]
 */
export function getDocs() {
  const storiesPath = new URL('index.json', storybookPath);

  if (!existsSync(storiesPath)) {
    console.error(`⚠️ Could not find stories.json in ${STORYBOOK_BUILD}`);
    process.exit(1);
  }

  const storiesFile = readFileSync(storiesPath, 'utf8');
  const storiesJson = JSON.parse(storiesFile);

  const storiesObj: Record<string, StoryParams> = storiesJson.entries;
  const storiesData = Object.values(storiesObj).reduce<StoryParams[]>(
    (acc, cur) => {
      const isDocs = cur.type === 'docs' && cur.tags.includes('autodocs');

      if (!isDocs) {
        return acc;
      }

      acc.push(cur);

      return acc;
    },
    [],
  );

  return storiesData;
}
