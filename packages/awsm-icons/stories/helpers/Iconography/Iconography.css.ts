import { tokens } from '@awsm/tokens';
import { style } from '@vanilla-extract/css';

import { theme } from '../theme';

export const root = style({
  position: 'relative',
  marginBlock: tokens.space[8],
  backgroundColor: tokens.color.background.regular,
  color: tokens.color.text.regular,
  fontFamily: theme.fontFamily
});
