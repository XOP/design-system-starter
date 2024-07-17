import { paletteVars, paletteLight, paletteDark } from './palette';

import { makeDetailsTokens } from './details';

import { default as content } from './content';
import { default as sizes } from './sizes';
import { default as details } from './details';

export type * from './palette';
export type * from './content';
export type * from './sizes';
export type * from './details';

export const tokens = {
  color: paletteVars,

  ...content,
  ...sizes,
  ...details,
};

export const tokensLight = {
  color: paletteLight,

  ...content,
  ...sizes,
  ...makeDetailsTokens(paletteLight),
};

export const tokensDark = {
  color: paletteDark,

  ...content,
  ...sizes,
  ...makeDetailsTokens(paletteDark),
};
