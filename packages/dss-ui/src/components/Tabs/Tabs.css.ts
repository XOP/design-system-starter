import { recipe } from '@vanilla-extract/recipes';
import type { StyleRule } from '@vanilla-extract/css';

import { calc } from '../../helpers/utils';
import { theme } from '../../theme';

import type { TabsColors, TabsVariants } from './Tabs';

const colors: { [key in TabsColors]: StyleRule } = {
  accent: {},
  neutral: {},
};

const variants: { [key in TabsVariants]: StyleRule } = {
  regular: {
    width: 'auto',
  },
  fluid: {
    width: '100%',
  },
};

export const tabsStyles = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.fontFamily,
  },
  variants: {
    color: colors,
    variant: variants,
  },
});

export const listStyles = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderBlockEnd: `${theme.space.px} solid ${theme.color.neutral.border}`,

    selectors: {
      [`${tabsStyles.classNames.variants.variant.fluid} &`]: {
        width: '100%',
      },
    },
  },
});

export const tabStyles = recipe({
  base: {
    paddingBlock: theme.space[3],
    paddingBlockEnd: calc(theme.space[3], calc.minus(theme.space[1])),
    paddingInline: theme.space[3],
    borderBlockEnd: `${theme.space[1]} solid transparent`,
    color: theme.color.content.subtle,
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.normal,
    textAlign: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transitionProperty: 'background-color, color, border-color',
    transitionDuration: theme.duration.instant,

    ':focus-visible': {
      outline: theme.focus.outline,
      outlineColor: theme.focus.color,
      outlineOffset: theme.focus.outlineOffset,
    },

    selectors: {
      [`${tabsStyles.classNames.variants.variant.fluid} &`]: {
        flexGrow: 1,
      },

      '&[data-focus-visible]': {
        zIndex: 2,
      },

      [`${tabsStyles.classNames.variants.color.accent} &:hover:not([data-disabled])`]:
        {
          backgroundColor: theme.color.accent.surface,
          color: theme.color.content.strong,
        },

      [`${tabsStyles.classNames.variants.color.neutral} &:hover:not([data-disabled])`]:
        {
          backgroundColor: theme.color.neutral.surface,
          color: theme.color.content.strong,
        },
    },
  },

  variants: {
    isSelected: {
      true: {
        zIndex: 1,
        selectors: {
          [`${tabsStyles.classNames.variants.color.accent} &`]: {
            borderColor: theme.color.accent.accent,
            color: theme.color.content.strong,
          },
          [`${tabsStyles.classNames.variants.color.neutral} &`]: {
            borderColor: theme.color.neutral.accent,
            color: theme.color.content.strong,
          },
        },
      },
      false: {},
    },

    isDisabled: {
      true: {
        cursor: 'default',
        color: theme.color.content.subtle,
      },
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: {
        isSelected: true,
        isDisabled: true,
      },
      style: {
        selectors: {
          [`${tabsStyles.classNames.variants.color.accent} &`]: {
            borderColor: theme.color.neutral.border,
          },
          [`${tabsStyles.classNames.variants.color.neutral} &`]: {
            borderColor: theme.color.neutral.border,
          },
        },
      },
    },
  ],
});

export const panelStyles = recipe({
  base: {
    paddingBlock: theme.space[3],
    paddingInline: theme.space[3],
    color: theme.color.content.regular,
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.relaxed,

    ':focus-visible': {
      outline: theme.focus.outline,
      outlineColor: theme.focus.color,
      outlineOffset: theme.focus.outlineOffset,
    },
  },
});
