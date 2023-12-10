import { tokens } from '@awsm/tokens';
import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'sticky',
  top: 0,
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
  padding: tokens.space[4],
  paddingInline: tokens.space[2],
  background: tokens.color.background.subtle,
  borderBottom: '1px solid',
  borderColor: tokens.color.gamma[200],
  color: tokens.color.text.regular
});

export const item = style({
  selectors: {
    ['&:not(:first-child)']: {
      textAlign: 'center',
    },
  },
});
