import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../../theme';

export const styles = recipe({
  base: {
    backgroundColor: theme.color.primary.main,
    color: theme.color.primary.contrast,
  },
});
