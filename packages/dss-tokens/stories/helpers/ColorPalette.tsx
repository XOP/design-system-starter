import React from 'react';

import { ColorPalette as OriginalColorPalette } from '@storybook/blocks';

const ColorPalette = ({ children }) => {
  const theme = window.parent.location.search.split('theme:')[1] ?? 'dark';

  return (
    <div data-theme={theme}>
      <OriginalColorPalette>{children}</OriginalColorPalette>
    </div>
  );
};

export default ColorPalette;
