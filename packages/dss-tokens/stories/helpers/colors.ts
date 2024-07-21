import { tokens } from '../../src/lib/tokens/tokens';

type ColorPaletteValues = Record<string, string> | undefined;

export default {
  accent: Object.keys(tokens.color.accent).reduce((acc, cur) => {
    if (!acc) return;

    if (cur !== 'gamma' && cur !== 'alpha') {
      acc[cur] = tokens.color.accent[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  accentGamma1: Object.keys(tokens.color.accent.gamma).reduce((acc, cur) => {
    if (!acc) return;

    if (acc && +cur < 500) {
      acc[cur] = tokens.color.accent.gamma[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  accentGamma2: Object.keys(tokens.color.accent.gamma).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur >= 500) {
      acc[cur] = tokens.color.accent.gamma[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  accentAlpha1: Object.keys(tokens.color.accent.alpha).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur < 500) {
      acc[cur] = tokens.color.neutral.alpha[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  accentAlpha2: Object.keys(tokens.color.accent.alpha).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur >= 500) {
      acc[cur] = tokens.color.neutral.alpha[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),

  neutral: Object.keys(tokens.color.neutral).reduce((acc, cur) => {
    if (!acc) return;

    if (cur !== 'gamma' && cur !== 'alpha') {
      acc[cur] = tokens.color.neutral[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  neutralGamma1: Object.keys(tokens.color.neutral.gamma).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur < 500) {
      acc[cur] = tokens.color.neutral.gamma[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  neutralGamma2: Object.keys(tokens.color.neutral.gamma).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur >= 500) {
      acc[cur] = tokens.color.neutral.gamma[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  neutralAlpha1: Object.keys(tokens.color.neutral.alpha).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur < 500) {
      acc[cur] = tokens.color.neutral.alpha[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),
  neutralAlpha2: Object.keys(tokens.color.neutral.alpha).reduce((acc, cur) => {
    if (!acc) return;

    if (+cur >= 500) {
      acc[cur] = tokens.color.neutral.alpha[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),

  safe: Object.keys(tokens.color.safe).reduce((acc, cur) => {
    if (!acc) return;

    if (cur !== 'gamma' && cur !== 'alpha') {
      acc[cur] = tokens.color.safe[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),

  alert: Object.keys(tokens.color.alert).reduce((acc, cur) => {
    if (!acc) return;

    if (cur !== 'gamma' && cur !== 'alpha') {
      acc[cur] = tokens.color.alert[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),

  warning: Object.keys(tokens.color.warning).reduce((acc, cur) => {
    if (!acc) return;

    if (cur !== 'gamma' && cur !== 'alpha') {
      acc[cur] = tokens.color.warning[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),

  info: Object.keys(tokens.color.info).reduce((acc, cur) => {
    if (!acc) return;

    if (cur !== 'gamma' && cur !== 'alpha') {
      acc[cur] = tokens.color.info[cur];
    }

    return acc;
  }, {} as ColorPaletteValues),

  content: tokens.color.content,
  background: tokens.color.background,

  focus: { color: tokens.focus.color },
  shadow: { color: tokens.shadow.color },
};
