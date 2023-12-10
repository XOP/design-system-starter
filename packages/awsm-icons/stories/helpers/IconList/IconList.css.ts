import { tokens } from '@awsm/tokens';
import { style } from '@vanilla-extract/css';

export const ul = style({
  margin: 0,
  marginTop: tokens.space[4],
  padding: 0,
});

export const li = style({
  listStyle: 'none',
  padding: tokens.space[2]
});
