import { recipe } from '@vanilla-extract/recipes';

import type { StyleRule } from '@vanilla-extract/css';

import { calc } from '../../helpers/utils';
import { theme } from '../../theme';

import type { ButtonColors, ButtonSizes, ButtonVariants } from './Button';

const colors: { [key in ButtonColors]: StyleRule } = {
  accent: {},
  neutral: {},
};

const variants: { [key in ButtonVariants]: StyleRule } = {
  solid: {},
  ghost: {},
  text: {},
};

const sizes: { [key in ButtonSizes]: StyleRule } = {
  small: {
    paddingBlock: theme.space[1],
    paddingInline: theme.space[1],
    height: calc(
      calc.x(theme.fontSize.s, theme.lineHeight.tight),
      calc.x(theme.space[1], 2),
      calc.x(theme.space.px, 2),
    ),
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.tight,
  },

  regular: {
    paddingBlock: theme.space[2],
    paddingInline: theme.space[2],
    height: calc(
      calc.x(theme.fontSize.s, theme.lineHeight.tight),
      calc.x(theme.space[2], 2),
      calc.x(theme.space.px, 2),
    ),
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.tight,
  },

  large: {
    paddingBlock: theme.space[2],
    paddingInline: theme.space[3],
    height: calc(
      calc.x(theme.fontSize.n, theme.lineHeight.tight),
      calc.x(theme.space[2], 2),
      calc.x(theme.space.px, 2),
    ),
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.tight,
  },
};

export const styles = recipe({
  base: [
    {
      boxSizing: 'border-box',
      border: `${theme.space.px} solid transparent`,
      borderRadius: theme.radius.s,
      textTransform: 'uppercase',
      fontFamily: theme.fontFamily,
      cursor: 'pointer',
      transition: 'background-color',
      transitionDuration: theme.duration.instant,
      transitionTimingFunction: 'ease-in-out',

      ':disabled': {
        cursor: 'default',
      },

      ':focus-visible': {
        outline: theme.focus.outline,
        outlineColor: theme.focus.color,
        outlineOffset: theme.focus.outlineOffset,
      },
    },
  ],

  variants: {
    color: colors,
    variant: variants,
    size: sizes,
  },

  compoundVariants: [
    {
      variants: {
        color: 'accent',
        variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.accent.strong,
        borderColor: theme.color.accent.strong,
        color: theme.color.accent.contrast,
        ':hover': {
          backgroundColor: theme.color.accent.accent,
        },
        ':active': {
          backgroundColor: theme.color.accent.base,
        },
        ':disabled': {
          backgroundColor: theme.color.accent.surface,
          borderColor: theme.color.accent.surface,
          color: theme.color.accent.accent,
        },
      },
    },
    {
      variants: {
        color: 'neutral',
        variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.neutral.strong,
        borderColor: theme.color.neutral.strong,
        color: theme.color.neutral.contrast,
        ':hover': {
          backgroundColor: theme.color.neutral.accent,
        },
        ':active': {
          backgroundColor: theme.color.neutral.base,
        },
        ':disabled': {
          backgroundColor: theme.color.neutral.surface,
          borderColor: theme.color.neutral.surface,
          color: theme.color.neutral.accent,
        },
      },
    },

    {
      variants: {
        color: 'accent',
        variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.accent.muted,
        borderColor: theme.color.accent.base,
        ':hover': {
          backgroundColor: theme.color.accent.surface,
        },
        ':active': {
          backgroundColor: theme.color.accent.backdrop,
        },
        ':disabled': {
          backgroundColor: theme.color.accent.surface,
          color: theme.color.accent.accent,
          borderColor: theme.color.accent.border,
        },
      },
    },
    {
      variants: {
        color: 'neutral',
        variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.neutral.muted,
        borderColor: theme.color.neutral.base,
        ':hover': {
          backgroundColor: theme.color.neutral.surface,
        },
        ':active': {
          backgroundColor: theme.color.neutral.backdrop,
        },
        ':disabled': {
          backgroundColor: theme.color.neutral.surface,
          color: theme.color.neutral.accent,
          borderColor: theme.color.neutral.border,
        },
      },
    },

    {
      variants: {
        color: 'accent',
        variant: 'text',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.accent.muted,
        ':hover': {
          backgroundColor: theme.color.accent.surface,
        },
        ':active': {
          backgroundColor: theme.color.accent.backdrop,
        },
        ':disabled': {
          backgroundColor: theme.color.accent.surface,
          color: theme.color.accent.accent,
        },
      },
    },
    {
      variants: {
        color: 'neutral',
        variant: 'text',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.neutral.muted,
        ':hover': {
          backgroundColor: theme.color.neutral.surface,
        },
        ':active': {
          backgroundColor: theme.color.neutral.backdrop,
        },
        ':disabled': {
          backgroundColor: theme.color.neutral.surface,
          color: theme.color.neutral.accent,
        },
      },
    },
  ],
});
