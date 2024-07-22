import { createVar, type StyleRule } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { calc } from '../../helpers/utils';
import { theme } from '../../theme';

import type { SwitchColors, SwitchSizes } from './Switch';

export const $thumbSize = createVar();
export const $trackSize = createVar();

export const $thumbOffset = theme.space['0.5'];
export const $borderSize = theme.space.px;

const colors: { [key in SwitchColors]: StyleRule } = {
  accent: {
    '::after': {
      backgroundColor: theme.color.accent.base,
    },

    selectors: {
      '[data-selected="true"] &': {
        backgroundColor: theme.color.accent.strong,
        borderColor: theme.color.accent.base,
      },
      '[data-selected="true"] &::after': {
        backgroundColor: theme.color.accent.contrast,
      },
    },
  },

  neutral: {
    '::after': {
      backgroundColor: theme.color.neutral.tone,
    },

    selectors: {
      '[data-selected="true"] &': {
        backgroundColor: theme.color.neutral.strong,
        borderColor: theme.color.neutral.base,
      },
      '[data-selected="true"] &::after': {
        backgroundColor: theme.color.neutral.contrast,
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
    color: theme.color.content.regular,
    fontFamily: theme.fontFamily,
    userSelect: 'none',

    selectors: {
      '&[data-disabled]': {
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
    border: `${$borderSize} solid ${theme.color.neutral.base}`,
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
      '[data-focus-visible] &': {
        outline: theme.focus.outline,
        outlineColor: theme.focus.color,
        outlineOffset: theme.focus.outlineOffset,
      },

      '[data-selected=true] &::after': {
        transform: `translateX(${calc($trackSize, calc.minus($thumbSize))})`,
      },
    },
  },

  variants: {
    color: colors,
  },
});
