import { parseToRgb } from 'polished';

import { light, dark } from './colors';

export type TokensPaletteGamma = {
  '0': string;
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '950': string;
  '1000': string;
};

export type TokensPaletteColor = {
  main: string;
  mainRgb: string;
  tint: string;
  shade: string;
  tone: string;
  contrast: string;
  gamma: {
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    '950': string;
  };
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
  primary: TokensPaletteColor;
  secondary: TokensPaletteColor;
  safe: TokensPaletteColor;
  alert: TokensPaletteColor;
  info: TokensPaletteColor;
  warning: TokensPaletteColor;
  text: TokensPaletteColorText;
  background: TokensPaletteColorBackground;
  shadow: string;
  shadowRgb: string;
  focusRing: string;
}

export const paletteDark = {
  gamma: {
    '0': dark.gray[0],
    '50': dark.gray[50],
    '100': dark.gray[100],
    '200': dark.gray[200],
    '300': dark.gray[300],
    '400': dark.gray[400],
    '500': dark.gray[500],
    '600': dark.gray[600],
    '700': dark.gray[700],
    '800': dark.gray[800],
    '900': dark.gray[900],
    '950': dark.gray[950],
    '1000': dark.gray[1000],
  },

  primary: {
    main: dark.blue[500],
    mainRgb: rgbString(dark.blue[500]),
    tint: dark.blue[600],
    shade: dark.blue[400],
    tone: dark.blue[700],
    contrast: dark.blue[1000],
    gamma: {
      '50': dark.blue[50],
      '100': dark.blue[100],
      '200': dark.blue[200],
      '300': dark.blue[300],
      '400': dark.blue[400],
      '500': dark.blue[500],
      '600': dark.blue[600],
      '700': dark.blue[700],
      '800': dark.blue[800],
      '900': dark.blue[900],
      '950': dark.blue[950],
    },
  },

  secondary: {
    main: dark.pink[500],
    mainRgb: rgbString(dark.pink[500]),
    tint: dark.pink[600],
    shade: dark.pink[400],
    tone: dark.pink[700],
    contrast: dark.pink[1000],
    gamma: {
      '50': dark.pink[50],
      '100': dark.pink[100],
      '200': dark.pink[200],
      '300': dark.pink[300],
      '400': dark.pink[400],
      '500': dark.pink[500],
      '600': dark.pink[600],
      '700': dark.pink[700],
      '800': dark.pink[800],
      '900': dark.pink[900],
      '950': dark.pink[950],
    },
  },

  safe: {
    main: dark.green[500],
    mainRgb: rgbString(dark.green[500]),
    tint: dark.green[600],
    shade: dark.green[400],
    tone: dark.green[700],
    contrast: dark.green[1000],
    gamma: {
      '50': dark.green[50],
      '100': dark.green[100],
      '200': dark.green[200],
      '300': dark.green[300],
      '400': dark.green[400],
      '500': dark.green[500],
      '600': dark.green[600],
      '700': dark.green[700],
      '800': dark.green[800],
      '900': dark.green[900],
      '950': dark.green[950],
    },
  },

  alert: {
    main: dark.red[500],
    mainRgb: rgbString(dark.red[500]),
    tint: dark.red[600],
    shade: dark.red[400],
    tone: dark.red[700],
    contrast: dark.red[1000],
    gamma: {
      '50': dark.red[50],
      '100': dark.red[100],
      '200': dark.red[200],
      '300': dark.red[300],
      '400': dark.red[400],
      '500': dark.red[500],
      '600': dark.red[600],
      '700': dark.red[700],
      '800': dark.red[800],
      '900': dark.red[900],
      '950': dark.red[950],
    },
  },

  info: {
    main: dark.sky[500],
    mainRgb: rgbString(dark.sky[500]),
    tint: dark.sky[600],
    shade: dark.sky[400],
    tone: dark.sky[700],
    contrast: dark.sky[1000],
    gamma: {
      '50': dark.sky[50],
      '100': dark.sky[100],
      '200': dark.sky[200],
      '300': dark.sky[300],
      '400': dark.sky[400],
      '500': dark.sky[500],
      '600': dark.sky[600],
      '700': dark.sky[700],
      '800': dark.sky[800],
      '900': dark.sky[900],
      '950': dark.sky[950],
    },
  },

  warning: {
    main: dark.amber[500],
    mainRgb: rgbString(dark.amber[500]),
    tint: dark.amber[600],
    shade: dark.amber[400],
    tone: dark.amber[700],
    contrast: dark.amber[1000],
    gamma: {
      '50': dark.amber[50],
      '100': dark.amber[100],
      '200': dark.amber[200],
      '300': dark.amber[300],
      '400': dark.amber[400],
      '500': dark.amber[500],
      '600': dark.amber[600],
      '700': dark.amber[700],
      '800': dark.amber[800],
      '900': dark.amber[900],
      '950': dark.amber[950],
    },
  },

  text: {
    strong: dark.gray[1000],
    regular: dark.gray[950],
    subtle: dark.gray[800],
    muted: dark.gray[700],
  },

  background: {
    regular: dark.gray[0],
    subtle: dark.gray[50],
    muted: dark.gray[100],
  },

  shadow: dark.gray[100],
  shadowRgb: rgbString(dark.gray[100]),

  focusRing: dark.sky[700],
};

