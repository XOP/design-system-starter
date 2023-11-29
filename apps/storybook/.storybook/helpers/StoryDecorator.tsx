import React from 'react';

export const StoryDecorator = ({ children }: { children: React.ReactElement}) => (
  <div style={{ margin: 'var(--awsm-space-4)' }}>
    {children}
  </div>
)
