import { style } from '@vanilla-extract/css';

import { tokens } from '../../../../dist/tokens.esm';

export const item = style({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  gap: tokens.space[2],
  minWidth: '14rem',
  maxWidth: '14rem',
  height: '8rem',
  padding: tokens.space[4],
  borderRadius: tokens.radius.n,
  border: `${tokens.space.px} solid ${tokens.color.gamma[800]}`,
  boxShadow: tokens.shadow.small,
});

export const tokenName = style({
  flexShrink: 1,
  display: 'block',
  padding: tokens.space[1],
  background: tokens.color.background.subtle,
  color: tokens.color.text.strong,
  fontSize: tokens.fontSize.s,
  borderRadius: tokens.radius.s,
  whiteSpace: 'nowrap'
});
