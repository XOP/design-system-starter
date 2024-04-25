export type TokensFontSize = {
  xs: string;
  s: string;
  n: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

export type TokensFontFamily = {
  main: string;
  fallback: string;
};

export type TokensLineHeight = {
  none: number | string;
  reset: number | string;
  tight: number | string;
  snug: number | string;
  normal: number | string;
  relaxed: number | string;
  loose: number | string;
};

export type TokensIconSize = {
  xs: string;
  s: string;
  n: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

export default {
  fontSize: {
    xs: '0.64rem',
    s: '0.8rem',
    n: '1rem',
    l: '1.25rem',
    xl: '1.563rem',
    xxl: '1.953rem',
    xxxl: '2.441rem',
  } satisfies TokensFontSize,

  fontFamily: {
    main: '"Play"',
    fallback: '"Helvetica Neue", sans-serif',
  } satisfies TokensFontFamily,

  lineHeight: {
    none: 0,
    reset: 1,
    tight: 1.106,
    snug: 1.244,
    normal: 1.4,
    relaxed: 1.575,
    loose: 1.77,
  } satisfies TokensLineHeight,

  iconSize: {
    xs: '0.8rem',
    s: '1rem',
    n: '1.25rem',
    l: '1.563rem',
    xl: '1.953rem',
    xxl: '2.441rem',
    xxxl: '3.051rem',
  } satisfies TokensIconSize,
};
