import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  gap: '2rem',

  '@media': {
    'screen and (max-width: 768px)': {
      flexFlow: 'column',
    },
  },
});
