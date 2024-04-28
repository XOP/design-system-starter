export interface StoryParams {
  id: string;
  title: string;
  name: string;
  importPath: string;
  storiesImports: string[];
  type: 'docs' | 'story';
  tags: string[];
}
