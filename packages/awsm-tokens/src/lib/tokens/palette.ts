import { parseToRgb, lighten, darken, shade, tint, mix } from 'polished';

import colors from './colors';

export type TokensPaletteGamma = {
  '50': string;
  '100': string;
  '150': string;
  '200': string;
  '250': string;
  '300': string;
  '350': string;
  '400': string;
  '450': string;
  '500': string;
  '550': string;
  '600': string;
  '650': string;
  '700': string;
  '750': string;
  '800': string;
  '850': string;
  '900': string;
  '950': string;
};

export type TokensPaletteColorBrand = {
  main: string;
  mainRgb: string;
  tint: string;
  shade: string;
  tone: string;
  contrast: string;
  gamma: {
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
  };
};

export type TokensPaletteColorUtil = {
  main: string;
  mainRgb: string;
  tint: string;
  shade: string;
  tone: string;
  contrast: string;
};

export type TokensPaletteColorText = {
  strong: string;
  regular: string;
  subtle: string;
  muted: string;
};

export type TokensPaletteColorBackground = {
  regular: string;
  subtle: string;
  muted: string;
};

export interface TokensPalette {
  gamma: TokensPaletteGamma;
  primary: TokensPaletteColorBrand;
  secondary: TokensPaletteColorBrand;
  safe: TokensPaletteColorUtil;
  alert: TokensPaletteColorUtil;
  info: TokensPaletteColorUtil;
  warning: TokensPaletteColorUtil;
  text: TokensPaletteColorText;
  background: TokensPaletteColorBackground;
  shadow: string;
  shadowRgb: string;
  focusRing: string;
}

const utils = {
  safe: {
    main: colors.lima[600],
    mainRgb: rgbString(colors.lima[600]),
    tint: tint(0.25, colors.lima[600]),
    shade: shade(0.25, colors.lima[600]),
    tone: tone(0.25, colors.lima[600]),
    contrast: colors.white,
  },

  alert: {
    main: colors.shiraz[700],
    mainRgb: rgbString(colors.shiraz[700]),
    tint: tint(0.25, colors.shiraz[700]),
    shade: shade(0.25, colors.shiraz[700]),
    tone: tone(0.25, colors.shiraz[700]),
    contrast: colors.white,
  },

  info: {
    main: colors.cerulean[700],
    mainRgb: rgbString(colors.cerulean[700]),
    tint: tint(0.25, colors.cerulean[700]),
    shade: shade(0.25, colors.cerulean[700]),
    tone: tone(0.25, colors.cerulean[700]),
    contrast: colors.white,
  },

  warning: {
    main: colors.gold[600],
    mainRgb: rgbString(colors.gold[600]),
    tint: tint(0.25, colors.gold[600]),
    shade: shade(0.25, colors.gold[600]),
    tone: tone(0.25, colors.gold[600]),
    contrast: colors.white,
  },
} satisfies Record<string, TokensPaletteColorUtil>;

export const paletteNebula: TokensPalette = {
  gamma: {
    '50': colors.gamma[950],
    '100': colors.gamma[900],
    '150': colors.gamma[850],
    '200': colors.gamma[800],
    '250': colors.gamma[750],
    '300': colors.gamma[700],
    '350': colors.gamma[650],
    '400': colors.gamma[600],
    '450': colors.gamma[550],
    '500': colors.gamma[500],
    '550': colors.gamma[450],
    '600': colors.gamma[400],
    '650': colors.gamma[350],
    '700': colors.gamma[300],
    '750': colors.gamma[250],
    '800': colors.gamma[200],
    '850': colors.gamma[150],
    '900': colors.gamma[100],
    '950': colors.gamma[50],
  },

  primary: {
    main: colors.blue[400],
    mainRgb: rgbString(colors.blue[400]),
    tint: tint(0.25, colors.blue[400]),
    shade: shade(0.25, colors.blue[400]),
    tone: tone(0.25, colors.blue[400]),
    contrast: colors.black,
    gamma: {
      '100': darken(0.4, colors.blue[400]),
      '200': darken(0.3, colors.blue[400]),
      '300': darken(0.2, colors.blue[400]),
      '400': darken(0.1, colors.blue[400]),
      '500': lighten(0.05, colors.blue[400]),
      '600': lighten(0.15, colors.blue[400]),
      '700': lighten(0.25, colors.blue[400]),
      '800': lighten(0.35, colors.blue[400]),
      '900': lighten(0.45, colors.blue[400]),
    },
  },

  secondary: {
    main: colors.pink[600],
    mainRgb: rgbString(colors.pink[600]),
    tint: tint(0.25, colors.pink[600]),
    shade: shade(0.25, colors.pink[600]),
    tone: tone(0.25, colors.pink[600]),
    contrast: colors.white,
    gamma: {
      '100': darken(0.4, colors.pink[600]),
      '200': darken(0.3, colors.pink[600]),
      '300': darken(0.2, colors.pink[600]),
      '400': darken(0.1, colors.pink[600]),
      '500': lighten(0.05, colors.pink[600]),
      '600': lighten(0.15, colors.pink[600]),
      '700': lighten(0.25, colors.pink[600]),
      '800': lighten(0.35, colors.pink[600]),
      '900': lighten(0.45, colors.pink[600]),
    },
  },

  ...utils,

  text: {
    strong: colors.gamma[50],
    regular: colors.gamma[200],
    subtle: colors.gamma[300],
    muted: colors.gamma[400],
  },

  background: {
    regular: colors.gamma[900],
    subtle: colors.gamma[850],
    muted: colors.gamma[750],
  },

  shadow: colors.gamma[700],
  shadowRgb: rgbString(colors.gamma[700]),

  focusRing: colors.cerulean[500],
};

