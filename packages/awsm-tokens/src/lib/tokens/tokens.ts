import { paletteVars } from './palette.vars';
import { paletteNebula, palettePrism } from './palette.out';
import { detailsVars, detailsNebula, detailsPrism } from './details';

import { default as content } from './content';
import { default as sizes } from './sizes';

export const tokens = {
  color: paletteVars,

  ...content,
  ...sizes,
  ...detailsVars,
};

export const tokensNebula = {
  color: paletteNebula,

  ...content,
  ...sizes,
  ...detailsNebula,
};

export const tokensPrism = {
  color: palettePrism,

  ...content,
  ...sizes,
  ...detailsPrism,
};
