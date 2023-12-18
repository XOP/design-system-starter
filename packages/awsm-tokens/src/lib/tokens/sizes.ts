export type TokensSpace = {
  0: string;
  px: string;
  0.5: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
};

export type TokensRadius = {
  xs: string;
  s: string;
  n: string;
  l: string;
  pill: string;
  round: string;
};

export default {
  space: {
    0: '0',
    px: '1px',
    0.5: '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
  } satisfies TokensSpace,

  radius: {
    xs: '1px',
    s: '2px',
    n: '4px',
    l: '8px',
    pill: '9999px',
    round: '50%',
  } satisfies TokensRadius,
};
