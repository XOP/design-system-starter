import { recipe } from '@vanilla-extract/recipes';
import { StyleRule } from '@vanilla-extract/css';

import { theme } from '../../theme';

import { TabsColors, TabsVariants } from './Tabs';
import { calc } from '../../helpers';

const colors: { [key in TabsColors]: StyleRule } = {
  primary: {},
  secondary: {},
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
    borderBottom: `${theme.space.px} solid ${theme.color.gamma[300]}`,

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
    borderBottom: `${theme.space[1]} solid transparent`,
    background: theme.color.gamma[100],
    color: theme.color.text.regular,
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.normal,
    textAlign: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transitionProperty: 'background-color, color, border-color',
    transitionDuration: theme.duration.instant,

    ':focus-visible': {
      outline: `${theme.space['0.5']} solid`,
      outlineColor: theme.color.focusRing,
      outlineOffset: theme.space['0.5'],
    },

    selectors: {
      [`${tabsStyles.classNames.variants.variant.fluid} &`]: {
        flexGrow: 1,
      },

      [`&[data-focus-visible]`]: {
        zIndex: 2,
      },

      [`${tabsStyles.classNames.variants.color.primary} &:hover:not([data-disabled])`]:
        {
          backgroundColor: theme.color.primary.gamma[100],
          color: theme.color.text.strong,
        },

      [`${tabsStyles.classNames.variants.color.secondary} &:hover:not([data-disabled])`]:
        {
          backgroundColor: theme.color.secondary.gamma[100],
          color: theme.color.text.strong,
        },
    },
  },

  variants: {
    isSelected: {
      true: {
        zIndex: 1,
        selectors: {
          [`${tabsStyles.classNames.variants.color.primary} &`]: {
            borderColor: theme.color.primary.gamma[600],
            color: theme.color.text.strong,
          },
          [`${tabsStyles.classNames.variants.color.secondary} &`]: {
            borderColor: theme.color.secondary.gamma[600],
            color: theme.color.text.strong,
          },
        },
      },
      false: {},
    },

    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: 'default',
        color: theme.color.text.muted,
      },
      false: {},
    },
  },
});

export const panelStyles = recipe({
  base: {
    paddingBlock: theme.space[3],
    paddingInline: theme.space[3],
    backgroundColor: theme.color.background.regular,
    color: theme.color.text.regular,
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.relaxed,

    ':focus-visible': {
      outline: `${theme.space['0.5']} solid`,
      outlineColor: theme.color.focusRing,
      outlineOffset: theme.space['0.5'],
    },
  },
});