export const palettePrism: TokensPalette = {
  gamma: {
    '50': colors.gamma[50],
    '100': colors.gamma[100],
    '150': colors.gamma[150],
    '200': colors.gamma[200],
    '250': colors.gamma[250],
    '300': colors.gamma[300],
    '350': colors.gamma[350],
    '400': colors.gamma[400],
    '450': colors.gamma[450],
    '500': colors.gamma[500],
    '550': colors.gamma[550],
    '600': colors.gamma[600],
    '650': colors.gamma[650],
    '700': colors.gamma[700],
    '750': colors.gamma[750],
    '800': colors.gamma[800],
    '850': colors.gamma[850],
    '900': colors.gamma[900],
    '950': colors.gamma[950],
  },

  primary: {
    main: colors.blue[700],
    mainRgb: rgbString(colors.blue[700]),
    tint: tint(0.25, colors.blue[700]),
    shade: shade(0.25, colors.blue[700]),
    tone: tone(0.25, colors.blue[700]),
    contrast: colors.white,
    gamma: {
      '100': lighten(0.45, colors.blue[700]),
      '200': lighten(0.35, colors.blue[700]),
      '300': lighten(0.25, colors.blue[700]),
      '400': lighten(0.15, colors.blue[700]),
      '500': lighten(0.05, colors.blue[700]),
      '600': darken(0.1, colors.blue[700]),
      '700': darken(0.2, colors.blue[700]),
      '800': darken(0.3, colors.blue[700]),
      '900': darken(0.4, colors.blue[700]),
    },
  },

  secondary: {
    main: colors.pink[500],
    mainRgb: rgbString(colors.pink[500]),
    tint: tint(0.25, colors.pink[500]),
    shade: shade(0.25, colors.pink[500]),
    tone: tone(0.25, colors.pink[500]),
    contrast: colors.black,
    gamma: {
      '100': lighten(0.45, colors.pink[500]),
      '200': lighten(0.35, colors.pink[500]),
      '300': lighten(0.25, colors.pink[500]),
      '400': lighten(0.15, colors.pink[500]),
      '500': lighten(0.05, colors.pink[500]),
      '600': darken(0.1, colors.pink[500]),
      '700': darken(0.2, colors.pink[500]),
      '800': darken(0.3, colors.pink[500]),
      '900': darken(0.4, colors.pink[500]),
    },
  },

  ...utils,

  text: {
    strong: colors.gamma[950],
    regular: colors.gamma[850],
    subtle: colors.gamma[750],
    muted: colors.gamma[650],
  },

  background: {
    regular: colors.white,
    subtle: colors.gamma[50],
    muted: colors.gamma[150],
  },

  shadow: colors.black,
  shadowRgb: rgbString(colors.black),

  focusRing: colors.cerulean[800],
};

function rgbString(color: string) {
  const rgb = parseToRgb(color);

  return `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
}

function tone(amount: number | string, color: string) {
  return mix(amount, 'rgb(128, 128, 128)', color);
}
