import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../../theme';

export const styles = recipe({
  base: {
    color: theme.color.text.regular,
  },
});

export const indicatorStyles = recipe({
  base: {
    display: 'inline-flex',
    width: theme.space[6],
    height: theme.space[3],
    backgroundColor: theme.color.primary.main,
    borderRadius: theme.radius.pill
  },
});
