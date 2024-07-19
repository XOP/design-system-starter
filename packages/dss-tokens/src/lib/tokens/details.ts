import { paletteVars, type TokensPalette } from './palette';
import { default as sizes } from './sizes';

export type TokensDuration = {
  instant: string;
  short: string;
  regular: string;
  long: string;
  extra: string;
};

export type TokensShadow = {
  color?: string;
  small: string;
  medium: string;
  large: string;
};

export type TokensFocus = {
  color: string;
  outline: string;
  outlineOffset: string;
};

export type TokensSelection = {
  color: string;
  contrast: string;
};

const duration = {
  instant: '123ms',
  short: '173ms',
  regular: '245ms',
  long: '346ms',
  extra: '490ms',
} satisfies TokensDuration;

export const makeDetailsTokens = (palette: TokensPalette) => {
  const shadowTint = palette.neutral;
  const focusTint = palette.accent;

  return {
    duration,

    shadow: {
      color: shadowTint.content,
      small: `0px 1px 1px ${shadowTint.alpha[400]}, 0px 1px 2px -0.5px ${shadowTint.alpha[700]}, 0px 1px 4px -3px ${shadowTint.alpha[600]}`,
      medium: `0px 1px 1px -0.5px ${shadowTint.alpha[300]}, 0px 1px 2px -1px ${shadowTint.alpha[500]}, 0px 2px 3px -1.5px ${shadowTint.alpha[600]}, 0px 5px 6px -2px ${shadowTint.alpha[600]}`,
      large: `0px 0.5px 0.5px ${shadowTint.alpha[400]}, 0px 2px 2px -0.5px ${shadowTint.alpha[500]}, 0px 5px 6px -1px ${shadowTint.alpha[500]}, 0px 8px 9px -1px ${shadowTint.alpha[600]}, 0px 12px 14px -2px ${shadowTint.alpha[600]}, 0px 16px 20px -3px ${shadowTint.alpha[500]}`,
    } satisfies TokensShadow,

    focus: {
      color: focusTint.accent,
      outline: `${sizes.space['0.5']} solid ${focusTint.accent}`,
      outlineOffset: sizes.space['0.5'],
    } satisfies TokensFocus,

    selection: {
      color: palette.accent.contrast,
      contrast: palette.accent.strong,
    } satisfies TokensSelection,
  };
};

export default makeDetailsTokens(paletteVars);
