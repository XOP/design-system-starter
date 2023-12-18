import { paletteVars } from './palette.vars';
import { paletteNebula, palettePrism } from './palette.out';

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

export const tokensNebula = {
  color: paletteNebula,

  ...content,
  ...sizes,
  ...makeDetailsTokens(paletteNebula),
};

export const tokensPrism = {
  color: palettePrism,

  ...content,
  ...sizes,
  ...makeDetailsTokens(palettePrism),
};
