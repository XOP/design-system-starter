import { tokens } from '@awsm/tokens';
import { style } from '@vanilla-extract/css';

export const item = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
});

export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  padding: tokens.space[2]
});

export const iconPrimary = style([
  icon,
  {
    color: tokens.color.primary.main,
  },
]);

export const iconSecondary = style([
  icon,
  {
    color: tokens.color.secondary.main,
  },
]);
