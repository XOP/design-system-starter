import { readFileSync, existsSync } from 'fs';

const STORYBOOK_BUILD = './storybook-static/';

interface StoryParams {
  id: string;
  title: string;
  name: string;
  importPath: string;
  storiesImports: string[];
  type: 'docs' | 'story';
  tags: string[];
}

const rootPath = new URL('../', import.meta.url);
const storybookPath = new URL(STORYBOOK_BUILD, rootPath);

interface GetStoriesProps {
  ignoreTags?: string[];
}

/**
 * Converts stories.json into collection
 * and filters docs pages and skipped examples
 * @param options
 * @param options.ignoreTags
 * @returns Story[]
 */
export function getStories({ ignoreTags = [] }: GetStoriesProps = {}) {
  const storiesPath = new URL('index.json', storybookPath);

  if (!existsSync(storiesPath)) {
    console.error('⚠️ Could not find storybook-static/stories.json.');
    process.exit(1);
  }

  const storiesFile = readFileSync(storiesPath, 'utf8');
  const storiesJson = JSON.parse(storiesFile);

  const storiesObj: Record<string, StoryParams> = storiesJson.entries;
  const storiesData = Object.values(storiesObj).reduce<StoryParams[]>(
    (acc, cur) => {
      const isSkipped = cur.tags.some((tag) => ignoreTags.includes(tag));
      const isDocs = cur.type === 'docs';

      if (isSkipped || isDocs) {
        return acc;
      }

      return [...acc, cur];
    },
    []
  );

  return storiesData;
}
