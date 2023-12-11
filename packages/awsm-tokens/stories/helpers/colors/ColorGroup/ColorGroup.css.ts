import { style } from '@vanilla-extract/css';

import { tokens } from '../../../../dist/tokens.esm';
import { theme } from '../../theme';

export const group = style({
  marginBlock: tokens.space[8],
  fontFamily: theme.fontFamily,
});

export const heading = style({
  flexGrow: 1,
  marginBlock: tokens.space[4],
  fontSize: tokens.fontSize.l
});

export const content = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: tokens.space[4],
  width: '100%'
});
