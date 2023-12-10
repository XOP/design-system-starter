import { tokens } from '@awsm/tokens';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  backgroundColor: tokens.color.background.regular,
  color: tokens.color.text.regular
});
