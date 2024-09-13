import type React from 'react';

import { STORY_TEST_ID } from '../../utils/constants';

export const StoryDecorator = ({
  children,
}: {
  children: React.ReactElement;
}) => (
  <div
    style={{ margin: 'var(--awsm-space-4)' }}
    data-testid={STORY_TEST_ID}
  >
    {children}
  </div>
);
