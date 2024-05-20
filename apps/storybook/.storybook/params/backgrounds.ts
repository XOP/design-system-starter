import { tokensLight, tokensDark } from '@ds-starter/tokens';

export const backgrounds = {
  default: 'dark',
  values: [
    {
      name: 'light',
      value: tokensLight.color.gamma[50],
    },
    {
      name: 'dark',
      value: tokensDark.color.gamma[50],
    },
  ],
};
