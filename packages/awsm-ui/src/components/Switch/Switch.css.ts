import { createVar, StyleRule } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../../theme';
import { calc } from '../../helpers';

import { SwitchColors, SwitchSizes } from './Switch';

export const $thumbSize = createVar();
export const $trackSize = createVar();

export const $thumbOffset = theme.space['0.5'];
export const $borderSize = theme.space.px;

const colors: { [key in SwitchColors]: StyleRule } = {
  primary: {
    '::after': {
      backgroundColor: theme.color.primary.gamma[500],
    },

    selectors: {
      '[data-selected="true"] &': {
        backgroundColor: theme.color.primary.tone,
        borderColor: theme.color.primary.tone,
      },
      '[data-selected="true"] &::after': {
        backgroundColor: theme.color.primary.contrast,
      },
    },
  },

  secondary: {
    '::after': {
      backgroundColor: theme.color.secondary.gamma[500],
    },

    selectors: {
      '[data-selected="true"] &': {
        backgroundColor: theme.color.secondary.tone,
        borderColor: theme.color.secondary.tone,
      },
      '[data-selected="true"] &::after': {
        backgroundColor: theme.color.secondary.contrast,
      },
    },
  },
};

const sizes: { [key in SwitchSizes]: StyleRule } = {
  regular: {
    vars: {
      [$thumbSize]: theme.space[5],
      [$trackSize]: theme.space[10],
    },

    fontSize: theme.fontSize.n,
    lineHeight: theme.lineHeight.normal,
  },

  small: {
    vars: {
      [$thumbSize]: theme.space[3],
      [$trackSize]: theme.space[6],
    },

    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.normal,
  },
};

export const styles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.space[2],
    color: theme.color.text.regular,
    fontFamily: theme.fontFamily,
    userSelect: 'none',

    ':focus-visible': {
      outline: `${theme.space['0.5']} solid`,
      outlineColor: theme.color.focusRing,
      outlineOffset: theme.space['0.5'],
    },

    selectors: {
      ['&[data-disabled]']: {
        filter: 'grayscale(1)',
        opacity: 0.5,
      },
    },
  },

  variants: {
    size: sizes,
  },
});

export const indicatorStyles = recipe({
  base: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'block',
    width: calc($trackSize, calc.x($thumbOffset, 2), calc.x($borderSize, 2)),
    height: calc($thumbSize, calc.x($thumbOffset, 2), calc.x($borderSize, 2)),
    borderRadius: theme.radius.pill,
    border: `${$borderSize} solid ${theme.color.gamma[500]}`,
    backgroundColor: 'transparent',
    transitionProperty: 'background-color',
    transitionDuration: theme.duration.short,

    '::after': {
      content: '',
      position: 'absolute',
      top: $thumbOffset,
      left: $thumbOffset,
      width: $thumbSize,
      height: $thumbSize,
      borderRadius: theme.radius.round,
      boxShadow: theme.shadow.small,
      transitionProperty: 'transform, background-color',
      transitionDuration: theme.duration.regular,
      willChange: 'transform',
    },

    selectors: {
      '[data-selected=true] &::after': {
        transform: `translateX(${calc($trackSize, calc.minus($thumbSize))})`,
      },
    },
  },

  variants: {
    color: colors,
  },
});
