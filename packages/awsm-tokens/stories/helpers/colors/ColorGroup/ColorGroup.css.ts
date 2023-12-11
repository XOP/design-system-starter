import { style } from '@vanilla-extract/css';

import { tokens } from '../../../../dist/tokens.esm';
import { theme } from '../../theme';

export const group = style({
  marginBlock: tokens.space[8],
  fontFamily: theme.fontFamily,
});

export const heading = style({
  marginBlock: tokens.space[4],
  fontSize: tokens.fontSize.l
});

export const subheading = style({
  marginBlock: tokens.space[4],
  fontSize: tokens.fontSize.n
});

export const content = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: tokens.space[4],
  width: '100%'
});

export const subcontent = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: tokens.space[4],
  width: '100%'
});

export const subgroup = style({
  width: '100%'
});
