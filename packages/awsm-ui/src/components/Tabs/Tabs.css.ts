import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../../theme';

export const tabsStyles = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const listStyles = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});

export const tabStyles = recipe({
  base: {
    padding: theme.space[4],
    background: theme.color.gamma[50],
    color: theme.color.text.regular,
  },
});

export const panelStyles = recipe({
  base: {
    color: theme.color.text.regular,
  },
});