export const paletteLight: TokensPalette = {
  gamma: {
    '0': light.gray[0],
    '50': light.gray[50],
    '100': light.gray[100],
    '200': light.gray[200],
    '300': light.gray[300],
    '400': light.gray[400],
    '500': light.gray[500],
    '600': light.gray[600],
    '700': light.gray[700],
    '800': light.gray[800],
    '900': light.gray[900],
    '950': light.gray[950],
    '1000': light.gray[1000],
  },

  primary: {
    main: light.blue[600],
    mainRgb: rgbString(light.blue[600]),
    tint: light.blue[500],
    shade: light.blue[400],
    tone: light.blue[700],
    contrast: light.blue[0],
    gamma: {
      '50': light.blue[50],
      '100': light.blue[100],
      '200': light.blue[200],
      '300': light.blue[300],
      '400': light.blue[400],
      '500': light.blue[500],
      '600': light.blue[600],
      '700': light.blue[700],
      '800': light.blue[800],
      '900': light.blue[900],
      '950': light.blue[950],
    },
  },

  secondary: {
    main: light.pink[600],
    mainRgb: rgbString(light.pink[600]),
    tint: light.pink[500],
    shade: light.pink[400],
    tone: light.pink[700],
    contrast: light.pink[0],
    gamma: {
      '50': light.pink[50],
      '100': light.pink[100],
      '200': light.pink[200],
      '300': light.pink[300],
      '400': light.pink[400],
      '500': light.pink[500],
      '600': light.pink[600],
      '700': light.pink[700],
      '800': light.pink[800],
      '900': light.pink[900],
      '950': light.pink[950],
    },
  },

  safe: {
    main: light.green[500],
    mainRgb: rgbString(light.green[500]),
    tint: light.green[600],
    shade: light.green[400],
    tone: light.green[700],
    contrast: light.green[1000],
    gamma: {
      '50': light.green[50],
      '100': light.green[100],
      '200': light.green[200],
      '300': light.green[300],
      '400': light.green[400],
      '500': light.green[500],
      '600': light.green[600],
      '700': light.green[700],
      '800': light.green[800],
      '900': light.green[900],
      '950': light.green[950],
    },
  },

  alert: {
    main: light.red[500],
    mainRgb: rgbString(light.red[500]),
    tint: light.red[600],
    shade: light.red[400],
    tone: light.red[700],
    contrast: light.red[1000],
    gamma: {
      '50': light.red[50],
      '100': light.red[100],
      '200': light.red[200],
      '300': light.red[300],
      '400': light.red[400],
      '500': light.red[500],
      '600': light.red[600],
      '700': light.red[700],
      '800': light.red[800],
      '900': light.red[900],
      '950': light.red[950],
    },
  },

  info: {
    main: light.sky[500],
    mainRgb: rgbString(light.sky[500]),
    tint: light.sky[600],
    shade: light.sky[400],
    tone: light.sky[700],
    contrast: light.sky[1000],
    gamma: {
      '50': light.sky[50],
      '100': light.sky[100],
      '200': light.sky[200],
      '300': light.sky[300],
      '400': light.sky[400],
      '500': light.sky[500],
      '600': light.sky[600],
      '700': light.sky[700],
      '800': light.sky[800],
      '900': light.sky[900],
      '950': light.sky[950],
    },
  },

  warning: {
    main: light.amber[500],
    mainRgb: rgbString(light.amber[500]),
    tint: light.amber[600],
    shade: light.amber[400],
    tone: light.amber[700],
    contrast: light.amber[1000],
    gamma: {
      '50': light.amber[50],
      '100': light.amber[100],
      '200': light.amber[200],
      '300': light.amber[300],
      '400': light.amber[400],
      '500': light.amber[500],
      '600': light.amber[600],
      '700': light.amber[700],
      '800': light.amber[800],
      '900': light.amber[900],
      '950': light.amber[950],
    },
  },

  text: {
    strong: light.gray[950],
    regular: light.gray[900],
    subtle: light.gray[700],
    muted: light.gray[500],
  },

  background: {
    regular: light.gray[0],
    subtle: light.gray[50],
    muted: light.gray[100],
  },

  shadow: light.gray[950],
  shadowRgb: rgbString(light.gray[950]),

  focusRing: light.sky[600],
};

function rgbString(color: string) {
  const rgb = parseToRgb(color);

  return `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
}