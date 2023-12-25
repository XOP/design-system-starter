import { readFileSync, existsSync } from 'fs';

import { Parameters } from '@storybook/react';

const STORYBOOK_BUILD = './storybook-static/';
const DOCS_NAME = 'Overview';

interface StoryParams {
  id: string;
  name: string;
  title: string;
  importPath: string;
  tags: string[];
  kind: string;
  story: string;
  parameters: Parameters;
}

const rootPath = new URL('../', import.meta.url);
const storybookPath = new URL(STORYBOOK_BUILD, rootPath);

/**
 * Makes stories.json into collection
 * and filters docs pages and skipped examples
 * @returns Story[]
 */
export function getStories() {
  const storiesPath = new URL('stories.json', storybookPath);

  if (!existsSync(storiesPath)) {
    console.error('⚠️ Could not find storybook-static/stories.json.');
    process.exit(1);
  }

  const storiesFile = readFileSync(storiesPath, 'utf8');
  const storiesJson = JSON.parse(storiesFile);

  const storiesObj: Record<string, StoryParams> = storiesJson.stories;
  const storiesData = Object.values(storiesObj).reduce<StoryParams[]>(
    (acc, cur) => {
      const isSkipped = cur.parameters.vrtDisabled === true;
      const isDocs = cur.name === DOCS_NAME;

      if (isSkipped || isDocs) {
        return acc;
      }

      return [...acc, cur];
    },
    [],
  );

  return storiesData;
}
